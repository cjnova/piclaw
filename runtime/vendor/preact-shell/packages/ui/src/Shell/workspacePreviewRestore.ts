import { withWorkspaceQuery, workspaceFetch, workspaceFetchJson } from "../Workspace/workspace-fetch";

const PREVIEW_TRUNCATE_LIMIT = 200_000;
const PREVIEW_SIZE_LIMIT = 2_000_000;

export type PreviewType = "code" | "markdown" | "image" | "pdf" | "binary";

interface FileResponse {
  content: string;
  size: number;
}

interface RestoreWorkspacePreviewOptions {
  workspaceBaseUrl: string;
  path: string;
}

export interface RestoredWorkspacePreview {
  content: string;
  type: PreviewType;
  rawUrl: string;
}

export function getPreviewTypeFromPath(path: string): PreviewType {
  const ext = path.split(".").pop()?.toLowerCase() ?? "";

  if (["md", "markdown"].includes(ext)) {
    return "markdown";
  }

  if (["png", "jpg", "jpeg", "gif", "webp", "svg"].includes(ext)) {
    return "image";
  }

  if (ext === "pdf") {
    return "pdf";
  }

  if (["zip", "gz", "tar", "woff", "woff2", "ttf", "eot", "exe", "bin"].includes(ext)) {
    return "binary";
  }

  return "code";
}

export async function restoreWorkspacePreviewFromPath({
  workspaceBaseUrl,
  path,
}: RestoreWorkspacePreviewOptions): Promise<RestoredWorkspacePreview> {
  if (!workspaceBaseUrl) {
    throw new Error("Workspace preview is unavailable");
  }

  const previewType = getPreviewTypeFromPath(path);

  if (previewType === "binary") {
    throw new Error("File type cannot be previewed");
  }

  const normalizedBaseUrl = workspaceBaseUrl.replace(/\/+$/, "");
  const workspaceRawUrl = `${normalizedBaseUrl}/raw`;
  const rawUrl = withWorkspaceQuery(workspaceRawUrl, { path });

  if (previewType === "image" || previewType === "pdf") {
    const response = await workspaceFetch(workspaceRawUrl, {
      query: { path },
      method: "HEAD",
    });

    if (!response.ok && response.status !== 405) {
      throw new Error("Failed to load preview");
    }

    return {
      content: "",
      type: previewType,
      rawUrl,
    };
  }

  const payload = await workspaceFetchJson<FileResponse>(`${normalizedBaseUrl}/file`, {
    query: { path },
    errorMessage: "Failed to load file preview",
  });

  if (payload.size > PREVIEW_SIZE_LIMIT) {
    throw new Error("File is too large to preview");
  }

  return {
    content: payload.content.length > PREVIEW_TRUNCATE_LIMIT
      ? payload.content.slice(0, PREVIEW_TRUNCATE_LIMIT)
      : payload.content,
    type: previewType,
    rawUrl,
  };
}
