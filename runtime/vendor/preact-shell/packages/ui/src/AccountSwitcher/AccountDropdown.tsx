import { useState } from "preact/hooks";
import { Icon } from "../Icon";
import type { Account, AuthProvider } from "./types";

interface AccountDropdownProps {
  accounts: Account[];
  providers: AuthProvider[];
  onSwitch: (accountId: string) => void;
  onSignIn: (providerId: string) => void;
  onSignOut: (accountId: string) => void;
}

export function AccountDropdown({ accounts, providers, onSwitch, onSignIn, onSignOut }: AccountDropdownProps) {
  const [failedAvatarIds, setFailedAvatarIds] = useState<string[]>([]);

  const markAvatarFailed = (accountId: string) => {
    setFailedAvatarIds((current) => (current.includes(accountId) ? current : [...current, accountId]));
  };

  // Group accounts by provider
  const grouped = new Map<string, Account[]>();
  for (const account of accounts) {
    const key = account.provider.id;
    if (!grouped.has(key)) grouped.set(key, []);
    grouped.get(key)!.push(account);
  }

  return (
    <div className="account-switcher__dropdown" role="menu" aria-label="Accounts">
      {providers.map((provider) => {
        const providerAccounts = grouped.get(provider.id) || [];

        return (
          <div key={provider.id} className="account-switcher__dropdown-section">
            <div className="account-switcher__dropdown-header">
              <Icon name={provider.icon} size={12} />
              <span>{provider.name}</span>
            </div>

            {providerAccounts.map((account) => {
              const name = account.displayName ?? account.username;
              const showAvatar = Boolean(account.avatarUrl) && !failedAvatarIds.includes(account.id);

              const hasMultiple = providerAccounts.length > 1;

              return (
                <div key={account.id} className="account-switcher__dropdown-row">
                  <button
                    type="button"
                    className={`account-switcher__dropdown-item ${hasMultiple && account.active ? "is-active" : ""} ${hasMultiple && !account.active ? "is-inactive" : ""}`}
                    onClick={() => onSwitch(account.id)}
                  >
                    {showAvatar ? (
                      <img
                        src={account.avatarUrl}
                        alt={name}
                        className="account-switcher__dropdown-avatar"
                        onError={() => markAvatarFailed(account.id)}
                      />
                    ) : (
                      <span className="account-switcher__dropdown-avatar account-switcher__dropdown-avatar--fallback">
                        <Icon name="account" size={14} />
                      </span>
                    )}
                    <span className="account-switcher__dropdown-label">{name}</span>
                    <span className={`account-switcher__status-dot ${account.connected ? "is-connected" : ""}`} />
                  </button>
                  <button
                    type="button"
                    className="account-switcher__disconnect-btn"
                    title={`Sign out ${account.username}`}
                    onClick={() => onSignOut(account.id)}
                  >
                    <Icon name="sign-out" size={14} />
                  </button>
                </div>
              );
            })}

            {providerAccounts.length === 0 && (
              <button
                type="button"
                className="account-switcher__dropdown-item"
                onClick={() => onSignIn(provider.id)}
              >
                <span className="account-switcher__dropdown-label">Sign in with {provider.name}</span>
              </button>
            )}

            {providerAccounts.length > 0 && provider.supportsMultipleAccounts && (
              <button
                type="button"
                className="account-switcher__dropdown-item account-switcher__dropdown-item--add"
                onClick={() => onSignIn(provider.id)}
              >
                <span className="account-switcher__dropdown-label">+ Add account</span>
              </button>
            )}
          </div>
        );
      })}
    </div>
  );
}
