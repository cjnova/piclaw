import type { ComponentChildren } from "preact";

export interface StatusBarItem {
  id: string;
  content: ComponentChildren;
  compactContent?: ComponentChildren;
  align: "left" | "right";
  priority?: number;
  overflow?: boolean;
  showOnMobile?: boolean;
  onClick?: () => void;
  className?: string;
}

export function sortStatusBarItems<T extends Pick<StatusBarItem, "priority">>(items: T[]): T[] {
  return [...items].sort((a, b) => (b.priority ?? 0) - (a.priority ?? 0));
}

export function getAlignedStatusBarItems(items: StatusBarItem[], align: StatusBarItem["align"]): StatusBarItem[] {
  return sortStatusBarItems(items.filter((item) => item.align === align));
}

export function getOverflowStatusBarItems(items: StatusBarItem[], align: StatusBarItem["align"]): StatusBarItem[] {
  return sortStatusBarItems(items.filter((item) => item.overflow && item.align === align));
}

export function getMobileStatusBarItems(items: StatusBarItem[]): StatusBarItem[] {
  return sortStatusBarItems(items.filter((item) => item.showOnMobile === true));
}
