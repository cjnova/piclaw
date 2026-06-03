import type { Account, IdentityProviderDefinition } from "@cjnova/preact-shell-identity-contracts";
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

const m365Meta: Pick<IdentityProviderDefinition, "id" | "name" | "icon"> = {
  id: "m365",
  name: "Microsoft 365",
  icon: "m365",
};

function mapBackendAccountToUi(account: BackendAccount): Account {
  return {
    id: account.id,
    provider: m365Meta,
    username: account.username,
    displayName: account.displayName,
    avatarUrl: account.avatarUrl,
    active: account.active,
    connected: account.connected,
  };
}

export const m365Provider: IdentityProviderDefinition = {
  id: m365Meta.id,
  name: m365Meta.name,
  icon: m365Meta.icon,
  supportsMultipleAccounts: false,
  supportsSwitch: false,
  checkStatus: async () => {
    const status = await identityFetchJson<{ connected: boolean }>(
      "/identity/m365/status",
      undefined,
      "Failed to load Microsoft 365 status",
    );

    if (!status.connected) {
      return { connected: false, accounts: [] };
    }

    const payload = await identityFetchJson<{ accounts: BackendAccount[] }>(
      "/identity/accounts",
      undefined,
      "Failed to load accounts",
    );

    const accounts = payload.accounts
      .filter((account) => account.provider === "m365")
      .map(mapBackendAccountToUi);

    return {
      connected: status.connected,
      accounts,
    };
  },
  signIn: async () => {
    const status = await identityFetchJson<{ connected: boolean }>(
      "/identity/m365/status",
      undefined,
      "Failed to check Microsoft 365 status",
    );

    return {
      type: "connected",
      connected: status.connected,
      message: status.connected
        ? "Microsoft 365 connected via token broker"
        : "Not authenticated. Ensure the M365 token broker is running.",
    };
  },
  signOut: async () => {
    await identityFetch("/identity/m365/logout", { method: "POST" }, "Failed to sign out account");
  },
};
