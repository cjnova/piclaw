import { expect, test } from 'bun:test';

import {
  createPaneDetachTransferParams,
  hasPaneDetachTransferState,
  readPaneDetachTransferState,
} from '../../web/src/panes/pane-detach-transfer.js';

test('createPaneDetachTransferParams emits opaque pane detach identifiers', () => {
  expect(createPaneDetachTransferParams({
    paneInstanceId: 'pane-instance-1',
    paneWindowId: 'pane-window-1',
    paneSourceWindowId: 'pane-window-main',
  })).toEqual({
    pane_instance_id: 'pane-instance-1',
    pane_window_id: 'pane-window-1',
    pane_source_window_id: 'pane-window-main',
  });
});

test('readPaneDetachTransferState reads pane detach bootstrap params from the URL', () => {
  const state = readPaneDetachTransferState({
    search: '?pane_popout=1&pane_path=%2Fworkspace%2Fnotes.md&pane_label=Notes&pane_instance_id=inst-1&pane_window_id=win-2&pane_source_window_id=win-main',
  });

  expect(state).toEqual({
    panePath: '/workspace/notes.md',
    paneLabel: 'Notes',
    paneInstanceId: 'inst-1',
    paneWindowId: 'win-2',
    paneSourceWindowId: 'win-main',
  });
  expect(hasPaneDetachTransferState(state)).toBe(true);
});

test('readPaneDetachTransferState falls back to provided pane shell metadata when detach ids are absent', () => {
  const state = readPaneDetachTransferState({
    search: '?pane_popout=1',
    panePath: 'piclaw://terminal',
    paneLabel: 'Terminal',
  });

  expect(state).toEqual({
    panePath: 'piclaw://terminal',
    paneLabel: 'Terminal',
    paneInstanceId: null,
    paneWindowId: null,
    paneSourceWindowId: null,
  });
  expect(hasPaneDetachTransferState(state)).toBe(false);
});
