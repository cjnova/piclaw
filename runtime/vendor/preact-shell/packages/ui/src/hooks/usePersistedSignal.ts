import { useSignal } from "@preact/signals";
import { useEffect, useRef } from "preact/hooks";

export interface UsePersistedSignalOptions<T> {
  parse?: (raw: string) => T;
  serialize?: (value: T) => string;
}

const canUseLocalStorage = (): boolean => typeof window !== "undefined" && typeof window.localStorage !== "undefined";

const readStoredValue = <T>(key: string, fallbackValue: T, parse: (raw: string) => T): T => {
  if (!canUseLocalStorage()) {
    return fallbackValue;
  }

  try {
    const raw = window.localStorage.getItem(key);

    if (raw === null) {
      return fallbackValue;
    }

    const parsed = parse(raw);

    if (typeof parsed === "number" && Number.isNaN(parsed)) {
      return fallbackValue;
    }

    if (parsed === undefined) {
      return fallbackValue;
    }

    return parsed;
  } catch {
    return fallbackValue;
  }
};

export function usePersistedSignal<T>(
  key: string,
  defaultValue: T,
  options: UsePersistedSignalOptions<T> = {},
) {
  const parse = options.parse ?? ((raw: string) => raw as T);
  const serialize = options.serialize ?? ((value: T) => String(value));

  const storedValue = readStoredValue(key, defaultValue, parse);
  const state = useSignal<T>(storedValue);
  const serializeRef = useRef(serialize);

  serializeRef.current = serialize;

  useEffect(() => {
    if (!canUseLocalStorage()) {
      return;
    }

    try {
      window.localStorage.setItem(key, serializeRef.current(state.value));
    } catch {
      // Ignore persistence failures (e.g. private mode/quota/security restrictions).
    }
  }, [key, state.value]);

  return state;
}
