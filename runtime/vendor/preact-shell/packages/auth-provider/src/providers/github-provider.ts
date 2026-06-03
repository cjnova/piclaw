import type { Account, DeviceFlowStatusResult, IdentityProviderDefinition } from "@cjnova/preact-shell-identity-contracts";
import { identityFetch, identityFetchJson } from "./identity-fetch";

interface BackendAccount {
  id: string;
  username: string;
  displayName: string;
  avatarUrl: string;
  active: boolean;
  connected: boolean;
  provider: "github" | "m365";
}

const githubMeta: Pick<IdentityProviderDefinition, "id" | "name" | "icon"> = {
  id: "github",
  name: "GitHub",
  icon: "github",
};

function mapBackendAccountToUi(account: BackendAccount): Account {
  return {
    id: account.id,
    provider: githubMeta,
    username: account.username,
    displayName: account.displayName,
    avatarUrl: account.avatarUrl,
    active: account.active,
    connected: account.connected,
  };
}

export const githubProvider: IdentityProviderDefinition = {
  id: githubMeta.id,
  name: githubMeta.name,
  icon: githubMeta.icon,
  supportsMultipleAccounts: true,
  supportsSwitch: true,
  checkStatus: async () => {
    const payload = await identityFetchJson<{ accounts: BackendAccount[] }>(
      "/identity/accounts",
      undefined,
      "Failed to load accounts",
    );

    const accounts = payload.accounts
      .filter((account) => account.provider === "github")
      .map(mapBackendAccountToUi);

    return {
      connected: accounts.some((account) => account.connected),
      accounts,
    };
  },
  signIn: async () => {
    const payload = await identityFetchJson<{ flowId: string; code: string; url: string }>(
      "/identity/login",
      { method: "POST" },
      "Failed to start GitHub login",
    );

    return {
      type: "device_flow",
      flowId: payload.flowId,
      code: payload.code,
      url: payload.url,
      pollStatus: async (signal?: AbortSignal): Promise<DeviceFlowStatusResult> => {
        return await identityFetchJson<{ status: "pending" | "completed" | "failed"; error?: string }>(
          `/identity/login/${payload.flowId}/status`,
          { signal },
          "Failed to fetch login status",
        );
      },
    };
  },
  signOut: async (accountId: string) => {
    await identityFetch(
      "/identity/logout",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username: accountId }),
      },
      "Failed to sign out account",
    );
  },
  switchAccount: async (accountId: string) => {
    await identityFetch(
      "/identity/switch",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username: accountId }),
      },
      "Failed to switch account",
    );
  },
};
