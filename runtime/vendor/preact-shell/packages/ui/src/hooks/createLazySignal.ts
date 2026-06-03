import { signal } from "@preact/signals";

export type LazyState<T> =
  | { status: "idle" }
  | { status: "loading" }
  | { status: "ready"; module: T }
  | { status: "error"; error: Error };

export function createLazySignal<T>(loader: () => Promise<T>) {
  const state = signal<LazyState<T>>({ status: "idle" });
  let promise: Promise<T> | null = null;

  function load() {
    if (state.value.status === "ready" || state.value.status === "loading") {
      return;
    }

    state.value = { status: "loading" };

    if (!promise) {
      promise = loader();
    }

    promise
      .then((module) => {
        state.value = { status: "ready", module };
      })
      .catch((error: unknown) => {
        state.value = {
          status: "error",
          error: error instanceof Error ? error : new Error(String(error)),
        };
      });
  }

  return { state, load };
}
