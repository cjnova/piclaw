---
id: allow-any-editor-tab-to-open-in-a-standalone-pop-out-window
title: Allow any editor tab to open in a standalone pop-out window
status: done
priority: medium
created: 2026-03-31
updated: 2026-03-31
completed: 2026-03-31
target_release: next
estimate: S
risk: low
tags:
  - work-item
  - kanban
  - web-ui
  - editor
  - tabs
  - windows
owner: pi
---

# Allow any editor tab to open in a standalone pop-out window

## Summary

The generic pane pop-out work established the standalone window shell and the
shared `Open in Window` action, but it did not yet guarantee that **editor
tabs** would carry enough state to behave like real editor pop-outs.

This follow-up closes that contract for editor tabs specifically:
- ordinary file editor tabs
- editor tabs using pane overrides
- dirty editor tabs whose in-memory content has not been saved yet

The chosen implementation keeps the existing reopen-in-standalone-window model.
It does **not** attempt full live pane migration.

## Acceptance Criteria

- [x] Any editor tab can invoke the shared standalone pop-out action.
- [x] The pop-out preserves the editor pane override when one is active.
- [x] The pop-out preserves editor view state needed for continuity (cursor / scroll context).
- [x] Dirty editor tabs transfer unsaved in-memory content into the pop-out window.
- [x] The original architecture remains a reopen-in-standalone-window flow rather than live pane migration.
- [x] Regression coverage exists for transfer-token creation/consumption and editor pop-out resolution.
- [x] `bun run build:web`, `bun run lint`, and `bun run typecheck` pass for the shipped slice.

## Implementation Notes

### Path A — tokenized editor-state transfer on top of the existing pane pop-out flow (shipped)
- Capture editor state before opening the new window.
- Store the transfer payload in browser-local ephemeral storage under a short-lived token.
- Pass only the token in the pop-out URL.
- Rehydrate editor content, pane override, and view state in the standalone shell before mount.

Why this was chosen:
- fits the current generic pane pop-out plumbing
- avoids changing route/payload shapes for non-editor panes
- avoids putting unsaved editor contents directly into the URL
- preserves the current architecture boundary between source pane and new standalone shell

### Explicit non-goal
- Do **not** implement live pane handoff/migration across windows.
- Do **not** broaden this ticket into every pane type; this ticket closes the editor-tab contract only.

## Test Plan

- [x] Add focused tests for editor pop-out transfer token create/consume flows.
- [x] Add focused tests for generic editor transfer fallback in pane pop-out orchestration.
- [x] Re-run existing pane pop-out action tests.
- [x] Run `bun test runtime/test/web/editor-popout-transfer.test.ts runtime/test/web/app-branch-pane-orchestration.test.ts runtime/test/web/app-window-actions.test.ts`.
- [x] Run `bun run build:web`.
- [x] Run `bun run lint`.
- [x] Run `bun run typecheck`.

## Definition of Done

- [x] Editor tabs preserve meaningful working state when popped out.
- [x] Dirty editor content survives the pop-out handoff.
- [x] Editor pane overrides survive the pop-out handoff.
- [x] View state is restored in the standalone editor shell.
- [x] Regression coverage exists for the new transfer path.
- [x] Update history records implementation and validation evidence.

## Updates

### 2026-03-31
- Created as the explicit follow-up required after the earlier generic pane pop-out work; that earlier work was intentionally too broad to claim this stricter editor-tab contract as already complete.
- Implemented tokenized editor pop-out transfer in:
  - `runtime/web/src/panes/editor-popout-transfer.ts`
  - `runtime/web/src/ui/app-branch-pane-lifecycle-actions.ts`
  - `runtime/web/src/ui/app-branch-pane-orchestration.ts`
  - `runtime/web/src/ui/app-pane-runtime-orchestration.ts`
  - `runtime/web/src/ui/use-editor-state.ts`
- Added/updated regression coverage in:
  - `runtime/test/web/editor-popout-transfer.test.ts`
  - `runtime/test/web/app-branch-pane-orchestration.test.ts`
  - `runtime/test/web/app-window-actions.test.ts`
- Validation completed:
  - `bun test runtime/test/web/editor-popout-transfer.test.ts runtime/test/web/app-branch-pane-orchestration.test.ts runtime/test/web/app-window-actions.test.ts`
  - `bun run build:web`
  - `bun run lint`
  - `bun run typecheck`
- Shipped in commit `8371d7f7` (`feat(web): preserve editor state in popout tabs`).
- Quality: ★★★★★ 9/10 (problem: 2, scope: 2, test: 2, deps: 1, risk: 2)

## Links

- `workitems/50-done/pop-out-terminal-or-tab-into-new-window.md`
- `runtime/web/src/panes/editor-popout-transfer.ts`
- `runtime/web/src/ui/app-branch-pane-orchestration.ts`
- `runtime/web/src/ui/app-pane-runtime-orchestration.ts`
- `runtime/test/web/editor-popout-transfer.test.ts`
