import type { Account, AuthProvider } from "@cjnova/preact-shell-identity-contracts";

export type { Account, AuthProvider };

export interface AccountSwitcherProps {
  accounts: Account[];
  providers: AuthProvider[];
  onSignIn: (providerId: string) => void;
  onSwitch: (accountId: string) => void;
  onSignOut: (accountId: string) => void;
  compact?: boolean;
  loading?: boolean;
}
