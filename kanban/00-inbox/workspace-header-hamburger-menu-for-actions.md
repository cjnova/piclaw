---
id: workspace-header-hamburger-menu-for-actions
title: Add a global hamburger menu beside the workspace header for workspace actions
status: inbox
priority: medium
created: 2026-03-15
updated: 2026-03-15
target_release: next
estimate: S
risk: low
tags:
  - work-item
  - kanban
  - web-ui
  - workspace
  - menu
  - terminal
owner: pi
---

# Add a global hamburger menu beside the workspace header for workspace actions

## Summary

The workspace area should gain a global hamburger menu positioned to the right
of the "Workspace" wording/header. This menu should provide a clear home for
workspace-level actions instead of scattering them across ad hoc buttons or
requiring separate affordances.

A terminal entry should be included as one of the initial actions so the menu
can act as a compact workspace control surface rather than a purely cosmetic
header change.

## Acceptance Criteria

- [ ] A hamburger/menu button appears to the right of the workspace header wording.
- [ ] Clicking it opens a workspace-actions menu aligned with the workspace header.
- [ ] The initial menu contains workspace-level actions, including an entry for opening/showing the terminal.
- [ ] The menu does not interfere with existing workspace header controls or upload/status UI.
- [ ] The menu works cleanly on desktop and mobile layouts.
- [ ] Menu open/close behavior is keyboard- and pointer-friendly and fits existing PiClaw UI patterns.

## Implementation Paths

### Path A — lightweight header dropdown (recommended)
- Add a single icon button beside the workspace label.
- Render a compact dropdown/popover menu anchored to that button.
- Wire menu actions into existing handlers for terminal/workspace actions where possible.

Why this is preferred:
- smallest change for a clear UX improvement
- keeps the action surface discoverable without redesigning the workspace pane
- easy to extend with more workspace actions later

### Path B — broader workspace header action strip with overflow menu
- Redesign the workspace header into a fuller action bar, with the hamburger acting as an overflow menu.
- Split primary vs secondary actions across visible buttons and dropdown items.

Why this may be useful later:
- better long-term if the workspace header keeps gaining controls
- supports richer action grouping

Why it is not preferred for v1:
- larger UI decision than the current request requires
- more likely to collide with other workspace-header tickets already in the backlog

## Test Plan

- [ ] Add focused web tests for menu toggle, placement, and action dispatch.
- [ ] Validate that the terminal action reuses the existing terminal open/show behavior.
- [ ] Validate keyboard dismissal and outside-click dismissal.
- [ ] Validate mobile and desktop layout behavior.
- [ ] Run `bun run build:web`.
- [ ] Run `bun run quality` from `/workspace/piclaw/piclaw` if implementation proceeds.

## Definition of Done

- [ ] Header menu button exists in the requested location.
- [ ] Workspace actions menu opens/closes reliably.
- [ ] Terminal action is present and wired to the existing terminal surface.
- [ ] Existing workspace-header UI remains visually coherent.
- [ ] Regression coverage exists for the new menu behavior.
- [ ] Update history records implementation and validation evidence.

## Updates

### 2026-03-15
- Created from user request for a global hamburger menu beside the workspace header wording.
- Captured the requirement that this should hold workspace actions, including terminal access.
- Kept in `00-inbox` pending refinement of the first action set and interaction model.
- Quality: ★★★☆☆ 5/10 (problem: 2, scope: 1, test: 1, deps: 1, risk: 0)

## Notes

- The menu should be framed as a workspace-level control surface, not a generic app menu.
- Likely initial action candidates:
  - open/show terminal
  - refresh workspace tree
  - create new file/folder
  - workspace settings/toggles if any continue to accumulate
- Keep placement specifically tied to the workspace header text, per request.
- This may overlap later with existing workspace-header placement tickets, so final refinement should reconcile ownership/placement with those items.

## Links

- `piclaw/web/src/components/workspace-explorer.ts`
- `piclaw/web/src/app.ts`
- `piclaw/web/src/panes/terminal-pane.ts`
- `piclaw/kanban/00-inbox/workspace-explorer-scale-ui-control.md`
- `piclaw/kanban/00-inbox/workspace-upload-progress-ui.md`
- `piclaw/kanban/00-inbox/workspace-fts-indexing-status-feedback.md`
