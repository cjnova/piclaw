---
id: restore-proper-safari-terminal-popout-close-and-reattach
title: Restore proper Safari terminal pop-out close handling and reattach
status: inbox
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
  - safari
  - terminal
  - panes
  - windows
owner: pi
---

# Restore proper Safari terminal pop-out close handling and reattach

## Summary

Safari currently uses a containment fallback for terminal pop-outs.

Closing a detached terminal window used to crash/reload the main PiClaw window
before close-time recovery could complete. The shipped mitigation was to
preserve main-window stability by disabling terminal reattach entirely on
Safari-family browsers and dropping detached terminal state when the popup
closes.

This inbox item tracks the proper follow-up: understand the real Safari crash
mechanism and restore a safe terminal close + reattach story instead of the
current degraded behavior.

## Current shipped behavior

- terminal pop-out close no longer crashes the main Safari window
- Safari terminal reattach is disabled
- closing the Safari terminal pop-out drops detached terminal state
- the user must open a fresh terminal instead of reattaching

## Goal

Re-enable a proper Safari terminal pop-out lifecycle with the best safe
behavior Safari will support, ideally including:

- no main-window crash on popup close
- no full-page reload banner in Safari
- either safe automatic recovery or safe manual reattach
- no need to discard detached terminal state on close

## Questions to answer

1. Is the crash caused by popup close alone, or by opener messaging during
   `pagehide` / `beforeunload`?
2. Does Safari crash on terminal-specific DOM/runtime teardown, websocket
   handoff, or pane ownership state mutation in the main window?
3. Can a safe path be built around a deferred/lazy recovery that only runs on
   explicit user action after popup close?
4. Does Safari require a terminal-specific non-detach pop-out model instead of
   the current detach semantics?
5. Can Safari support manual reattach safely if all close-time work is skipped?

## Acceptance Criteria

- [ ] Root cause is narrowed beyond the current containment guess.
- [ ] Safari terminal pop-out close no longer needs the “drop detached state”
      fallback.
- [ ] A safe Safari terminal recovery path is implemented and documented.
- [ ] Regression coverage exists for the chosen Safari-specific behavior.
- [ ] Any remaining Safari limitations are explicit and intentional.

## Notes

- This should preserve the current stable non-Safari behavior.
- If a full detach/reattach contract remains unsafe on Safari, a smaller
  Safari-specific contract is acceptable as long as it is deliberate and
  documented.
- Relevant shipped context lives in:
  - `workitems/50-done/live-pane-detach-reattach-migration.md`
  - `workitems/50-done/live-tab-and-pane-popout-regression-sweep.md`
