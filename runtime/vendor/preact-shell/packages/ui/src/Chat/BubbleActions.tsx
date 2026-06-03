import { useCallback } from "preact/hooks";
import { useCopyVerify } from "../hooks";
import { Icon } from "../Icon";
import type { BubbleActionDefinition } from "./types";

interface BubbleActionsProps {
  messageId: string;
  actions?: BubbleActionDefinition[];
  onAction?: (messageId: string, actionId: string) => void;
}

export function BubbleActions({ messageId, actions = [], onAction }: BubbleActionsProps) {
  const { verifiedId, markVerified } = useCopyVerify();

  const handleAction = useCallback((actionId: string) => {
    onAction?.(messageId, actionId);

    if (actionId === "copy") {
      markVerified("copy");
    }
  }, [markVerified, messageId, onAction]);

  if (actions.length === 0) {
    return null;
  }

  return (
    <div className="chat__bubble-actions" aria-label="Message actions">
      {actions.map((action) => {
        const isVerified = action.id === verifiedId;
        return (
          <button
            key={action.id}
            type="button"
            className="chat__icon-btn"
            aria-label={isVerified ? "Copied" : action.label}
            title={isVerified ? "Copied" : action.label}
            onClick={() => handleAction(action.id)}
          >
            {action.icon ? <Icon name={isVerified ? "check" : action.icon} size={16} /> : action.label}
          </button>
        );
      })}
    </div>
  );
}
