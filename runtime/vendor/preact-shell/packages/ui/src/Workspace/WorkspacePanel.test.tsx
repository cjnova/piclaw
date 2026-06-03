import { describe, expect, mock, test } from "bun:test";
import { dispatchCreateFileRequest } from "./WorkspacePanel";

const selectedNode = { name: "docs", path: "docs", type: "dir" } as const;

describe("dispatchCreateFileRequest", () => {
  test("passes filename to onCreateFile in controlled mode", () => {
    const internalOnCreateFile = mock(() => undefined);
    const onCreateFile = mock(() => undefined);
    const onAction = mock(() => undefined);

    dispatchCreateFileRequest({
      selfContained: false,
      fileName: "custom-name.md",
      selectedNode,
      internalOnCreateFile,
      onCreateFile,
      onAction,
    });

    expect(internalOnCreateFile).not.toHaveBeenCalled();
    expect(onCreateFile).toHaveBeenCalledTimes(1);
    expect(onCreateFile).toHaveBeenCalledWith(selectedNode, "custom-name.md");
    expect(onAction).not.toHaveBeenCalled();
  });

  test("falls back to onAction when onCreateFile is not provided", () => {
    const internalOnCreateFile = mock(() => undefined);
    const onAction = mock(() => undefined);

    dispatchCreateFileRequest({
      selfContained: false,
      fileName: "custom-name.md",
      selectedNode,
      internalOnCreateFile,
      onAction,
    });

    expect(internalOnCreateFile).not.toHaveBeenCalled();
    expect(onAction).toHaveBeenCalledTimes(1);
    expect(onAction).toHaveBeenCalledWith("create-file", selectedNode);
  });

  test("keeps self-contained behavior unchanged", () => {
    const internalOnCreateFile = mock(() => undefined);
    const onCreateFile = mock(() => undefined);
    const onAction = mock(() => undefined);

    dispatchCreateFileRequest({
      selfContained: true,
      fileName: "custom-name.md",
      selectedNode,
      internalOnCreateFile,
      onCreateFile,
      onAction,
    });

    expect(internalOnCreateFile).toHaveBeenCalledTimes(1);
    expect(internalOnCreateFile).toHaveBeenCalledWith("custom-name.md");
    expect(onCreateFile).not.toHaveBeenCalled();
    expect(onAction).not.toHaveBeenCalled();
  });
});
