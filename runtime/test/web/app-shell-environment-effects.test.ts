import { afterEach, expect, test } from 'bun:test';

import {
  RESUME_LAYOUT_SETTLING_CLASS,
  persistBtwSession,
  scheduleResumeLayoutSettling,
  shouldApplyBrandingDocumentTitle,
} from '../../web/src/ui/app-shell-environment-effects.js';
import { BTW_SESSION_KEY } from '../../web/src/ui/app-shell-state.js';

const originalWindow = (globalThis as any).window;

afterEach(() => {
  (globalThis as any).window = originalWindow;
});

test('persistBtwSession stores normalized side-session payload', () => {
  const writes = new Map<string, string>();
  (globalThis as any).window = {
    localStorage: {
      setItem: (key: string, value: string) => {
        writes.set(key, value);
      },
    },
  };

  persistBtwSession({
    question: 'Q',
    answer: 'A',
    thinking: 'T',
    error: null,
    status: 'running',
  });

  expect(writes.has(BTW_SESSION_KEY)).toBe(true);
  const parsed = JSON.parse(writes.get(BTW_SESSION_KEY) || '{}');
  expect(parsed).toEqual({
    question: 'Q',
    answer: 'A',
    thinking: 'T',
    error: null,
    status: 'running',
  });
});

test('shouldApplyBrandingDocumentTitle skips title overrides in pane popouts', () => {
  expect(shouldApplyBrandingDocumentTitle()).toBe(true);
  expect(shouldApplyBrandingDocumentTitle({ panePopoutMode: true })).toBe(false);
  expect(shouldApplyBrandingDocumentTitle({ search: '?pane_popout=1&pane_path=AGENTS.md' })).toBe(false);
});

test('scheduleResumeLayoutSettling applies and later clears the settling class', () => {
  const classes = new Set<string>();
  const element = {
    classList: {
      add: (value: string) => { classes.add(value); },
      remove: (value: string) => { classes.delete(value); },
    },
  } as any;
  const queued: Array<() => void> = [];

  scheduleResumeLayoutSettling(element, {
    durationMs: 220,
    scheduleTimeout: ((callback: () => void) => {
      queued.push(callback);
      return callback as any;
    }) as any,
    clearScheduledTimeout: (() => {}) as any,
  });

  expect(classes.has(RESUME_LAYOUT_SETTLING_CLASS)).toBe(true);
  queued.shift()?.();
  expect(classes.has(RESUME_LAYOUT_SETTLING_CLASS)).toBe(false);
});

test('persistBtwSession clears storage when no session exists', () => {
  const writes = new Map<string, string>();
  (globalThis as any).window = {
    localStorage: {
      setItem: (key: string, value: string) => {
        writes.set(key, value);
      },
    },
  };

  persistBtwSession(null);
  expect(writes.get(BTW_SESSION_KEY)).toBe('');
});
