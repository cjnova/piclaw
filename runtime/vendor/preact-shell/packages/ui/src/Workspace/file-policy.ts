export type WorkspacePreviewType = "code" | "markdown" | "image" | "pdf" | "binary";

const EDITABLE_EXTENSIONS = new Set([
  "txt", "md", "markdown", "ts", "tsx", "js", "jsx", "mjs", "cjs", "json", "jsonc",
  "css", "scss", "sass", "html", "htm", "xml", "yml", "yaml", "toml", "ini", "env",
  "sh", "bash", "zsh", "fish", "py", "go", "rs", "java", "c", "cpp", "h", "hpp", "cxx", "cc", "hxx", "hh",
  "cs", "php", "rb", "swift", "kt", "kts", "dart", "scala", "lua", "r", "sql", "graphql", "gql",
  "vue", "svelte", "tf", "bicep", "ps1", "bat", "cmd", "log", "csv",
]);

const EDITABLE_FILENAMES = new Set([
  "dockerfile", "makefile", ".gitignore", ".gitattributes", "license", "licence",
]);

const OPEN_PREVIEW_EXTENSIONS = new Set([
  "txt", "md", "markdown", "ts", "tsx", "js", "jsx", "json", "css", "scss", "html", "xml", "yml", "yaml", "sh", "py", "go", "rs", "java", "c", "cpp", "h", "hpp", "pdf",
]);

const MARKDOWN_EXTENSIONS = new Set(["md", "markdown"]);
const IMAGE_EXTENSIONS = new Set(["png", "jpg", "jpeg", "gif", "webp", "svg"]);
const BINARY_PREVIEW_EXTENSIONS = new Set(["zip", "gz", "tar", "woff", "woff2", "ttf", "eot", "exe", "bin"]);

export function getFileName(pathOrName: string): string {
  return pathOrName.split("/").pop() ?? pathOrName;
}

export function getFileExtension(pathOrName: string): string {
  const fileName = getFileName(pathOrName).toLowerCase();
  const parts = fileName.split(".");
  return parts.length > 1 ? parts[parts.length - 1]! : "";
}

export function isEditableFileType(pathOrName: string): boolean {
  const fileName = getFileName(pathOrName).toLowerCase();
  const ext = getFileExtension(fileName);

  if (EDITABLE_FILENAMES.has(fileName)) {
    return true;
  }

  return Boolean(ext) && EDITABLE_EXTENSIONS.has(ext);
}

export function isOpenPreviewFileType(pathOrName: string): boolean {
  return OPEN_PREVIEW_EXTENSIONS.has(getFileExtension(pathOrName));
}

export function getPreviewType(pathOrName: string): WorkspacePreviewType {
  const ext = getFileExtension(pathOrName);

  if (MARKDOWN_EXTENSIONS.has(ext)) {
    return "markdown";
  }

  if (IMAGE_EXTENSIONS.has(ext)) {
    return "image";
  }

  if (ext === "pdf") {
    return "pdf";
  }

  if (BINARY_PREVIEW_EXTENSIONS.has(ext)) {
    return "binary";
  }

  return "code";
}
