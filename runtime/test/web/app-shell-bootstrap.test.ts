import { expect, test } from 'bun:test';

import { configureMarked, installBrowserNoiseFilters, resolveAppApiSurface } from '../../web/src/ui/app-shell-bootstrap.js';

test('configureMarked sets markdown defaults when marked instance is present', () => {
  let captured: Record<string, unknown> | null = null;
  configureMarked({
    setOptions: (options) => {
      captured = options;
    },
  });

  expect(captured).toEqual({
    breaks: true,
    gfm: true,
  });
});

test('installBrowserNoiseFilters suppresses ResizeObserver loop browser noise', () => {
  const listeners: Array<{ type: string; capture: boolean; handler: (event: any) => void }> = [];
  const runtimeWindow = {
    addEventListener: (type: string, handler: (event: any) => void, capture?: boolean) => {
      listeners.push({ type, capture: Boolean(capture), handler });
    },
  } as any;

  installBrowserNoiseFilters(runtimeWindow);
  expect(listeners).toHaveLength(1);
  expect(listeners[0]).toMatchObject({ type: 'error', capture: true });

  let prevented = false;
  let stopped = false;
  listeners[0].handler({
    message: 'ResizeObserver loop completed with undelivered notifications.',
    preventDefault: () => { prevented = true; },
    stopImmediatePropagation: () => { stopped = true; },
  });

  expect(prevented).toBe(true);
  expect(stopped).toBe(true);
});

test('resolveAppApiSurface applies optional fallbacks', async () => {
  const surface = resolveAppApiSurface({
    searchPosts: () => 'search',
    deletePost: () => 'delete',
    getAgents: () => 'agents',
    getAgentThought: () => 'thought',
    setAgentThoughtVisibility: () => 'set-thought',
    getAgentStatus: () => 'status',
    getWorkspaceFile: () => 'workspace',
    getThread: () => 'thread',
    getTimeline: () => 'timeline',
    sendAgentMessage: () => 'send',
    forkChatBranch: () => 'fork',
  });

  expect(typeof surface.getAgentContext).toBe('function');
  expect(typeof surface.getAutoresearchStatus).toBe('function');
  expect(typeof surface.getActiveChatAgents).toBe('function');
  await expect(surface.getAgentQueueState()).resolves.toEqual({ count: 0 });
  await expect(surface.stopAutoresearch()).resolves.toEqual({ status: 'ok' });
});
