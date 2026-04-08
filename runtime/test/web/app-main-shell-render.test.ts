import { expect, mock, test } from 'bun:test';

import {
  buildMainShellClassName,
  extractPostedUserMessageId,
  handleComposePost,
  scrollToPostedTimelineMessage,
} from '../../web/src/ui/app-main-shell-render.js';

test('buildMainShellClassName composes workspace/editor/chat/zen modifiers', () => {
  expect(buildMainShellClassName({
    workspaceOpen: true,
    editorOpen: false,
    chatOnlyMode: false,
    zenMode: false,
  })).toBe('app-shell');

  expect(buildMainShellClassName({
    workspaceOpen: false,
    editorOpen: true,
    chatOnlyMode: true,
    zenMode: true,
  })).toBe('app-shell workspace-collapsed editor-open chat-only zen-mode');
});

test('extractPostedUserMessageId prefers user_message.id and falls back to row_id', () => {
  expect(extractPostedUserMessageId({ user_message: { id: 42 }, row_id: 7 })).toBe(42);
  expect(extractPostedUserMessageId({ row_id: 7 })).toBe(7);
  expect(extractPostedUserMessageId({})).toBeNull();
});

test('handleComposePost scrolls to the posted user message without reloading the timeline', () => {
  const scrollToBottom = mock(() => {});
  const scrollPostedMessage = mock(() => {});

  handleComposePost({
    response: { user_message: { id: 99 } },
    viewStateRef: { current: { searchQuery: null, searchOpen: false } },
    scrollToBottom,
    scrollPostedMessage,
  });

  expect(scrollPostedMessage).toHaveBeenCalledWith(99);
  expect(scrollToBottom).not.toHaveBeenCalled();
});

test('handleComposePost falls back to scrolling to the bottom when there is no posted row id', () => {
  const scrollToBottom = mock(() => {});
  const scrollPostedMessage = mock(() => {});

  handleComposePost({
    response: { command: { type: 'model' } },
    viewStateRef: { current: { searchQuery: null, searchOpen: false } },
    scrollToBottom,
    scrollPostedMessage,
  });

  expect(scrollToBottom).toHaveBeenCalledTimes(1);
  expect(scrollPostedMessage).not.toHaveBeenCalled();
});

test('handleComposePost does nothing while search is active', () => {
  const scrollToBottom = mock(() => {});
  const scrollPostedMessage = mock(() => {});

  handleComposePost({
    response: { user_message: { id: 99 } },
    viewStateRef: { current: { searchQuery: 'foo', searchOpen: true } },
    scrollToBottom,
    scrollPostedMessage,
  });

  expect(scrollToBottom).not.toHaveBeenCalled();
  expect(scrollPostedMessage).not.toHaveBeenCalled();
});

test('scrollToPostedTimelineMessage waits for the existing row and highlights it without reloading', () => {
  const element = {
    scrollIntoView: mock(() => {}),
    classList: {
      add: mock(() => {}),
      remove: mock(() => {}),
    },
  } as any;
  let lookups = 0;
  const getElementById = mock((id: string) => {
    lookups += 1;
    if (id !== 'post-77') return null;
    return lookups >= 3 ? element : null;
  });
  const rafQueue: Array<() => void> = [];
  const timeoutQueue: Array<() => void> = [];
  const scrollToBottom = mock(() => {});

  scrollToPostedTimelineMessage({
    id: 77,
    scrollToBottom,
    getElementById,
    scheduleRaf: (callback) => { rafQueue.push(callback); },
    scheduleTimeout: (callback, delayMs) => {
      if (delayMs === 2000) {
        callback();
        return;
      }
      timeoutQueue.push(callback);
    },
    maxAttempts: 4,
  });

  while (rafQueue.length > 0 || timeoutQueue.length > 0) {
    const raf = rafQueue.shift();
    if (raf) raf();
    const timeout = timeoutQueue.shift();
    if (timeout) timeout();
  }

  expect(getElementById).toHaveBeenCalled();
  expect(element.scrollIntoView).toHaveBeenCalledWith({ behavior: 'smooth', block: 'center' });
  expect(element.classList.add).toHaveBeenCalledWith('post-highlight');
  expect(element.classList.remove).toHaveBeenCalledWith('post-highlight');
  expect(scrollToBottom).not.toHaveBeenCalled();
});
