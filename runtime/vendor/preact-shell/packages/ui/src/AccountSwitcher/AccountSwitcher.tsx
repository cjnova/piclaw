import { useMemo, useRef, useState, useCallback } from "preact/hooks";
import { Icon } from "../Icon";
import { useDismissableLayer } from "../hooks/useDismissableLayer";
import { AccountBadge } from "./AccountBadge";
import { AccountDropdown } from "./AccountDropdown";
import { SignInCard } from "./SignInCard";
import type { AccountSwitcherProps } from "./types";

export function AccountSwitcher({ accounts, providers, onSignIn, onSwitch, onSignOut, compact = false, loading = false }: AccountSwitcherProps) {
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);
  const activeAccount = useMemo(() => accounts.find((account) => account.active) ?? accounts[0], [accounts]);

  const dismiss = useCallback(() => {
    setOpen(false);
    requestAnimationFrame(() => (document.activeElement as HTMLElement)?.blur());
  }, []);

  useDismissableLayer({ ref: rootRef, open, onDismiss: dismiss });

  if (loading) {
    return (
      <div className={`account-switcher ${compact ? "is-compact" : ""}`} ref={rootRef}>
        <span className="account-switcher__badge account-switcher__badge--loading">
          <span className="account-switcher__avatar account-switcher__avatar--fallback">
            <Icon name="account" size={18} />
          </span>
        </span>
      </div>
    );
  }

  if (!activeAccount) {
    return (
      <div className={`account-switcher ${compact ? "is-compact" : ""}`} ref={rootRef}>
        <SignInCard providers={providers} onSignIn={onSignIn} />
      </div>
    );
  }

  return (
    <div className={`account-switcher ${compact ? "is-compact" : ""}`} ref={rootRef}>
      <AccountBadge account={activeAccount} compact={compact} onClick={() => setOpen((current) => {
        const next = !current;
        if (!next) requestAnimationFrame(() => (document.activeElement as HTMLElement)?.blur());
        return next;
      })} />
      {open && (
        <AccountDropdown
          accounts={accounts}
          providers={providers}
          onSwitch={(accountId) => {
            onSwitch(accountId);
            setOpen(false);
          }}
          onSignIn={(providerId) => {
            onSignIn(providerId);
            setOpen(false);
          }}
          onSignOut={(accountId) => {
            onSignOut(accountId);
            setOpen(false);
          }}
        />
      )}
    </div>
  );
}
