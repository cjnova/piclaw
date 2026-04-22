import { expect, test } from 'bun:test';

import { buildLastActivityStatus, clearLastActivityFlagState } from '../../web/src/ui/app-agent-activity-orchestration.js';

test('clearLastActivityFlagState removes transient last_activity fields', () => {
  expect(clearLastActivityFlagState({ type: 'active', last_activity: true, detail: 'x' })).toEqual({ type: 'active', detail: 'x' });
  expect(clearLastActivityFlagState({ type: 'active', lastActivity: true, detail: 'x' })).toEqual({ type: 'active', detail: 'x' });
});

test('clearLastActivityFlagState is no-op when no transient activity flag exists', () => {
  const base = { type: 'active', detail: 'x' };
  expect(clearLastActivityFlagState(base)).toEqual(base);
  expect(clearLastActivityFlagState(null)).toBeNull();
});

test('buildLastActivityStatus preserves the last visible tool context', () => {
  expect(buildLastActivityStatus({ type: 'tool_status', title: 'bash', status: 'Working...', tool_name: 'bash' })).toEqual({
    type: 'tool_status',
    title: 'bash',
    status: 'Working...',
    tool_name: 'bash',
    last_activity: true,
  });
  expect(buildLastActivityStatus(null)).toEqual({ type: 'active', last_activity: true });
});
