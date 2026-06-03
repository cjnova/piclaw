import { describe, expect, test } from "bun:test";
import { normalizeWorkspaceReferences, toWorkspaceReference, type WorkspaceReference } from "./workspace-references";
import type { TreeNode } from "./types";

describe("workspace references", () => {
  test("maps tree nodes to normalized workspace references", () => {
    const reference = toWorkspaceReference({
      name: "README.md",
      path: "docs/README.md",
      type: "file",
    });

    expect(reference).toEqual({
      source: "workspace",
      type: "file",
      path: "docs/README.md",
      name: "README.md",
    });
  });

  test("deduplicates references by source/path", () => {
    const refs: WorkspaceReference[] = [
      { source: "workspace", type: "file", path: "src/index.ts", name: "index.ts" },
      { source: "workspace", type: "file", path: "src/index.ts", name: "index.ts" },
    ];

    expect(normalizeWorkspaceReferences(refs)).toEqual([
      { source: "workspace", type: "file", path: "src/index.ts", name: "index.ts" },
    ]);
  });

  test("filters non-file references from legacy payloads", () => {
    const refs = [
      { source: "workspace", type: "dir", path: "src", name: "src" },
      { source: "workspace", type: "file", path: "src/index.ts", name: "index.ts" },
    ] as WorkspaceReference[];

    expect(normalizeWorkspaceReferences(refs)).toEqual([
      { source: "workspace", type: "file", path: "src/index.ts", name: "index.ts" },
    ]);
  });

  test("throws when mapping a directory to a chat reference", () => {
    const dirNode: TreeNode = {
      name: "src",
      path: "src",
      type: "dir",
    };

    expect(() => toWorkspaceReference(dirNode)).toThrow("Only files can be referenced in chat.");
  });
});
