import { lazy, Suspense } from "preact/compat";
import { useCallback } from "preact/hooks";
import { useCopyVerify } from "../hooks";
import { Icon } from "../Icon";
import { renderMarkdown } from "../Renderers/markdown";
import { copyToClipboard } from "../utils";
import type { FileAction, FilePreviewProps, TreeNode } from "./types";
import { getFileExtension, isEditableFileType, isOpenPreviewFileType } from "./file-policy";

const LazyPdfRenderer = lazy(() => import("../Renderers/PdfRenderer").then((module) => ({ default: module.PdfRenderer })));

function formatSize(size?: number | null): string {
  if (size == null || Number.isNaN(size)) {
    return "—";
  }

  if (size < 1024) {
    return `${size} B`;
  }

  if (size < 1024 * 1024) {
    return `${(size / 1024).toFixed(1)} KB`;
  }

  return `${(size / (1024 * 1024)).toFixed(1)} MB`;
}

function formatDate(mtime?: string | null): string {
  if (!mtime) {
    return "—";
  }

  const date = new Date(mtime);
  if (Number.isNaN(date.getTime())) {
    return "—";
  }

  return date.toLocaleString();
}

function createDefaultActions(node: TreeNode, contentType: FilePreviewProps["contentType"]): FileAction[] {
  return [
    {
      id: "copy-path",
      label: "Copy Path",
      icon: "copy",
      hoverClass: "workspace__action-icon--copy",
      handler: (target) => {
        void copyToClipboard(target.path);
      },
    },
    {
      id: "attach",
      label: "Reference in chat",
      icon: "attach",
      hoverClass: "workspace__action-icon--attach",
      handler: () => {},
    },
    {
      id: "download",
      label: "Download",
      icon: "cloud-download",
      hoverClass: "workspace__action-icon--download",
      handler: () => {
        // rendered as anchor link in the UI
      },
    },
    {
      id: "open",
      label: "Open Preview",
      icon: "open-preview",
      hoverClass: "workspace__action-icon--open",
      visible: (target) => isOpenPreviewFileType(target.path),
      handler: () => {},
    },
    {
      id: "edit",
      label: "Edit",
      icon: "edit",
      hoverClass: "workspace__action-icon--edit",
      visible: (target) => contentType !== "binary" && isEditableFileType(target.path),
      handler: () => {},
    },
    {
      id: "delete",
      label: "Delete",
      icon: "trash",
      hoverClass: "workspace__action-icon--delete",
      handler: () => {},
    },
  ];
}

export function FilePreview({
  node,
  content,
  contentType = "code",
  loading = false,
  error,
  truncated = false,
  tooLarge = false,
  rawUrl,
  downloadUrl,
  actions,
  onAction,
  renderCode,
}: FilePreviewProps) {
  const { verifiedId, markVerified } = useCopyVerify();

  const handleActionClick = useCallback((action: FileAction, target: TreeNode) => {
    action.handler(target);
    onAction?.(action.id, target);

    if (action.id === "copy-path") {
      markVerified(action.id);
    }
  }, [markVerified, onAction]);

  const extension = node ? getFileExtension(node.name) : "";
  const resolvedActions = node ? (actions ?? createDefaultActions(node, contentType)).filter((action) => (action.visible ? action.visible(node) : true)) : [];

  const renderContent = () => {
    if (!node) {
      return <div className="workspace-preview__message">Select a file to preview.</div>;
    }

    if (loading) {
      return <div className="workspace-preview__message">Loading preview…</div>;
    }

    if (error) {
      return <div className="workspace-preview__message workspace-preview__message--error">{error}</div>;
    }

    if (tooLarge) {
      return <div className="workspace-preview__message">File is too large to preview.</div>;
    }

    if (contentType === "binary") {
      return <div className="workspace-preview__message">Binary file — cannot preview.</div>;
    }

    if (contentType === "image") {
      return rawUrl ? <img className="workspace-preview__image" src={rawUrl} alt={node.name} /> : <div className="workspace-preview__message">Image source unavailable.</div>;
    }

    if (contentType === "markdown" && typeof content === "string") {
      const html = renderMarkdown(content);
      return <div className="workspace-preview__rendered" dangerouslySetInnerHTML={{ __html: html }} />;
    }

    if (contentType === "pdf") {
      return rawUrl ? (
        <Suspense fallback={<div className="workspace-preview__message">Loading PDF preview…</div>}>
          <LazyPdfRenderer src={rawUrl} mode="thumbnail" />
        </Suspense>
      ) : <div className="workspace-preview__message">PDF source unavailable.</div>;
    }

    if (contentType === "code" && typeof content === "string") {
      if (renderCode) {
        return <pre className="workspace-preview__pre" dangerouslySetInnerHTML={{ __html: renderCode(content, extension) }} />;
      }
      return <pre className="workspace-preview__pre">{content}</pre>;
    }

    return <div className="workspace-preview__message">No preview available.</div>;
  };

  return (
    <section className="workspace-preview">
      <header className="workspace-preview__header">
        <h3 className="workspace-preview__section-title">Preview</h3>
        <div className="workspace-preview__filename">{node?.name ?? "No file selected"}</div>
        <div className="workspace-preview__meta">{node?.path ?? ""}</div>
        <div className="workspace-preview__meta">Size: {formatSize(node?.size)}</div>
        <div className="workspace-preview__meta">Modified: {formatDate(node?.mtime)}</div>

        <div className="workspace-preview__actions" aria-label="File actions">
          {node && resolvedActions.map((action) => {
            const isDisabled = action.disabled ? action.disabled(node) : false;
            const className = `workspace__action-icon ${action.hoverClass}`;

            if (action.id === "download") {
              return (
                <a
                  key={action.id}
                  className={className}
                  href={downloadUrl ?? "#"}
                  download={node.name}
                  aria-label={action.label}
                  title={action.label}
                  onClick={(event) => {
                    if (!downloadUrl) {
                      event.preventDefault();
                      return;
                    }

                    action.handler(node);
                    onAction?.(action.id, node);
                  }}
                >
                  <Icon name={action.icon} size={16} />
                </a>
              );
            }

            return (
              <button
                key={action.id}
                type="button"
                className={className}
                aria-label={action.id === verifiedId ? "Copied" : action.label}
                title={action.id === verifiedId ? "Copied" : action.label}
                disabled={isDisabled}
                onClick={() => handleActionClick(action, node)}
              >
                <Icon name={action.id === verifiedId ? "check" : action.icon} size={16} />
              </button>
            );
          })}
        </div>
      </header>

      {truncated && !tooLarge ? <div className="workspace-preview__notice">Preview truncated for large file.</div> : null}

      <div className="workspace-preview__content">{renderContent()}</div>
    </section>
  );
}
