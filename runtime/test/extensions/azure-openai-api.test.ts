import { expect, test } from "bun:test";
import { existsSync } from "node:fs";
import { join } from "node:path";

import { resolvePiAiResponsesSharedModulePath } from "../../src/extensions/azure-openai-api.js";

test("resolvePiAiResponsesSharedModulePath finds the bundled pi-ai helper", () => {
  const resolved = resolvePiAiResponsesSharedModulePath();
  expect(resolved.endsWith(join("@mariozechner", "pi-ai", "dist", "providers", "openai-responses-shared.js"))).toBe(true);
});

test("resolvePiAiResponsesSharedModulePath walks up to a parent node_modules", () => {
  const startDir = join(process.cwd(), "runtime", "src", "extensions", "nested", "deeper");
  const resolved = resolvePiAiResponsesSharedModulePath(startDir);
  expect(existsSync(resolved)).toBe(true);
  expect(resolved.endsWith(join("@mariozechner", "pi-ai", "dist", "providers", "openai-responses-shared.js"))).toBe(true);
});
