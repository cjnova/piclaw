import { useCallback, useEffect, useMemo, useRef, useState } from '../vendor/preact-htm.js';
import { consumeEditorPopoutState, consumePanePopoutTransferToken, type EditorPopoutTransferState } from '../panes/editor-popout-transfer.js';
import {
  createPaneDetachTransferParams,
  generatePaneDetachId,
  hasPaneDetachTransferState,
  readPaneDetachTransferState,
  type PaneDetachTransferState,
} from '../panes/pane-detach-transfer.js';
import { paneRegistry, tabStore } from '../panes/index.js';
import {
  getPanePopoutTitle,
  hasPanePopoutMenuActions,
  isVncPanePopoutPath,
  resolveActivePaneOverrideId,
  resolveActivePaneTab,
  shouldHidePanePopoutControls,
  shouldShowEditorPaneContainer,
} from './app-pane-state.js';

interface UsePaneRuntimeOrchestrationOptions {
  panePopoutMode: boolean;
  panePopoutPath: string;
  panePopoutLabel: string;
  chatOnlyMode: boolean;
  editorOpen: boolean;
  tabStripTabs: any[];
  tabStripActiveId: string | null;
  previewTabs: Set<string>;
  tabPaneOverrides: Map<string, string> | Record<string, string>;
  terminalTabPath: string;
  vncTabPrefix: string;
  openEditor: (path: string, options?: Record<string, unknown>) => void;
  closeEditor: () => void;
  getWorkspaceFile: (path: string, maxBytes: number, mode: string) => Promise<any>;
}

interface DetachedPaneState {
  panePath: string;
  paneInstanceId: string;
  ownerWindowId: string;
  detachedAt: string;
  label?: string | null;
}

interface ReattachPaneOptions {
  closeDetachedWindow?: boolean;
}

function normalizeChangedPaths(update: any): string[] {
  const changedPaths = Array.isArray(update?.changed_paths)
    ? update.changed_paths
      .map((value: unknown) => (typeof value === 'string' ? value.trim() : ''))
      .filter(Boolean)
    : [];

  if (changedPaths.length > 0) {
    return changedPaths;
  }

  const fallbackPath = typeof update?.path === 'string' ? update.path.trim() : '';
  return fallbackPath ? [fallbackPath] : ['.'];
}

export function isWorkspaceUpdateRelevantForPath(activePath: string, updates: unknown): boolean {
  if (!activePath) return false;
  if (!Array.isArray(updates) || updates.length === 0) return true;

  return updates.some((update) => {
    const changedPaths = normalizeChangedPaths(update);
    return changedPaths.some((changedPath) => changedPath === '.' || changedPath === activePath);
  });
}

export function usePaneRuntimeOrchestration(options: UsePaneRuntimeOrchestrationOptions) {
  const {
    panePopoutMode,
    panePopoutPath,
    panePopoutLabel,
    chatOnlyMode,
    editorOpen,
    tabStripTabs,
    tabStripActiveId,
    previewTabs,
    tabPaneOverrides,
    terminalTabPath,
    vncTabPrefix,
    openEditor,
    closeEditor,
    getWorkspaceFile,
  } = options;

  const editorContainerRef = useRef<any>(null);
  const editorInstanceRef = useRef<any>(null);
  const dockContainerRef = useRef<any>(null);
  const dockInstanceRef = useRef<any>(null);

  const pendingEditorPopoutTransferRef = useRef<EditorPopoutTransferState | null>((() => {
    if (!panePopoutMode) return null;
    const token = consumePanePopoutTransferToken('editor_popout');
    return consumeEditorPopoutState(token);
  })());
  const paneDetachTransferRef = useRef<PaneDetachTransferState>(readPaneDetachTransferState({
    search: typeof window !== 'undefined' ? window.location.search : '',
    panePath: panePopoutPath,
    paneLabel: panePopoutLabel,
  }));
  const currentWindowIdRef = useRef<string>(paneDetachTransferRef.current.paneWindowId || generatePaneDetachId('pane-window'));
  const tabPaneInstanceIdsRef = useRef<Map<string, string>>(new Map());
  const dockPaneInstanceIdRef = useRef<string>(generatePaneDetachId('pane-instance'));
  const detachedWindowHandlesRef = useRef<Map<string, any>>(new Map());
  const [detachedTabs, setDetachedTabs] = useState<Map<string, DetachedPaneState>>(() => new Map());
  const detachedTabsRef = useRef(detachedTabs);
  detachedTabsRef.current = detachedTabs;
  const [detachedDockPane, setDetachedDockPane] = useState<DetachedPaneState | null>(null);
  const detachedDockPaneRef = useRef<DetachedPaneState | null>(detachedDockPane);
  detachedDockPaneRef.current = detachedDockPane;

  const hasDockPanes = paneRegistry.getDockPanes().length > 0;
  const [dockVisible, setDockVisible] = useState(false);
  const toggleDock = useCallback(() => setDockVisible((visible) => !visible), []);

  const openTerminalTab = useCallback(() => {
    openEditor(terminalTabPath, { label: 'Terminal' });
  }, [openEditor, terminalTabPath]);

  const openVncTab = useCallback(() => {
    openEditor(vncTabPrefix, { label: 'VNC' });
  }, [openEditor, vncTabPrefix]);

  const ensurePaneInstanceId = useCallback((panePath: string) => {
    const normalizedPath = typeof panePath === 'string' ? panePath.trim() : '';
    if (!normalizedPath) return generatePaneDetachId('pane-instance');
    if (normalizedPath === terminalTabPath) {
      if (!dockPaneInstanceIdRef.current) {
        dockPaneInstanceIdRef.current = generatePaneDetachId('pane-instance');
      }
      return dockPaneInstanceIdRef.current;
    }
    const existing = tabPaneInstanceIdsRef.current.get(normalizedPath);
    if (existing) return existing;
    const next = generatePaneDetachId('pane-instance');
    tabPaneInstanceIdsRef.current.set(normalizedPath, next);
    return next;
  }, [terminalTabPath]);

  const activeDetachedTab = useMemo(
    () => (!panePopoutMode && tabStripActiveId ? detachedTabs.get(tabStripActiveId) || null : null),
    [detachedTabs, panePopoutMode, tabStripActiveId],
  );
  const dockPaneDetached = !panePopoutMode ? detachedDockPane : null;

  const clearDetachedPane = useCallback((panePath: string) => {
    if (!panePath) return;
    detachedWindowHandlesRef.current.delete(panePath);
    if (panePath === terminalTabPath) {
      setDetachedDockPane((current) => (current?.panePath === panePath ? null : current));
      return;
    }
    setDetachedTabs((current) => {
      if (!current.has(panePath)) return current;
      const next = new Map(current);
      next.delete(panePath);
      return next;
    });
  }, [terminalTabPath]);

  const reattachPane = useCallback((panePath: string, options: ReattachPaneOptions = {}) => {
    const normalizedPath = typeof panePath === 'string' ? panePath.trim() : '';
    if (!normalizedPath) return false;

    const handle = detachedWindowHandlesRef.current.get(normalizedPath);
    clearDetachedPane(normalizedPath);

    if (normalizedPath === terminalTabPath) {
      setDockVisible(true);
    } else {
      const activeTab = tabStore.get(normalizedPath);
      if (activeTab) {
        tabStore.activate(normalizedPath);
      } else {
        openEditor(normalizedPath);
      }
    }

    if (options.closeDetachedWindow !== false && handle && typeof handle.close === 'function') {
      try {
        handle.close();
      } catch {
        /* expected: detached window may already be closing or gone. */
      }
    }

    return true;
  }, [clearDetachedPane, openEditor, terminalTabPath]);

  const buildPaneDetachTransfer = useCallback((panePath: string) => {
    const normalizedPath = typeof panePath === 'string' ? panePath.trim() : '';
    if (!normalizedPath) return null;
    const paneInstanceId = ensurePaneInstanceId(normalizedPath);
    const paneWindowId = generatePaneDetachId('pane-window');
    return {
      paneInstanceId,
      paneWindowId,
      params: createPaneDetachTransferParams({
        paneInstanceId,
        paneWindowId,
        paneSourceWindowId: currentWindowIdRef.current,
      }),
    };
  }, [ensurePaneInstanceId]);

  const registerDetachedPaneWindow = useCallback((panePath: string, label?: string | null, openedWindow?: any, detachParams?: Record<string, string> | null) => {
    const normalizedPath = typeof panePath === 'string' ? panePath.trim() : '';
    if (!normalizedPath || !detachParams) return;
    const paneInstanceId = typeof detachParams.pane_instance_id === 'string' ? detachParams.pane_instance_id.trim() : '';
    const ownerWindowId = typeof detachParams.pane_window_id === 'string' ? detachParams.pane_window_id.trim() : '';
    if (!paneInstanceId || !ownerWindowId) return;

    const nextState: DetachedPaneState = {
      panePath: normalizedPath,
      paneInstanceId,
      ownerWindowId,
      detachedAt: new Date().toISOString(),
      label: typeof label === 'string' && label.trim() ? label.trim() : null,
    };

    detachedWindowHandlesRef.current.set(normalizedPath, openedWindow || null);
    if (normalizedPath === terminalTabPath) {
      setDetachedDockPane(nextState);
      setDockVisible(true);
      return;
    }

    setDetachedTabs((current) => {
      const next = new Map(current);
      next.set(normalizedPath, nextState);
      return next;
    });
    tabStore.activate(normalizedPath);
  }, [terminalTabPath]);

  const requestPanePopoutReattach = useCallback(() => {
    if (!panePopoutMode) return false;
    const detachState = paneDetachTransferRef.current;
    if (!hasPaneDetachTransferState(detachState)) return false;
    if (typeof window === 'undefined' || !window.opener || window.opener.closed) return false;

    try {
      window.opener.postMessage({
        type: 'piclaw-pane-reattach-request',
        panePath: detachState.panePath,
        paneInstanceId: detachState.paneInstanceId,
      }, window.location.origin);
    } catch {
      return false;
    }

    try {
      window.close();
    } catch {
      /* expected: some browsers ignore scripted close attempts. */
    }
    return true;
  }, [panePopoutMode]);

  const activePaneTab = useMemo(
    () => resolveActivePaneTab(tabStripTabs, tabStripActiveId),
    [tabStripActiveId, tabStripTabs],
  );

  const activePaneOverrideId = useMemo(
    () => resolveActivePaneOverrideId(tabPaneOverrides, tabStripActiveId),
    [tabPaneOverrides, tabStripActiveId],
  );

  const panePopoutTitle = useMemo(
    () => getPanePopoutTitle(panePopoutLabel, activePaneTab, panePopoutPath),
    [activePaneTab, panePopoutLabel, panePopoutPath],
  );

  const panePopoutHasMenuActions = useMemo(
    () => hasPanePopoutMenuActions(tabStripTabs, previewTabs, tabStripActiveId),
    [previewTabs, tabStripActiveId, tabStripTabs],
  );

  const isVncPanePopout = useMemo(
    () => isVncPanePopoutPath(panePopoutPath, vncTabPrefix),
    [panePopoutPath, vncTabPrefix],
  );

  const hidePanePopoutControls = useMemo(
    () => shouldHidePanePopoutControls(panePopoutPath, terminalTabPath, panePopoutHasMenuActions, isVncPanePopout),
    [isVncPanePopout, panePopoutHasMenuActions, panePopoutPath, terminalTabPath],
  );

  const showEditorPaneContainer = shouldShowEditorPaneContainer(
    panePopoutMode,
    chatOnlyMode,
    editorOpen,
    hasDockPanes,
    dockVisible,
  );

  const [zenMode, setZenMode] = useState(false);
  const zenDockWasVisibleRef = useRef(false);

  const enterZenMode = useCallback(() => {
    if (!editorOpen || chatOnlyMode) return;
    zenDockWasVisibleRef.current = dockVisible;
    if (dockVisible) setDockVisible(false);
    setZenMode(true);
  }, [chatOnlyMode, dockVisible, editorOpen]);

  const exitZenMode = useCallback(() => {
    if (!zenMode) return;
    setZenMode(false);
    if (zenDockWasVisibleRef.current) {
      setDockVisible(true);
      zenDockWasVisibleRef.current = false;
    }
  }, [zenMode]);

  const toggleZenMode = useCallback(() => {
    if (zenMode) {
      exitZenMode();
      return;
    }
    enterZenMode();
  }, [enterZenMode, exitZenMode, zenMode]);

  useEffect(() => {
    if (zenMode && !editorOpen) {
      exitZenMode();
    }
  }, [editorOpen, exitZenMode, zenMode]);

  useEffect(() => {
    const openTabIds = new Set(tabStripTabs.map((tab) => tab.id));
    for (const path of Array.from(tabPaneInstanceIdsRef.current.keys())) {
      if (!openTabIds.has(path)) {
        tabPaneInstanceIdsRef.current.delete(path);
      }
    }
    setDetachedTabs((current) => {
      let changed = false;
      const next = new Map(current);
      for (const path of Array.from(next.keys())) {
        if (!openTabIds.has(path)) {
          next.delete(path);
          detachedWindowHandlesRef.current.delete(path);
          changed = true;
        }
      }
      return changed ? next : current;
    });
  }, [tabStripTabs]);

  useEffect(() => {
    if (panePopoutMode || typeof window === 'undefined') return undefined;

    const handleMessage = (event: MessageEvent) => {
      if (event.origin !== window.location.origin) return;
      const payload = event.data;
      if (!payload || payload.type !== 'piclaw-pane-reattach-request') return;
      const panePath = typeof payload.panePath === 'string' ? payload.panePath.trim() : '';
      if (!panePath) return;
      if (panePath === terminalTabPath) {
        const detached = detachedDockPaneRef.current;
        if (!detached) return;
        if (payload.paneInstanceId && payload.paneInstanceId !== detached.paneInstanceId) return;
        reattachPane(panePath, { closeDetachedWindow: false });
        return;
      }
      const detached = detachedTabsRef.current.get(panePath);
      if (!detached) return;
      if (payload.paneInstanceId && payload.paneInstanceId !== detached.paneInstanceId) return;
      reattachPane(panePath, { closeDetachedWindow: false });
    };

    window.addEventListener('message', handleMessage);
    return () => window.removeEventListener('message', handleMessage);
  }, [panePopoutMode, reattachPane, terminalTabPath]);

  useEffect(() => {
    if (panePopoutMode) return undefined;
    const timer = setInterval(() => {
      for (const [panePath, handle] of detachedWindowHandlesRef.current.entries()) {
        if (handle && handle.closed) {
          reattachPane(panePath, { closeDetachedWindow: false });
        }
      }
    }, 750);
    return () => clearInterval(timer);
  }, [panePopoutMode, reattachPane]);

  useEffect(() => {
    if (!panePopoutMode || !panePopoutPath) return;
    const activeId = tabStore.getActiveId();
    if (activeId === panePopoutPath) return;
    const transfer = pendingEditorPopoutTransferRef.current?.path === panePopoutPath
      ? pendingEditorPopoutTransferRef.current
      : null;
    openEditor(panePopoutPath, {
      ...(panePopoutLabel ? { label: panePopoutLabel } : {}),
      ...(transfer?.paneOverrideId ? { paneOverrideId: transfer.paneOverrideId } : {}),
      ...(transfer?.viewState ? { viewState: transfer.viewState } : {}),
    });
  }, [openEditor, panePopoutLabel, panePopoutMode, panePopoutPath]);

  useEffect(() => {
    const container = editorContainerRef.current;
    if (!container) return;

    if (editorInstanceRef.current) {
      editorInstanceRef.current.dispose();
      editorInstanceRef.current = null;
    }

    const activeId = tabStripActiveId;
    if (!activeId) return;
    if (!panePopoutMode && activeDetachedTab?.panePath === activeId) {
      container.innerHTML = '';
      return;
    }

    const pendingTransfer = pendingEditorPopoutTransferRef.current?.path === activeId
      ? pendingEditorPopoutTransferRef.current
      : null;
    const effectivePaneOverrideId = activePaneOverrideId || pendingTransfer?.paneOverrideId || null;
    const context = {
      path: activeId,
      mode: 'edit',
      ...(pendingTransfer?.content !== undefined ? { content: pendingTransfer.content } : {}),
      ...(pendingTransfer?.mtime !== undefined ? { mtime: pendingTransfer.mtime } : {}),
    };
    const ext = (effectivePaneOverrideId ? paneRegistry.get(effectivePaneOverrideId) : null)
      || paneRegistry.resolve(context)
      || paneRegistry.get('editor');

    if (!ext) {
      container.innerHTML = '<div style="padding:2em;color:var(--text-secondary);text-align:center;">No editor available for this file.</div>';
      return;
    }

    const instance = ext.mount(container, context);
    editorInstanceRef.current = instance;

    instance.onDirtyChange?.((dirty: boolean) => {
      tabStore.setDirty(activeId, dirty);
    });

    instance.onSaveRequest?.(() => {
      // Save is handled internally by pane extensions.
    });

    instance.onClose?.(() => {
      closeEditor();
    });

    const viewState = tabStore.getViewState(activeId);
    if (viewState && typeof instance.restoreViewState === 'function') {
      requestAnimationFrame(() => instance.restoreViewState(viewState));
    }

    if (typeof instance.onViewStateChange === 'function') {
      instance.onViewStateChange((state: unknown) => {
        tabStore.saveViewState(activeId, state);
      });
    }

    requestAnimationFrame(() => instance.focus?.());

    if (pendingTransfer) {
      pendingEditorPopoutTransferRef.current = null;
    }

    return () => {
      if (editorInstanceRef.current === instance) {
        instance.dispose();
        editorInstanceRef.current = null;
      }
    };
  }, [activeDetachedTab, activePaneOverrideId, closeEditor, panePopoutMode, tabStripActiveId]);

  const refreshActiveEditorFromWorkspace = useCallback(async (updates: unknown) => {
    const activePath = typeof tabStripActiveId === 'string' ? tabStripActiveId.trim() : '';
    const instance = editorInstanceRef.current;
    if (!activePath || !instance?.setContent) return;
    if (typeof instance.isDirty === 'function' && instance.isDirty()) return;
    if (!isWorkspaceUpdateRelevantForPath(activePath, updates)) return;

    try {
      const payload = await getWorkspaceFile(activePath, 1_000_000, 'edit');
      const nextText = typeof payload?.text === 'string' ? payload.text : '';
      const nextMtime = typeof payload?.mtime === 'string' && payload.mtime.trim()
        ? payload.mtime.trim()
        : new Date().toISOString();
      instance.setContent(nextText, nextMtime);
    } catch (error) {
      console.warn('[workspace_update] Failed to refresh active pane:', error);
    }
  }, [getWorkspaceFile, tabStripActiveId]);

  useEffect(() => {
    const container = dockContainerRef.current;

    if (dockInstanceRef.current) {
      dockInstanceRef.current.dispose();
      dockInstanceRef.current = null;
    }

    if (!container || !hasDockPanes || !dockVisible) return;
    if (!panePopoutMode && dockPaneDetached?.panePath === terminalTabPath) {
      container.innerHTML = '';
      return;
    }

    const ext = paneRegistry.getDockPanes()[0];
    if (!ext) {
      container.innerHTML = '<div class="terminal-placeholder">No dock pane available.</div>';
      return;
    }

    const instance = ext.mount(container, { mode: 'view' });
    dockInstanceRef.current = instance;
    requestAnimationFrame(() => instance.focus?.());

    return () => {
      if (dockInstanceRef.current === instance) {
        instance.dispose();
        dockInstanceRef.current = null;
      }
    };
  }, [dockPaneDetached, dockVisible, hasDockPanes, panePopoutMode, terminalTabPath]);

  return {
    editorContainerRef,
    editorInstanceRef,
    dockContainerRef,
    dockInstanceRef,
    hasDockPanes,
    dockVisible,
    setDockVisible,
    toggleDock,
    openTerminalTab,
    openVncTab,
    panePopoutTitle,
    panePopoutHasMenuActions,
    hidePanePopoutControls,
    showEditorPaneContainer,
    zenMode,
    exitZenMode,
    toggleZenMode,
    refreshActiveEditorFromWorkspace,
    detachedTabs,
    activeDetachedTab,
    detachedDockPane: dockPaneDetached,
    buildPaneDetachTransfer,
    registerDetachedPaneWindow,
    reattachPane,
    requestPanePopoutReattach,
    canReattachPanePopout: panePopoutMode && hasPaneDetachTransferState(paneDetachTransferRef.current),
  };
}
