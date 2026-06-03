import { existsSync, realpathSync, statSync } from "node:fs";
import { mkdir, readdir, readFile, realpath, rename, stat, unlink, writeFile } from "node:fs/promises";
import path from "node:path";
import { Readable } from "node:stream";
import { Hono } from "hono";
import { ZipFile } from "yazl";

export interface WorkspaceProviderConfig {
  /** Root directory to serve. Default: parent of cwd ("..") */
  root?: string;
  /** Directories to skip when listing. */
  ignoreDirs?: string[];
  /** Max depth for recursive tree fetches (default: 6). */
  maxDepth?: number;
  /** Max file content bytes to return in preview (default: 200000). */
  maxFileSize?: number;
  /** Whether to show hidden files by default (default: true). */
  showHidden?: boolean;
}

export interface TreeNode {
  name: string;
  path: string;
  type: "file" | "dir";
  size?: number | null;
  mtime?: string | null;
  childCount?: number | null;
  children?: TreeNode[];
}

export interface WorkspaceTreeResponse {
  path: string;
  type: "dir";
  children: TreeNode[];
}

export interface WorkspaceFileResponse {
  path: string;
  name: string;
  content: string;
  size: number;
  mtime: string;
}

export interface WorkspaceOkResponse {
  ok: true;
}

export interface WorkspaceMoveResponse extends WorkspaceOkResponse {
  path: string;
}

export interface WorkspaceCreateFileResponse extends WorkspaceOkResponse {
  path: string;
}

export interface WorkspaceErrorResponse {
  error: string;
  conflict?: boolean;
}

const DEFAULT_IGNORED_DIRS = [
  "node_modules",
  ".git",
  "generated",
  "dist",
  "build",
  "output",
  ".cache",
  ".venv",
  "coverage",
];

async function addDirectoryToZip(zipFile: ZipFile, baseDir: string, currentDir: string): Promise<void> {
  const entries = await readdir(currentDir, { withFileTypes: true });

  if (entries.length === 0 && currentDir !== baseDir) {
    const relDir = path.relative(baseDir, currentDir).replaceAll("\\", "/");
    zipFile.addEmptyDirectory(relDir);
    return;
  }

  for (const entry of entries) {
    const absEntry = path.join(currentDir, entry.name);
    const relEntry = path.relative(baseDir, absEntry).replaceAll("\\", "/");

    if (entry.isDirectory()) {
      await addDirectoryToZip(zipFile, baseDir, absEntry);
      continue;
    }

    if (entry.isFile()) {
      zipFile.addFile(absEntry, relEntry);
    }
  }
}

async function createZipStream(absPath: string): Promise<ReadableStream> {
  const zipFile = new ZipFile();
  await addDirectoryToZip(zipFile, absPath, absPath);
  zipFile.end();
  return Readable.toWeb(zipFile.outputStream) as ReadableStream;
}

function ensureValidRoot(root: string): string {
  const resolvedRoot = path.resolve(root);

  if (!existsSync(resolvedRoot)) {
    throw new Error(`[workspace-provider] Root path does not exist: ${resolvedRoot}`);
  }

  const rootStats = statSync(resolvedRoot);
  if (!rootStats.isDirectory()) {
    throw new Error(`[workspace-provider] Root path is not a directory: ${resolvedRoot}`);
  }

  return realpathSync(resolvedRoot);
}

function isWithinWorkspaceRoot(root: string, target: string): boolean {
  const relativePath = path.relative(root, target);
  return relativePath === "" || (!relativePath.startsWith("..") && !path.isAbsolute(relativePath));
}

async function resolveContainmentPath(candidatePath: string, allowMissing: boolean): Promise<string | null> {
  let currentPath = candidatePath;
  const missingSegments: string[] = [];

  while (true) {
    const canonicalPath = await realpath(currentPath).catch(() => null);
    if (canonicalPath) {
      return missingSegments.length > 0
        ? path.join(canonicalPath, ...missingSegments.reverse())
        : canonicalPath;
    }

    if (!allowMissing) {
      return null;
    }

    const parentPath = path.dirname(currentPath);
    if (parentPath === currentPath) {
      return null;
    }

    missingSegments.push(path.basename(currentPath));
    currentPath = parentPath;
  }
}

export function createWorkspaceRoutes(config: WorkspaceProviderConfig = {}): Hono {
  const workspaceRoot = ensureValidRoot(config.root ?? path.resolve(process.cwd(), ".."));
  const maxDepth = Number.isFinite(config.maxDepth) ? Math.max(0, Math.floor(config.maxDepth ?? 6)) : 6;
  const maxFileSize = Number.isFinite(config.maxFileSize) ? Math.max(1, Math.floor(config.maxFileSize ?? 200_000)) : 200_000;
  const showHidden = config.showHidden ?? true;
  const ignoredDirs = new Set(config.ignoreDirs ?? DEFAULT_IGNORED_DIRS);

  const workspaceRoutes = new Hono();

  // CSRF protection: mutating requests must include X-Requested-With header.
  // This prevents cross-site form submissions and link-based attacks.
  // Access control (who can reach the app) is the responsibility of the app's
  // auth middleware or network layer (e.g., Tailscale, session cookies).
  workspaceRoutes.use("*", async (c, next) => {
    const method = c.req.method;
    if (method === "GET" || method === "HEAD" || method === "OPTIONS") {
      await next();
      return;
    }

    if (!c.req.header("x-requested-with")) {
      return c.json<WorkspaceErrorResponse>({ error: "Missing X-Requested-With header" }, 403);
    }

    await next();
  });

  async function resolveWorkspacePath(
    requestedPath: string,
    options: { allowMissing?: boolean } = {},
  ): Promise<string | null> {
    const normalizedPath = requestedPath || ".";
    const candidatePath = path.resolve(workspaceRoot, normalizedPath);

    if (!isWithinWorkspaceRoot(workspaceRoot, candidatePath)) {
      return null;
    }

    const containmentPath = await resolveContainmentPath(candidatePath, options.allowMissing ?? false);
    if (!containmentPath || !isWithinWorkspaceRoot(workspaceRoot, containmentPath)) {
      return null;
    }

    return containmentPath;
  }

  async function countContainedChildren(absPath: string): Promise<number> {
    const entries = await readdir(absPath, { withFileTypes: true }).catch(() => []);
    const containedEntries = await Promise.all(entries.map(async (entry) => {
      const childAbsPath = path.join(absPath, entry.name);
      const containedChildAbsPath = await resolveContainmentPath(childAbsPath, false);
      return containedChildAbsPath && isWithinWorkspaceRoot(workspaceRoot, containedChildAbsPath);
    }));

    return containedEntries.filter(Boolean).length;
  }

  async function readTree(absPath: string, relPath: string, depth: number): Promise<TreeNode[]> {
    const entries = await readdir(absPath, { withFileTypes: true });

    const nodes = (await Promise.all(entries
      .filter((entry) => {
        if (!showHidden && entry.name.startsWith(".")) {
          return false;
        }

        return !entry.isDirectory() || !ignoredDirs.has(entry.name);
      })
      .map(async (entry) => {
        const childAbsPath = path.join(absPath, entry.name);
        const containedChildAbsPath = await resolveContainmentPath(childAbsPath, false);
        if (!containedChildAbsPath || !isWithinWorkspaceRoot(workspaceRoot, containedChildAbsPath)) {
          return null;
        }

        const childRelPath = path.join(relPath, entry.name).replaceAll("\\", "/");
        const stats = await stat(containedChildAbsPath).catch(() => null);
        if (!stats) {
          return null;
        }

        const isDirectory = stats.isDirectory();
        const node: TreeNode = {
          name: entry.name,
          path: childRelPath,
          type: isDirectory ? "dir" : "file",
          size: isDirectory ? null : stats.size,
          mtime: stats.mtime.toISOString(),
          childCount: isDirectory ? await countContainedChildren(containedChildAbsPath) : null,
        };

        if (isDirectory && depth > 0) {
          node.children = await readTree(containedChildAbsPath, childRelPath, depth - 1);
        }

        return node;
      }))).filter((node): node is TreeNode => node !== null);

    return nodes.sort((a, b) => {
      if (a.type !== b.type) {
        return a.type === "dir" ? -1 : 1;
      }

      return a.name.localeCompare(b.name);
    });
  }

  workspaceRoutes.get("/tree", async (c) => {
    const requestedPath = c.req.query("path") ?? ".";
    const depth = Number(c.req.query("depth") ?? "1");
    const safeDepth = Number.isFinite(depth) ? Math.max(0, Math.min(maxDepth, depth)) : 1;
    const absPath = await resolveWorkspacePath(requestedPath);

    if (!absPath) {
      return c.json<WorkspaceErrorResponse>({ error: "Invalid path" }, 400);
    }

    const stats = await stat(absPath).catch(() => null);
    if (!stats || !stats.isDirectory()) {
      return c.json<WorkspaceErrorResponse>({ error: "Directory not found" }, 404);
    }

    const children = await readTree(absPath, requestedPath === "." ? "" : requestedPath, safeDepth);
    return c.json<WorkspaceTreeResponse>({
      path: requestedPath,
      type: "dir",
      children,
    });
  });

  workspaceRoutes.get("/file", async (c) => {
    const requestedPath = c.req.query("path");
    if (!requestedPath) {
      return c.json<WorkspaceErrorResponse>({ error: "Missing path" }, 400);
    }

    const absPath = await resolveWorkspacePath(requestedPath, { allowMissing: true });
    if (!absPath) {
      return c.json<WorkspaceErrorResponse>({ error: "Invalid path" }, 400);
    }

    const stats = await stat(absPath).catch(() => null);
    if (!stats || !stats.isFile()) {
      return c.json<WorkspaceErrorResponse>({ error: "File not found" }, 404);
    }

    if (stats.size > maxFileSize) {
      return c.json<WorkspaceErrorResponse>({ error: "File too large" }, 413);
    }

    const content = await readFile(absPath, "utf8");

    return c.json<WorkspaceFileResponse>({
      path: requestedPath,
      name: path.basename(requestedPath),
      content,
      size: stats.size,
      mtime: stats.mtime.toISOString(),
    });
  });

  workspaceRoutes.post("/file", async (c) => {
    const body = await c.req.json<{ path?: string; content?: string }>().catch(() => ({ path: undefined, content: "" }));
    const requestedPath = body.path?.trim();

    if (!requestedPath) {
      return c.json<WorkspaceErrorResponse>({ error: "Missing path" }, 400);
    }

    const absPath = await resolveWorkspacePath(requestedPath, { allowMissing: true });
    if (!absPath) {
      return c.json<WorkspaceErrorResponse>({ error: "Invalid path" }, 400);
    }

    const existing = await stat(absPath).catch(() => null);
    if (existing) {
      return c.json<WorkspaceErrorResponse>({ error: "File already exists", conflict: true }, 409);
    }

    const parentDir = path.dirname(absPath);
    await mkdir(parentDir, { recursive: true });
    await writeFile(absPath, body.content ?? "", "utf8");

    const relPath = path.relative(workspaceRoot, absPath).replaceAll("\\", "/");
    return c.json<WorkspaceCreateFileResponse>({ ok: true, path: relPath });
  });

  workspaceRoutes.put("/file", async (c) => {
    const body = await c.req.json<{ path?: string; content?: string }>().catch(() => ({ path: undefined, content: "" }));
    const requestedPath = body.path?.trim();

    if (!requestedPath) {
      return c.json<WorkspaceErrorResponse>({ error: "Missing path" }, 400);
    }

    const absPath = await resolveWorkspacePath(requestedPath, { allowMissing: true });
    if (!absPath) {
      return c.json<WorkspaceErrorResponse>({ error: "Invalid path" }, 400);
    }

    const existing = await stat(absPath).catch(() => null);
    if (!existing || !existing.isFile()) {
      return c.json<WorkspaceErrorResponse>({ error: "File not found" }, 404);
    }

    await writeFile(absPath, body.content ?? "", "utf8");
    return c.json<WorkspaceOkResponse>({ ok: true });
  });

  workspaceRoutes.get("/raw", async (c) => {
    const requestedPath = c.req.query("path");
    if (!requestedPath) {
      return c.text("Missing path", 400);
    }

    const absPath = await resolveWorkspacePath(requestedPath);
    if (!absPath) {
      return c.text("Invalid path", 400);
    }

    const stats = await stat(absPath).catch(() => null);
    if (!stats || !stats.isFile()) {
      return c.text("File not found", 404);
    }

    const download = c.req.query("download") === "1";
    const file = Bun.file(absPath);
    const contentType = file.type || "application/octet-stream";
    const basename = path.basename(absPath);

    // Only allow inline rendering for safe content types
    const SAFE_INLINE_TYPES = new Set([
      "image/png", "image/jpeg", "image/gif", "image/webp",
      "text/plain", "application/pdf",
    ]);
    const forceDownload = download || !SAFE_INLINE_TYPES.has(contentType);

    // Sanitize filename for Content-Disposition header
    const safeBasename = basename.replace(/["\\\r\n]/g, "_");

    const headers = new Headers({
      "Content-Type": contentType,
      "X-Content-Type-Options": "nosniff",
      "Content-Disposition": forceDownload
        ? `attachment; filename="${safeBasename}"`
        : "inline",
    });

    return new Response(file.stream(), { headers });
  });

  workspaceRoutes.get("/archive", async (c) => {
    const requestedPath = c.req.query("path") ?? ".";
    const absPath = await resolveWorkspacePath(requestedPath);

    if (!absPath) {
      return c.json<WorkspaceErrorResponse>({ error: "Invalid path" }, 400);
    }

    const stats = await stat(absPath).catch(() => null);
    if (!stats || !stats.isDirectory()) {
      return c.json<WorkspaceErrorResponse>({ error: "Directory not found" }, 404);
    }

    const folderName = path.basename(absPath) || "workspace";
    const safeBasename = `${folderName.replace(/["\\\r\n]/g, "_")}.zip`;
    const headers = new Headers({
      "Content-Type": "application/zip",
      "X-Content-Type-Options": "nosniff",
      "Content-Disposition": `attachment; filename="${safeBasename}"`,
    });

    try {
      const zipStream = await createZipStream(absPath);
      return new Response(zipStream, { headers });
    } catch {
      return c.json<WorkspaceErrorResponse>({ error: "failed to create archive" }, 500);
    }
  });

  workspaceRoutes.delete("/file", async (c) => {
    const requestedPath = c.req.query("path");
    if (!requestedPath) {
      return c.json<WorkspaceErrorResponse>({ error: "Missing path" }, 400);
    }

    const absPath = await resolveWorkspacePath(requestedPath);
    if (!absPath) {
      return c.json<WorkspaceErrorResponse>({ error: "Invalid path" }, 400);
    }

    const stats = await stat(absPath).catch(() => null);
    if (!stats || !stats.isFile()) {
      return c.json<WorkspaceErrorResponse>({ error: "File not found" }, 404);
    }

    await unlink(absPath);
    return c.json<WorkspaceOkResponse>({ ok: true });
  });

  workspaceRoutes.post("/move", async (c) => {
    const body = await c.req.json<{ sourcePath?: string; targetDir?: string }>().catch(() => ({ sourcePath: undefined, targetDir: undefined }));
    const sourcePath = body.sourcePath?.trim();
    const targetDir = body.targetDir?.trim();

    if (!sourcePath || !targetDir) {
      return c.json<WorkspaceErrorResponse>({ error: "sourcePath and targetDir are required" }, 400);
    }

    const absSource = await resolveWorkspacePath(sourcePath);
    const absTargetDir = await resolveWorkspacePath(targetDir);

    if (!absSource || !absTargetDir) {
      return c.json<WorkspaceErrorResponse>({ error: "Invalid path" }, 400);
    }

    const sourceStats = await stat(absSource).catch(() => null);
    if (!sourceStats) {
      return c.json<WorkspaceErrorResponse>({ error: "Source not found" }, 404);
    }

    const targetDirStats = await stat(absTargetDir).catch(() => null);
    if (!targetDirStats || !targetDirStats.isDirectory()) {
      return c.json<WorkspaceErrorResponse>({ error: "Target directory not found" }, 404);
    }

    const fileName = path.basename(absSource);
    const absDest = path.join(absTargetDir, fileName);

    const destExists = await stat(absDest).catch(() => null);
    if (destExists) {
      return c.json<WorkspaceErrorResponse>({ error: "A file with that name already exists in the target folder", conflict: true }, 409);
    }

    await rename(absSource, absDest);
    const newRelPath = path.relative(workspaceRoot, absDest).replaceAll("\\", "/");
    return c.json<WorkspaceMoveResponse>({ ok: true, path: newRelPath });
  });

  return workspaceRoutes;
}
