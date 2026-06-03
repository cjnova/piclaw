import type { ComponentType } from "preact";
import type { IconName } from "../Icon";

export interface SettingsPaneDefinition {
  id: string;
  label: string;
  icon: IconName;
  order?: number;
  component: ComponentType<any>;
}

const registry: SettingsPaneDefinition[] = [];
const listeners: Set<() => void> = new Set();

export function registerSettingsPane(def: SettingsPaneDefinition): void {
  const existing = registry.findIndex((pane) => pane.id === def.id);
  if (existing >= 0) {
    registry.splice(existing, 1);
  }

  registry.push(def);
  registry.sort((a, b) => (a.order ?? 50) - (b.order ?? 50));
  listeners.forEach((listener) => listener());
}

export function unregisterSettingsPane(id: string): void {
  const idx = registry.findIndex((pane) => pane.id === id);
  if (idx >= 0) {
    registry.splice(idx, 1);
    listeners.forEach((listener) => listener());
  }
}

export function getRegisteredPanes(): SettingsPaneDefinition[] {
  return [...registry];
}

export function onPanesChanged(cb: () => void): () => void {
  listeners.add(cb);
  return () => listeners.delete(cb);
}
