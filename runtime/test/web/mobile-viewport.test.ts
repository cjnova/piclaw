import { expect, test } from 'bun:test';

import {
  readViewportHeight,
  shouldUseStandaloneMobileViewportFix,
  syncStandaloneMobileViewport,
} from '../../web/src/ui/mobile-viewport.js';

test('shouldUseStandaloneMobileViewportFix enables for mobile runtimes and skips desktop runtimes', () => {
  expect(shouldUseStandaloneMobileViewportFix({
    navigator: {
      standalone: true,
      userAgent: 'Mozilla/5.0 (iPad; CPU OS 17_0 like Mac OS X)',
      maxTouchPoints: 5,
    },
    window: {
      matchMedia: () => ({ matches: true }),
    },
  })).toBe(true);

  expect(shouldUseStandaloneMobileViewportFix({
    navigator: {
      standalone: false,
      userAgent: 'Mozilla/5.0 (iPhone; CPU iPhone OS 17_0 like Mac OS X)',
      maxTouchPoints: 5,
    },
    window: {
      matchMedia: () => ({ matches: true }),
    },
  })).toBe(true);

  expect(shouldUseStandaloneMobileViewportFix({
    navigator: {
      standalone: false,
      userAgent: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 14_0)',
      maxTouchPoints: 0,
    },
    window: {
      matchMedia: () => ({ matches: false }),
    },
  })).toBe(false);
});

test('readViewportHeight uses innerHeight by default and can include offsetTop when requested', () => {
  expect(readViewportHeight({
    window: {
      visualViewport: { height: 612.4 },
      innerHeight: 900,
    },
  })).toBe(900);

  expect(readViewportHeight({
    window: {
      visualViewport: { height: 612.4, offsetTop: 28.2 },
      innerHeight: 900,
    },
  })).toBe(900);

  expect(readViewportHeight({
    window: {
      visualViewport: { height: 612.4, offsetTop: 28.2 },
      innerHeight: 900,
    },
  }, { includeOffsetTop: true })).toBe(641);

  expect(readViewportHeight({
    window: {
      visualViewport: { height: 612.4 },
    },
  })).toBe(612);
});

test('syncStandaloneMobileViewport writes full innerHeight when no text entry is focused', () => {
  const cssVars = new Map<string, string>();
  const windowScrolls: Array<[number, number]> = [];
  const scrollingElement = { scrollTop: 91, scrollLeft: 17 };
  const documentElement = {
    scrollTop: 33,
    scrollLeft: 8,
    dataset: {},
    style: {
      setProperty: (name: string, value: string) => cssVars.set(name, value),
    },
  };
  const body = { scrollTop: 19, scrollLeft: 7 };
  const activeElement = { tagName: 'DIV', isContentEditable: false };

  const height = syncStandaloneMobileViewport({
    navigator: {
      standalone: false,
      userAgent: 'Mozilla/5.0 (iPhone; CPU iPhone OS 17_0 like Mac OS X)',
      maxTouchPoints: 5,
    },
    window: {
      matchMedia: () => ({ matches: true }),
      visualViewport: { height: 701.9, offsetTop: 28.2 },
      innerHeight: 900,
      scrollTo: (x: number, y: number) => windowScrolls.push([x, y]),
    },
    document: {
      documentElement,
      body,
      scrollingElement,
      activeElement,
    },
  });

  expect(height).toBe(900);
  expect(cssVars.get('--app-height')).toBe('900px');
  expect((documentElement as any).dataset.mobileViewport).toBe('dynamic');
  expect(windowScrolls).toEqual([]);
  expect(scrollingElement.scrollTop).toBe(91);
  expect(scrollingElement.scrollLeft).toBe(17);
  expect(documentElement.scrollTop).toBe(33);
  expect(documentElement.scrollLeft).toBe(8);
  expect(body.scrollTop).toBe(19);
  expect(body.scrollLeft).toBe(7);
});

test('syncStandaloneMobileViewport can include offsetTop for focused text entry and reset scroll when explicitly requested', () => {
  const cssVars = new Map<string, string>();
  const windowScrolls: Array<[number, number]> = [];
  const scrollingElement = { scrollTop: 91, scrollLeft: 17 };
  const documentElement = {
    scrollTop: 33,
    scrollLeft: 8,
    dataset: {},
    style: {
      setProperty: (name: string, value: string) => cssVars.set(name, value),
    },
  };
  const body = { scrollTop: 19, scrollLeft: 7 };
  const activeElement = { tagName: 'TEXTAREA', isContentEditable: false };

  const height = syncStandaloneMobileViewport({
    navigator: {
      standalone: false,
      userAgent: 'Mozilla/5.0 (iPhone; CPU iPhone OS 17_0 like Mac OS X)',
      maxTouchPoints: 5,
    },
    window: {
      matchMedia: () => ({ matches: true }),
      visualViewport: { height: 701.9, offsetTop: 28.2 },
      innerHeight: 900,
      scrollTo: (x: number, y: number) => windowScrolls.push([x, y]),
    },
    document: {
      documentElement,
      body,
      scrollingElement,
      activeElement,
    },
  }, { resetScroll: true });

  expect(height).toBe(730);
  expect(cssVars.get('--app-height')).toBe('730px');
  expect((documentElement as any).dataset.mobileViewport).toBe('dynamic');
  expect(windowScrolls).toEqual([[0, 0]]);
  expect(scrollingElement.scrollTop).toBe(0);
  expect(scrollingElement.scrollLeft).toBe(0);
  expect(documentElement.scrollTop).toBe(0);
  expect(documentElement.scrollLeft).toBe(0);
  expect(body.scrollTop).toBe(0);
  expect(body.scrollLeft).toBe(0);
});
