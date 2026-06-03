import { useCallback } from "preact/hooks";
import { FencedBlock } from "../Chat/FencedBlock";
import { createLazySignal } from "../hooks";
import { isRendererLifecyclePending, useRendererLifecycle } from "./useRendererLifecycle";

const katexSignal = createLazySignal(() => import("katex"));

interface MathRendererProps {
  source: string;
  onCopy?: () => void;
  displayMode?: boolean;
}

export function MathRenderer({ source, onCopy, displayMode = true }: MathRendererProps) {
  const renderMath = useCallback((katexModule: typeof import("katex")) => {
    return katexModule.default.renderToString(source, {
      throwOnError: false,
      displayMode,
    });
  }, [displayMode, source]);

  const lifecycle = useRendererLifecycle({
    resource: katexSignal,
    deps: [source, displayMode],
    getOutput: renderMath,
  });

  let body: string;

  if (isRendererLifecyclePending(lifecycle.status)) {
    body = "Loading...";
  } else if (lifecycle.status === "error") {
    body = lifecycle.error?.message || "Failed to load math renderer";
  } else {
    body = lifecycle.output || "<span>Failed to render equation</span>";
  }

  return (
    <FencedBlock label="math" variant="math" onCopy={onCopy}>
      {lifecycle.status === "ready" ? (
        <div className="math-renderer" dangerouslySetInnerHTML={{ __html: body }} />
      ) : (
        <div className="math-renderer">{body}</div>
      )}
    </FencedBlock>
  );
}
