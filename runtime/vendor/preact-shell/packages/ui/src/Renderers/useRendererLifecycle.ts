import { useEffect, useState } from "preact/hooks";
import type { LazyState } from "../hooks";

interface LazyResource<TModule> {
  state: { value: LazyState<TModule> };
  load: () => void;
}

export type RendererLifecycleStatus = "loading" | "rendering" | "ready" | "error";

export function isRendererLifecyclePending(status: RendererLifecycleStatus): boolean {
  return status === "loading" || status === "rendering";
}

interface RendererLifecycleResult<TOutput> {
  status: RendererLifecycleStatus;
  output: TOutput | null;
  error: Error | null;
}

interface UseRendererLifecycleOptions<TModule, TOutput> {
  resource: LazyResource<TModule>;
  deps?: readonly unknown[];
  getOutput: (module: TModule) => TOutput | Promise<TOutput>;
}

/**
 * Shared renderer lifecycle for lazy module loading + output generation.
 *
 * Flow:
 * 1) ensure lazy resource starts loading
 * 2) track load errors
 * 3) generate renderer output (sync/async) once module is ready
 */
export function useRendererLifecycle<TModule, TOutput>({
  resource,
  deps = [],
  getOutput,
}: UseRendererLifecycleOptions<TModule, TOutput>): RendererLifecycleResult<TOutput> {
  const lazyState = resource.state.value;
  const [state, setState] = useState<RendererLifecycleResult<TOutput>>({
    status: "loading",
    output: null,
    error: null,
  });

  useEffect(() => {
    resource.load();
  }, [resource]);

  useEffect(() => {
    let active = true;

    if (lazyState.status === "idle" || lazyState.status === "loading") {
      setState({ status: "loading", output: null, error: null });
      return () => {
        active = false;
      };
    }

    if (lazyState.status === "error") {
      setState({ status: "error", output: null, error: lazyState.error });
      return () => {
        active = false;
      };
    }

    setState({ status: "rendering", output: null, error: null });

    Promise.resolve(getOutput(lazyState.module))
      .then((output) => {
        if (!active) {
          return;
        }

        setState({ status: "ready", output, error: null });
      })
      .catch((error: unknown) => {
        if (!active) {
          return;
        }

        setState({
          status: "error",
          output: null,
          error: error instanceof Error ? error : new Error(String(error)),
        });
      });

    return () => {
      active = false;
    };
  }, [lazyState, getOutput, ...deps]);

  return state;
}
