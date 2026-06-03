import { safeParse } from "../utils";

const WORKSPACE_STATE_STORAGE_KEY = "preact-shell-workspace-state";

export interface PersistedWorkspaceState {
  expandedPaths?: string[];
  selectedPath?: string;
  scrollTop?: number;
}

export function readWorkspaceState(): PersistedWorkspaceState {
  if (typeof window === "undefined") {
    return {};
  }

  try {
    const raw = window.localStorage.getItem(WORKSPACE_STATE_STORAGE_KEY);
    if (!raw) {
      return {};
    }

    const parsed = safeParse<PersistedWorkspaceState>(raw, {});
    if (!parsed || typeof parsed !== "object") {
      return {};
    }

    return parsed;
  } catch (_error) {
    try {
      window.localStorage.removeItem(WORKSPACE_STATE_STORAGE_KEY);
    } catch {
      // ignore storage failures
    }

    return {};
  }
}

export function persistWorkspaceState(partial: PersistedWorkspaceState): void {
  if (typeof window === "undefined") {
    return;
  }

  try {
    const current = readWorkspaceState();
    const next: PersistedWorkspaceState = {
      ...current,
      ...partial,
    };

    for (const [key, value] of Object.entries(partial)) {
      if (value === undefined) {
        delete next[key as keyof PersistedWorkspaceState];
      }
    }

    window.localStorage.setItem(WORKSPACE_STATE_STORAGE_KEY, JSON.stringify(next));
  } catch {
    // ignore storage failures
  }
}
