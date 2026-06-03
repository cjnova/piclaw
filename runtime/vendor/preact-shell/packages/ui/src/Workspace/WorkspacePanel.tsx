import { useEffect, useMemo, useRef, useState } from "preact/hooks";
import { ContentModal } from "../ContentModal";
import { Icon } from "../Icon";
import { Toast } from "../Toast";
import { FilePreview } from "./FilePreview";
import { FileTree } from "./FileTree";
import { FolderPreview } from "./FolderPreview";
import type { TreeNode, WorkspacePanelProps } from "./types";
import { useWorkspaceData } from "./useWorkspaceData";
import { DEFAULT_NEW_FILE_NAME } from "./constants";

const STORAGE_KEY = "preact-shell-workspace-split";
const DEFAULT_SPLIT = 240;
const MIN_TOP = 120;
const MIN_BOTTOM = 140;

const NOOP_SELECT = (_node: TreeNode) => {};
const ROOT_NODE: TreeNode = { name: "workspace", path: ".", type: "dir" };

interface DispatchCreateFileRequestOptions {
  selfContained: boolean;
  fileName: string;
  selectedNode?: TreeNode | null;
  internalOnCreateFile: (fileName?: string) => void;
  onCreateFile?: (node: TreeNode, fileName: string) => void;
  onAction?: (actionId: string, node: TreeNode) => void;
}

export function dispatchCreateFileRequest({
  selfContained,
  fileName,
  selectedNode,
  internalOnCreateFile,
  onCreateFile,
  onAction,
}: DispatchCreateFileRequestOptions) {
  const targetNode = selectedNode ?? ROOT_NODE;

  if (selfContained) {
    internalOnCreateFile(fileName);
    return;
  }

  if (onCreateFile) {
    onCreateFile(targetNode, fileName);
    return;
  }

  onAction?.("create-file", targetNode);
}

export function WorkspacePanel({
  baseUrl,
  nodes,
  selectedNode = null,
  previewContent,
  previewType,
  previewLoading,
  previewError,
  previewTruncated,
  previewTooLarge,
  rawUrl,
  downloadUrl,
  showHidden = true,
  onSelect,
  onExpand,
  onMove,
  onAction,
  onCreateFile,
  onRefresh,
  onToggleHidden,
  actions,
  renderCode,
  folderChildren,
  folderSunburstRoot,
  folderTotalSize,
  folderLoading,
  folderError,
  folderActions,
  folderDownloadUrl,
  onOpenInMain,
}: WorkspacePanelProps) {
  const rootRef = useRef<HTMLDivElement | null>(null);
  const [split, setSplit] = useState<number>(() => {
    const saved = Number(localStorage.getItem(STORAGE_KEY));
    if (!Number.isFinite(saved) || saved <= 0) {
      return DEFAULT_SPLIT;
    }

    return saved;
  });
  const [createFileModalOpen, setCreateFileModalOpen] = useState(false);
  const [pendingFileName, setPendingFileName] = useState(DEFAULT_NEW_FILE_NAME);

  const openCreateFileModal = () => {
    setPendingFileName(DEFAULT_NEW_FILE_NAME);
    setCreateFileModalOpen(true);
  };

  const closeCreateFileModal = () => {
    setCreateFileModalOpen(false);
    setPendingFileName(DEFAULT_NEW_FILE_NAME);
  };

  const submitCreateFile = () => {
    dispatchCreateFileRequest({
      selfContained,
      fileName: pendingFileName,
      selectedNode: resolvedSelectedNode,
      internalOnCreateFile: internalData.onCreateFile,
      onCreateFile,
      onAction: resolvedOnAction,
    });

    closeCreateFileModal();
  };

  const internalData = useWorkspaceData({
    baseUrl,
    externalOnAction: onAction,
    onOpenInMain,
  });

  const selfContained = internalData.enabled;

  const resolvedNodes = useMemo(() => (selfContained ? internalData.nodes : (nodes ?? [])), [selfContained, internalData.nodes, nodes]);
  const resolvedSelectedNode = selfContained ? internalData.selectedNode : selectedNode;
  const resolvedPreviewContent = selfContained ? internalData.previewContent : previewContent;
  const resolvedPreviewType = selfContained ? internalData.previewType : previewType;
  const resolvedPreviewLoading = selfContained ? internalData.previewLoading : previewLoading;
  const resolvedPreviewError = selfContained ? internalData.previewError : previewError;
  const resolvedPreviewTruncated = selfContained ? internalData.previewTruncated : previewTruncated;
  const resolvedPreviewTooLarge = selfContained ? internalData.previewTooLarge : previewTooLarge;
  const resolvedRawUrl = selfContained ? internalData.rawUrl : rawUrl;
  const resolvedDownloadUrl = selfContained ? internalData.downloadUrl : downloadUrl;
  const resolvedShowHidden = selfContained ? internalData.showHidden : showHidden;
  const resolvedExpandedPaths = selfContained ? internalData.expandedPaths : undefined;
  const resolvedOnSelect = selfContained ? internalData.onSelect : (onSelect ?? NOOP_SELECT);
  const resolvedOnExpand = selfContained ? internalData.onExpand : (onExpand ?? NOOP_SELECT);
  const resolvedOnToggleExpand = selfContained ? internalData.onToggleExpand : undefined;
  const resolvedOnMove = selfContained ? internalData.onMove : onMove;
  const resolvedOnAction = selfContained ? internalData.onAction : onAction;
  const resolvedOnRefresh = selfContained ? (() => void internalData.onRefresh()) : onRefresh;
  const resolvedOnToggleHidden = selfContained ? internalData.onToggleHidden : onToggleHidden;
  const resolvedFolderChildren = selfContained ? internalData.folderChildren : folderChildren;
  const resolvedFolderSunburstRoot = selfContained ? internalData.folderSunburstRoot : folderSunburstRoot;
  const resolvedFolderTotalSize = selfContained ? internalData.folderTotalSize : folderTotalSize;
  const resolvedFolderLoading = selfContained ? internalData.folderLoading : folderLoading;
  const resolvedFolderError = selfContained ? internalData.folderError : folderError;
  const resolvedFolderDownloadUrl = selfContained ? internalData.folderDownloadUrl : folderDownloadUrl;
  const resolvedOnCreateFile = openCreateFileModal;
  const resolvedOnAttach = selfContained
    ? internalData.onAttach
    : (() => {
      if (resolvedSelectedNode?.type === "file") {
        resolvedOnAction?.("attach", resolvedSelectedNode);
      }
    });

  const resolvedFolderActions = useMemo(() => {
    if (!resolvedSelectedNode || resolvedSelectedNode.type !== "dir") {
      return folderActions;
    }

    if (folderActions) {
      return folderActions;
    }

    return (
      <>
        <button
          type="button"
          className="workspace__action-icon workspace__action-icon--edit"
          aria-label="New file"
          title="New file"
          onClick={openCreateFileModal}
        >
          <Icon name="file-plus" size={16} />
        </button>

        <a
          className="workspace__action-icon workspace__action-icon--download"
          href={resolvedFolderDownloadUrl}
          aria-label="Download folder as zip"
          title={resolvedFolderDownloadUrl ? "Download folder as zip" : "Folder archive download depends on backend /workspace/archive support"}
          aria-disabled={!resolvedFolderDownloadUrl}
          onClick={!resolvedFolderDownloadUrl ? (event) => event.preventDefault() : undefined}
        >
          <Icon name="cloud-download" size={16} />
        </a>
      </>
    );
  }, [folderActions, resolvedFolderDownloadUrl, resolvedSelectedNode]);

  useEffect(() => {
    if (rootRef.current) {
      rootRef.current.style.setProperty("--workspace-split", `${split}px`);
    }
  }, [split]);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, String(split));
  }, [split]);

  const onHandleMouseDown = (event: MouseEvent) => {
    event.preventDefault();

    const root = rootRef.current;
    if (!root) {
      return;
    }

    const bounds = root.getBoundingClientRect();
    const startY = event.clientY;
    const startSplit = split;

    const onMovePointer = (moveEvent: MouseEvent) => {
      const next = Math.max(MIN_TOP, Math.min(bounds.height - MIN_BOTTOM, startSplit + (moveEvent.clientY - startY)));
      setSplit(next);
    };

    const onUp = () => {
      document.body.style.userSelect = "";
      document.body.style.cursor = "";
      document.removeEventListener("mousemove", onMovePointer);
      document.removeEventListener("mouseup", onUp);
    };

    document.body.style.userSelect = "none";
    document.body.style.cursor = "row-resize";
    document.addEventListener("mousemove", onMovePointer);
    document.addEventListener("mouseup", onUp);
  };

  return (
    <>
      <div ref={rootRef} className="workspace-panel">
        <div className="workspace-panel__tree">
          <FileTree
            nodes={resolvedNodes}
            selectedPath={resolvedSelectedNode?.path}
            showHidden={resolvedShowHidden}
            expandedPaths={resolvedExpandedPaths}
            onSelect={resolvedOnSelect}
            onExpand={resolvedOnExpand}
            onToggleExpand={resolvedOnToggleExpand}
            onMove={resolvedOnMove}
            onRefresh={resolvedOnRefresh}
            onToggleHidden={resolvedOnToggleHidden}
            onCreateFile={resolvedOnCreateFile}
            onAttach={resolvedOnAttach}
            canAttach={resolvedSelectedNode?.type === "file"}
          />
        </div>

        <div className="workspace-panel__split" onMouseDown={onHandleMouseDown} />

        <div className="workspace-panel__preview">
          {resolvedSelectedNode?.type === "dir" ? (
            <FolderPreview
              node={resolvedSelectedNode}
              folderChildren={resolvedFolderChildren ?? null}
              sunburstRoot={resolvedFolderSunburstRoot ?? null}
              totalSize={resolvedFolderTotalSize ?? null}
              loading={resolvedFolderLoading}
              error={resolvedFolderError}
              actions={resolvedFolderActions}
            />
          ) : (
            <FilePreview
              node={resolvedSelectedNode}
              content={resolvedPreviewContent}
              contentType={resolvedPreviewType}
              loading={resolvedPreviewLoading}
              error={resolvedPreviewError}
              truncated={resolvedPreviewTruncated}
              tooLarge={resolvedPreviewTooLarge}
              rawUrl={resolvedRawUrl}
              downloadUrl={resolvedDownloadUrl}
              actions={actions}
              onAction={resolvedOnAction}
              renderCode={renderCode}
            />
          )}
        </div>
      </div>

      {createFileModalOpen ? (
        <ContentModal title="Create file" onClose={closeCreateFileModal}>
          <form
            className="workspace-create-file"
            onSubmit={(event) => {
              event.preventDefault();
              submitCreateFile();
            }}
          >
            <label className="workspace-create-file__label" htmlFor="workspace-create-file-name">
              File name
            </label>
            <input
              id="workspace-create-file-name"
              name="file-name"
              className="workspace-create-file__input"
              value={pendingFileName}
              onInput={(event) => setPendingFileName(event.currentTarget.value)}
              placeholder={DEFAULT_NEW_FILE_NAME}
              autoFocus
            />
            <div className="workspace-create-file__actions">
              <button type="button" className="workspace-create-file__btn" onClick={closeCreateFileModal}>Cancel</button>
              <button type="submit" className="workspace-create-file__btn workspace-create-file__btn--primary">Create file</button>
            </div>
          </form>
        </ContentModal>
      ) : null}

      {selfContained ? (
        <Toast
          visible={Boolean(internalData.toastMessage)}
          message={internalData.toastMessage ?? ""}
          type="error"
          onDismiss={internalData.dismissToast}
        />
      ) : null}
    </>
  );
}
