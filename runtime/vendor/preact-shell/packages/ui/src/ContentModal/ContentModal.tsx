import type { ComponentChildren } from "preact";
import { useEffect, useRef } from "preact/hooks";
import { Icon } from "../Icon";
import { useDismissableLayer } from "../hooks";

export interface ContentModalProps {
  /** Optional title shown in the header */
  title?: string;
  /** Main content rendered inside the modal body */
  children: ComponentChildren;
  /** Callback when modal is dismissed (close button, Escape, click outside) */
  onClose: () => void;
}

/**
 * Centered modal dialog with dark backdrop.
 * Dismisses on Escape, click outside, or close button.
 * Use for maximized previews, confirmations, or any viewport-centered overlay.
 */
export function ContentModal({ title, children, onClose }: ContentModalProps) {
  const panelRef = useRef<HTMLDivElement>(null);

  useDismissableLayer({ ref: panelRef, open: true, onDismiss: onClose });

  useEffect(() => {
    panelRef.current?.focus();
  }, []);

  return (
    <div className="content-modal" role="presentation">
      <div className="content-modal__backdrop" />
      <div
        ref={panelRef}
        className="content-modal__panel"
        role="dialog"
        aria-modal="true"
        aria-label={title || "Content preview"}
        tabIndex={-1}
      >
        <div className="content-modal__header">
          <div className="content-modal__title">{title || "Preview"}</div>
          <button type="button" className="content-modal__close" onClick={onClose} aria-label="Close">
            <Icon name="close" size={18} />
          </button>
        </div>
        <div className="content-modal__body">{children}</div>
      </div>
    </div>
  );
}
