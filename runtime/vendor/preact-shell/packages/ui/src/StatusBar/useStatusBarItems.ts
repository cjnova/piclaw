import { useEffect, useState } from "preact/hooks";
import { getStatusBarItems, onStatusBarChanged } from "./statusbar-registry";
import type { StatusBarItem } from "./statusbar-items";

export function useStatusBarItems(): StatusBarItem[] {
  const [items, setItems] = useState<StatusBarItem[]>(() => getStatusBarItems());

  useEffect(() => {
    const syncItems = () => {
      setItems(getStatusBarItems());
    };

    syncItems();
    return onStatusBarChanged(syncItems);
  }, []);

  return items;
}
