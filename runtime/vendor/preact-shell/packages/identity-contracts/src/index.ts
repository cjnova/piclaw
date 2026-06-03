export type IdentityProviderIconName = "github" | "m365" | "azure";

export interface AuthProvider {
  id: string;
  name: string;
  icon: IdentityProviderIconName;
  supportsMultipleAccounts?: boolean;
}

export interface Account {
  id: string;
  provider: AuthProvider;
  username: string;
  displayName?: string;
  avatarUrl?: string;
  active: boolean;
  connected: boolean;
}

export interface DeviceFlowStatusResult {
  status: "pending" | "completed" | "failed";
  error?: string;
}

export type SignInResult =
  | {
    type: "device_flow";
    flowId: string;
    code: string;
    url: string;
    pollStatus: (signal?: AbortSignal) => Promise<DeviceFlowStatusResult>;
  }
  | {
    type: "connected";
    connected: boolean;
    message?: string;
  };

export interface IdentityProviderDefinition {
  id: string;
  name: string;
  icon: IdentityProviderIconName;
  supportsMultipleAccounts: boolean;
  supportsSwitch: boolean;
  checkStatus: () => Promise<{ connected: boolean; accounts: Account[] }>;
  signIn: () => Promise<SignInResult>;
  signOut: (accountId: string) => Promise<void>;
  switchAccount?: (accountId: string) => Promise<void>;
}
