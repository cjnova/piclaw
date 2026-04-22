import { expect, test } from 'bun:test';

import {
  removeStalledPostFromTimeline,
  runFinalizeStalledResponse,
} from '../../web/src/ui/app-runtime-callbacks.js';

test('removeStalledPostFromTimeline removes stalled post id and clears ref', () => {
  const stalledPostIdRef = { current: 'post-2' };
  let nextPosts: any[] | null = [
    { id: 'post-1' },
    { id: 'post-2' },
    { id: 'post-3' },
  ];

  removeStalledPostFromTimeline({
    stalledPostIdRef,
    setPosts: (update) => {
      nextPosts = typeof update === 'function' ? update(nextPosts) : update;
    },
  });

  expect(nextPosts).toEqual([{ id: 'post-1' }, { id: 'post-3' }]);
  expect(stalledPostIdRef.current).toBeNull();
});

test('runFinalizeStalledResponse delegates to finalize helper without throwing', () => {
  const noOp = () => {};
  expect(() => {
    runFinalizeStalledResponse({
      isAgentRunningRef: { current: false },
      lastSilenceNoticeRef: { current: null },
      lastAgentEventRef: { current: null },
      currentTurnIdRef: { current: null },
      thoughtExpandedRef: { current: false },
      draftExpandedRef: { current: false },
      draftBufferRef: { current: '' },
      thoughtBufferRef: { current: '' },
      pendingRequestRef: { current: null },
      lastAgentResponseRef: { current: null },
      agentStatusRef: { current: null },
      stalledPostIdRef: { current: null },
      scrollToBottomRef: { current: noOp },
      setCurrentTurnId: noOp,
      setAgentDraft: noOp,
      setAgentPlan: noOp,
      setAgentThought: noOp,
      setPendingRequest: noOp,
      setAgentStatus: noOp,
      setPosts: noOp,
      dedupePosts: (posts: any[]) => posts,
    });
  }).not.toThrow();
});
