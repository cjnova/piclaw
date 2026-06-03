import { useState } from "preact/hooks";
import type { Account } from "./types";
import { Icon } from "../Icon";

interface AccountBadgeProps {
  account: Account;
  compact?: boolean;
  onClick: () => void;
}

export function AccountBadge({ account, compact = false, onClick }: AccountBadgeProps) {
  const name = account.displayName ?? account.username;
  const [imgFailed, setImgFailed] = useState(false);
  const showImg = account.avatarUrl && !imgFailed;

  return (
    <button type="button" className={`account-switcher__badge ${compact ? "is-compact" : ""}`} onClick={onClick} title={name}>
      <span className="account-switcher__avatar-wrapper">
        {showImg ? (
          <img
            src={account.avatarUrl}
            alt={name}
            className="account-switcher__avatar"
            onError={() => setImgFailed(true)}
          />
        ) : (
          <span className="account-switcher__avatar account-switcher__avatar--fallback">
            <Icon name="account" size={18} />
          </span>
        )}
      </span>
      {!compact && (
        <span className="account-switcher__meta">
          <span className="account-switcher__name">{name}</span>
          <span className="account-switcher__provider">{account.provider.name}</span>
        </span>
      )}
      <span className={`account-switcher__status-dot ${account.connected ? "is-connected" : ""}`} />
    </button>
  );
}
