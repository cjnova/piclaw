export interface ChatSwipeCandidate {
  chat_jid?: unknown;
  archived_at?: unknown;
  is_active?: unknown;
}

export interface ChatSwipeTargetState {
  active: boolean;
  horizontalLocked: boolean;
  cancelled: boolean;
  startX: number;
  startY: number;
  lastX: number;
  lastY: number;
  startedAt: number;
}

export interface ChatSwipeWheelState {
  lastTriggeredAt: number;
  accumX: number;
}

function hasClosest(target: unknown): target is { closest: (selector: string) => Element | null } {
  return Boolean(target && typeof (target as { closest?: unknown }).closest === 'function');
}

export function createChatSwipeTouchState(): ChatSwipeTargetState {
  return {
    active: false,
    horizontalLocked: false,
    cancelled: false,
    startX: 0,
    startY: 0,
    lastX: 0,
    lastY: 0,
    startedAt: 0,
  };
}

export function createChatSwipeWheelState(): ChatSwipeWheelState {
  return {
    lastTriggeredAt: 0,
    accumX: 0,
  };
}

export function resetChatSwipeTouchState(state: ChatSwipeTargetState | null | undefined): void {
  if (!state) return;
  state.active = false;
  state.horizontalLocked = false;
  state.cancelled = false;
  state.startX = 0;
  state.startY = 0;
  state.lastX = 0;
  state.lastY = 0;
  state.startedAt = 0;
}

export function isEligibleChatSwipeTarget(target: unknown): boolean {
  if (!target || !hasClosest(target)) return false;
  const interactiveSelector = [
    'input',
    'textarea',
    'select',
    'button',
    'label',
    'a',
    '[contenteditable="true"]',
    '[role="button"]',
    '[data-no-chat-swipe]',
    '.compose-box',
    '.compose-model-popup',
    '.compose-session-popup',
    '.workspace-explorer',
    '.editor-pane-container',
    '.dock-panel',
    '.terminal-pane-content',
    '.attachment-preview-modal',
    '.rename-branch-overlay',
    '.agent-request-modal',
    '.adaptive-card-container input',
    '.adaptive-card-container textarea',
    '.adaptive-card-container select',
    '.adaptive-card-container button',
  ].join(', ');
  return !target.closest(interactiveSelector);
}

export function resolveSwipeableChatAgents(candidates: unknown, currentChatJid: string): string[] {
  if (!Array.isArray(candidates)) return currentChatJid ? [currentChatJid] : [];
  const seen = new Set<string>();
  const rows = candidates
    .filter((candidate): candidate is ChatSwipeCandidate => Boolean(candidate && typeof candidate === 'object'))
    .filter((candidate) => {
      const chatJid = typeof candidate.chat_jid === 'string' ? candidate.chat_jid.trim() : '';
      if (!chatJid || seen.has(chatJid)) return false;
      if (candidate.archived_at) return false;
      if (chatJid !== currentChatJid && !candidate.is_active) return false;
      seen.add(chatJid);
      return true;
    })
    .map((candidate) => String(candidate.chat_jid).trim());

  if (currentChatJid && !seen.has(currentChatJid)) {
    rows.unshift(currentChatJid);
  }
  return rows;
}

export function resolveAdjacentSwipeChatJid(options: {
  candidates: unknown;
  currentChatJid: string;
  direction: 'next' | 'prev';
}): string | null {
  const rows = resolveSwipeableChatAgents(options.candidates, options.currentChatJid);
  if (rows.length <= 1) return null;
  const currentIndex = rows.indexOf(options.currentChatJid);
  if (currentIndex < 0) return rows[0] ?? null;
  const nextIndex = options.direction === 'next'
    ? (currentIndex + 1) % rows.length
    : (currentIndex - 1 + rows.length) % rows.length;
  return rows[nextIndex] ?? null;
}

export function shouldTriggerTouchChatSwipe(options: {
  dx: number;
  dy: number;
  elapsedMs: number;
  minDistancePx?: number;
  axisRatio?: number;
  maxElapsedMs?: number;
}): boolean {
  const minDistancePx = Number.isFinite(options.minDistancePx) ? Number(options.minDistancePx) : 72;
  const axisRatio = Number.isFinite(options.axisRatio) ? Number(options.axisRatio) : 1.35;
  const maxElapsedMs = Number.isFinite(options.maxElapsedMs) ? Number(options.maxElapsedMs) : 850;
  return Math.abs(options.dx) >= minDistancePx
    && Math.abs(options.dx) > Math.abs(options.dy) * axisRatio
    && options.elapsedMs <= maxElapsedMs;
}
