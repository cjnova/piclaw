import { useEffect, useMemo, useRef, useState } from "preact/hooks";
import { Icon } from "../Icon";
import { FileIcon } from "./FileIcon";
import { formatBytes } from "./format-bytes";
import type { FileTreeProps, TreeNode } from "./types";
import { readWorkspaceState, persistWorkspaceState } from "./workspace-state";

const SCROLL_PERSIST_DELAY_MS = 120;

interface TreeEntry {
  node: TreeNode;
  parentPath: string | null;
}

function isHidden(node: TreeNode): boolean {
  return node.name.startsWith(".");
}

function filterTree(nodes: TreeNode[], showHidden: boolean): TreeNode[] {
  return nodes
    .filter((node) => showHidden || !isHidden(node))
    .map((node) => ({
      ...node,
      children: node.children ? filterTree(node.children, showHidden) : undefined,
    }));
}

function collectVisibleEntries(nodes: TreeNode[], expandedPaths: Set<string>, parentPath: string | null, entries: TreeEntry[]) {
  nodes.forEach((node) => {
    entries.push({ node, parentPath });

    if (node.type === "dir" && expandedPaths.has(node.path) && node.children?.length) {
      collectVisibleEntries(node.children, expandedPaths, node.path, entries);
    }
  });
}

function hasPlainTextDragData(dataTransfer: DataTransfer | null): boolean {
  if (!dataTransfer) {
    return false;
  }

  return Array.from(dataTransfer.types).includes("text/plain");
}

export function FileTree({
  nodes,
  selectedPath,
  showHidden = true,
  expandedPaths,
  onSelect,
  onExpand,
  onToggleExpand,
  onMove,
  onRefresh,
  onToggleHidden,
  onCreateFile,
  onAttach,
  canAttach = false,
}: FileTreeProps) {
  const [internalExpandedPaths, setInternalExpandedPaths] = useState<Set<string>>(new Set());
  const [dragOverPath, setDragOverPath] = useState<string | null>(null);
  const treeRef = useRef<HTMLDivElement | null>(null);
  const scrollTimerRef = useRef<number | null>(null);

  const resolvedExpandedPaths = expandedPaths ?? internalExpandedPaths;

  const filteredNodes = useMemo(() => filterTree(nodes, showHidden), [nodes, showHidden]);

  const visibleEntries = useMemo(() => {
    const entries: TreeEntry[] = [];
    collectVisibleEntries(filteredNodes, resolvedExpandedPaths, null, entries);
    return entries;
  }, [filteredNodes, resolvedExpandedPaths]);

  const selectedIndex = useMemo(() => {
    if (!selectedPath) {
      return -1;
    }

    return visibleEntries.findIndex((entry) => entry.node.path === selectedPath);
  }, [visibleEntries, selectedPath]);

  useEffect(() => {
    const tree = treeRef.current;
    if (!tree) {
      return;
    }

    const saved = readWorkspaceState().scrollTop;
    if (typeof saved === "number" && Number.isFinite(saved) && saved >= 0) {
      tree.scrollTop = saved;
    }
  }, []);

  useEffect(() => {
    return () => {
      if (scrollTimerRef.current !== null) {
        window.clearTimeout(scrollTimerRef.current);
      }
    };
  }, []);

  const scheduleScrollPersist = (nextScrollTop: number) => {
    if (scrollTimerRef.current !== null) {
      window.clearTimeout(scrollTimerRef.current);
    }

    scrollTimerRef.current = window.setTimeout(() => {
      persistWorkspaceState({ scrollTop: nextScrollTop });
      scrollTimerRef.current = null;
    }, SCROLL_PERSIST_DELAY_MS);
  };

  const toggleDirectory = (node: TreeNode) => {
    if (expandedPaths) {
      onToggleExpand?.(node);
      return;
    }

    const isExpanded = resolvedExpandedPaths.has(node.path);

    if (!isExpanded) {
      onExpand(node);
    }

    setInternalExpandedPaths((prev) => {
      const next = new Set(prev);

      if (isExpanded) {
        next.delete(node.path);
      } else {
        next.add(node.path);
      }

      return next;
    });
  };

  const moveSelection = (targetIndex: number) => {
    if (targetIndex < 0 || targetIndex >= visibleEntries.length) {
      return;
    }

    const entry = visibleEntries[targetIndex];
    if (entry) {
      onSelect(entry.node);
    }
  };

  const handleKeyDown = (event: KeyboardEvent) => {
    if (!visibleEntries.length) {
      return;
    }

    const currentIndex = selectedIndex >= 0 ? selectedIndex : 0;
    const currentEntry = visibleEntries[currentIndex];

    if (!currentEntry) {
      return;
    }

    if (event.key === "ArrowDown") {
      event.preventDefault();
      moveSelection(Math.min(visibleEntries.length - 1, currentIndex + 1));
      return;
    }

    if (event.key === "ArrowUp") {
      event.preventDefault();
      moveSelection(Math.max(0, currentIndex - 1));
      return;
    }

    if (event.key === "ArrowRight") {
      event.preventDefault();
      const { node } = currentEntry;

      if (node.type !== "dir") {
        return;
      }

      const isExpanded = resolvedExpandedPaths.has(node.path);
      if (!isExpanded) {
        toggleDirectory(node);
        return;
      }

      if (node.children?.length) {
        moveSelection(currentIndex + 1);
      }
      return;
    }

    if (event.key === "ArrowLeft") {
      event.preventDefault();
      const { node, parentPath } = currentEntry;

      if (node.type === "dir" && resolvedExpandedPaths.has(node.path)) {
        toggleDirectory(node);
        return;
      }

      if (parentPath) {
        const parentIndex = visibleEntries.findIndex((entry) => entry.node.path === parentPath);
        moveSelection(parentIndex);
      }
      return;
    }

    if (event.key === "Enter") {
      event.preventDefault();
      const { node } = currentEntry;

      if (node.type === "dir") {
        toggleDirectory(node);
      } else {
        onSelect(node);
      }
    }
  };

  const renderNodes = (treeNodes: TreeNode[]) => (
    <ul className="workspace-tree__children" role="group">
      {treeNodes.map((node) => {
        const isExpanded = node.type === "dir" && resolvedExpandedPaths.has(node.path);
        const isSelected = selectedPath === node.path;

        return (
          <li key={node.path} className="workspace-tree__item" role="treeitem" aria-expanded={node.type === "dir" ? isExpanded : undefined}>
            <div
              role="button"
              tabIndex={0}
              draggable={node.type === "file"}
              className={`workspace-tree__row ${isSelected ? "is-selected" : ""} ${dragOverPath === node.path ? "is-drop-target" : ""}`}
              onClick={() => {
                if (node.type === "dir") {
                  toggleDirectory(node);
                }
                onSelect(node);
              }}
              onDragStart={(event) => {
                if (node.type !== "file") {
                  return;
                }

                event.dataTransfer?.setData("text/plain", node.path);
                if (event.dataTransfer) {
                  event.dataTransfer.effectAllowed = "move";
                }
              }}
              onDragOver={(event) => {
                if (node.type !== "dir") {
                  return;
                }

                if (!hasPlainTextDragData(event.dataTransfer)) {
                  return;
                }

                event.preventDefault();
                if (event.dataTransfer) {
                  event.dataTransfer.dropEffect = "move";
                }

                if (dragOverPath !== node.path) {
                  setDragOverPath(node.path);
                }
              }}
              onDragEnter={(event) => {
                if (node.type !== "dir") {
                  return;
                }

                if (!hasPlainTextDragData(event.dataTransfer)) {
                  return;
                }

                event.preventDefault();
                setDragOverPath(node.path);
              }}
              onDragLeave={(event) => {
                if (node.type !== "dir") {
                  return;
                }

                const relatedTarget = event.relatedTarget;
                if (relatedTarget instanceof Node && event.currentTarget.contains(relatedTarget)) {
                  return;
                }

                if (dragOverPath === node.path) {
                  setDragOverPath(null);
                }
              }}
              onDrop={(event) => {
                if (node.type !== "dir") {
                  return;
                }

                event.preventDefault();

                const sourcePath = event.dataTransfer?.getData("text/plain")?.trim() ?? "";
                if (!sourcePath || sourcePath === node.path) {
                  setDragOverPath(null);
                  return;
                }

                onMove?.(sourcePath, node.path);
                setDragOverPath(null);
              }}
              onDragEnd={() => {
                setDragOverPath(null);
              }}
            >
              <span className="workspace-tree__chevron" aria-hidden="true">
                {node.type === "dir" ? <Icon name={isExpanded ? "chevron-down" : "chevron-right"} size={14} /> : null}
              </span>
              <span className="workspace-tree__file-icon" aria-hidden="true">
                <FileIcon filename={node.name} isFolder={node.type === "dir"} open={isExpanded} size={24} />
              </span>
              <span className="workspace-tree__name">{node.name}</span>
              <span className="workspace-tree__meta">
                {node.type === "dir" && node.childCount != null ? node.childCount : null}
                {node.type === "file" && node.size != null ? formatBytes(node.size) : null}
              </span>
            </div>
            {node.type === "dir" && isExpanded && node.children?.length ? renderNodes(node.children) : null}
          </li>
        );
      })}
    </ul>
  );

  return (
    <div
      ref={treeRef}
      className={`workspace-tree ${dragOverPath === "" ? "is-root-drop-target" : ""}`}
      role="tree"
      tabIndex={0}
      onKeyDown={handleKeyDown}
      onScroll={(event) => {
        scheduleScrollPersist(event.currentTarget.scrollTop);
      }}
      onDragOver={(e) => {
        if (onMove) {
          e.preventDefault();
        }
      }}
      onDragEnter={(e) => {
        if (onMove) {
          e.preventDefault();
          setDragOverPath("");
        }
      }}
      onDragLeave={(e) => {
        if (e.currentTarget === e.target && dragOverPath === "") {
          setDragOverPath(null);
        }
      }}
      onDrop={(e) => {
        e.preventDefault();
        setDragOverPath(null);
        const sourcePath = e.dataTransfer?.getData("text/plain");
        if (sourcePath && onMove) {
          onMove(sourcePath, ".");
        }
      }}
    >
      <div className="workspace-tree__header">
        <span className="workspace-tree__header-title">FILES</span>
        <div className="workspace-tree__header-actions">
          {onCreateFile && (
            <button
              type="button"
              className="workspace-tree__header-btn"
              onClick={onCreateFile}
              title="New file"
              aria-label="New file"
            >
              <Icon name="file-plus" size={24} />
            </button>
          )}
          {onAttach && (
            <button
              type="button"
              className="workspace-tree__header-btn"
              onClick={onAttach}
              title={canAttach ? "Add selected file to chat" : "Select a file to add to chat"}
              aria-label="Add file to chat"
              disabled={!canAttach}
            >
              <Icon name="attach" size={24} />
            </button>
          )}
          {onToggleHidden && (
            <button
              type="button"
              className={`workspace-tree__header-btn ${!showHidden ? "is-active" : ""}`}
              onClick={onToggleHidden}
              title={showHidden ? "Hide dot files" : "Show dot files"}
            >
              <Icon name="filter" size={24} />
            </button>
          )}
          {onRefresh && (
            <button
              type="button"
              className="workspace-tree__header-btn"
              onClick={onRefresh}
              title="Refresh"
            >
              <Icon name="refresh" size={24} />
            </button>
          )}
        </div>
      </div>
      {renderNodes(filteredNodes)}
    </div>
  );
}
