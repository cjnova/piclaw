import { expect, test } from 'bun:test';

import {
  claimPaneLiveTransfer,
  clearPaneLiveTransferForPath,
  registerPaneLiveTransfer,
} from '../../web/src/panes/pane-live-transfer.js';

function createWindowLike() {
  return {} as any;
}

test('registerPaneLiveTransfer only accepts panes with a live moveHost capability', () => {
  const runtimeWindow = createWindowLike();
  expect(registerPaneLiveTransfer({
    panePath: '/workspace/notes.md',
    paneInstanceId: 'pane-inst-1',
    paneWindowId: 'pane-win-1',
    instance: { getContent: () => '# Draft', isDirty: () => true, focus: () => undefined, dispose: () => undefined } as any,
  }, runtimeWindow)).toBe(false);
});

test('claimPaneLiveTransfer moves the registered pane instance and releases the source host', async () => {
  const runtimeWindow = createWindowLike();
  const moveCalls: any[] = [];
  const releaseCalls: string[] = [];
  const instance = {
    moveHost: async (container: HTMLElement, context: any) => {
      moveCalls.push({ container, context });
      return true;
    },
  } as any;

  expect(registerPaneLiveTransfer({
    panePath: '/workspace/notes.md',
    paneInstanceId: 'pane-inst-1',
    paneWindowId: 'pane-win-1',
    instance,
    releaseSourceHost: () => releaseCalls.push('released'),
  }, runtimeWindow)).toBe(true);

  const container = { id: 'target' } as any as HTMLElement;
  await expect(claimPaneLiveTransfer(runtimeWindow, {
    panePath: '/workspace/notes.md',
    paneInstanceId: 'pane-inst-1',
    paneWindowId: 'pane-win-1',
  }, container, {
    path: '/workspace/notes.md',
    hostMode: 'popout',
    transferState: { kind: 'editor' },
  })).resolves.toBe(instance);

  expect(moveCalls).toEqual([
    {
      container,
      context: {
        path: '/workspace/notes.md',
        hostMode: 'popout',
        transferState: { kind: 'editor' },
      },
    },
  ]);
  expect(releaseCalls).toEqual(['released']);

  await expect(claimPaneLiveTransfer(runtimeWindow, {
    panePath: '/workspace/notes.md',
    paneInstanceId: 'pane-inst-1',
    paneWindowId: 'pane-win-1',
  }, container, {
    path: '/workspace/notes.md',
    hostMode: 'popout',
    transferState: null,
  })).resolves.toBeNull();
});

test('claimPaneLiveTransfer accepts map-like registries across window realms', async () => {
  const backingMap = new Map<string, any>();
  const runtimeWindow = {
    __piclawPaneLiveTransferRegistry__: {
      get: (key: string) => backingMap.get(key),
      set: (key: string, value: any) => {
        backingMap.set(key, value);
        return runtimeWindow.__piclawPaneLiveTransferRegistry__;
      },
      delete: (key: string) => backingMap.delete(key),
      entries: () => backingMap.entries(),
      get size() {
        return backingMap.size;
      },
    },
  } as any;
  const instance = {
    moveHost: async () => true,
  } as any;

  expect(registerPaneLiveTransfer({
    panePath: '/workspace/notes.md',
    paneInstanceId: 'pane-inst-1',
    paneWindowId: 'pane-win-1',
    instance,
  }, runtimeWindow)).toBe(true);

  await expect(claimPaneLiveTransfer(runtimeWindow, {
    panePath: '/workspace/notes.md',
    paneInstanceId: 'pane-inst-1',
    paneWindowId: 'pane-win-1',
  }, {} as any, {
    path: '/workspace/notes.md',
    hostMode: 'popout',
    transferState: null,
  })).resolves.toBe(instance);
});

test('clearPaneLiveTransferForPath removes stale live transfer registrations', async () => {
  const runtimeWindow = createWindowLike();
  registerPaneLiveTransfer({
    panePath: '/workspace/notes.md',
    paneInstanceId: 'pane-inst-1',
    paneWindowId: 'pane-win-1',
    instance: { moveHost: () => true } as any,
  }, runtimeWindow);

  clearPaneLiveTransferForPath('/workspace/notes.md', runtimeWindow);

  await expect(claimPaneLiveTransfer(runtimeWindow, {
    panePath: '/workspace/notes.md',
    paneInstanceId: 'pane-inst-1',
    paneWindowId: 'pane-win-1',
  }, {} as any, {
    path: '/workspace/notes.md',
    hostMode: 'popout',
    transferState: null,
  })).resolves.toBeNull();
});
