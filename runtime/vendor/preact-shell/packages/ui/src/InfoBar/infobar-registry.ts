import type { ComponentChildren } from "preact";

export interface InfoBarItemDef {
  id: string;
  content: ComponentChildren;
  align: "left" | "right";
  priority?: number;
}

const registry: InfoBarItemDef[] = [];
const listeners: Set<() => void> = new Set();

export function registerInfoBarItem(def: InfoBarItemDef): void {
  const existing = registry.findIndex((item) => item.id === def.id);
  if (existing >= 0) {
    registry.splice(existing, 1);
  }

  registry.push(def);
  listeners.forEach((listener) => listener());
}

export function unregisterInfoBarItem(id: string): void {
  const idx = registry.findIndex((item) => item.id === id);
  if (idx >= 0) {
    registry.splice(idx, 1);
    listeners.forEach((listener) => listener());
  }
}

export function getInfoBarItems(): InfoBarItemDef[] {
  return [...registry];
}

export function onInfoBarChanged(cb: () => void): () => void {
  listeners.add(cb);
  return () => listeners.delete(cb);
}
