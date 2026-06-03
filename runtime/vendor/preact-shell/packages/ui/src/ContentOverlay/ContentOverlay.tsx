import type { ComponentChildren, JSX } from "preact";
import { lazy, Suspense } from "preact/compat";
import { useCallback, useEffect, useRef, useState } from "preact/hooks";
import { Icon } from "../Icon";

// CodeMirrorEditor is heavy — lazy-load only when editing with a known language.
const LazyCodeMirrorEditor = lazy(() =>
  import("./CodeMirrorEditor").then((m) => ({ default: m.CodeMirrorEditor }))
);

const MIN_SPATIAL_ZOOM = 0.2;
const MAX_SPATIAL_ZOOM = 4;
const SPATIAL_ZOOM_STEP = 0.1;

const MIN_DOCUMENT_FONT_STEP = 0;
const MAX_DOCUMENT_FONT_STEP = 4;
const DEFAULT_DOCUMENT_FONT_STEP = 2;

interface ContentOverlayProps {
  /** Callback when overlay is closed */
  onClose: () => void;
  /** Optional title shown top-left */
  title?: string;
  /** Main content rendered full-size */
  children: ComponentChildren;
  /** Content interaction mode */
  mode?: "spatial" | "document";
  /** Raw source text for document mode edit toggle */
  source?: string;
  /** Called when user saves edited content (document mode) */
  onSave?: (content: string) => void;
  /** Start in edit mode immediately */
  defaultEditing?: boolean;
  /** Show built-in document mode controls (font sizing/edit). */
  showDocumentControls?: boolean;
  /**
   * Language identifier for the CodeMirror syntax-highlighted editor
   * (e.g. "typescript", "python", "json", "yaml").
   * When provided the edit textarea is replaced by a CodeMirror editor that
   * lazy-loads on first use. If the language is unsupported or the load fails
   * the component silently falls back to the plain textarea.
   */
  editorLanguage?: string;
}

/**
 * Full-pane content overlay — takes over the main area to show content at full size.
 * Used by fenced blocks when user clicks the maximize (⛶) action.
 * × button or Escape closes and returns to previous view.
 */
export function ContentOverlay({ onClose, title, children, mode = "spatial", source, onSave, defaultEditing = false, showDocumentControls = true, editorLanguage }: ContentOverlayProps) {
  const overlayRef = useRef<HTMLDivElement>(null);
  const spatialViewRef = useRef<HTMLDivElement>(null);
  const [editing, setEditing] = useState(defaultEditing);
  const [editValue, setEditValue] = useState(source || "");
  // Track whether CodeMirror failed/unsupported so we fall back to textarea.
  // Reset on new content/language so a transient load failure doesn't stick.
  const [useFallbackEditor, setUseFallbackEditor] = useState(false);

  const [zoom, setZoom] = useState(1);
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const lastPointerPosition = useRef({ x: 0, y: 0 });

  const [documentFontStep, setDocumentFontStep] = useState(DEFAULT_DOCUMENT_FONT_STEP);
  const canSaveEdits = source !== undefined && typeof onSave === "function";

  const clampZoom = useCallback((value: number) => {
    return Math.max(MIN_SPATIAL_ZOOM, Math.min(MAX_SPATIAL_ZOOM, value));
  }, []);

  const handlePointerDown = useCallback((e: JSX.TargetedPointerEvent<HTMLDivElement>) => {
    if (mode !== "spatial") {
      return;
    }

    setIsDragging(true);
    lastPointerPosition.current = { x: e.clientX, y: e.clientY };
    e.currentTarget.setPointerCapture(e.pointerId);
  }, [mode]);

  const handlePointerMove = useCallback((e: JSX.TargetedPointerEvent<HTMLDivElement>) => {
    if (mode !== "spatial" || !isDragging) {
      return;
    }

    const dx = e.clientX - lastPointerPosition.current.x;
    const dy = e.clientY - lastPointerPosition.current.y;

    lastPointerPosition.current = { x: e.clientX, y: e.clientY };
    setOffset((previous) => ({ x: previous.x + dx, y: previous.y + dy }));
  }, [isDragging, mode]);

  const stopDragging = useCallback((e?: JSX.TargetedPointerEvent<HTMLDivElement>) => {
    if (e?.currentTarget.hasPointerCapture(e.pointerId)) {
      e.currentTarget.releasePointerCapture(e.pointerId);
    }

    setIsDragging(false);
  }, []);

  const handleWheel = useCallback((event: WheelEvent) => {
    event.preventDefault();
    const delta = event.deltaY > 0 ? -SPATIAL_ZOOM_STEP : SPATIAL_ZOOM_STEP;
    setZoom((current) => clampZoom(current + delta));
  }, [clampZoom]);

  const resetSpatialView = useCallback(() => {
    setZoom(1);
    setOffset({ x: 0, y: 0 });
    setIsDragging(false);
  }, []);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        e.preventDefault();
        onClose();
      }
    };

    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [onClose]);

  useEffect(() => {
    overlayRef.current?.focus();
  }, []);

  useEffect(() => {
    if (mode === "spatial") {
      resetSpatialView();
      return;
    }

    setDocumentFontStep(DEFAULT_DOCUMENT_FONT_STEP);
  }, [mode, resetSpatialView]);

  useEffect(() => {
    if (mode !== "spatial") {
      return;
    }

    const spatialView = spatialViewRef.current;
    if (!spatialView) {
      return;
    }

    // Non-passive is required here so wheel zoom can cancel page/ancestor scrolling.
    spatialView.addEventListener("wheel", handleWheel, { passive: false });
    return () => {
      spatialView.removeEventListener("wheel", handleWheel);
    };
  }, [handleWheel, mode]);

  useEffect(() => {
    if (mode !== "document") {
      return;
    }

    // Keep edit intent in sync when opening a new overlay payload, but do not
    // clobber in-progress edits on parent re-renders.
    if (!editing) {
      setEditing(defaultEditing && canSaveEdits);
      setEditValue(source || "");
      setUseFallbackEditor(false);
    }
  }, [canSaveEdits, defaultEditing, editing, editorLanguage, mode, source]);

  const bodyClassName = mode === "document"
    ? `content-overlay__body content-overlay__body--font-${documentFontStep}`
    : "content-overlay__body";

  return (
    <div
      className={`content-overlay content-overlay--${mode}`}
      ref={overlayRef}
      tabIndex={-1}
      role="dialog"
      aria-label={title || "Content view"}
    >
      <div className="content-overlay__header">
        {title && <span className="content-overlay__title">{title}</span>}

        <div className="content-overlay__actions">
          {mode === "spatial" ? (
            <div className="content-overlay__controls" aria-label="Spatial controls">
              <button
                type="button"
                onClick={() => setZoom((current) => clampZoom(current + SPATIAL_ZOOM_STEP * 2))}
                aria-label="Zoom in"
              >
                <Icon name="zoom-in" size={16} />
              </button>
              <button
                type="button"
                onClick={() => setZoom((current) => clampZoom(current - SPATIAL_ZOOM_STEP * 2))}
                aria-label="Zoom out"
              >
                <Icon name="zoom-out" size={16} />
              </button>
              <button type="button" onClick={resetSpatialView} aria-label="Reset view">
                <Icon name="undo" size={16} />
              </button>
            </div>
          ) : showDocumentControls ? (
            <div className="content-overlay__controls" aria-label="Document controls">
              <button
                type="button"
                onClick={() => setDocumentFontStep((current) => Math.min(MAX_DOCUMENT_FONT_STEP, current + 1))}
                aria-label="Increase font size"
              >
                <Icon name="zoom-in" size={16} />
              </button>
              <button
                type="button"
                onClick={() => setDocumentFontStep((current) => Math.max(MIN_DOCUMENT_FONT_STEP, current - 1))}
                aria-label="Decrease font size"
              >
                <Icon name="zoom-out" size={16} />
              </button>
              {canSaveEdits && (
                <button
                  type="button"
                  onClick={() => {
                    if (editing && onSave) {
                      void onSave(editValue);
                    }

                    if (!editing) {
                      setEditValue(source ?? "");
                      setUseFallbackEditor(false);
                    }

                    setEditing(!editing);
                  }}
                  aria-label={editing ? "Save" : "Edit content"}
                >
                  <Icon name={editing ? "check" : "edit"} size={16} />
                </button>
              )}
            </div>
          ) : null}

          <button
            type="button"
            className="content-overlay__close"
            onClick={onClose}
            aria-label="Close"
          >
            <Icon name="close" size={18} />
          </button>
        </div>
      </div>

      <div className={bodyClassName}>
        {mode === "spatial" ? (
          <div
            className={`content-overlay__spatial-view ${isDragging ? "is-dragging" : ""}`}
            ref={spatialViewRef}
            onPointerDown={handlePointerDown}
            onPointerMove={handlePointerMove}
            onPointerUp={stopDragging}
            onPointerCancel={stopDragging}
          >
            <div
              className="content-overlay__spatial-content"
              style={{ transform: `translate(${offset.x}px, ${offset.y}px) scale(${zoom})` }}
            >
              {children}
            </div>
          </div>
        ) : (
          <div className="content-overlay__document-content">
            {editing ? (
              !useFallbackEditor ? (
                <Suspense
                  fallback={
                    <textarea
                      className="content-overlay__editor"
                      id="content-overlay-editor"
                      name="content-overlay-editor"
                      value={editValue}
                      onInput={(e) => setEditValue((e.target as HTMLTextAreaElement).value)}
                    />
                  }
                >
                  <LazyCodeMirrorEditor
                    value={editValue}
                    onChange={setEditValue}
                    language={editorLanguage}
                    onFallback={() => setUseFallbackEditor(true)}
                  />
                </Suspense>
              ) : (
                <textarea
                  className="content-overlay__editor"
                  id="content-overlay-editor"
                  name="content-overlay-editor"
                  value={editValue}
                  onInput={(e) => setEditValue((e.target as HTMLTextAreaElement).value)}
                />
              )
            ) : children}
          </div>
        )}
      </div>
    </div>
  );
}
