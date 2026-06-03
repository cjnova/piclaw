import { useCallback, useEffect, useMemo, useRef, useState } from "preact/hooks";
import type { FolderChildInfo, SunburstNode } from "./FolderPreview";
import { readWorkspaceState, persistWorkspaceState } from "./workspace-state";
import { withWorkspaceQuery, workspaceFetch, workspaceFetchJson } from "./workspace-fetch";
import type { TreeNode, WorkspaceConfig } from "./types";
import { getPreviewType, isEditableFileType } from "./file-policy";
import { emitWorkspaceAttach } from "./workspace-references";
import { DEFAULT_NEW_FILE_NAME } from "./constants";

interface TreeResponse {
  children: TreeNode[];
  root?: SunburstNode;
}

interface FileResponse {
  content: string;
  size: number;
  mtime: string;
}

interface MoveResponse {
  path?: string;
}

interface MoveErrorResponse {
  error?: string;
  conflict?: boolean;
}

interface CreateFileResponse {
  ok?: boolean;
  path?: string;
}

interface WorkspaceDataOptions extends WorkspaceConfig {
  externalOnAction?: (actionId: string, node: TreeNode) => void;
  onOpenInMain?: (path: string, content: string, type: string, rawUrl: string, startEditing?: boolean) => void;
}

const PREVIEW_TRUNCATE_LIMIT = 200_000;
const PREVIEW_SIZE_LIMIT = 2_000_000;

function mergeChildren(nodes: TreeNode[], dirPath: string, children: TreeNode[]): TreeNode[] {
  return nodes.map((node) => {
    if (node.path === dirPath && node.type === "dir") {
      return { ...node, children };
    }

    if (node.children?.length) {
      return { ...node, children: mergeChildren(node.children, dirPath, children) };
    }

    return node;
  });
}

function removeNodeByPath(nodes: TreeNode[], targetPath: string): TreeNode[] {
  return nodes
    .filter((node) => node.path !== targetPath)
    .map((node) => ({
      ...node,
      children: node.children ? removeNodeByPath(node.children, targetPath) : undefined,
    }));
}

function findNode(nodes: TreeNode[], targetPath: string): TreeNode | null {
  for (const node of nodes) {
    if (node.path === targetPath) {
      return node;
    }

    if (node.children?.length) {
      const found = findNode(node.children, targetPath);
      if (found) {
        return found;
      }
    }
  }

  return null;
}

function addNodeToDir(nodes: TreeNode[], dirPath: string, newNode: TreeNode): TreeNode[] {
  return nodes.map((node) => {
    if (node.path === dirPath && node.type === "dir") {
      return { ...node, children: [...(node.children ?? []), newNode] };
    }

    if (node.children?.length) {
      return { ...node, children: addNodeToDir(node.children, dirPath, newNode) };
    }

    return node;
  });
}


function toSunburstNode(node: TreeNode): SunburstNode {
  return {
    name: node.name,
    path: node.path,
    type: node.type,
    size: node.size ?? null,
    children: node.children?.map(toSunburstNode),
  };
}

function toMovedPath(sourceNode: TreeNode, targetDirPath: string, movedPath?: string): string {
  if (movedPath) {
    return movedPath;
  }

  if (targetDirPath === ".") {
    return sourceNode.name;
  }

  return `${targetDirPath}/${sourceNode.name}`;
}

function getParentDirPath(nodePath: string): string {
  const trimmed = nodePath.trim();
  const separatorIndex = trimmed.lastIndexOf("/");

  if (separatorIndex < 0) {
    return ".";
  }

  return trimmed.slice(0, separatorIndex) || ".";
}

function getCreateFileTargetDir(node: TreeNode): string {
  if (node.type === "dir") {
    return node.path || ".";
  }

  return getParentDirPath(node.path);
}

function sanitizeFileName(input: string): string {
  return input.trim().replaceAll("\\", "_").replaceAll("/", "_");
}

export function useWorkspaceData({
  baseUrl,
  externalOnAction,
  onOpenInMain,
}: WorkspaceDataOptions) {
  const enabled = Boolean(baseUrl);
  const treeUrl = baseUrl ? `${baseUrl.replace(/\/+$/, "")}/tree` : "";
  const fileUrl = baseUrl ? `${baseUrl.replace(/\/+$/, "")}/file` : "";
  const rawUrl = baseUrl ? `${baseUrl.replace(/\/+$/, "")}/raw` : "";
  const moveEndpoint = baseUrl ? `${baseUrl.replace(/\/+$/, "")}/move` : "";
  const archiveEndpoint = baseUrl ? `${baseUrl.replace(/\/+$/, "")}/archive` : "";

  const [nodes, setNodes] = useState<TreeNode[]>([]);
  const [selectedNode, setSelectedNode] = useState<TreeNode | null>(null);
  const [previewContent, setPreviewContent] = useState<string>("");
  const [previewLoading, setPreviewLoading] = useState(false);
  const [previewError, setPreviewError] = useState<string | undefined>(undefined);
  const [previewTruncated, setPreviewTruncated] = useState(false);
  const [previewTooLarge, setPreviewTooLarge] = useState(false);
  const [showHidden, setShowHidden] = useState(false);
  const [folderChildren, setFolderChildren] = useState<FolderChildInfo[] | null>(null);
  const [folderSunburstRoot, setFolderSunburstRoot] = useState<SunburstNode | null>(null);
  const [folderTotalSize, setFolderTotalSize] = useState<number | null>(null);
  const [folderLoading, setFolderLoading] = useState(false);
  const [folderError, setFolderError] = useState<string | undefined>(undefined);
  const initialWorkspaceState = useMemo(() => readWorkspaceState(), []);
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [expandedPaths, setExpandedPaths] = useState<Set<string>>(() => new Set(initialWorkspaceState.expandedPaths ?? []));
  const [restoredSelectedPath, setRestoredSelectedPath] = useState<string | null>(initialWorkspaceState.selectedPath ?? null);
  const restoredExpandedFetchesRef = useRef<Set<string>>(new Set());

  const previewType = useMemo(() => (selectedNode ? getPreviewType(selectedNode.name) : "code"), [selectedNode]);

  const resolvedRawUrl = useMemo(() => {
    if (!selectedNode || selectedNode.type !== "file" || !rawUrl) {
      return undefined;
    }

    return withWorkspaceQuery(rawUrl, { path: selectedNode.path });
  }, [rawUrl, selectedNode]);

  const resolvedDownloadUrl = useMemo(() => {
    if (!selectedNode || selectedNode.type !== "file" || !rawUrl) {
      return undefined;
    }

    return withWorkspaceQuery(rawUrl, { path: selectedNode.path, download: "1" });
  }, [rawUrl, selectedNode]);

  const resolvedFolderDownloadUrl = useMemo(() => {
    if (!selectedNode || selectedNode.type !== "dir" || !archiveEndpoint) {
      return undefined;
    }

    return withWorkspaceQuery(archiveEndpoint, { path: selectedNode.path, download: "1" });
  }, [archiveEndpoint, selectedNode]);

  const loadTree = useCallback(async () => {
    if (!enabled || !treeUrl) {
      return;
    }

    const payload = await workspaceFetchJson<TreeResponse>(treeUrl, {
      query: { path: "", depth: "2" },
      errorMessage: "Failed to load workspace tree",
    });
    restoredExpandedFetchesRef.current = new Set();
    setNodes(payload.children ?? []);
  }, [enabled, treeUrl]);

  useEffect(() => {
    if (!enabled) {
      return;
    }

    void loadTree().catch((error: unknown) => {
      console.error(error);
    });
  }, [enabled, loadTree]);

  useEffect(() => {
    persistWorkspaceState({ expandedPaths: Array.from(expandedPaths) });
  }, [expandedPaths]);

  useEffect(() => {
    persistWorkspaceState({ selectedPath: selectedNode?.path });
  }, [selectedNode?.path]);

  const loadFile = useCallback(async (node: TreeNode) => {
    if (!fileUrl) {
      return;
    }

    setPreviewLoading(true);
    setPreviewError(undefined);
    setPreviewTooLarge(false);
    setPreviewTruncated(false);

    try {
      const type = getPreviewType(node.name);

      if (type === "binary" || type === "pdf") {
        setPreviewContent("");
        return;
      }

      if ((node.size ?? 0) > PREVIEW_SIZE_LIMIT) {
        setPreviewTooLarge(true);
        setPreviewContent("");
        return;
      }

      const payload = await workspaceFetchJson<FileResponse>(fileUrl, {
        query: { path: node.path },
        errorMessage: "Failed to load file preview",
      });

      setSelectedNode((prev) => (prev ? { ...prev, size: payload.size, mtime: payload.mtime } : prev));

      if (payload.size > PREVIEW_SIZE_LIMIT) {
        setPreviewTooLarge(true);
        setPreviewContent("");
        return;
      }

      const isTruncated = payload.content.length > PREVIEW_TRUNCATE_LIMIT;
      setPreviewContent(isTruncated ? payload.content.slice(0, PREVIEW_TRUNCATE_LIMIT) : payload.content);
      setPreviewTruncated(isTruncated);
    } catch (error) {
      setPreviewError(error instanceof Error ? error.message : "Failed to load preview");
      setPreviewContent("");
    } finally {
      setPreviewLoading(false);
    }
  }, [fileUrl]);

  const loadFolderStats = useCallback(async (node: TreeNode) => {
    if (!treeUrl) {
      return;
    }

    setFolderLoading(true);
    setFolderError(undefined);

    try {
      const payload = await workspaceFetchJson<TreeResponse>(treeUrl, {
        query: { path: node.path, depth: "3" },
        errorMessage: "Failed to load folder info",
      });
      const children: FolderChildInfo[] = (payload.children ?? []).map((child) => ({
        name: child.name,
        path: child.path,
        type: child.type,
        size: child.size ?? null,
      }));

      const sorted = [...children].sort((a, b) => (b.size ?? 0) - (a.size ?? 0));
      setFolderChildren(sorted);
      setFolderTotalSize(sorted.reduce((sum, child) => sum + (child.size ?? 0), 0));

      const fallbackRoot: SunburstNode = {
        name: node.name,
        path: node.path,
        type: "dir",
        size: node.size ?? null,
        children: (payload.children ?? []).map(toSunburstNode),
      };

      setFolderSunburstRoot(payload.root ?? fallbackRoot);
    } catch (error) {
      setFolderError(error instanceof Error ? error.message : "Failed to load folder");
      setFolderChildren(null);
      setFolderSunburstRoot(null);
    } finally {
      setFolderLoading(false);
    }
  }, [treeUrl]);

  const handleSelect = useCallback((node: TreeNode) => {
    setSelectedNode(node);

    if (node.type === "file") {
      setFolderChildren(null);
      setFolderSunburstRoot(null);
      setFolderTotalSize(null);
      void loadFile(node);
      return;
    }

    setPreviewContent("");
    setPreviewError(undefined);
    setPreviewTruncated(false);
    setPreviewTooLarge(false);
    void loadFolderStats(node);
  }, [loadFile, loadFolderStats]);

  useEffect(() => {
    if (!enabled || !restoredSelectedPath) {
      return;
    }

    if (selectedNode?.path === restoredSelectedPath) {
      setRestoredSelectedPath(null);
      return;
    }

    const restoredNode = findNode(nodes, restoredSelectedPath);
    if (!restoredNode) {
      return;
    }

    handleSelect(restoredNode);
    setRestoredSelectedPath(null);
  }, [enabled, handleSelect, nodes, restoredSelectedPath, selectedNode?.path]);

  const handleExpand = useCallback(async (node: TreeNode) => {
    if (node.type !== "dir" || !treeUrl) {
      return;
    }

    try {
      const payload = await workspaceFetchJson<TreeResponse>(treeUrl, {
        query: { path: node.path, depth: "1" },
        errorMessage: "Failed to expand directory",
      });
      setNodes((prev) => mergeChildren(prev, node.path, payload.children ?? []));
    } catch (error) {
      console.error(error);
    }
  }, [treeUrl]);

  useEffect(() => {
    if (!enabled || !expandedPaths.size) {
      return;
    }

    expandedPaths.forEach((path) => {
      if (restoredExpandedFetchesRef.current.has(path)) {
        return;
      }

      const node = findNode(nodes, path);
      if (!node || node.type !== "dir") {
        return;
      }

      restoredExpandedFetchesRef.current.add(path);

      if (!node.children) {
        void handleExpand(node);
      }
    });
  }, [enabled, expandedPaths, handleExpand, nodes]);

  const handleToggleExpand = useCallback((node: TreeNode) => {
    if (node.type !== "dir") {
      return;
    }

    const isExpanded = expandedPaths.has(node.path);
    if (!isExpanded) {
      restoredExpandedFetchesRef.current.add(node.path);
      void handleExpand(node);
    }

    setExpandedPaths((prev) => {
      const next = new Set(prev);

      if (isExpanded) {
        next.delete(node.path);
      } else {
        next.add(node.path);
      }

      return next;
    });
  }, [expandedPaths, handleExpand]);

  const handleMove = useCallback(async (sourcePath: string, targetDirPath: string) => {
    if (!treeUrl) {
      return;
    }

    if (getParentDirPath(sourcePath) === targetDirPath) {
      return;
    }

    try {
      const resolvedMoveUrl = moveEndpoint;
      const response = await workspaceFetch(resolvedMoveUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json", "X-Requested-With": "preact-shell" },
        body: JSON.stringify({ sourcePath, targetDir: targetDirPath }),
      });

      if (!response.ok) {
        const data = (await response.json().catch(() => ({}))) as MoveErrorResponse;

        if (response.status === 409 && data.conflict === true) {
          setToastMessage(data.error ?? "File already exists");
        }

        return;
      }

      setToastMessage(null);
      const result = (await response.json()) as MoveResponse;
      setNodes((prev) => {
        const sourceNode = findNode(prev, sourcePath);
        if (!sourceNode) {
          return prev;
        }

        const movedNode = {
          ...sourceNode,
          path: toMovedPath(sourceNode, targetDirPath, result.path),
        };

        let next = removeNodeByPath(prev, sourcePath);
        if (targetDirPath === ".") {
          next = [...next, movedNode];
        } else {
          next = addNodeToDir(next, targetDirPath, movedNode);
        }

        return next;
      });

      setSelectedNode((prev) => {
        if (!prev || prev.path !== sourcePath) {
          return prev;
        }

        return {
          ...prev,
          path: result.path ?? prev.path,
        };
      });
    } catch (error) {
      console.error("[workspace] move failed", error);
    }
  }, [moveEndpoint, treeUrl]);

  const createNewFile = useCallback(async (node: TreeNode, requestedName?: string) => {
    if (!fileUrl) {
      return;
    }

    const targetDirPath = getCreateFileTargetDir(node);
    const fileName = sanitizeFileName(requestedName ?? DEFAULT_NEW_FILE_NAME);
    if (!fileName) {
      setToastMessage("File name is required.");
      return;
    }

    const targetPath = targetDirPath === "." ? fileName : `${targetDirPath}/${fileName}`;

    const response = await workspaceFetch(fileUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json", "X-Requested-With": "preact-shell" },
      body: JSON.stringify({ path: targetPath, content: "" }),
    });

    if (!response.ok) {
      const data = (await response.json().catch(() => ({}))) as MoveErrorResponse;
      setToastMessage(data.error ?? "Failed to create file");
      return;
    }

    const result = (await response.json().catch(() => ({ path: targetPath }))) as CreateFileResponse;
    const createdPath = result.path ?? targetPath;

    await loadTree();

    const createdNode: TreeNode = {
      name: createdPath.split("/").pop() ?? fileName,
      path: createdPath,
      type: "file",
    };

    setSelectedNode(createdNode);
    setRestoredSelectedPath(createdPath);
    await loadFile(createdNode);
  }, [fileUrl, loadFile, loadTree]);

  const handleAction = useCallback(async (actionId: string, node: TreeNode) => {
    if (actionId === "create-file") {
      await createNewFile(node);
      externalOnAction?.(actionId, node);
      return;
    }

    if (actionId === "attach") {
      if (node.type !== "file") {
        setToastMessage("Only files can be added to chat.");
        return;
      }

      emitWorkspaceAttach(node);
      externalOnAction?.(actionId, node);
      return;
    }

    if (actionId === "copy-path") {
      externalOnAction?.(actionId, node);
      return;
    }

    if (actionId === "delete") {
      if (!fileUrl) {
        externalOnAction?.(actionId, node);
        return;
      }

      const response = await workspaceFetch(fileUrl, {
        query: { path: node.path },
        method: "DELETE",
        headers: { "X-Requested-With": "preact-shell" },
      });

      if (response.ok) {
        setNodes((prev) => removeNodeByPath(prev, node.path));
        setSelectedNode((prev) => (prev?.path === node.path ? null : prev));
        setPreviewContent("");
      }

      externalOnAction?.(actionId, node);
      return;
    }

    if (actionId === "open") {
      const hasOpenableContent = (
        previewType === "image"
        || previewType === "pdf"
        || previewType === "code"
        || previewType === "markdown"
      ) && !previewLoading && !previewError && !previewTooLarge;

      if (onOpenInMain && hasOpenableContent) {
        onOpenInMain(node.path, previewContent, previewType, resolvedRawUrl ?? "", false);
      }
      externalOnAction?.(actionId, node);
      return;
    }

    if (actionId === "edit") {
      const canEditInOverlay = isEditableFileType(node.path)
        && (previewType === "code" || previewType === "markdown")
        && !previewLoading
        && !previewError
        && !previewTooLarge;

      if (onOpenInMain && canEditInOverlay) {
        onOpenInMain(node.path, previewContent, previewType, resolvedRawUrl ?? "", true);
      }
      externalOnAction?.(actionId, node);
      return;
    }

    externalOnAction?.(actionId, node);
  }, [createNewFile, externalOnAction, fileUrl, onOpenInMain, previewContent, previewError, previewLoading, previewTooLarge, previewType, resolvedRawUrl]);

  const onToggleHidden = useCallback(() => {
    setShowHidden((prev) => !prev);
  }, []);

  const onCreateFile = useCallback((fileName?: string) => {
    const fallbackNode: TreeNode = { name: "workspace", path: ".", type: "dir" };
    void createNewFile(selectedNode ?? fallbackNode, fileName);
  }, [createNewFile, selectedNode]);

  const onAttach = useCallback(() => {
    if (!selectedNode || selectedNode.type !== "file") {
      return;
    }

    void handleAction("attach", selectedNode);
  }, [handleAction, selectedNode]);

  return {
    enabled,
    nodes,
    selectedNode,
    previewContent,
    previewType,
    previewLoading,
    previewError,
    previewTruncated,
    previewTooLarge,
    rawUrl: resolvedRawUrl,
    downloadUrl: resolvedDownloadUrl,
    showHidden,
    folderChildren,
    folderSunburstRoot,
    folderTotalSize,
    folderLoading,
    folderError,
    folderDownloadUrl: resolvedFolderDownloadUrl,
    toastMessage,
    dismissToast: () => setToastMessage(null),
    expandedPaths,
    onSelect: handleSelect,
    onExpand: handleExpand,
    onToggleExpand: handleToggleExpand,
    onMove: handleMove,
    onAction: handleAction,
    onRefresh: loadTree,
    onToggleHidden,
    onCreateFile,
    onAttach,
  };
}
