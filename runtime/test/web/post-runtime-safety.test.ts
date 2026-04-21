import { expect, test } from 'bun:test';
import { copyPlainTextSelectionFromElement, writeClipboardDataViaExecCommand } from '../../web/src/components/post-runtime-safety.ts';

test('writeClipboardDataViaExecCommand writes plain text and html through copy event', () => {
  const calls: Array<{ type: string; value: string }> = [];
  let copyHandler: ((event: any) => void) | null = null;
  const host = {
    value: '',
    style: {},
    setAttribute: () => {},
    select: () => {},
    setSelectionRange: () => {},
  };

  const documentLike = {
    body: {
      appendChild: () => {},
      removeChild: () => {},
    },
    createElement: () => host,
    addEventListener: (_type: string, handler: (event: any) => void) => {
      copyHandler = handler;
    },
    removeEventListener: () => {
      copyHandler = null;
    },
    execCommand: (command: string) => {
      expect(command).toBe('copy');
      copyHandler?.({
        clipboardData: {
          setData: (type: string, value: string) => calls.push({ type, value }),
        },
        preventDefault: () => {},
      });
      return true;
    },
  };

  const ok = writeClipboardDataViaExecCommand(documentLike as any, {
    text: 'hello',
    html: '<p>hello</p>',
  });

  expect(ok).toBe(true);
  expect(calls).toEqual([
    { type: 'text/plain', value: 'hello' },
    { type: 'text/html', value: '<p>hello</p>' },
  ]);
});

test('writeClipboardDataViaExecCommand also supports plain-text-only copy payloads', () => {
  const calls: Array<{ type: string; value: string }> = [];
  let copyHandler: ((event: any) => void) | null = null;
  const host = {
    value: '',
    style: {},
    setAttribute: () => {},
    select: () => {},
    setSelectionRange: () => {},
  };

  const documentLike = {
    body: {
      appendChild: () => {},
      removeChild: () => {},
    },
    createElement: () => host,
    addEventListener: (_type: string, handler: (event: any) => void) => {
      copyHandler = handler;
    },
    removeEventListener: () => {
      copyHandler = null;
    },
    execCommand: (command: string) => {
      expect(command).toBe('copy');
      copyHandler?.({
        clipboardData: {
          setData: (type: string, value: string) => calls.push({ type, value }),
        },
        preventDefault: () => {},
      });
      return true;
    },
  };

  const ok = writeClipboardDataViaExecCommand(documentLike as any, {
    text: 'hello',
  });

  expect(ok).toBe(true);
  expect(calls).toEqual([
    { type: 'text/plain', value: 'hello' },
  ]);
});

test('writeClipboardDataViaExecCommand returns false without a usable document', () => {
  expect(writeClipboardDataViaExecCommand(null as any, { text: 'hello', html: '<p>hello</p>' })).toBe(false);
});

test('copyPlainTextSelectionFromElement writes plain text for a code-block selection', () => {
  const calls: Array<{ type: string; value: string }> = [];
  const root = {
    contains: (node: unknown) => node === 'code-node',
  };
  const selection = {
    isCollapsed: false,
    anchorNode: 'code-node',
    focusNode: 'code-node',
    toString: () => 'curl -H "X Test" https://example.com/a b\nnext line',
    rangeCount: 1,
    getRangeAt: () => ({ intersectsNode: (node: unknown) => node === root }),
  };

  const ok = copyPlainTextSelectionFromElement({
    clipboardData: {
      setData: (type: string, value: string) => calls.push({ type, value }),
    },
    preventDefault: () => calls.push({ type: 'preventDefault', value: '' }),
  } as any, { root: root as any, selection: selection as any });

  expect(ok).toBe(true);
  expect(calls).toEqual([
    { type: 'text/plain', value: 'curl -H "X Test" https://example.com/a b\nnext line' },
    { type: 'preventDefault', value: '' },
  ]);
});

test('copyPlainTextSelectionFromElement ignores selections outside the target element', () => {
  const calls: Array<{ type: string; value: string }> = [];
  const root = {
    contains: () => false,
  };
  const selection = {
    isCollapsed: false,
    anchorNode: 'other-node',
    focusNode: 'other-node',
    toString: () => 'should not copy',
    rangeCount: 1,
    getRangeAt: () => ({ intersectsNode: () => false }),
  };

  const ok = copyPlainTextSelectionFromElement({
    clipboardData: {
      setData: (type: string, value: string) => calls.push({ type, value }),
    },
    preventDefault: () => calls.push({ type: 'preventDefault', value: '' }),
  } as any, { root: root as any, selection: selection as any });

  expect(ok).toBe(false);
  expect(calls).toEqual([]);
});
