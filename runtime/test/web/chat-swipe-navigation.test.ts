import { expect, test } from 'bun:test';

import {
  isEligibleChatSwipeTarget,
  resolveAdjacentSwipeChatJid,
  resolveSwipeableChatAgents,
  shouldTriggerTouchChatSwipe,
} from '../../web/src/ui/chat-swipe-navigation.js';

test('resolveSwipeableChatAgents keeps current + active non-archived chats', () => {
  expect(resolveSwipeableChatAgents([
    { chat_jid: 'web:current', is_active: false },
    { chat_jid: 'web:a', is_active: true },
    { chat_jid: 'web:b', is_active: true, archived_at: '2026-01-01' },
    { chat_jid: 'web:c', is_active: false },
  ], 'web:current')).toEqual(['web:current', 'web:a']);
});

test('resolveAdjacentSwipeChatJid cycles through active chats', () => {
  const candidates = [
    { chat_jid: 'web:current', is_active: true },
    { chat_jid: 'web:a', is_active: true },
    { chat_jid: 'web:b', is_active: true },
  ];

  expect(resolveAdjacentSwipeChatJid({ candidates, currentChatJid: 'web:current', direction: 'next' })).toBe('web:a');
  expect(resolveAdjacentSwipeChatJid({ candidates, currentChatJid: 'web:current', direction: 'prev' })).toBe('web:b');
  expect(resolveAdjacentSwipeChatJid({ candidates, currentChatJid: 'web:b', direction: 'next' })).toBe('web:current');
});

test('shouldTriggerTouchChatSwipe requires a fast, mostly-horizontal gesture', () => {
  expect(shouldTriggerTouchChatSwipe({ dx: 120, dy: 20, elapsedMs: 250 })).toBe(true);
  expect(shouldTriggerTouchChatSwipe({ dx: 50, dy: 4, elapsedMs: 250 })).toBe(false);
  expect(shouldTriggerTouchChatSwipe({ dx: 120, dy: 110, elapsedMs: 250 })).toBe(false);
  expect(shouldTriggerTouchChatSwipe({ dx: 120, dy: 20, elapsedMs: 1200 })).toBe(false);
});

test('isEligibleChatSwipeTarget ignores compose and interactive controls', () => {
  const allowedTarget = {
    closest: (_selector: string) => null,
  };
  const blockedTarget = {
    closest: (selector: string) => selector.includes('.compose-box') ? ({} as Element) : null,
  };

  expect(isEligibleChatSwipeTarget(allowedTarget)).toBe(true);
  expect(isEligibleChatSwipeTarget(blockedTarget)).toBe(false);
});
