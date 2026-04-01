#!/usr/bin/env bun
/**
 * postinstall.ts — Run after `bun add -g github:rcarmo/piclaw`.
 *
 * Repo installs should already contain the vendored runtime assets, including
 * Draw.io. This script only acts as a repair fallback for source checkouts or
 * incomplete package trees.
 *
 * Only uses bun and node:* builtins — no devDependencies required.
 *
 * Safe to re-run: checks whether output already exists.
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
    env: { ...process.env },
  });
  if (result.status !== 0) {
    console.warn(`${LOG} ⚠ ${label} failed (exit ${result.status}), skipping`);
    return false;
  }
  return true;
}

// Draw.io should ship inside the repo/package. If it is missing, repair it as a
// last resort so direct source installs still recover to a working runtime.
const drawioIndex = resolve(ROOT, "runtime/extensions/viewers/drawio-editor/vendor/index.html");
if (!existsSync(drawioIndex)) {
  run("Repairing missing vendored draw.io", ["bun", "run", "build:vendor:drawio"]);
} else {
  console.log(`${LOG} draw.io vendor already present, skipping`);
}

console.log(`${LOG} Done`);
