import type { AuthProvider } from "./types";
import { Icon } from "../Icon";

interface SignInCardProps {
  providers: AuthProvider[];
  onSignIn: (providerId: string) => void;
}

export function SignInCard({ providers, onSignIn }: SignInCardProps) {
  return (
    <div className="account-switcher__signin-card">
      {providers.map((provider) => (
        <button
          key={provider.id}
          type="button"
          className="account-switcher__provider-button"
          onClick={() => onSignIn(provider.id)}
        >
          <Icon name={provider.icon} size={14} />
          <span>Sign in to {provider.name}</span>
        </button>
      ))}
    </div>
  );
}
