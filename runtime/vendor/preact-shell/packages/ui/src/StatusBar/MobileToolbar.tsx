import { useMemo } from "preact/hooks";
import { getMobileStatusBarItems } from "./statusbar-items";
import type { StatusBarItem } from "./statusbar-items";
import { useStatusBarItems } from "./useStatusBarItems";

function MobileToolbarItemNode({ item }: { item: StatusBarItem }) {
  const classes = [
    "status-bar__item",
    item.id === "shell.terminal" ? "status-bar__terminal-btn" : "",
    item.className,
  ].filter(Boolean).join(" ");

  const itemContent = item.compactContent ?? item.content;

  if (item.onClick) {
    return (
      <button type="button" className={classes} onClick={item.onClick}>
        {itemContent}
      </button>
    );
  }

  return <span className={classes}>{itemContent}</span>;
}

export function MobileToolbar() {
  const items = useStatusBarItems();
  const mobileItems = useMemo(() => getMobileStatusBarItems(items), [items]);

  if (mobileItems.length === 0) {
    return null;
  }

  return (
    <div className="app-layout__mobile-toolbar" aria-label="Mobile toolbar">
      {mobileItems.map((item) => (
        <MobileToolbarItemNode key={item.id} item={item} />
      ))}
    </div>
  );
}
