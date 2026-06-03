import type { ComponentChildren } from "preact";
import { useCallback } from "preact/hooks";
import { Icon, type IconName } from "../Icon";
import { useCopyVerify } from "../hooks";

export interface FencedBlockAction {
  id: string;
  icon: IconName;
  label: string;
}

/** Default actions per variant — framework UX contract */
type FencedBlockVariant = "code" | "diagram" | "table" | "math" | "csv" | "image";

const VARIANT_ACTIONS: Record<FencedBlockVariant, FencedBlockAction[]> = {
  code: [{ id: "copy", icon: "copy", label: "Copy" }],
  table: [{ id: "copy", icon: "copy", label: "Copy" }],
  diagram: [
    { id: "copy", icon: "copy", label: "Copy source" },
    { id: "maximize", icon: "screen-full", label: "Maximize" },
  ],
  math: [{ id: "copy", icon: "copy", label: "Copy source" }],
  csv: [{ id: "copy", icon: "copy", label: "Copy" }],
  image: [],
};

interface FencedBlockProps {
  /** Language label or block type (e.g. "python", "json", "mermaid", "table") */
  label?: string;
  /** Variant determines default actions and layout */
  variant?: FencedBlockVariant;
  /**
   * Override default actions for this variant.
   * When omitted, framework provides variant-appropriate defaults.
   */
  actions?: FencedBlockAction[];
  /**
   * @deprecated Use typed callbacks (onCopy, onDownload, onMaximize) instead.
   * Generic callback when an action button is clicked.
   */
  onAction?: (actionId: string) => void;
  /** Called when copy action is triggered. Receives no args — caller knows what to copy. */
  onCopy?: () => void;
  /** Called when download action is triggered. Only used by custom actions overrides; default variant actions do not include download. */
  onDownload?: () => void;
  /** Called when maximize action is triggered. */
  onMaximize?: () => void;
  /** Called when edit action is triggered. Only used by custom actions overrides; default variant actions do not include edit. */
  onEdit?: () => void;
  /** Content rendered inside the block body */
  children: ComponentChildren;
  /** Additional controls for diagram variant (zoom in/out/reset) */
  controls?: ComponentChildren;
}

/**
 * Fenced content block — framework scaffolding for rich content containers.
 *
 * Actions are determined by variant:
 * - `code`: copy
 * - `table`: copy
 * - `diagram`: copy + maximize
 * - `math`: copy source
 * - `csv`: copy
 * - `image`: no actions
 *
 * Apps provide content + typed callbacks. Framework renders the chrome.
 *
 * Copy verify pattern: when copy is clicked, the button icon swaps to a
 * checkmark for 3 seconds, then reverts. No toast needed.
 */
export function FencedBlock({
  label,
  variant,
  actions,
  onAction,
  onCopy,
  onDownload,
  onMaximize,
  onEdit,
  children,
  controls,
}: FencedBlockProps) {
  const variantClass = variant ? ` chat__fenced-block--${variant}` : "";
  const resolvedActions = actions ?? (variant ? VARIANT_ACTIONS[variant] ?? [] : []);
  const { verifiedId, markVerified } = useCopyVerify();

  const handleAction = useCallback((actionId: string) => {
    // Typed callbacks (preferred)
    if (actionId === "copy") onCopy?.();
    if (actionId === "download") onDownload?.();
    if (actionId === "maximize") onMaximize?.();
    if (actionId === "edit") onEdit?.();

    // Legacy generic callback
    onAction?.(actionId);

    // Copy verify: swap icon to check for 3 seconds
    if (actionId === "copy") {
      markVerified("copy");
    }
  }, [markVerified, onAction, onCopy, onDownload, onEdit, onMaximize]);

  return (
    <div className={`chat__fenced-block${variantClass}`}>
      {(label || resolvedActions.length > 0) && (
        <div className="chat__fenced-block__header">
          {label ? <span className="chat__fenced-block__label">{label}</span> : <span />}
          {resolvedActions.length > 0 && (
            <div className="chat__fenced-block__actions">
              {resolvedActions.map((action) => {
                const isVerified = action.id === verifiedId;
                return (
                  <button
                    key={action.id}
                    type="button"
                    title={isVerified ? "Copied" : action.label}
                    aria-label={isVerified ? "Copied" : action.label}
                    onClick={() => handleAction(action.id)}
                  >
                    <Icon name={isVerified ? "check" : action.icon} size={16} />
                  </button>
                );
              })}
            </div>
          )}
        </div>
      )}
      <div className="chat__fenced-block__body">
        {variant === "diagram" && controls && (
          <div className="chat__fenced-block__controls">{controls}</div>
        )}
        {children}
      </div>
    </div>
  );
}
