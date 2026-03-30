import { expect, test } from 'bun:test';

import { withTempWorkspaceEnv } from '../../helpers.js';

function importFreshFromHere(path: string) {
  const url = new URL(path, import.meta.url);
  url.searchParams.set('t', `${Date.now()}-${Math.random().toString(36).slice(2)}`);
  return import(url.href);
}

test('queued followup lifecycle does not reuse deferred negative row ids after removal', async () => {
  await withTempWorkspaceEnv('piclaw-queued-followup-', {}, async () => {
    const db = await importFreshFromHere('../../../src/db.js');
    db.initDatabase();
    db.storeChatMetadata('web:default', new Date().toISOString(), 'Web');

    const { QueuedFollowupLifecycleService } = await importFreshFromHere('../../../src/channels/web/runtime/queued-followup-lifecycle-service.ts');
    const lifecycle = new QueuedFollowupLifecycleService();

    const firstRowId = lifecycle.enqueueQueuedFollowupItem('web:default', 0, 'first queued item');
    expect(firstRowId).toBe(-1);

    const removed = await lifecycle.removeQueuedFollowupForAction('web:default', firstRowId);
    expect(removed.removed?.rowId).toBe(-1);
    expect(lifecycle.listQueuedStateItems('web:default')).toEqual([]);

    const secondRowId = lifecycle.enqueueQueuedFollowupItem('web:default', 0, 'second queued item');
    expect(secondRowId).toBeLessThan(firstRowId);
    expect(secondRowId).toBe(-2);

    expect(lifecycle.listQueuedStateItems('web:default')).toEqual([
      {
        row_id: -2,
        content: 'second queued item',
        timestamp: expect.any(String),
        thread_id: null,
      },
    ]);
  });
});
