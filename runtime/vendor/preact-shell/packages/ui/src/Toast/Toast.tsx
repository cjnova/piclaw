import { useEffect } from "preact/hooks";

export interface ToastProps {
  message: string;
  type: "info" | "success" | "error";
  visible: boolean;
  onDismiss?: () => void;
  autoHideMs?: number;
}

export function Toast({ message, type, visible, onDismiss, autoHideMs = 3000 }: ToastProps) {
  useEffect(() => {
    if (!visible || !onDismiss) {
      return;
    }

    const timer = window.setTimeout(() => {
      onDismiss();
    }, autoHideMs);

    return () => {
      window.clearTimeout(timer);
    };
  }, [autoHideMs, onDismiss, visible, message, type]);

  if (!visible) {
    return null;
  }

  return (
    <div className={`toast toast--${type}`} role="status" aria-live="polite">
      <span>{message}</span>
      {onDismiss && (
        <button type="button" className="toast__dismiss" onClick={onDismiss} aria-label="Dismiss notification">
          ✕
        </button>
      )}
    </div>
  );
}
