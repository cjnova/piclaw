import { useEffect, useState } from "preact/hooks";
import { getInfoBarItems, onInfoBarChanged, type InfoBarItemDef } from "./infobar-registry";

export function useInfoBarItems(): InfoBarItemDef[] {
  const [items, setItems] = useState<InfoBarItemDef[]>(() => getInfoBarItems());

  useEffect(() => {
    const syncItems = () => {
      setItems(getInfoBarItems());
    };

    syncItems();
    return onInfoBarChanged(syncItems);
  }, []);

  return items;
}
