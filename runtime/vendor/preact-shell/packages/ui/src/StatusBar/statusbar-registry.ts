export type { StatusBarItem } from "./statusbar-items";
import type { StatusBarItem } from "./statusbar-items";

export type StatusBarItemDef = StatusBarItem;

const registry: StatusBarItem[] = [];
const listeners: Set<() => void> = new Set();

export function registerStatusBarItem(def: StatusBarItem): void {
  const existing = registry.findIndex((item) => item.id === def.id);
  if (existing >= 0) {
    registry.splice(existing, 1);
  }

  registry.push(def);
  listeners.forEach((listener) => listener());
}

export function unregisterStatusBarItem(id: string): void {
  const idx = registry.findIndex((item) => item.id === id);
  if (idx >= 0) {
    registry.splice(idx, 1);
    listeners.forEach((listener) => listener());
  }
}

export function getStatusBarItems(): StatusBarItem[] {
  return [...registry];
}

export function onStatusBarChanged(cb: () => void): () => void {
  listeners.add(cb);
  return () => listeners.delete(cb);
}
