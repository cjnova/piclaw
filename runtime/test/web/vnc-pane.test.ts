import { expect, test } from 'bun:test';

import { buildVncTabPath, shouldRetryVncPopoutWithoutHandoff } from '../../web/src/panes/vnc-pane.js';

test('buildVncTabPath encodes target ids when present', () => {
  expect(buildVncTabPath()).toBe('piclaw://vnc');
  expect(buildVncTabPath('host:5901')).toBe('piclaw://vnc/host%3A5901');
});

test('shouldRetryVncPopoutWithoutHandoff only retries pristine failed handoffs', () => {
  expect(shouldRetryVncPopoutWithoutHandoff({
    handoffToken: 'token-1',
    bytesIn: 0,
    hasRenderedFrame: false,
    reconnectAttempts: 0,
  })).toBe(true);

  expect(shouldRetryVncPopoutWithoutHandoff({
    handoffToken: '',
    bytesIn: 0,
    hasRenderedFrame: false,
    reconnectAttempts: 0,
  })).toBe(false);

  expect(shouldRetryVncPopoutWithoutHandoff({
    handoffToken: 'token-1',
    bytesIn: 10,
    hasRenderedFrame: false,
    reconnectAttempts: 0,
  })).toBe(false);

  expect(shouldRetryVncPopoutWithoutHandoff({
    handoffToken: 'token-1',
    bytesIn: 0,
    hasRenderedFrame: true,
    reconnectAttempts: 0,
  })).toBe(false);

  expect(shouldRetryVncPopoutWithoutHandoff({
    handoffToken: 'token-1',
    bytesIn: 0,
    hasRenderedFrame: false,
    reconnectAttempts: 1,
  })).toBe(false);
});
