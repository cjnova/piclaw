import { afterEach, describe, expect, test } from "bun:test";
import "../helpers.js";
import { existsSync, mkdirSync, readFileSync, rmSync } from "node:fs";
import { join } from "node:path";

import { WORKSPACE_DIR } from "../../src/core/config.js";
import { createFakeExtensionApi } from "./fake-extension-api.js";
import officeToolsToolExtension from "../../extensions/integrations/office-tools-tool/index.ts";

const cleanupPaths: string[] = [];

function makeTempDir(): { prefix: string; base: string } {
  const prefix = `office-tools-tool-${Date.now()}-${Math.random().toString(36).slice(2)}`;
  const base = join(WORKSPACE_DIR, prefix);
  mkdirSync(base, { recursive: true });
  cleanupPaths.push(base);
  return { prefix, base };
}

afterEach(() => {
  while (cleanupPaths.length > 0) {
    const next = cleanupPaths.pop();
    if (next) rmSync(next, { recursive: true, force: true });
  }
});

describe("office-tools tool shim", () => {
  test("registers office_read and office_write", () => {
    const fake = createFakeExtensionApi();
    officeToolsToolExtension(fake.api);
    expect(fake.tools.has("office_read")).toBe(true);
    expect(fake.tools.has("office_write")).toBe(true);
  });

  test("round-trips DOCX through office_write and office_read", async () => {
    const fake = createFakeExtensionApi();
    officeToolsToolExtension(fake.api);
    const writer = fake.tools.get("office_write");
    const reader = fake.tools.get("office_read");
    if (!writer || !reader) throw new Error("office tools shim not registered");

    const { prefix, base } = makeTempDir();
    const relPath = `${prefix}/report.docx`;
    const markdown = [
      "# Quarterly Report",
      "",
      "**Owner:** Smith",
      "",
      "- Alpha",
      "- Beta",
    ].join("\n");

    const writeResult = await writer.execute("docx-write", { path: relPath, markdown }, undefined, undefined, { cwd: WORKSPACE_DIR });
    expect(writeResult.details.ok).toBe(true);
    expect(existsSync(join(base, "report.docx"))).toBe(true);
    expect(readFileSync(join(base, "report.docx")).length).toBeGreaterThan(1024);

    const readResult = await reader.execute("docx-read", { path: relPath }, undefined, undefined, { cwd: WORKSPACE_DIR });
    const text = readResult.content[0].text;
    expect(readResult.details.ok).toBe(true);
    expect(text).toContain("# Quarterly Report");
    expect(text).toContain("**Owner:** Smith");
    expect(text).toContain("- Alpha");
  });
});
