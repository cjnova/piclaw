import type { IconName } from "../Icon";

export interface TreeNode {
  name: string;
  path: string;
  type: "file" | "dir";
  size?: number | null;
  mtime?: string | null;
  childCount?: number | null;
  children?: TreeNode[];
}

export interface FileAction {
  id: string;
  label: string;
  icon: IconName;
  hoverClass: string;
  visible?: (node: TreeNode) => boolean;
  disabled?: (node: TreeNode) => boolean;
  handler: (node: TreeNode) => void;
}

export interface FileTreeProps {
  nodes: TreeNode[];
  selectedPath?: string;
  showHidden?: boolean;
  expandedPaths?: Set<string>;
  onSelect: (node: TreeNode) => void;
  onExpand: (node: TreeNode) => void;
  onToggleExpand?: (node: TreeNode) => void;
  onMove?: (sourcePath: string, targetDirPath: string) => void;
  onRefresh?: () => void;
  onToggleHidden?: () => void;
  onCreateFile?: () => void;
  onAttach?: () => void;
  canAttach?: boolean;
}

export interface FilePreviewProps {
  node: TreeNode | null;
  content?: string;
  contentType?: "code" | "markdown" | "image" | "pdf" | "binary";
  loading?: boolean;
  error?: string;
  truncated?: boolean;
  tooLarge?: boolean;
  rawUrl?: string;
  downloadUrl?: string;
  actions?: FileAction[];
  onAction?: (actionId: string, node: TreeNode) => void;
  renderCode?: (content: string, extension: string) => string;
}

export interface WorkspaceConfig {
  /** Base URL for workspace API. Resolved relative to app origin. Endpoints: GET /tree, GET/POST/DELETE /file, GET /raw, GET /archive, POST /move */
  baseUrl: string;
}

export interface WorkspacePanelProps extends WorkspaceConfig {
  nodes?: TreeNode[];
  selectedNode?: TreeNode | null;
  previewContent?: string;
  previewType?: "code" | "markdown" | "image" | "pdf" | "binary";
  previewLoading?: boolean;
  previewError?: string;
  previewTruncated?: boolean;
  previewTooLarge?: boolean;
  rawUrl?: string;
  downloadUrl?: string;
  showHidden?: boolean;
  onSelect?: (node: TreeNode) => void;
  onExpand?: (node: TreeNode) => void;
  onMove?: (sourcePath: string, targetDirPath: string) => void;
  onAction?: (actionId: string, node: TreeNode) => void;
  onCreateFile?: (node: TreeNode, fileName: string) => void;
  onRefresh?: () => void;
  onToggleHidden?: () => void;
  actions?: FileAction[];
  renderCode?: (content: string, extension: string) => string;
  // Folder preview props
  folderChildren?: import("./FolderPreview").FolderChildInfo[] | null;
  folderSunburstRoot?: import("./FolderPreview").SunburstNode | null;
  folderTotalSize?: number | null;
  folderLoading?: boolean;
  folderError?: string;
  folderActions?: import("preact").ComponentChildren;
  folderDownloadUrl?: string;
  onOpenInMain?: (path: string, content: string, type: string, rawUrl: string, startEditing?: boolean) => void;
}
