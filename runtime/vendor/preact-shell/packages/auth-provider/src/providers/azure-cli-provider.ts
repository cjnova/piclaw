import type { Account, IdentityProviderDefinition } from "@cjnova/preact-shell-identity-contracts";
import { identityFetch, identityFetchJson } from "./identity-fetch";

interface AzureStatusResponse {
  installed: boolean;
  authenticated: boolean;
  account?: {
    user?: { name?: string; type?: string };
    tenantDisplayName?: string;
    tenantId?: string;
    id?: string;
    name?: string;
  };
}

const azureMeta: Pick<IdentityProviderDefinition, "id" | "name" | "icon"> = {
  id: "azure",
  name: "Azure CLI",
  icon: "azure",
};

export const azureCliProvider: IdentityProviderDefinition = {
  id: azureMeta.id,
  name: azureMeta.name,
  icon: azureMeta.icon,
  supportsMultipleAccounts: false,
  supportsSwitch: false,
  checkStatus: async () => {
    const status = await identityFetchJson<AzureStatusResponse>(
      "/identity/azure/status",
      undefined,
      "Failed to check Azure CLI status",
    );

    if (!status.installed || !status.authenticated || !status.account) {
      return { connected: false, accounts: [] };
    }

    const user = status.account.user;
    const account: Account = {
      id: status.account.tenantId || "azure-cli",
      provider: azureMeta,
      username: user?.name || "Azure CLI",
      displayName: status.account.tenantDisplayName || user?.name || "Azure",
      active: true,
      connected: true,
    };

    return { connected: true, accounts: [account] };
  },
  signIn: async () => {
    const payload = await identityFetchJson<{ installed: boolean; message?: string }>(
      "/identity/azure/login",
      { method: "POST" },
      "Failed to initiate Azure CLI login",
    );

    if (!payload.installed) {
      return {
        type: "connected" as const,
        connected: false,
        message: "Azure CLI is not installed.",
      };
    }

    return {
      type: "connected" as const,
      connected: true,
      message: "Azure CLI authenticated.",
    };
  },
  signOut: async () => {
    await identityFetch("/identity/azure/logout", { method: "POST" }, "Failed to sign out Azure CLI");
  },
};
