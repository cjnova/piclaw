import { existsSync } from "node:fs";
import { copyFile, mkdir } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const uiDir = path.dirname(fileURLToPath(import.meta.url));
const packageRoot = path.resolve(uiDir, "..");
const staticDir = path.join(packageRoot, "static");
const outputPath = path.join(staticDir, "pdf.worker.min.mjs");

function resolvePdfWorkerPath(): string {
  try {
    return fileURLToPath(import.meta.resolve("pdfjs-dist/build/pdf.worker.min.mjs"));
  } catch {
    const candidates = [
      path.join(packageRoot, "node_modules/pdfjs-dist/build/pdf.worker.min.mjs"),
      path.join(packageRoot, "../../node_modules/pdfjs-dist/build/pdf.worker.min.mjs"),
      path.join(packageRoot, "../../node_modules/.bun/node_modules/pdfjs-dist/build/pdf.worker.min.mjs"),
    ];

    for (const candidate of candidates) {
      if (existsSync(candidate)) {
        return candidate;
      }
    }

    throw new Error("Unable to resolve pdf.worker.min.mjs from pdfjs-dist");
  }
}

const workerPath = resolvePdfWorkerPath();
await mkdir(staticDir, { recursive: true });
await copyFile(workerPath, outputPath);

console.log(`[preact-shell/ui] synced static asset: ${path.relative(packageRoot, outputPath)}`);
