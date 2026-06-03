import { useMemo } from "preact/hooks";
import { useInfoBarItems } from "./useInfoBarItems";

function sortByPriority<T extends { priority?: number }>(items: T[]): T[] {
  return [...items].sort((a, b) => (b.priority ?? 0) - (a.priority ?? 0));
}

export function InfoBar() {
  const items = useInfoBarItems();

  const leftItems = useMemo(
    () => sortByPriority(items.filter((item) => item.align === "left")),
    [items],
  );
  const rightItems = useMemo(
    () => sortByPriority(items.filter((item) => item.align === "right")),
    [items],
  );

  if (!items.length) {
    return null;
  }

  return (
    <div className="app-layout__info-bar" role="status" aria-live="polite">
      {leftItems.map((item) => (
        <span key={item.id} className="info-bar__item">{item.content}</span>
      ))}
      <span className="info-bar__right">
        {rightItems.map((item) => (
          <span key={item.id} className="info-bar__item">{item.content}</span>
        ))}
      </span>
    </div>
  );
}
