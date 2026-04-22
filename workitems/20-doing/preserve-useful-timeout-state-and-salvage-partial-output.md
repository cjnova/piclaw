---
id: preserve-useful-timeout-state-and-salvage-partial-output
title: Preserve useful timeout state and salvage partial output
status: doing
priority: high
created: 2026-04-22
updated: 2026-04-22
tags:
  - work-item
  - kanban
  - reliability
  - timeout
  - recovery
  - web
  - ux
  - agent
owner: pi
---

# Preserve useful timeout state and salvage partial output

## Summary

When a turn goes quiet or times out, the web UI currently degrades too quickly
into generic waiting/error copy that hides the most useful context:

- the last tool being run
- the last visible tool status
- the most recent partial draft
- the most recent visible turn activity on reconnect/re-entry

This work item keeps timeout handling in the **doing** lane while landing the
first salvage-first slice: preserve visible tool context during silence,
preserve recent visible activity when reopening a chat, and keep the last draft
available when a turn stalls.

## Problem Statement

Current timeout behavior still loses useful operator/user context:

- silence watchdog waiting overlays can replace a useful tool-status pane
- recent-activity restore can collapse to a generic marker instead of the last
  meaningful action
- stalled turns can append a local fallback post while clearing the in-panel
  draft preview too aggressively

This makes it harder to understand what the model was doing and harder to reuse
partial output.

## Acceptance Criteria

- [x] Silence watchdog re-sync does **not** replace a visible `tool_call`,
      `tool_status`, or `intent` status with generic “Waiting for model…” copy.
- [x] Re-entering a chat with recent activity preserves the last meaningful
      status payload instead of collapsing to a generic recent-activity marker.
- [x] Recent-activity copy shows the last visible tool/action when available.
- [x] When a stalled turn has partial draft text, the draft panel keeps the
      partial content available instead of being cleared immediately.
- [x] When a turn times out with a partial draft, the timeline fallback post
      includes the last visible tool action and a visible timeout hint.
- [ ] Timed-out turns expose richer salvage/recovery actions beyond the current
      local fallback post.
- [ ] Timeout handling is generalized into a staged soft/salvage/hard timeout
      model.

## Implementation Paths

### Path A — Preserve existing visible state during silence and reconnect

- keep the most recent tool/intended status visible while the silence watchdog
  probes for fresh state
- preserve the prior status payload when surfacing recent activity
- render recent-activity copy from the preserved payload

### Path B — Draft salvage on stall finalization

- keep the partial draft in the draft panel when the turn is finalized as
  stalled
- continue appending the local fallback post for transcript continuity
- use the preserved draft as the basis for future Continue/Retry-synthesis work

### Deferred follow-up

- staged timeout policy (`soft` / `salvage` / `hard`)
- explicit Continue / Retry synthesis / Retry turn affordances
- promoting recovered partial drafts into a richer final recovery surface

## Test Plan

- Applicable regression classes from `workitems/regression-test-planning-reference.md`:
  - [x] Bug replay / known-regression test
  - [x] State-machine / invariant test
  - [ ] Routing matrix test
  - [x] Interaction scenario test
  - [ ] Restore / reconnect matrix test
  - [ ] Pane / viewer contract test
  - [ ] Real-browser smoke test
- [x] Existing tests to rerun are listed
- [x] New regression coverage to add is listed
- [ ] Real-browser smoke pass required? If yes, record the surface

### Existing tests to rerun

- `runtime/test/web/app-agent-status-orchestration.test.ts`
- `runtime/test/web/app-agent-activity-orchestration.test.ts`
- `runtime/test/web/app-sse-events.test.ts`
- `runtime/test/web/status-render.test.ts`
- `runtime/test/web/post-recovery-chip.test.ts`

### New regression coverage

- `runtime/test/web/status-content.test.ts`
- silence watchdog keeps tool status visible while re-syncing
- stalled-response finalization preserves the last draft preview
- recent-activity status keeps the last visible tool context
- timeout fallback timeline post includes the last visible tool action and a visible timeout chip

## Definition of Done

- [x] All currently-scoped acceptance criteria satisfied and verified
- [x] Tests added or updated — passing locally
- [ ] Type check clean
- [ ] Docs and notes updated with links to ticket
- [x] Operational impact assessed
- [ ] Follow-up tickets created for deferred scope
- [x] Update history complete with evidence
- [x] Ticket front matter updated

## Updates

### 2026-04-22
- Created from user report about timeout UX hiding useful model/tool context.
- Landed first salvage-first slice in the web UI:
  - silence watchdog now preserves visible tool/intended status while probing
  - recent-activity restore preserves the last meaningful status payload
  - status copy now reports recent visible tool/action when possible
  - stalled-turn finalization preserves the last partial draft in the draft pane
- Extended timeout salvage so the local fallback timeline post now includes:
  - the last visible tool action in the post body
  - a visible timeout chip rendered from a `timeout_marker` content block
- Added/updated regression coverage for silence re-sync, last-activity state,
  stalled draft preservation, timeout marker rendering, and status copy rendering.

## Notes

This ticket intentionally stays in **doing** because richer timeout recovery is
still open: staged timeout classes, explicit recovery actions, and better
promotion of salvaged content into a first-class recovery surface.

## Links

- Referenced user message: `message:27318`
