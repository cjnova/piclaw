import type { ComponentChildren, ComponentType } from "preact";
import { lazy, Suspense } from "preact/compat";
import { useSignal } from "@preact/signals";
import type { IconName } from "../Icon";
import { useCallback, useEffect, useMemo, useRef, useState } from "preact/hooks";
import { ActivityBar } from "../ActivityBar";
import { Sidebar } from "../Sidebar";
import { BottomPanel, type PanelPosition } from "../BottomPanel";
import {
  MobileToolbar,
  StatusBar,
  registerStatusBarItem,
  unregisterStatusBarItem,
} from "../StatusBar";
import type { StatusBarFlash } from "../StatusBar/StatusBar";
import { CommandPalette, type CommandPaletteSource } from "../CommandPalette";
import { InfoBar } from "../InfoBar";
import { MainViewHeader } from "./MainViewHeader";
import { Toast } from "../Toast";
import type { WorkspaceConfig } from "../Workspace/types";
import { usePersistedSignal } from "../hooks";
import { type PreviewType, restoreWorkspacePreviewFromPath } from "./workspacePreviewRestore";

const LazyWorkspacePanel = lazy(() => import("../Workspace/WorkspacePanel").then(m => ({ default: m.WorkspacePanel })));
const LazyPdfRenderer = lazy(() => import("../Renderers/PdfRenderer").then((module) => ({ default: module.PdfRenderer })));
import { ContentOverlay } from "../ContentOverlay";
import { renderMarkdown } from "../Renderers/markdown";
import { workspaceFetch } from "../Workspace/workspace-fetch";

export interface ShellPanel {
  id: string;
  icon: IconName;
  label: string;
  mode?: "sidebar" | "main";
  /** Hide this panel from the activity bar. Default: false */
  hidden?: boolean;
  alignBottom?: boolean;
  /** @deprecated Prefer mode: "main" | "sidebar" */
  actionOnly?: boolean;
  component?: ComponentType<any>;
}

export interface ShellControls {
  setMainView: (panelId: string) => void;
  setSidebarPanel: (panelId: string) => void;
  /** @deprecated Prefer setMainView / setSidebarPanel */
  setActivePanel: (panelId: string) => void;
  toggleSidebar: () => void;
  toggleTerminal: () => void;
  showTerminal: () => void;
}

export interface ShellConfig {
  /** Panel definitions for the activity bar + layout regions */
  panels?: ShellPanel[];
  /** Optional workspace sidebar. Pass the base URL where workspace-provider is mounted. */
  workspace?: string | WorkspaceConfig;
  /** Show the bottom/right terminal panel. Default: true */
  showBottomPanel?: boolean;
  /** Show status bar. Default: true */
  showStatusBar?: boolean;
  /** Show command palette (Ctrl+Shift+P). Default: true */
  showCommandPalette?: boolean;
  /** Show info bar. Default: false */
  showInfoBar?: boolean;
  /** Bottom panel default position. Default: "bottom" */
  bottomPanelPosition?: PanelPosition;
  /** Optional status bar flash message */
  statusBarFlash?: StatusBarFlash | null;
  /** Activity bar bottom content (e.g., AccountSwitcher) */
  activityBarBottom?: ComponentChildren;
  /** Keyboard shortcut to toggle terminal. Default: true (Ctrl+`) */
  keyboardShortcuts?: boolean;
  /** LocalStorage prefix for persisting layout state. Default: "preact-shell" */
  storagePrefix?: string;
  /** Optional command palette source */
  commandPaletteSource?: CommandPaletteSource;
  /** Optional hook to control shell state from the app */
  onReady?: (controls: ShellControls) => void;
}

const isLegacyActionOnlyPanel = (panel: ShellPanel): boolean => panel.mode === undefined && panel.actionOnly === true;

const getPanelMode = (panel: ShellPanel): "sidebar" | "main" => {
  if (panel.mode) {
    return panel.mode;
  }

  if (panel.actionOnly) {
    return "main";
  }

  if (panel.component) {
    return "sidebar";
  }

  return "main";
};

const isMainViewPanel = (panel?: ShellPanel): panel is ShellPanel => Boolean(panel && getPanelMode(panel) === "main" && !isLegacyActionOnlyPanel(panel));

const PREVIEW_HASH_KEY = "preview";

interface PreviewState {
  path: string;
  content: string;
  type: PreviewType;
  renderedHtml: string;
  rawUrl: string;
  startEditing?: boolean;
}

function getPreviewPathFromHash(hash: string): string | null {
  const params = new URLSearchParams(hash.startsWith("#") ? hash.slice(1) : hash);
  const value = params.get(PREVIEW_HASH_KEY);

  if (!value) {
    return null;
  }

  const trimmed = value.trim();
  return trimmed ? trimmed : null;
}

function setPreviewPathInHash(path: string | null): void {
  if (typeof window === "undefined") {
    return;
  }

  const params = new URLSearchParams(window.location.hash.startsWith("#") ? window.location.hash.slice(1) : window.location.hash);

  if (path) {
    params.set(PREVIEW_HASH_KEY, path);
  } else {
    params.delete(PREVIEW_HASH_KEY);
  }

  const nextHash = params.toString();
  const normalized = nextHash ? `#${nextHash}` : "";

  if (window.location.hash !== normalized) {
    window.location.hash = normalized;
  }
}

function getEditorLanguageFromPath(filePath: string): string | undefined {
  const fileName = filePath.split("/").pop() ?? filePath;
  const lastDot = fileName.lastIndexOf(".");

  if (lastDot <= 0 || lastDot >= fileName.length - 1) {
    return undefined;
  }

  return fileName.slice(lastDot + 1).toLowerCase();
}

export function Shell({ config, children }: { config: ShellConfig; children?: ComponentChildren }) {
  const storagePrefix = config.storagePrefix ?? "preact-shell";
  const [previewState, setPreviewState] = useState<PreviewState | null>(null);
  const [previewRestoreError, setPreviewRestoreError] = useState<string | null>(null);
  const previewPathRef = useRef<string | null>(null);

  const workspaceBaseUrl = useMemo(() => {
    if (!config.workspace) {
      return "";
    }

    return typeof config.workspace === "string"
      ? config.workspace
      : config.workspace.baseUrl;
  }, [config.workspace]);

  const openPreview = useCallback((path: string, content: string, type: string, rawUrl: string, startEditing = false) => {
    let renderedHtml = "";
    if (type === "markdown") {
      renderedHtml = renderMarkdown(content);
    }

    previewPathRef.current = path;
    setPreviewRestoreError(null);
    setPreviewState({ path, content, type: type as PreviewType, renderedHtml, rawUrl, startEditing });
    setPreviewPathInHash(path);
  }, []);

  const closePreview = useCallback(() => {
    // Clear hash first so hash-sync won't try to restore a stale preview path
    // during the same close cycle.
    previewPathRef.current = null;
    setPreviewPathInHash(null);
    setPreviewState(null);
  }, []);

  const savePreviewContent = useCallback(async (nextContent: string) => {
    if (!previewState) {
      return;
    }

    const path = previewState.path;
    const type = previewState.type;

    setPreviewState((current) => {
      if (!current || current.path !== path) {
        return current;
      }

      return {
        ...current,
        content: nextContent,
        renderedHtml: type === "markdown" ? renderMarkdown(nextContent) : current.renderedHtml,
        startEditing: false,
      };
    });

    if (!workspaceBaseUrl || (type !== "code" && type !== "markdown")) {
      return;
    }

    const fileEndpoint = `${workspaceBaseUrl.replace(/\/+$/, "")}/file`;

    const response = await workspaceFetch(fileEndpoint, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ path, content: nextContent }),
    });

    if (response.status === 404) {
      const createResponse = await workspaceFetch(fileEndpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ path, content: nextContent }),
      });

      if (!createResponse.ok) {
        throw new Error("Failed to create file while saving");
      }

      return;
    }

    if (!response.ok) {
      throw new Error("Failed to save file");
    }
  }, [previewState, workspaceBaseUrl]);

  const WorkspacePanelComponent = useMemo(() => {
    const ws = config.workspace;
    if (!ws) return null;
    const resolved: WorkspaceConfig = typeof ws === "string"
      ? { baseUrl: ws }
      : ws;
    return function ShellWorkspacePanel() {
      return (
        <Suspense fallback={null}>
          <LazyWorkspacePanel {...resolved} onOpenInMain={openPreview} />
        </Suspense>
      );
    };
  }, [config.workspace, openPreview]);

  const restorePreviewFromPath = useCallback(async (path: string) => {
    const restoredPreview = await restoreWorkspacePreviewFromPath({
      workspaceBaseUrl,
      path,
    });

    if (typeof window !== "undefined" && getPreviewPathFromHash(window.location.hash) !== path) {
      return;
    }

    openPreview(path, restoredPreview.content, restoredPreview.type, restoredPreview.rawUrl);
  }, [openPreview, workspaceBaseUrl]);

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    const syncPreviewFromHash = () => {
      const hashPath = getPreviewPathFromHash(window.location.hash);

      if (!hashPath) {
        previewPathRef.current = null;
        setPreviewState((current) => (current ? null : current));
        return;
      }

      if (previewPathRef.current === hashPath) {
        return;
      }

      setPreviewRestoreError(null);

      void restorePreviewFromPath(hashPath).catch(() => {
        setPreviewState(null);
        setPreviewRestoreError(`Couldn't restore preview for ${hashPath}.`);

        if (getPreviewPathFromHash(window.location.hash) === hashPath) {
          setPreviewPathInHash(null);
        }
      });
    };

    syncPreviewFromHash();
    window.addEventListener("hashchange", syncPreviewFromHash);

    return () => {
      window.removeEventListener("hashchange", syncPreviewFromHash);
    };
  }, [restorePreviewFromPath]);

  const panels = useMemo(() => {
    const configuredPanels = config.panels ?? [];

    if (!WorkspacePanelComponent || configuredPanels.some((panel) => panel.id === "workspace")) {
      return configuredPanels;
    }

    const workspacePanel: ShellPanel = {
      id: "workspace",
      icon: "files",
      label: "Workspace",
      mode: "sidebar",
      component: WorkspacePanelComponent,
    };

    const firstSidebarIndex = configuredPanels.findIndex((panel) => getPanelMode(panel) === "sidebar");

    if (firstSidebarIndex < 0) {
      return [workspacePanel, ...configuredPanels];
    }

    return [
      ...configuredPanels.slice(0, firstSidebarIndex),
      workspacePanel,
      ...configuredPanels.slice(firstSidebarIndex),
    ];
  }, [config.panels, config.workspace]);
  const showBottomPanel = config.showBottomPanel ?? true;
  const showStatusBar = config.showStatusBar ?? true;
  const showCommandPalette = config.showCommandPalette ?? true;
  const showInfoBar = config.showInfoBar ?? false;
  const keyboardShortcuts = config.keyboardShortcuts ?? true;

  const defaultMainView = panels.find((panel) => isMainViewPanel(panel))?.id ?? "";
  const defaultSidebarPanel = panels.find((panel) => panel.component && getPanelMode(panel) === "sidebar")?.id ?? "";
  const hasSidebarPanels = panels.some((panel) => getPanelMode(panel) === "sidebar");

  const storedLegacySidebarPanel = typeof window !== "undefined"
    ? window.localStorage.getItem(`${storagePrefix}-active-panel`) || ""
    : "";

  const activeMainView = usePersistedSignal(`${storagePrefix}-active-main-view`, defaultMainView, {
    parse: (value) => value || defaultMainView,
  });
  const activeSidebarPanel = usePersistedSignal(`${storagePrefix}-active-sidebar-panel`, storedLegacySidebarPanel || defaultSidebarPanel, {
    parse: (value) => value || storedLegacySidebarPanel || defaultSidebarPanel,
  });

  const paletteVisible = useSignal(false);
  const terminalVisible = usePersistedSignal(`${storagePrefix}-terminal-visible`, false, {
    parse: (value) => value === "true",
  });
  const terminalHeight = usePersistedSignal(`${storagePrefix}-terminal-height`, 220, {
    parse: (value) => Number(value) || 220,
  });
  const terminalWidth = usePersistedSignal(`${storagePrefix}-terminal-width`, 400, {
    parse: (value) => Number(value) || 400,
  });
  const terminalPosition = usePersistedSignal<PanelPosition>(`${storagePrefix}-terminal-position`, config.bottomPanelPosition || "bottom", {
    parse: (value) => (value as PanelPosition) || config.bottomPanelPosition || "bottom",
  });
  const terminalMaximized = useSignal(false);
  const sidebarCollapsed = usePersistedSignal(`${storagePrefix}-sidebar-collapsed`, !defaultSidebarPanel, {
    parse: (value) => value === "true" || !defaultSidebarPanel,
  });
  const sidebarWidth = usePersistedSignal(`${storagePrefix}-sidebar-width`, 280, {
    parse: (value) => Number(value) || 280,
  });
  const termDragRef = useRef<{ startY: number; startH: number; startX: number; startW: number } | null>(null);

  const findPanel = useCallback(
    (panelId: string) => panels.find((panel) => panel.id === panelId),
    [panels],
  );

  const isSidebarPanel = useCallback((panelId: string) => {
    const panel = findPanel(panelId);
    return Boolean(panel?.component && getPanelMode(panel) === "sidebar");
  }, [findPanel]);

  const isMainPanel = useCallback((panelId: string) => {
    const panel = findPanel(panelId);
    return isMainViewPanel(panel);
  }, [findPanel]);

  const activeSidebarPanelDefinition = useMemo(() => {
    const selectedPanel = findPanel(activeSidebarPanel.value);

    if (selectedPanel?.component && getPanelMode(selectedPanel) === "sidebar") {
      return selectedPanel;
    }

    return findPanel(defaultSidebarPanel) ?? panels.find((panel) => panel.component && getPanelMode(panel) === "sidebar");
  }, [activeSidebarPanel.value, defaultSidebarPanel, findPanel, panels]);

  const activeMainPanelDefinition = useMemo(() => {
    const selectedPanel = findPanel(activeMainView.value);

    if (isMainViewPanel(selectedPanel)) {
      return selectedPanel;
    }

    return findPanel(defaultMainView) ?? panels.find((panel) => isMainViewPanel(panel));
  }, [activeMainView.value, defaultMainView, findPanel, panels]);

  const setSidebarPanel = useCallback((panelId: string) => {
    const panel = findPanel(panelId);

    if (!panel || getPanelMode(panel) !== "sidebar") {
      return;
    }

    activeSidebarPanel.value = panelId;
    sidebarCollapsed.value = false;
  }, [activeSidebarPanel, findPanel, sidebarCollapsed]);

  const setMainView = useCallback((panelId: string) => {
    const panel = findPanel(panelId);

    if (!isMainViewPanel(panel)) {
      return;
    }

    activeMainView.value = panelId;
  }, [activeMainView, findPanel]);

  const showSidebar = useCallback(() => {
    if (!hasSidebarPanels || !defaultSidebarPanel) {
      return;
    }

    if (!isSidebarPanel(activeSidebarPanel.value)) {
      activeSidebarPanel.value = defaultSidebarPanel;
    }

    sidebarCollapsed.value = false;
  }, [activeSidebarPanel, defaultSidebarPanel, hasSidebarPanels, isSidebarPanel, sidebarCollapsed]);

  const handlePanelChange = useCallback((id: string) => {
    const panel = findPanel(id);

    if (!panel) {
      return;
    }

    if (isLegacyActionOnlyPanel(panel)) {
      sidebarCollapsed.value = true;
      return;
    }

    if (getPanelMode(panel) === "sidebar") {
      if (id === activeSidebarPanel.value && !sidebarCollapsed.value) {
        sidebarCollapsed.value = true;
        return;
      }

      activeSidebarPanel.value = id;
      sidebarCollapsed.value = false;
      return;
    }

    if (id === activeMainView.value) {
      activeMainView.value = defaultMainView;
      return;
    }

    activeMainView.value = id;
  }, [activeMainView, activeSidebarPanel, defaultMainView, findPanel, sidebarCollapsed]);

  useEffect(() => {
    const terminalItemId = "shell.terminal";

    if (!showBottomPanel || terminalVisible.value) {
      unregisterStatusBarItem(terminalItemId);
      return;
    }

    registerStatusBarItem({
      id: terminalItemId,
      align: "right",
      priority: 0,
      content: "Terminal",
      compactContent: "Terminal",
      showOnMobile: true,
      onClick: () => {
        terminalVisible.value = true;
      },
    });

    return () => {
      unregisterStatusBarItem(terminalItemId);
    };
  }, [showBottomPanel, terminalVisible.value, terminalVisible]);

  useEffect(() => {
    config.onReady?.({
      setMainView,
      setSidebarPanel,
      setActivePanel: (panelId: string) => {
        const panel = findPanel(panelId);

        if (!panel) {
          return;
        }

        if (isLegacyActionOnlyPanel(panel)) {
          sidebarCollapsed.value = true;
          return;
        }

        if (getPanelMode(panel) === "sidebar") {
          setSidebarPanel(panelId);
          return;
        }

        setMainView(panelId);
      },
      toggleSidebar: () => {
        if (!hasSidebarPanels) {
          return;
        }

        if (sidebarCollapsed.value) {
          showSidebar();
          return;
        }

        sidebarCollapsed.value = true;
      },
      toggleTerminal: () => {
        terminalVisible.value = !terminalVisible.value;
      },
      showTerminal: () => {
        terminalVisible.value = true;
      },
    });
  }, [config.onReady, findPanel, hasSidebarPanels, setMainView, setSidebarPanel, showSidebar, sidebarCollapsed, terminalVisible]);

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    window.localStorage.setItem(`${storagePrefix}-active-panel`, activeSidebarPanel.value);
  }, [activeSidebarPanel.value, storagePrefix]);

  useEffect(() => {
    if (!isMainPanel(activeMainView.value) && defaultMainView) {
      activeMainView.value = defaultMainView;
    }
  }, [activeMainView, activeMainView.value, defaultMainView, isMainPanel]);

  useEffect(() => {
    if (!isSidebarPanel(activeSidebarPanel.value) && defaultSidebarPanel) {
      activeSidebarPanel.value = defaultSidebarPanel;
    }
  }, [activeSidebarPanel, activeSidebarPanel.value, defaultSidebarPanel, isSidebarPanel]);

  useEffect(() => {
    if (!keyboardShortcuts) {
      return;
    }

    const h = (event: KeyboardEvent) => {
      if (
        showBottomPanel
        && event.ctrlKey
        && !event.shiftKey
        && !event.altKey
        && (event.code === "Backquote" || event.key === "`" || event.key === "\u00BA" || event.key === "Dead")
      ) {
        event.preventDefault();
        event.stopPropagation();
        terminalVisible.value = !terminalVisible.value;
        return;
      }

      if (showCommandPalette && event.ctrlKey && event.shiftKey && event.key.toLowerCase() === "p") {
        event.preventDefault();
        paletteVisible.value = !paletteVisible.value;
        return;
      }

      if (event.ctrlKey && !event.shiftKey && event.key.toLowerCase() === "b") {
        event.preventDefault();

        if (!hasSidebarPanels) {
          return;
        }

        if (sidebarCollapsed.value) {
          showSidebar();
          return;
        }

        sidebarCollapsed.value = true;
      }
    };

    window.addEventListener("keydown", h, true);
    return () => window.removeEventListener("keydown", h, true);
  }, [hasSidebarPanels, keyboardShortcuts, paletteVisible, showBottomPanel, showCommandPalette, showSidebar, sidebarCollapsed, terminalVisible]);

  const onTermDragStart = useCallback((event: MouseEvent) => {
    event.preventDefault();

    termDragRef.current = {
      startY: event.clientY,
      startH: terminalMaximized.value ? window.innerHeight * 0.7 : terminalHeight.value,
      startX: event.clientX,
      startW: terminalMaximized.value ? window.innerWidth * 0.4 : terminalWidth.value,
    };

    terminalMaximized.value = false;

    const isRight = terminalPosition.value === "right";

    const onMove = (ev: MouseEvent) => {
      if (!termDragRef.current) {
        return;
      }

      if (isRight) {
        terminalWidth.value = Math.max(
          200,
          Math.min(window.innerWidth * 0.7, termDragRef.current.startW + (termDragRef.current.startX - ev.clientX)),
        );
      } else {
        terminalHeight.value = Math.max(
          120,
          Math.min(window.innerHeight * 0.8, termDragRef.current.startH + (termDragRef.current.startY - ev.clientY)),
        );
      }
    };

    const onUp = () => {
      termDragRef.current = null;
      document.body.style.userSelect = "";
      document.body.style.cursor = "";
      document.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseup", onUp);
    };

    document.body.style.userSelect = "none";
    document.body.style.cursor = isRight ? "col-resize" : "row-resize";
    document.addEventListener("mousemove", onMove);
    document.addEventListener("mouseup", onUp);
  }, [terminalHeight, terminalMaximized, terminalPosition, terminalWidth]);

  const ActiveSidebarPanelComponent = activeSidebarPanelDefinition?.component;
  const ActiveMainPanelComponent = activeMainPanelDefinition?.component;
  const hasChildrenOverride = children !== undefined && children !== null;
  const showMainViewHeader = Boolean(!hasChildrenOverride && ActiveMainPanelComponent && activeMainView.value !== defaultMainView);

  return (
    <div className="app-shell">
      <ActivityBar
        panels={panels.filter((p) => !p.hidden)}
        onPanelChange={handlePanelChange}
        bottomContent={config.activityBarBottom}
      />

      <div className="app-shell__content">
        {showInfoBar && <InfoBar />}

        <div className="app-shell__body">
          {hasSidebarPanels && !sidebarCollapsed.value && activeSidebarPanelDefinition && (
            <div
              className="app-shell__sidebar-wrap"
              style={{
                width: `${sidebarWidth.value}px`,
                minWidth: 160,
                maxWidth: Math.round(window.innerWidth * 0.5),
              }}
            >
              <Sidebar
                title={activeSidebarPanelDefinition.label}
                onClose={() => {
                  sidebarCollapsed.value = true;
                }}
              >
                {ActiveSidebarPanelComponent ? <ActiveSidebarPanelComponent panel={activeSidebarPanelDefinition} /> : null}
              </Sidebar>
            </div>
          )}

          {hasSidebarPanels && !sidebarCollapsed.value && activeSidebarPanelDefinition && (
            <div
              className="splitter-handle"
              onMouseDown={(event) => {
                event.preventDefault();
                const startX = event.clientX;
                const startW = sidebarWidth.value;

                const onMove = (ev: MouseEvent) => {
                  sidebarWidth.value = Math.max(160, Math.min(Math.round(window.innerWidth * 0.5), startW + (ev.clientX - startX)));
                };

                const onUp = () => {
                  document.body.style.userSelect = "";
                  document.body.style.cursor = "";
                  document.removeEventListener("mousemove", onMove);
                  document.removeEventListener("mouseup", onUp);
                };

                document.body.style.userSelect = "none";
                document.body.style.cursor = "col-resize";
                document.addEventListener("mousemove", onMove);
                document.addEventListener("mouseup", onUp);
              }}
            />
          )}

          <main className="main-content">
            {showMainViewHeader && activeMainPanelDefinition && (
              <MainViewHeader
                title={activeMainPanelDefinition.label}
                onClose={() => {
                  activeMainView.value = defaultMainView;
                }}
              />
            )}
            <div className="main-content__body">
              {children ?? (ActiveMainPanelComponent ? <ActiveMainPanelComponent panel={activeMainPanelDefinition} /> : null)}
            </div>
            {previewState && (
              <ContentOverlay
                title={previewState.path.split("/").pop() ?? previewState.path}
                onClose={closePreview}
                mode="document"
                source={previewState.type === "pdf" ? undefined : previewState.content}
                onSave={(content) => {
                  void savePreviewContent(content).catch((error) => {
                    setPreviewRestoreError(error instanceof Error ? error.message : "Failed to save file.");
                  });
                }}
                defaultEditing={Boolean(previewState.startEditing)}
                showDocumentControls={previewState.type !== "pdf"}
                editorLanguage={previewState.type === "code" || previewState.type === "markdown"
                  ? getEditorLanguageFromPath(previewState.path)
                  : undefined}
              >
                {previewState.type === "markdown" ? (
                  <div className="workspace-preview__rendered" dangerouslySetInnerHTML={{ __html: previewState.renderedHtml }} />
                ) : previewState.type === "image" ? (
                  <img src={previewState.rawUrl} alt={previewState.path} className="workspace-preview__image workspace-preview__image--overlay" />
                ) : previewState.type === "pdf" ? (
                  <Suspense fallback={<div className="workspace-preview__message">Loading PDF preview…</div>}>
                    <LazyPdfRenderer src={previewState.rawUrl} mode="document" />
                  </Suspense>
                ) : (
                  <pre className="workspace-preview__pre">{previewState.content}</pre>
                )}
              </ContentOverlay>
            )}
          </main>

          {showBottomPanel && terminalPosition.value === "right" && (
            <BottomPanel
              visible={terminalVisible.value}
              terminalHeight={terminalHeight.value}
              terminalWidth={terminalWidth.value}
              maximized={terminalMaximized.value}
              position="right"
              onResizeStart={onTermDragStart}
              onToggleMaximize={() => {
                terminalMaximized.value = !terminalMaximized.value;
              }}
              onTogglePosition={() => {
                terminalPosition.value = "bottom";
                terminalMaximized.value = false;
              }}
              onClose={() => {
                terminalVisible.value = false;
                terminalMaximized.value = false;
              }}
              onOpenInTab={() => {
                window.open("/terminal.html", "_blank");
              }}
              onPopOut={() => {
                window.open("/terminal.html", "preact-shell-terminal", "width=800,height=600,menubar=no,toolbar=no");
              }}
            />
          )}
        </div>

        {showBottomPanel && terminalPosition.value === "bottom" && (
          <BottomPanel
            visible={terminalVisible.value}
            terminalHeight={terminalHeight.value}
            terminalWidth={terminalWidth.value}
            maximized={terminalMaximized.value}
            position="bottom"
            onResizeStart={onTermDragStart}
            onToggleMaximize={() => {
              terminalMaximized.value = !terminalMaximized.value;
            }}
            onTogglePosition={() => {
              terminalPosition.value = "right";
              terminalMaximized.value = false;
            }}
            onClose={() => {
              terminalVisible.value = false;
              terminalMaximized.value = false;
            }}
            onOpenInTab={() => {
              window.open("/terminal.html", "_blank");
            }}
            onPopOut={() => {
              window.open("/terminal.html", "preact-shell-terminal", "width=800,height=600,menubar=no,toolbar=no");
            }}
          />
        )}

        {showStatusBar && <StatusBar flash={config.statusBarFlash ?? null} />}
        {showStatusBar && <MobileToolbar />}
        <Toast
          visible={Boolean(previewRestoreError)}
          message={previewRestoreError ?? ""}
          type="error"
          onDismiss={() => {
            setPreviewRestoreError(null);
          }}
        />
      </div>

      {showCommandPalette && config.commandPaletteSource && (
        <CommandPalette
          visible={paletteVisible.value}
          onClose={() => {
            paletteVisible.value = false;
          }}
          source={config.commandPaletteSource}
        />
      )}
    </div>
  );
}
