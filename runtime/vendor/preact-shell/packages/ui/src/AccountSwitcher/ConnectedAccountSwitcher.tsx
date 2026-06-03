import { useIdentityProviders } from "../Identity";
import { AccountSwitcher } from "./AccountSwitcher";

interface ConnectedAccountSwitcherProps {
  compact?: boolean;
}

export function ConnectedAccountSwitcher({ compact = false }: ConnectedAccountSwitcherProps) {
  const identity = useIdentityProviders();

  return (
    <AccountSwitcher
      compact={compact}
      loading={identity.loading}
      accounts={identity.accounts}
      providers={identity.providers}
      onSignIn={identity.signIn}
      onSwitch={identity.switchAccount}
      onSignOut={identity.signOut}
    />
  );
}
