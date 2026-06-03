import { signal } from "@preact/signals";
import type {
  Account,
  AuthProvider,
  DeviceFlowStatusResult,
  IdentityProviderDefinition,
  SignInResult,
} from "@cjnova/preact-shell-identity-contracts";
import { useEffect, useMemo } from "preact/hooks";
import { getProvider, getRegisteredProviders, identityRegistryVersion } from "./provider-registry";

interface ToastState {
  message: string;
  type: "info" | "success" | "error";
}

interface DeviceFlowState {
  code: string;
  url: string;
  flowId: string;
  providerId: string;
  status: "pending" | "completed" | "failed";
  error?: string;
}

const accountsSignal = signal<Account[]>([]);
const loadingSignal = signal(true);
const errorSignal = signal<string | null>(null);
const deviceFlowSignal = signal<DeviceFlowState | null>(null);
const toastSignal = signal<ToastState | null>(null);

let initialized = false;
let refreshPromise: Promise<void> | null = null;
let refreshRequestId = 0;
let loginPollAbortController: AbortController | null = null;
let completionTimer: number | null = null;
let consumerCount = 0;

function clearLoginPoll() {
  loginPollAbortController?.abort();
  loginPollAbortController = null;
}

function clearCompletionTimer() {
  if (completionTimer !== null) {
    window.clearTimeout(completionTimer);
    completionTimer = null;
  }
}

function getProviderMeta(provider: IdentityProviderDefinition): AuthProvider {
  return {
    id: provider.id,
    name: provider.name,
    icon: provider.icon,
    supportsMultipleAccounts: provider.supportsMultipleAccounts,
  };
}

function normalizeProviderAccounts(provider: IdentityProviderDefinition, accounts: Account[]): Account[] {
  const providerMeta = getProviderMeta(provider);

  return accounts.map((account) => ({
    ...account,
    provider: providerMeta,
  }));
}

async function delay(ms: number, signal: AbortSignal): Promise<void> {
  return new Promise((resolve, reject) => {
    const timer = window.setTimeout(() => {
      signal.removeEventListener("abort", onAbort);
      resolve();
    }, ms);

    const onAbort = () => {
      window.clearTimeout(timer);
      reject(new DOMException("Request aborted", "AbortError"));
    };

    if (signal.aborted) {
      onAbort();
      return;
    }

    signal.addEventListener("abort", onAbort, { once: true });
  });
}

async function refreshIdentityStatus(force = false): Promise<void> {
  if (refreshPromise && !force) {
    return refreshPromise;
  }

  const providers = getRegisteredProviders();
  const requestId = ++refreshRequestId;
  loadingSignal.value = true;

  let currentRefreshPromise: Promise<void>;
  currentRefreshPromise = (async () => {
    try {
      const providerResults = await Promise.allSettled(providers.map(async (provider) => {
        const status = await provider.checkStatus();
        return normalizeProviderAccounts(provider, status.accounts);
      }));

      const availableAccounts: Account[] = [];
      let failedProviders = 0;

      providerResults.forEach((result, index) => {
        if (result.status === "fulfilled") {
          availableAccounts.push(...result.value);
          return;
        }

        failedProviders += 1;
        const providerName = providers[index]?.name ?? providers[index]?.id ?? "unknown provider";
        console.error(`Failed to check ${providerName} identity status`, result.reason);
      });

      if (requestId === refreshRequestId) {
        accountsSignal.value = availableAccounts;

        if (failedProviders === 0) {
          errorSignal.value = null;
        } else if (failedProviders === providers.length) {
          errorSignal.value = "Failed to load accounts. Check the server and try again.";
        } else {
          errorSignal.value = "Some account providers failed to refresh.";
        }
      }
    } catch (error) {
      console.error(error);
      if (requestId === refreshRequestId) {
        errorSignal.value = "Failed to load accounts. Check the server and try again.";
      }
    } finally {
      if (requestId === refreshRequestId) {
        loadingSignal.value = false;
      }

      if (refreshPromise === currentRefreshPromise) {
        refreshPromise = null;
      }
    }
  })();

  refreshPromise = currentRefreshPromise;
  return currentRefreshPromise;
}

async function pollDeviceFlow(provider: IdentityProviderDefinition, signInResult: Extract<SignInResult, { type: "device_flow" }>): Promise<void> {
  clearLoginPoll();
  clearCompletionTimer();

  const pollAbortController = new AbortController();
  loginPollAbortController = pollAbortController;

  deviceFlowSignal.value = {
    flowId: signInResult.flowId,
    providerId: provider.id,
    code: signInResult.code,
    url: signInResult.url,
    status: "pending",
  };

  for (let attempt = 0; attempt < 150; attempt += 1) {
    await delay(2000, pollAbortController.signal);

    let status: DeviceFlowStatusResult;

    try {
      status = await signInResult.pollStatus(pollAbortController.signal);
    } catch {
      continue;
    }

    if (status.status === "pending") {
      continue;
    }

    if (status.status === "failed") {
      deviceFlowSignal.value = {
        flowId: signInResult.flowId,
        providerId: provider.id,
        code: signInResult.code,
        url: signInResult.url,
        status: "failed",
        error: status.error || "Login failed",
      };
      return;
    }

    await refreshIdentityStatus(true);
    deviceFlowSignal.value = {
      flowId: signInResult.flowId,
      providerId: provider.id,
      code: signInResult.code,
      url: signInResult.url,
      status: "completed",
    };

    completionTimer = window.setTimeout(() => {
      if (deviceFlowSignal.value?.flowId === signInResult.flowId) {
        deviceFlowSignal.value = null;
      }

      toastSignal.value = {
        message: `Signed in with ${provider.name}.`,
        type: "success",
      };
    }, 2000);

    return;
  }

  throw new Error("Timed out waiting for login completion");
}

function ensureInitialized() {
  if (initialized) {
    return;
  }

  initialized = true;
  void refreshIdentityStatus();
}

export function useIdentityProviders(options?: { enabled?: boolean }) {
  const enabled = options?.enabled ?? true;
  const registryVersion = identityRegistryVersion.value;

  useEffect(() => {
    if (!enabled) {
      return;
    }

    ensureInitialized();
    void refreshIdentityStatus();
  }, [enabled, registryVersion]);

  useEffect(() => {
    consumerCount += 1;

    return () => {
      consumerCount -= 1;
      // Only clean up shared state when the last consumer unmounts
      if (consumerCount === 0) {
        clearLoginPoll();
        clearCompletionTimer();
      }
    };
  }, []);

  const providers = useMemo(() => getRegisteredProviders().map(getProviderMeta), [registryVersion]);

  return {
    providers,
    accounts: accountsSignal.value,
    loading: loadingSignal.value,
    error: errorSignal.value,
    deviceFlow: deviceFlowSignal.value,
    toast: toastSignal.value,
    refresh: refreshIdentityStatus,
    dismissToast: () => {
      toastSignal.value = null;
    },
    cancelDeviceFlow: () => {
      clearLoginPoll();
      clearCompletionTimer();
      deviceFlowSignal.value = null;
    },
    signIn: async (providerId: string) => {
      const provider = getProvider(providerId);
      if (!provider) {
        return;
      }

      try {
        const signInResult = await provider.signIn();

        if (signInResult.type === "device_flow") {
          await pollDeviceFlow(provider, signInResult);
          return;
        }

        await refreshIdentityStatus(true);
        toastSignal.value = {
          message: signInResult.connected
            ? signInResult.message || `${provider.name} connected.`
            : signInResult.message || "Not authenticated.",
          type: signInResult.connected ? "success" : "error",
        };
      } catch (error) {
        if (error instanceof DOMException && error.name === "AbortError") {
          return;
        }

        console.error(error);
        if (deviceFlowSignal.value) {
          deviceFlowSignal.value = {
            ...deviceFlowSignal.value,
            status: "failed",
            error: `${provider.name} sign-in failed.`,
          };
        }

        toastSignal.value = {
          message: `${provider.name} sign-in failed.`,
          type: "error",
        };
      } finally {
        loginPollAbortController = null;
      }
    },
    switchAccount: async (accountId: string) => {
      const account = accountsSignal.value.find((entry) => entry.id === accountId);
      if (!account) {
        return;
      }

      const provider = getProvider(account.provider.id);
      if (!provider?.switchAccount) {
        return;
      }

      try {
        await provider.switchAccount(accountId);
        await refreshIdentityStatus(true);
      } catch (error) {
        console.error(error);
        toastSignal.value = {
          message: "Failed to switch account.",
          type: "error",
        };
      }
    },
    signOut: async (accountId: string) => {
      const account = accountsSignal.value.find((entry) => entry.id === accountId);
      if (!account) {
        return;
      }

      const provider = getProvider(account.provider.id);
      if (!provider) {
        return;
      }

      try {
        await provider.signOut(accountId);
        accountsSignal.value = accountsSignal.value.filter((entry) => !(entry.id === accountId && entry.provider.id === account.provider.id));
        await refreshIdentityStatus(true);
      } catch (error) {
        console.error(error);
        toastSignal.value = {
          message: error instanceof Error ? error.message : "Failed to sign out account.",
          type: "error",
        };
      }
    },
  };
}
