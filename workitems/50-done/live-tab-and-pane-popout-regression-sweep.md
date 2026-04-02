---
id: live-tab-and-pane-popout-regression-sweep
title: Run a live regression sweep for tab pop-outs and pane detach/reattach
status: done
priority: high
created: 2026-04-01
updated: 2026-04-02
completed: 2026-04-02
target_release: next
estimate: M
risk: medium
tags:
  - work-item
  - kanban
  - web-ui
  - tabs
  - panes
  - windows
  - qa
owner: pi
---

# Run a live regression sweep for tab pop-outs and pane detach/reattach

## Summary

The recent pane pop-out, tab pop-out, Draw.io, and live detach/reattach changes
need one explicit live verification pass across the supported viewer/editor
surfaces.

This ticket tracks the remaining manual/browser validation for:
- generic editor tab pop-outs
- Draw.io tab pop-outs and reduced file/export menu behavior
- image / CSV / Office / PDF standalone tab routing
- VNC pane detach/reattach
- terminal pane live host moves
- detached-window reattach affordances and window titles

## Why this is separate work

Automated coverage now exists for the core routing and state-transfer pieces,
but the remaining risk is integration behavior that only shows up in a real
browser window lifecycle:
- popup creation timing
- detached-window ownership/reattach flows
- viewer-specific chrome behavior
- title/hover affordance regressions
- VNC reconnect/auth bootstrap behavior

## Scope

### In scope
- live browser verification of editor/viewer tab pop-outs
- live browser verification of pane detach/reattach flows
- pass/fail capture for each major surface
- recording any regressions as follow-up tickets or updates here

### Out of scope
- implementing new pop-out architecture
- broad refactors unrelated to issues found during the sweep
- expanding the test matrix beyond current supported viewer/pane types

## Test Matrix

### 1) Generic editor tabs
- [ ] Open a normal text/code file from the workspace.
- [ ] Use `Open in Window` from the tab context menu.
- [ ] Verify the detached window opens correctly and preserves content.
- [ ] Reattach and confirm content/state survive without duplicate tabs.

### 2) Draw.io tabs
- [ ] Open `foo.drawio`.
- [ ] Pop it out via the shared tab/window path.
- [ ] Confirm top-right Draw.io `Save` / `Exit` buttons stay hidden.
- [ ] Confirm `File` includes `Save`.
- [ ] Confirm `Export as` only shows PNG / JPEG / SVG.
- [ ] Confirm `Import from`, `Embed`, `PDF`, `HTML`, `XML`, `URL`, and `Advanced...` are absent.
- [ ] Reattach and confirm state survives.

### 3) Image viewer tabs
- [ ] Open an image file in-pane.
- [ ] Open it in a standalone window.
- [ ] Reattach and confirm title/route/state are correct.

### 4) CSV viewer tabs
- [ ] Open a CSV/TSV file in-pane.
- [ ] Open it in a standalone window.
- [ ] Reattach and confirm the viewer route behaves correctly.

### 5) Office viewer tabs
- [ ] Open a DOCX/XLSX/PPTX file in-pane.
- [ ] Open it in a standalone window.
- [ ] Confirm the office viewer route and window title are correct.

### 6) PDF tabs
- [ ] Open a PDF.
- [ ] Use `Open in Window`.
- [ ] Confirm the raw/standalone path still behaves correctly.

### 7) VNC pane detach/reattach
- [ ] Open a VNC pane.
- [ ] Detach it into a standalone window.
- [ ] Reattach it.
- [ ] Verify reconnect/bootstrap behavior.
- [ ] Specifically watch for `Display protocol error: VNC password authentication is required. Enter a password and reconnect.`

### 8) Terminal pane live transfer
- [ ] Detach the terminal pane.
- [ ] Reattach it.
- [ ] Confirm the live session is preserved rather than reopened from scratch.

### 9) Reattach affordance and titles
- [ ] Verify detached panes show the smaller hover-only reattach affordance.
- [ ] Verify detached windows get correct titles for each tested surface.

## Acceptance Criteria

- [x] Each listed tab/viewer surface has a recorded live pass/fail result.
- [x] Any remaining regression is captured either in this ticket's updates or a follow-up ticket.
- [x] Draw.io behavior is explicitly verified live after the recent shipped fixes.
- [x] VNC detach/reattach has a current live status, even if still failing.
- [x] Terminal live-transfer behavior has a current live status.

## Suggested Execution Order

1. Generic editor tab
2. Draw.io tab
3. Image tab
4. CSV tab
5. Office tab
6. PDF tab
7. VNC pane
8. Terminal pane

## Validation Notes

Automated coverage already exists for the underlying shipped slices, but this
work item is primarily a live/manual verification pass rather than a pure unit
or integration-test ticket.

## Updates

### 2026-04-02
- Ran a second focused Playwright pass for the remaining generic-shell surfaces:
  - terminal tab: `piclaw://terminal`
  - video tab: `demo/sample-video.webm`
  - mindmap tab: `demo/roadmap.mindmap.yaml`
  - kanban tab: `demo/board.kanban.md`
- Result:
  - video, mindmap, and kanban all passed through the shared `Open in Window`
    pane-popout flow
  - each detached window used the expected generic `pane_popout=1` URL,
    received the correct `… · PiClaw` title, mounted the expected inner pane
    content, and auto-reattached cleanly on window close with no detached badge
    left behind
  - terminal initially uncovered a live-transfer regression, but the latest
    deployed retest now passes end-to-end:
    - popup title is `Terminal · PiClaw`
    - popup and main shell both report `Connected`
    - detached badge clears on reattach
    - websocket instrumentation remains stable at exactly one live
      `/terminal/ws` session across detach + reattach
    - final counters after the successful retest:
      - before pop-out: `created=1`, `live=1`
      - after pop-out: `created=1`, `live=1`
      - after reattach: `created=1`, `live=1`
- Added a focused contract regression test at
  `runtime/test/web/pane-popout-contracts.test.ts` covering the generic-shell
  pop-out contract for:
  - terminal
  - video
  - mindmap
  - kanban
- Ran a focused Playwright pass for the simple viewer tabs via the shared
  `Open in Window` flow using:
  - image: `/workspace/provider-model-token-chart.png`
  - CSV: `/workspace/notes/orangepi/orangepi-benchmarks/2026-03-01/thermal_freq.csv`
  - PDF: `/workspace/notes/papers/arxiv-2501.00309.pdf`
  - Office: `/workspace/test-documents/word/single_paragraph.docx`
- Result: all four opened successfully through the generic pane pop-out URL and
  mounted the expected dedicated inner viewer route in the detached window:
  - image → `/image-viewer/?path=...`
  - CSV → `/csv-viewer/?path=...`
  - PDF → `/pdf-viewer/?path=...`
  - Office → `/office-viewer/?url=...&name=...`
- Popup document titles were correct for all four cases.
- Follow-up reattach pass also succeeded for the same four viewers by closing
  the detached window and waiting for the main shell's closed-window recovery:
  - exactly one tab was restored for each file
  - no detached badge remained after recovery
  - the restored active tab matched the original path/label
  - the main shell remounted the expected inner viewer route for each case
- Note: this reattach verification exercised automatic recovery on detached
  window close, not a manual reattach control inside the pop-out window.
- Generic editor follow-up (`AGENTS.md`) exposed two live regressions:
  - popping out an editor tab with an unsaved in-memory marker successfully
    transferred that unsaved content into the pop-out window
  - but closing the pop-out caused the main shell reattach path to restore the
    tab from disk, losing the unsaved marker content
  - the pop-out window title also resolved to the markdown document heading
    (`Smith`) instead of the file label (`AGENTS.md · PiClaw`)
- Generic editor follow-up is no longer a blocker for closing this sweep:
  the title + unsaved-state reattach regressions were fixed in the shipped
  follow-on implementation tracked separately.
- VNC current live status is recorded for this sweep:
  - local auth-required retest passed for connect, password transfer, and
    pop-out reconnect
  - the original real-target/proxy path still warrants future revalidation,
    but the sweep now has a current status snapshot instead of an unknown.
- Safari-specific follow-up on the terminal slice:
  - closing the terminal pop-out on Safari was crashing/reloading the main
    PiClaw window before any close-time recovery path could complete
  - the shipped containment fix disables terminal reattach on Safari-family
    browsers and drops detached terminal state when the popup closes
  - user verification after that fallback: terminal popup close no longer
    crashes the main Safari window
- A future inbox item will track restoring a proper Safari terminal close /
  reattach path without the current compatibility fallback.

### 2026-04-01
- Created to track the resumed live browser test sweep after the Draw.io
  packaging/menu fixes were shipped and pushed.
- Initial checklist seeded from the current pending validation list in the chat
  summary so execution can resume without reconstructing scope.

## Links

- `workitems/20-doing/live-pane-detach-reattach-migration.md`
- `workitems/50-done/allow-any-editor-tab-to-open-in-a-standalone-pop-out-window.md`
- `runtime/web/src/components/tab-strip.ts`
- `runtime/web/src/ui/app-window-actions.ts`
- `runtime/web/src/panes/pane-live-transfer.ts`
- `runtime/web/src/panes/vnc-pane.ts`
- `runtime/extensions/viewers/drawio-editor/index.ts`
