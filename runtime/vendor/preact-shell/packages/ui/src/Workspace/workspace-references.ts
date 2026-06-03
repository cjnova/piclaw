import type { TreeNode } from "./types";

export const WORKSPACE_ATTACH_EVENT = "preact-shell:workspace-attach";

export interface WorkspaceReference {
  source: "workspace";
  type: "file";
  path: string;
  name: string;
}

export interface WorkspaceAttachEventDetail {
  reference: WorkspaceReference;
}

export function toWorkspaceReference(node: TreeNode): WorkspaceReference {
  if (node.type !== "file") {
    throw new Error("Only files can be referenced in chat.");
  }

  return {
    source: "workspace",
    type: "file",
    path: node.path,
    name: node.name,
  };
}

export function normalizeWorkspaceReferences(references: WorkspaceReference[]): WorkspaceReference[] {
  const deduped = new Map<string, WorkspaceReference>();

  references.forEach((reference) => {
    if (reference.type !== "file") {
      return;
    }

    const key = `${reference.source}:${reference.path}`;
    if (!deduped.has(key)) {
      deduped.set(key, { ...reference, type: "file" });
    }
  });

  return Array.from(deduped.values());
}

export function emitWorkspaceAttach(node: TreeNode): void {
  if (typeof window === "undefined" || node.type !== "file") {
    return;
  }

  const detail: WorkspaceAttachEventDetail = {
    reference: toWorkspaceReference(node),
  };

  window.dispatchEvent(new CustomEvent<WorkspaceAttachEventDetail>(WORKSPACE_ATTACH_EVENT, { detail }));
}

export function subscribeWorkspaceAttach(onAttach: (reference: WorkspaceReference) => void): () => void {
  if (typeof window === "undefined") {
    return () => {};
  }

  const handler = (event: Event) => {
    const customEvent = event as CustomEvent<WorkspaceAttachEventDetail>;
    const reference = customEvent.detail?.reference;

    if (!reference) {
      return;
    }

    onAttach(reference);
  };

  window.addEventListener(WORKSPACE_ATTACH_EVENT, handler as EventListener);

  return () => {
    window.removeEventListener(WORKSPACE_ATTACH_EVENT, handler as EventListener);
  };
}
