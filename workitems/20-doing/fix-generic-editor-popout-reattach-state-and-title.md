---
id: fix-generic-editor-popout-reattach-state-and-title
title: Fix generic editor pop-out reattach state loss and window title
status: doing
priority: high
created: 2026-04-02
updated: 2026-04-02
target_release: next
estimate: M
risk: medium
tags:
  - work-item
  - kanban
  - web-ui
  - editor
  - tabs
  - windows
  - regression
owner: pi
---

# Fix generic editor pop-out reattach state loss and window title

## Summary

Live testing of the generic editor pop-out flow exposed two regressions that do
not affect the simple viewer panes:

1. unsaved in-memory editor content transfers into the pop-out window, but is
   lost when the pop-out closes and the main shell reattaches the tab
2. the pop-out window title resolves from document content (for example the
   markdown heading `Smith`) instead of the file/tab label (`AGENTS.md · PiClaw`)

This ticket tracks the focused fix for generic editor tabs so their behavior is
consistent with the intended editor pop-out contract.

## Problem Statement

The current generic editor pop-out implementation is only partially correct.

Observed live behavior with `AGENTS.md`:
- add an unsaved in-memory marker in the main editor
- pop the tab out into a standalone window
- confirm the unsaved marker appears in the pop-out editor
- close the pop-out window
- the main shell reattaches the tab, but the unsaved marker is gone and the tab
  reopens from on-disk content
- the pop-out window title shows `Smith` rather than `AGENTS.md · PiClaw`

That means the editor-state transfer is working one-way into the pop-out, but
reattach/recovery does not preserve the authoritative in-memory state.

## Acceptance Criteria

- [ ] Generic editor pop-outs preserve unsaved in-memory content when the
      detached window is closed and the tab reattaches to the main shell.
- [ ] Generic editor pop-outs preserve unsaved in-memory content when using any
      manual reattach path, if present.
- [ ] The standalone editor window title uses the file/tab label rather than a
      content-derived heading.
- [ ] Exactly one editor tab exists after reattach; no duplicate tab is created.
- [ ] Existing viewer/simple-pane reattach behavior remains unchanged.
- [ ] Focused regression coverage exists for both unsaved-state recovery and
      window-title resolution.

## Suspected Areas

- `runtime/web/src/ui/app-pane-runtime-orchestration.ts`
- `runtime/web/src/ui/app-branch-pane-lifecycle-actions.ts`
- `runtime/web/src/panes/editor-popout-transfer.ts`
- `runtime/web/src/panes/editor-loader.ts`
- `runtime/web/src/ui/app-pane-state.ts`
- `runtime/web/src/ui/chat-window.ts`
- any editor-side title update path that currently overwrites the pane-popout
  document title after mount

## Suggested Fix Slices

### Slice 1 — preserve editor authority on reattach
- determine whether closing the detached window is restoring from disk instead
  of the last transferred editor state
- keep or rehydrate the most recent in-memory editor content during
  detached-window close recovery
- verify dirty-state and view-state continuity after reattach

### Slice 2 — stabilize standalone editor window title
- identify where the content-derived title overwrite happens
- keep the pane/tab label as the authoritative pop-out window title
- ensure markdown headings or editor content do not replace the outer window
  title unexpectedly

### Slice 3 — regression coverage
- add a focused test for unsaved editor content surviving pop-out close and
  reattach
- add a focused test for generic editor pop-out title resolution

## Reproduction

### Live reproduction used on 2026-04-02
- open `AGENTS.md`
- inject an unsaved marker line in the editor
- use tab context menu → `Open in Window`
- verify the marker is visible in the pop-out editor
- close the pop-out window
- observe that the main window reattaches the tab from disk and loses the
  marker
- observe the pop-out window title shows `Smith`

## Validation Plan

- [ ] focused `bun test ...` for editor pop-out/reattach flows
- [ ] live Playwright/browser reproduction for `AGENTS.md`
- [ ] `bun run lint`
- [ ] `bun run typecheck`
- [ ] `bun run build:web` if web bundles are affected

## Links

- `workitems/20-doing/live-tab-and-pane-popout-regression-sweep.md`
- `workitems/50-done/allow-any-editor-tab-to-open-in-a-standalone-pop-out-window.md`
- `runtime/web/src/panes/editor-popout-transfer.ts`
- `runtime/web/src/ui/app-pane-runtime-orchestration.ts`
- `runtime/web/src/ui/app-branch-pane-lifecycle-actions.ts`

## Updates

### 2026-04-02
- Created from the live regression sweep after the simple viewers passed but
  the generic editor failed reattach continuity.
- Known live failure:
  - unsaved marker transferred into the pop-out editor successfully
  - unsaved marker lost after closing the pop-out and reattaching in the main
    shell
  - pop-out title resolved to `Smith` instead of `AGENTS.md · PiClaw`
- Traced the title overwrite to the shared branding flow:
  - `runtime/web/src/app.ts` correctly sets the pane-popout document title
  - `runtime/web/src/ui/app-shell-environment-effects.ts` later overwrote it
    through `applyBranding(...)`
- Patched the branding flow to skip `document.title` overrides while running in
  pane-popout mode, while keeping normal branding behavior in the main shell.
