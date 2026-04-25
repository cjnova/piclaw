import { expect, test } from 'bun:test';

import { OobePanel } from '../../web/src/components/oobe-panel.ts';

test('OobePanel prompts for settings when instance is not configured', () => {
  const vnode = OobePanel({ kind: 'provider-missing' });
  const serialized = JSON.stringify(vnode);
  expect(serialized).toContain('Instance needs setup');
  expect(serialized).toContain('This instance is not yet configured');
  expect(serialized).toContain('Open Settings');
  expect(serialized).toContain('Dismiss');
});

test('OobePanel can also show a configured-instance confirmation', () => {
  const vnode = OobePanel({ kind: 'provider-ready' });
  const serialized = JSON.stringify(vnode);
  expect(serialized).toContain('Instance is configured');
  expect(serialized).toContain('Review or update provider and model settings in Settings');
  expect(serialized).toContain('Done');
});