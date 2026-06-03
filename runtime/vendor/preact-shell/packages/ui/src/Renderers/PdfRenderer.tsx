import { TextLayer } from "pdfjs-dist";
import * as pdfjsLib from "pdfjs-dist";
import { useEffect, useMemo, useRef, useState } from "preact/hooks";
import { Icon } from "../Icon";

const workerRelativePath = import.meta.url.includes("/chunks/")
  ? "../static/pdf.worker.min.mjs"
  : "./static/pdf.worker.min.mjs";

pdfjsLib.GlobalWorkerOptions.workerSrc = new URL(workerRelativePath, import.meta.url).toString();

const MIN_ZOOM = 0.5;
const MAX_ZOOM = 3;
const ZOOM_STEP = 0.25;
const THUMBNAIL_TARGET_WIDTH = 240;
// "TT: undefined function" is a common non-fatal font hinting warning from some PDFs.
// Keep actual failures visible while suppressing warning-level worker noise.
const PDF_RENDERER_VERBOSITY = pdfjsLib.VerbosityLevel.ERRORS;

function clampZoom(value: number): number {
  const rounded = Math.round(value / ZOOM_STEP) * ZOOM_STEP;
  return Math.min(MAX_ZOOM, Math.max(MIN_ZOOM, rounded));
}

interface PdfRendererProps {
  src: string;
  mode?: "thumbnail" | "document";
}

export function PdfRenderer({ src, mode = "document" }: PdfRendererProps) {
  const [pdfDoc, setPdfDoc] = useState<pdfjsLib.PDFDocumentProxy | null>(null);
  const [loading, setLoading] = useState(true);
  const [rendering, setRendering] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [zoom, setZoom] = useState<number | null>(null);
  const fitZoomRef = useRef<number>(1);
  const [currentPage, setCurrentPage] = useState(1);

  const scrollRef = useRef<HTMLDivElement | null>(null);
  const canvasRefs = useRef<Record<number, HTMLCanvasElement | null>>({});
  const pageRefs = useRef<Record<number, HTMLDivElement | null>>({});
  const textLayerRefs = useRef<Record<number, HTMLDivElement | null>>({});
  const renderTaskRef = useRef<{ cancel: () => void } | null>(null);

  useEffect(() => {
    let active = true;

    setLoading(true);
    setRendering(false);
    setError(null);
    setPdfDoc(null);
    setCurrentPage(1);
    Object.values(textLayerRefs.current).forEach((textLayer) => textLayer?.remove());

    canvasRefs.current = {};
    pageRefs.current = {};
    textLayerRefs.current = {};

    if (!src) {
      setLoading(false);
      setError("PDF source unavailable.");
      return () => {
        active = false;
      };
    }

    const task = pdfjsLib.getDocument({
      url: src,
      verbosity: PDF_RENDERER_VERBOSITY,
    });

    task.promise
      .then((doc) => {
        if (!active) {
          return;
        }

        setPdfDoc(doc);
        setLoading(false);
      })
      .catch((loadError: unknown) => {
        if (!active) {
          return;
        }

        setLoading(false);
        setError(loadError instanceof Error ? loadError.message : "Failed to load PDF.");
      });

    return () => {
      active = false;
      task.destroy();
    };
  }, [src]);

  // Compute fit-to-width zoom once PDF loads and container is available
  useEffect(() => {
    if (!pdfDoc || mode !== "document") return;
    const container = scrollRef.current;
    if (!container) return;

    let active = true;
    pdfDoc.getPage(1).then((page) => {
      if (!active) return;
      const viewportAtOne = page.getViewport({ scale: 1 });
      const containerWidth = container.clientWidth - 32; // account for padding
      const fitScale = containerWidth / viewportAtOne.width;
      fitZoomRef.current = fitScale;
      setZoom(fitScale);
    });

    return () => { active = false; };
  }, [pdfDoc, mode]);

  const pageNumbers = useMemo(() => {
    if (!pdfDoc) {
      return [] as number[];
    }

    if (mode === "thumbnail") {
      return [1];
    }

    return Array.from({ length: pdfDoc.numPages }, (_, index) => index + 1);
  }, [mode, pdfDoc]);

  useEffect(() => {
    let active = true;

    const renderPages = async () => {
      if (!pdfDoc || !pageNumbers.length) {
        return;
      }

      if (mode === "document" && zoom === null) {
        return;
      }

      if (mode !== "document") {
        Object.values(textLayerRefs.current).forEach((textLayer) => textLayer?.remove());
        textLayerRefs.current = {};
      }

      setRendering(true);

      for (const pageNumber of pageNumbers) {
        if (!active) {
          break;
        }

        const canvas = canvasRefs.current[pageNumber];
        if (!canvas) {
          continue;
        }

        const pageContainer = pageRefs.current[pageNumber];
        const existingTextLayer = textLayerRefs.current[pageNumber];
        if (existingTextLayer) {
          existingTextLayer.remove();
          textLayerRefs.current[pageNumber] = null;
        }

        const page = await pdfDoc.getPage(pageNumber);
        if (!active) {
          break;
        }

        const viewportAtOne = page.getViewport({ scale: 1 });
        const resolvedScale = mode === "thumbnail"
          ? THUMBNAIL_TARGET_WIDTH / viewportAtOne.width
          : zoom ?? 1;
        const viewport = page.getViewport({ scale: resolvedScale });

        const context = canvas.getContext("2d");
        if (!context) {
          continue;
        }

        canvas.width = Math.ceil(viewport.width);
        canvas.height = Math.ceil(viewport.height);

        const renderTask = page.render({ canvasContext: context, viewport });
        renderTaskRef.current = renderTask;
        await renderTask.promise;
        renderTaskRef.current = null;
        if (!active) {
          break;
        }

        if (mode === "document" && pageContainer) {
          const textContent = await page.getTextContent();
          if (!active) {
            break;
          }

          const textLayerDiv = document.createElement("div");
          textLayerDiv.className = "pdf-renderer__text-layer textLayer";
          pageContainer.appendChild(textLayerDiv);

          const textLayer = new TextLayer({
            textContentSource: textContent,
            container: textLayerDiv,
            viewport,
          });

          await textLayer.render();
          if (!active) {
            textLayer.cancel();
            textLayerDiv.remove();
            break;
          }

          textLayerRefs.current[pageNumber] = textLayerDiv;
        }
      }

      if (active) {
        setRendering(false);
      }
    };

    void renderPages().catch((renderError: unknown) => {
      if (!active) {
        return;
      }

      setRendering(false);
      setError(renderError instanceof Error ? renderError.message : "Failed to render PDF.");
    });

    return () => {
      active = false;
      if (renderTaskRef.current) {
        renderTaskRef.current.cancel();
        renderTaskRef.current = null;
      }
    };
  }, [mode, pageNumbers, pdfDoc, zoom]);

  useEffect(() => {
    if (mode !== "document") {
      return;
    }

    const container = scrollRef.current;
    if (!container || !pageNumbers.length) {
      return;
    }

    const onScroll = () => {
      const scrollTop = container.scrollTop;
      let closestPage = 1;
      let smallestDistance = Number.POSITIVE_INFINITY;

      for (const pageNumber of pageNumbers) {
        const pageElement = pageRefs.current[pageNumber];
        if (!pageElement) {
          continue;
        }

        const distance = Math.abs(pageElement.offsetTop - scrollTop);
        if (distance < smallestDistance) {
          smallestDistance = distance;
          closestPage = pageNumber;
        }
      }

      setCurrentPage(closestPage);
    };

    onScroll();
    container.addEventListener("scroll", onScroll);

    return () => {
      container.removeEventListener("scroll", onScroll);
    };
  }, [mode, pageNumbers]);

  if (error) {
    return <div className="pdf-renderer__error">{error}</div>;
  }

  if (loading) {
    return <div className="pdf-renderer__loading">Loading PDF…</div>;
  }

  if (!pdfDoc) {
    return <div className="pdf-renderer__error">Failed to load PDF.</div>;
  }

  return (
    <div className={`pdf-renderer pdf-renderer--${mode}`}>
      {mode === "document" ? (
        <div className="pdf-renderer__toolbar" aria-label="PDF controls">
          <div className="pdf-renderer__toolbar-group">
            <button
              type="button"
              className="pdf-renderer__toolbar-btn"
              onClick={() => setZoom((current) => clampZoom(current - ZOOM_STEP))}
              disabled={(zoom ?? 1) <= MIN_ZOOM}
              aria-label="Zoom out"
            >
              <Icon name="zoom-out" size={16} />
            </button>
            <span className="pdf-renderer__zoom-indicator">{Math.round((zoom ?? 1) * 100)}%</span>
            <button
              type="button"
              className="pdf-renderer__toolbar-btn"
              onClick={() => setZoom((current) => clampZoom(current + ZOOM_STEP))}
              disabled={(zoom ?? 1) >= MAX_ZOOM}
              aria-label="Zoom in"
            >
              <Icon name="zoom-in" size={16} />
            </button>
          </div>

          <div className="pdf-renderer__toolbar-meta">
            <span className="pdf-renderer__page-indicator">Page {currentPage} of {pdfDoc.numPages}</span>
          </div>
        </div>
      ) : null}

      <div
        className={mode === "document" ? "pdf-renderer__pages" : "pdf-renderer__thumbnail"}
        ref={mode === "document" ? scrollRef : null}
      >
        {pageNumbers.map((pageNumber) => (
          <div
            key={pageNumber}
            className="pdf-renderer__page"
            ref={(element) => {
              pageRefs.current[pageNumber] = element;
            }}
          >
            <canvas
              className="pdf-renderer__canvas"
              ref={(element) => {
                canvasRefs.current[pageNumber] = element;
              }}
              aria-label={`PDF page ${pageNumber}`}
            />
          </div>
        ))}

        {rendering ? <div className="pdf-renderer__status">Rendering pages…</div> : null}
      </div>
    </div>
  );
}

export type { PdfRendererProps };
