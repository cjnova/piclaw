import { useCallback, useEffect } from '../vendor/preact-htm.js';
import { setLocalStorageItem } from '../utils/storage.js';
import { initTheme } from './theme.js';
import { useTimestampRefresh } from './app-helpers.js';
import { watchStandaloneWebAppMode } from './app-resume.js';
import { installStandaloneMobileViewportFix } from './mobile-viewport.js';
import { BTW_SESSION_KEY } from './app-shell-state.js';

interface RefBox<T> {
  current: T;
}

export interface UseAppShellEnvironmentEffectsOptions {
  isRenameBranchFormOpen: boolean;
  renameBranchNameInputRef: RefBox<any>;
  setIsWebAppMode: (next: boolean) => void;
  workspaceOpen: boolean;
  btwSession: any;
  agents: Record<string, unknown> | null | undefined;
  agentsRef: RefBox<Record<string, unknown>>;
  currentChatJid: string;
  activeChatJidRef: RefBox<string>;
  userProfile: any;
  userProfileRef: RefBox<any>;
  brandingRef: RefBox<{ title: string | null; avatarBase: string | null }>;
  panePopoutMode?: boolean;
}

export function persistBtwSession(btwSession: any): void {
  if (!btwSession) {
    setLocalStorageItem(BTW_SESSION_KEY, '');
    return;
  }

  setLocalStorageItem(BTW_SESSION_KEY, JSON.stringify({
    question: btwSession.question || '',
    answer: btwSession.answer || '',
    thinking: btwSession.thinking || '',
    error: btwSession.error || null,
    status: btwSession.status || 'success',
  }));
}

export function shouldApplyBrandingDocumentTitle(options: {
  panePopoutMode?: boolean;
  search?: string | null;
} = {}): boolean {
  if (options.panePopoutMode) return false;
  const search = typeof options.search === 'string' ? options.search : '';
  return !/(?:^|[?&])pane_popout=1(?:&|$)/.test(search);
}

export function useAppShellEnvironmentEffects(options: UseAppShellEnvironmentEffectsOptions) {
  const {
    isRenameBranchFormOpen,
    renameBranchNameInputRef,
    setIsWebAppMode,
    workspaceOpen,
    btwSession,
    agents,
    agentsRef,
    currentChatJid,
    activeChatJidRef,
    userProfile,
    userProfileRef,
    brandingRef,
    panePopoutMode = false,
  } = options;

  useTimestampRefresh(30000);

  useEffect(() => {
    if (!isRenameBranchFormOpen) return;
    requestAnimationFrame(() => {
      if (isRenameBranchFormOpen) {
        renameBranchNameInputRef.current?.focus?.();
        renameBranchNameInputRef.current?.select?.();
      }
    });
  }, [isRenameBranchFormOpen, renameBranchNameInputRef]);

  useEffect(() => initTheme(), []);

  useEffect(() => watchStandaloneWebAppMode(setIsWebAppMode), [setIsWebAppMode]);

  useEffect(() => {
    setLocalStorageItem('workspaceOpen', String(workspaceOpen));
  }, [workspaceOpen]);

  useEffect(() => installStandaloneMobileViewportFix(), []);

  useEffect(() => {
    persistBtwSession(btwSession);
  }, [btwSession]);

  useEffect(() => {
    agentsRef.current = agents || {};
  }, [agents, agentsRef]);

  useEffect(() => {
    activeChatJidRef.current = currentChatJid;
  }, [activeChatJidRef, currentChatJid]);

  useEffect(() => {
    userProfileRef.current = userProfile || { name: 'You', avatar_url: null, avatar_background: null };
  }, [userProfile, userProfileRef]);

  const applyBranding = useCallback((name: string, avatarUrl: string | null, avatarVersion: string | null = null) => {
    if (typeof document === 'undefined') return;

    const title = (name || '').trim() || 'PiClaw';
    if (brandingRef.current.title !== title) {
      if (shouldApplyBrandingDocumentTitle({
        panePopoutMode,
        search: typeof window !== 'undefined' ? window.location.search : '',
      })) {
        document.title = title;
        const titleMeta = document.querySelector('meta[name="apple-mobile-web-app-title"]');
        if (titleMeta && titleMeta.getAttribute('content') !== title) {
          titleMeta.setAttribute('content', title);
        }
      }
      brandingRef.current.title = title;
    }

    const favicon = document.getElementById('dynamic-favicon');
    if (!favicon) return;

    const defaultHref = favicon.getAttribute('data-default') || favicon.getAttribute('href') || '/favicon.ico';
    const baseHref = avatarUrl || defaultHref;
    const avatarKey = avatarUrl ? `${baseHref}|${avatarVersion || ''}` : baseHref;
    if (brandingRef.current.avatarBase !== avatarKey) {
      const cacheBust = avatarUrl
        ? `${baseHref}${baseHref.includes('?') ? '&' : '?'}v=${avatarVersion || Date.now()}`
        : baseHref;
      favicon.setAttribute('href', cacheBust);
      brandingRef.current.avatarBase = avatarKey;
    }
  }, [brandingRef]);

  return {
    applyBranding,
  };
}
