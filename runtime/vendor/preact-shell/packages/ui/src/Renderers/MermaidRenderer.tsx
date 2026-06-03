import type { ComponentChildren } from "preact";
import { useCallback, useMemo, useState } from "preact/hooks";
import { FencedBlock } from "../Chat/FencedBlock";
import { createLazySignal } from "../hooks";
import type { ContentAnnotation } from "./annotation-types";
import { isRendererLifecyclePending, useRendererLifecycle } from "./useRendererLifecycle";

const mermaidSignal = createLazySignal(() => import("mermaid"));

let initialized = false;
let initializedTheme: string | null = null;

function ensureMermaid(mermaid: (typeof import("mermaid"))["default"]) {
  const isDark = document.documentElement.dataset.theme !== "light";
  const theme = isDark ? "dark" : "default";

  if (initialized && initializedTheme === theme) {
    return;
  }

  mermaid.initialize({
    startOnLoad: false,
    securityLevel: "strict",
    theme,
    themeVariables: isDark
      ? {
          primaryColor: "#3b82f6",
          primaryTextColor: "#e2e8f0",
          primaryBorderColor: "#60a5fa",
          secondaryColor: "#6366f1",
          secondaryTextColor: "#e2e8f0",
          secondaryBorderColor: "#818cf8",
          tertiaryColor: "#1e293b",
          tertiaryTextColor: "#e2e8f0",
          lineColor: "#94a3b8",
          textColor: "#e2e8f0",
          mainBkg: "#1e293b",
          nodeBorder: "#60a5fa",
          clusterBkg: "#1e293b",
          titleColor: "#e2e8f0",
          edgeLabelBackground: "#1e293b",
        }
      : undefined,
  });

  initialized = true;
  initializedTheme = theme;
}

interface MermaidRendererProps {
  source: string;
  /** Render as overlay maximized content (fit-to-container) without fenced block chrome. */
  maximized?: boolean;
  /** Annotations are accepted for interface consistency but not applied to SVG diagrams */
  annotations?: ContentAnnotation[];
  onCopy?: () => void;
  onMaximize?: (content: ComponentChildren, title: string) => void;
}

function DiagramView({ svg, zoom }: { svg: string; zoom: number }) {
  return (
    <div className="mermaid-diagram__viewport">
      <div
        className="mermaid-diagram__canvas"
        style={{ transform: `scale(${zoom})` }}
        dangerouslySetInnerHTML={{ __html: svg }}
      />
    </div>
  );
}

export function MermaidRenderer({ source, maximized = false, onCopy, onMaximize }: MermaidRendererProps) {
  const [zoom, setZoom] = useState(1);
  const renderId = useMemo(() => `mermaid-${Math.random().toString(36).slice(2)}`, []);

  const renderDiagram = useCallback(async (mermaidModule: typeof import("mermaid")) => {
    const mermaid = mermaidModule.default;
    ensureMermaid(mermaid);
    const result = await mermaid.render(renderId, source);
    return result.svg;
  }, [renderId, source]);

  const lifecycle = useRendererLifecycle({
    resource: mermaidSignal,
    deps: [source],
    getOutput: renderDiagram,
  });

  const svg = lifecycle.output || "";
  const error = lifecycle.status === "error"
    ? lifecycle.error?.message || "Failed to render diagram"
    : null;
  const loading = isRendererLifecyclePending(lifecycle.status);

  const controls = (
    <>
      <button type="button" onClick={() => setZoom((current) => Math.min(2.5, current + 0.1))} aria-label="Zoom in">+</button>
      <button type="button" onClick={() => setZoom((current) => Math.max(0.4, current - 0.1))} aria-label="Zoom out">-</button>
    </>
  );

  if (maximized) {
    if (error) {
      return <div className="mermaid-diagram__error">{error}</div>;
    }

    if (loading) {
      return <div className="mermaid-diagram__loading">Loading diagram...</div>;
    }

    if (!svg) {
      return <div className="mermaid-diagram__loading">Rendering diagram...</div>;
    }

    return <div className="mermaid-diagram__maximized" dangerouslySetInnerHTML={{ __html: svg }} />;
  }

  return (
    <FencedBlock
      label="mermaid"
      variant="diagram"
      controls={controls}
      onCopy={onCopy}
      onMaximize={() => {
        if (!svg) {
          return;
        }

        onMaximize?.(
          <div className="mermaid-diagram__maximized" dangerouslySetInnerHTML={{ __html: svg }} />,
          "Mermaid diagram",
        );
      }}
    >
      {error ? (
        <div className="mermaid-diagram__error">{error}</div>
      ) : loading ? (
        <div className="mermaid-diagram__loading">Loading diagram...</div>
      ) : svg ? (
        <DiagramView svg={svg} zoom={zoom} />
      ) : (
        <div className="mermaid-diagram__loading">Rendering diagram...</div>
      )}
    </FencedBlock>
  );
}
