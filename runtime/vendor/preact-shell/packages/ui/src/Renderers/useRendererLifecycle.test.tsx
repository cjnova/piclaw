import { describe, expect, test } from "bun:test";
import { render } from "preact";
import { useCallback, useEffect } from "preact/hooks";
import { createLazySignal } from "../hooks";
import { useRendererLifecycle, type RendererLifecycleStatus } from "./useRendererLifecycle";

const hasDom = typeof document !== "undefined";

type ProbeState = {
  status: RendererLifecycleStatus;
  output: string | null;
  error: Error | null;
};

interface ProbeProps {
  resource: ReturnType<typeof createLazySignal<{ value: number }>>;
  source: string;
  shouldFail?: boolean;
  onUpdate: (state: ProbeState) => void;
}

function Probe({ resource, source, shouldFail = false, onUpdate }: ProbeProps) {
  const getOutput = useCallback(async (module: { value: number }) => {
    if (shouldFail) {
      throw new Error("render failed");
    }

    return `${module.value}:${source}`;
  }, [shouldFail, source]);

  const state = useRendererLifecycle({
    resource,
    deps: [source, shouldFail],
    getOutput,
  });

  useEffect(() => {
    onUpdate(state);
  }, [onUpdate, state]);

  return null;
}

async function waitFor(predicate: () => boolean, timeoutMs = 1000) {
  const start = Date.now();

  while (!predicate()) {
    if (Date.now() - start > timeoutMs) {
      throw new Error("Timed out waiting for condition");
    }

    await Bun.sleep(10);
  }
}

describe("useRendererLifecycle", () => {
  test.skipIf(!hasDom)("loads resource once and regenerates output when deps change", async () => {
    let resolveLoader: (value: { value: number }) => void = () => undefined;
    const resource = createLazySignal<{ value: number }>(() => new Promise((resolve) => {
      resolveLoader = resolve;
    }));

    const host = document.createElement("div");
    let latest: ProbeState = {
      status: "loading",
      output: null,
      error: null,
    };

    render(
      <Probe resource={resource} source="first" onUpdate={(state) => {
        latest = state;
      }} />,
      host,
    );

    expect(latest.status).toBe("loading");

    resolveLoader({ value: 7 });

    await waitFor(() => latest.status === "ready");
    expect(latest.output).toBe("7:first");

    render(
      <Probe resource={resource} source="second" onUpdate={(state) => {
        latest = state;
      }} />,
      host,
    );

    await waitFor(() => latest.status === "ready" && latest.output === "7:second");

    render(null, host);
  });

  test.skipIf(!hasDom)("surfaces output-generation errors", async () => {
    const resource = createLazySignal(async () => ({ value: 3 }));
    const host = document.createElement("div");
    let latest: ProbeState = {
      status: "loading",
      output: null,
      error: null,
    };

    render(
      <Probe resource={resource} source="x" shouldFail onUpdate={(state) => {
        latest = state;
      }} />,
      host,
    );

    await waitFor(() => latest.status === "error");

    expect(latest.error?.message).toBe("render failed");
    expect(latest.output).toBeNull();

    render(null, host);
  });
});
