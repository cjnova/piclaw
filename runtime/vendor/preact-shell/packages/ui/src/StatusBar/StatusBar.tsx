import { useMemo } from "preact/hooks";
import {
  getAlignedStatusBarItems,
  getOverflowStatusBarItems,
} from "./statusbar-items";
import type { StatusBarItem } from "./statusbar-items";
import { useStatusBarItems } from "./useStatusBarItems";

export interface StatusBarFlash {
  message: string;
  type: "error" | "warning" | "success" | "info";
}

export interface StatusBarProps {
  flash?: StatusBarFlash | null;
  className?: string;
}

function StatusBarItemNode({ item, fromOverflowRow = false }: { item: StatusBarItem; fromOverflowRow?: boolean }) {
  const classes = [
    "status-bar__item",
    item.overflow && !fromOverflowRow ? "status-bar__item--overflow" : "",
    item.id === "shell.terminal" ? "status-bar__terminal-btn" : "",
    item.className,
  ].filter(Boolean).join(" ");

  if (item.onClick) {
    return (
      <button type="button" className={classes} onClick={item.onClick}>
        {item.content}
      </button>
    );
  }

  return <span className={classes}>{item.content}</span>;
}

export function StatusBar({ flash = null, className }: StatusBarProps) {
  const items = useStatusBarItems();

  const leftItems = useMemo(() => getAlignedStatusBarItems(items, "left"), [items]);
  const rightItems = useMemo(() => getAlignedStatusBarItems(items, "right"), [items]);
  const overflowItems = useMemo(() => items.filter((item) => item.overflow), [items]);
  const overflowLeftItems = useMemo(() => getOverflowStatusBarItems(items, "left"), [items]);
  const overflowRightItems = useMemo(() => getOverflowStatusBarItems(items, "right"), [items]);

  return (
    <div className="app-layout__status-bar-wrap">
      {overflowItems.length > 0 && (
        <div className="status-bar__overflow">
          {overflowLeftItems.map((item) => (
            <StatusBarItemNode key={item.id} item={item} fromOverflowRow />
          ))}
          <span className="status-bar__right">
            {overflowRightItems.map((item) => (
              <StatusBarItemNode key={item.id} item={item} fromOverflowRow />
            ))}
          </span>
        </div>
      )}

      <div
        className={[
          "app-layout__status-bar",
          className,
          flash ? `app-layout__status-bar--flash app-layout__status-bar--flash-${flash.type}` : "",
        ].filter(Boolean).join(" ")}
      >
        {leftItems.map((item) => (
          <StatusBarItemNode key={item.id} item={item} />
        ))}

        {flash && (
          <span className={`status-bar__flash status-bar__flash--${flash.type}`} role="status" aria-live="polite">
            {flash.message}
          </span>
        )}

        <span className="status-bar__right">
          {rightItems.map((item) => (
            <StatusBarItemNode key={item.id} item={item} />
          ))}
        </span>
      </div>
    </div>
  );
}
