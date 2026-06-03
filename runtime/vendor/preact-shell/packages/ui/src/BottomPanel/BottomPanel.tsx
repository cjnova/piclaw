import { Icon } from "../Icon";

export type PanelPosition = "bottom" | "right";

interface BottomPanelProps {
  visible: boolean;
  terminalHeight: number;
  terminalWidth?: number;
  maximized: boolean;
  position?: PanelPosition;
  onResizeStart: (event: MouseEvent) => void;
  onToggleMaximize: () => void;
  onTogglePosition?: () => void;
  onClose: () => void;
  onOpenInTab?: () => void;
  onPopOut?: () => void;
}

export function BottomPanel({
  visible,
  terminalHeight,
  terminalWidth = 400,
  maximized,
  position = "bottom",
  onResizeStart,
  onToggleMaximize,
  onTogglePosition,
  onClose,
  onOpenInTab,
  onPopOut,
}: BottomPanelProps) {
  if (!visible) {
    return null;
  }

  const isRight = position === "right";
  const size = maximized
    ? isRight ? "calc(100vw - 60px)" : "calc(100vh - 60px)"
    : isRight ? `${terminalWidth}px` : `${terminalHeight}px`;

  const style = isRight ? { width: size } : { height: size };

  return (
    <section className={`terminal-panel terminal-panel--${position}${maximized ? " is-maximized" : ""}`} style={style}>
      <div
        className="terminal-panel__drag-handle"
        onMouseDown={onResizeStart}
      />
      <header className="terminal-panel__header">
        <span className="terminal__title">Terminal</span>
        <div className="terminal__actions">
          {onTogglePosition && (
            <span
              className="terminal__btn"
              role="button"
              tabIndex={0}
              onClick={onTogglePosition}
              title={isRight ? "Move to bottom" : "Move to right"}
              aria-label={isRight ? "Move to bottom" : "Move to right"}
            >
              <Icon name={isRight ? "layout-panel" : "layout-sidebar-right"} size={16} />
            </span>
          )}
          <span
            className="terminal__btn"
            role="button"
            tabIndex={0}
            onClick={onToggleMaximize}
            title={maximized ? "Restore" : "Maximize"}
            aria-label={maximized ? "Restore" : "Maximize"}
          >
            <Icon name={maximized ? "screen-normal" : "screen-full"} size={16} />
          </span>
          {onOpenInTab && (
            <span
              className="terminal__btn"
              role="button"
              tabIndex={0}
              onClick={onOpenInTab}
              title="Open in new tab"
              aria-label="Open in new tab"
            >
              <Icon name="link-external" size={16} />
            </span>
          )}
          {onPopOut && (
            <span
              className="terminal__btn"
              role="button"
              tabIndex={0}
              onClick={onPopOut}
              title="Pop out to window"
              aria-label="Pop out to window"
            >
              <Icon name="multiple-windows" size={16} />
            </span>
          )}
          <span
            className="terminal__btn"
            role="button"
            tabIndex={0}
            onClick={onClose}
            title="Close (Ctrl+`)"
            aria-label="Close (Ctrl+`)"
          >
            <Icon name="close" size={16} />
          </span>
        </div>
      </header>
      <div className="terminal-panel__content">
        $ terminal placeholder
      </div>
    </section>
  );
}
