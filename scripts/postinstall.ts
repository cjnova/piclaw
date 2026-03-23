#!/usr/bin/env bun
/**
 * postinstall.ts — Run after `bun add -g github:rcarmo/piclaw`.
 *
 * Ensures vendored assets that are .gitignored (too large to commit)
 * and build artifacts (web bundles, compiled TS) are present.
 *
 * Safe to re-run: each step checks whether its output already exists.
 */

import { existsSync } from "node:fs";
import { resolve, dirname } from "node:path";
import { spawnSync } from "node:child_process";

const ROOT = dirname(import.meta.dir);
const LOG = "[postinstall]";

function run(label: string, cmd: string[], cwd = ROOT): boolean {
  console.log(`${LOG} ${label}...`);
  const result = spawnSync(cmd[0], cmd.slice(1), {
    cwd,
    stdio: "inherit",
    env: { ...process.env, BUN_INSTALL_GLOBAL: undefined },
  });
  if (result.status !== 0) {
    console.warn(`${LOG} ⚠ ${label} failed (exit ${result.status}), skipping`);
    return false;
  }
  return true;
}

// 1. Vendor: draw.io (35 MB, .gitignored)
const drawioIndex = resolve(ROOT, "runtime/extensions/drawio-editor/vendor/index.html");
if (!existsSync(drawioIndex)) {
  run("Vendoring draw.io", ["bun", "run", "build:vendor:drawio"]);
} else {
  console.log(`${LOG} draw.io vendor already present, skipping`);
}

// 2. Web bundles (app.bundle.js, login.bundle.js, CSS)
const appBundle = resolve(ROOT, "runtime/web/static/dist/app.bundle.js");
if (!existsSync(appBundle)) {
  run("Building web bundles", ["bun", "run", "build:web"]);
} else {
  console.log(`${LOG} Web bundles already present, skipping`);
}

// 3. Compiled TypeScript (runtime/dist/)
const distIndex = resolve(ROOT, "runtime/dist/index.js");
if (!existsSync(distIndex)) {
  run("Compiling TypeScript", ["bun", "run", "build"]);
} else {
  console.log(`${LOG} TypeScript dist already present, skipping`);
}

console.log(`${LOG} Done`);
