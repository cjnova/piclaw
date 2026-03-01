import { readFileSync, statSync } from "fs";
import path from "path";
import chokidar from "chokidar";

import { WORKSPACE_DIR } from "../../../config.js";
import { createMedia } from "../../../db.js";
import { MAX_ATTACH_BYTES, MAX_PREVIEW_BYTES } from "./constants.js";
import { contentTypeForPath, detectBinary, formatMtime, isImageFile, isTextFile } from "./file-utils.js";
import { resolveWorkspacePath, shouldIgnorePath, toRelativePath } from "./paths.js";
import { buildTree, compressPaths } from "./tree.js";

export class WorkspaceService {
  getTree(pathParam: string | null, depthParam?: string | null): { status: number; body: unknown } {
    const targetPath = resolveWorkspacePath(pathParam);
    if (!targetPath) return { status: 400, body: { error: "Invalid path" } };

    const depthRaw = parseInt(depthParam || "2", 10);
    const depth = Number.isFinite(depthRaw) ? Math.min(Math.max(depthRaw, 1), 8) : 2;

    try {
      const state = { count: 0, truncated: false };
      const tree = buildTree(targetPath, depth, state);
      return { status: 200, body: { root: tree, truncated: state.truncated } };
    } catch {
      return { status: 500, body: { error: "Failed to read workspace" } };
    }
  }

  getFile(pathParam: string | null, maxParam?: string | null): { status: number; body: unknown } {
    const targetPath = resolveWorkspacePath(pathParam);
    if (!targetPath) return { status: 400, body: { error: "Invalid path" } };

    try {
      const stats = statSync(targetPath);
      if (stats.isDirectory()) {
        return { status: 400, body: { error: "Path is a directory" } };
      }

      const relPath = toRelativePath(targetPath);
      const contentType = contentTypeForPath(targetPath);
      const isImage = isImageFile(targetPath);

      if (isImage) {
        const rawUrl = `/workspace/raw?path=${encodeURIComponent(relPath)}`;
        return {
          status: 200,
          body: {
            path: relPath,
            name: path.basename(targetPath),
            kind: "image",
            content_type: contentType,
            size: stats.size,
            mtime: formatMtime(stats),
            url: rawUrl,
          },
        };
      }

      const maxParsed = parseInt(maxParam || "", 10);
      const maxBytes = Number.isFinite(maxParsed)
        ? Math.min(Math.max(maxParsed, 1024), MAX_PREVIEW_BYTES)
        : 20000;
      const buffer = readFileSync(targetPath, { encoding: null }) as Buffer;
      const slice = buffer.subarray(0, maxBytes);
      const truncated = buffer.length > maxBytes;

      if (!isTextFile(targetPath) && detectBinary(slice)) {
        return {
          status: 200,
          body: {
            path: relPath,
            name: path.basename(targetPath),
            kind: "binary",
            content_type: contentType,
            size: stats.size,
            mtime: formatMtime(stats),
            truncated,
          },
        };
      }

      let text = slice.toString("utf-8");
      if (path.extname(targetPath).toLowerCase() === ".json") {
        try {
          text = JSON.stringify(JSON.parse(text), null, 2);
        } catch {
          // keep raw
        }
      }

      return {
        status: 200,
        body: {
          path: relPath,
          name: path.basename(targetPath),
          kind: "text",
          content_type: contentType,
          size: stats.size,
          mtime: formatMtime(stats),
          text,
          truncated,
        },
      };
    } catch {
      return { status: 500, body: { error: "Failed to read file" } };
    }
  }

  getRaw(pathParam: string | null): { status: number; body: string | Blob; contentType?: string } {
    const targetPath = resolveWorkspacePath(pathParam);
    if (!targetPath) return { status: 400, body: "Invalid path" };

    try {
      const stats = statSync(targetPath);
      if (stats.isDirectory()) return { status: 400, body: "Path is a directory" };
      const contentType = contentTypeForPath(targetPath);
      const file = Bun.file(targetPath);
      return { status: 200, body: file, contentType };
    } catch {
      return { status: 404, body: "Not found" };
    }
  }

  attachFile(pathParam: string | null): { status: number; body: unknown } {
    const targetPath = resolveWorkspacePath(pathParam);
    if (!targetPath) return { status: 400, body: { error: "Invalid path" } };

    try {
      const stats = statSync(targetPath);
      if (stats.isDirectory()) return { status: 400, body: { error: "Path is a directory" } };
      if (stats.size > MAX_ATTACH_BYTES) {
        return { status: 400, body: { error: "File too large to attach" } };
      }

      const dataBuf = readFileSync(targetPath);
      const filename = path.basename(targetPath);
      const contentType = contentTypeForPath(targetPath);
      const mediaId = createMedia(filename, contentType, new Uint8Array(dataBuf), null, {
        size: stats.size,
        kind: "file",
        source_path: targetPath,
      });

      return {
        status: 200,
        body: {
          media_id: mediaId,
          filename,
          size: stats.size,
        },
      };
    } catch {
      return { status: 500, body: { error: "Failed to attach file" } };
    }
  }

  startWatcher(onUpdate: (updates: Array<{ path: string; root: unknown; truncated: boolean }>) => void): { close: () => Promise<void> } {
    const pending = new Set<string>();
    let flushTimer: ReturnType<typeof setTimeout> | null = null;

    const queuePath = (absPath: string) => {
      if (shouldIgnorePath(absPath)) return;
      const rel = toRelativePath(absPath);
      const target = rel === "." ? "." : toRelativePath(path.dirname(absPath));
      pending.add(target);
      if (flushTimer) return;
      flushTimer = setTimeout(() => {
        flushTimer = null;
        const targets = compressPaths(Array.from(pending));
        pending.clear();
        if (!targets.length) return;
        const updates: Array<{ path: string; root: unknown; truncated: boolean }> = [];
        for (const relPath of targets) {
          const abs = resolveWorkspacePath(relPath);
          if (!abs) continue;
          try {
            const state = { count: 0, truncated: false };
            const depth = relPath === "." ? 4 : 3;
            const root = buildTree(abs, depth, state);
            updates.push({ path: relPath, root, truncated: state.truncated });
          } catch {
            // ignore
          }
        }
        if (updates.length) onUpdate(updates);
      }, 300);
    };

    const watcher = chokidar.watch(WORKSPACE_DIR, {
      ignoreInitial: true,
      depth: 8,
      awaitWriteFinish: { stabilityThreshold: 150, pollInterval: 50 },
      ignored: (p) => shouldIgnorePath(p),
    });

    watcher.on("add", queuePath);
    watcher.on("addDir", queuePath);
    watcher.on("unlink", queuePath);
    watcher.on("unlinkDir", queuePath);
    watcher.on("change", queuePath);

    return {
      close: async () => {
        try { await watcher.close(); } catch {}
      },
    };
  }
}
