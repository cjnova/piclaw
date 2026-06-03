import { safeParse } from "../utils";
import type { HighlightStoreAdapter, StoredHighlight } from "./types";

const DEFAULT_STORAGE_KEY = "preact-shell-highlights";

export function localStorageHighlightAdapter(key = DEFAULT_STORAGE_KEY): HighlightStoreAdapter {
  return {
    load(): StoredHighlight[] {
      if (typeof localStorage === "undefined") {
        return [];
      }

      try {
        const raw = localStorage.getItem(key);
        if (!raw) {
          return [];
        }

        const parsed = safeParse<unknown[]>(raw, []);
        if (!Array.isArray(parsed)) {
          return [];
        }

        return parsed.filter(isStoredHighlight);
      } catch {
        return [];
      }
    },

    save(highlights: StoredHighlight[]): void {
      if (typeof localStorage === "undefined") {
        return;
      }

      try {
        localStorage.setItem(key, JSON.stringify(highlights));
      } catch {
        // Ignore storage write failures.
      }
    },
  };
}

export function memoryHighlightAdapter(): HighlightStoreAdapter {
  let value: StoredHighlight[] = [];

  return {
    load(): StoredHighlight[] {
      return [...value];
    },

    save(highlights: StoredHighlight[]): void {
      value = [...highlights];
    },
  };
}

function isStoredHighlight(value: unknown): value is StoredHighlight {
  if (!value || typeof value !== "object") {
    return false;
  }

  const item = value as Record<string, unknown>;
  return typeof item.id === "string"
    && typeof item.groupId === "string"
    && typeof item.messageId === "string"
    && typeof item.colorId === "string"
    && typeof item.startOffset === "number"
    && typeof item.endOffset === "number"
    && item.endOffset > item.startOffset;
}
