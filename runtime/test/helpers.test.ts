import { existsSync } from "fs";
import { describe, expect, test } from "bun:test";

import { cleanupSharedTestWorkspace, getTestWorkspace } from "./helpers.js";

describe("runtime test helpers", () => {
  test("shared temp workspace can be cleaned up and recreated", () => {
    const first = getTestWorkspace();
    expect(existsSync(first.base)).toBe(true);

    cleanupSharedTestWorkspace();
    expect(existsSync(first.base)).toBe(false);

    const second = getTestWorkspace();
    expect(existsSync(second.base)).toBe(true);
    expect(second.base).not.toBe(first.base);

    cleanupSharedTestWorkspace();
    expect(existsSync(second.base)).toBe(false);
  });
});
