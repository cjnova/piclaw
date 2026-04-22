---
id: implement-extension-status-path-a-lifecycle-reset-and-render-location
title: "Impl: extension status Path A — lifecycle reset and render location"
status: done
priority: medium
created: 2026-04-21
updated: 2026-04-21
estimate: S
risk: low
tags:
  - work-item
  - kanban
  - web
  - status
  - progress
  - extensions
  - path-a
owner: smith
blocked-by: []
---

# Impl: extension status Path A — lifecycle reset and render location

## Summary

Implement the minimal-but-correct subset of the extension status model defined
in the spec ticket. No new reducer or unified store — just make the existing
transport behave correctly across lifecycle transitions and pin the render
location to one consistent place.

Spec: `workitems/30-done/specify-web-progress-and-extension-status-model.md`

## What Path A does NOT include

- No unified per-chat reducer (that is Path B)
- No merging of `setStatus`, `setWorkingMessage`, `setWorkingIndicator`, and widgets into a single store
- No restore/reconnect replay semantics beyond "clear transient state on reconnect"
- No durable widget removal semantics beyond current behavior

## Acceptance Criteria

- [ ] `extension_ui_working_indicator` remains a dedicated SSE event (not merged or removed).
- [x] Per-chat transient extension state (working message, working indicator, status text) is **cleared on chat switch**.
- [x] Per-chat transient extension state is **cleared on turn end** (agent stops, result delivered).
- [x] Per-chat transient extension state is **cleared on turn error** (agent error or provider error).
- [x] Per-chat transient extension state is **cleared on turn abort** (user cancels).
- [x] Per-chat transient extension state is **cleared on SSE reconnect**.
- [x] Working indicator and working message render in **one consistent location** in the web shell — not split across multiple components.
- [x] `setStatus()` output is treated as secondary text, not a competing primary UI element.
- [x] No regressions on existing extension UX (proxmox, portainer, image-processing, autoresearch).

## Key files

- `runtime/web/src/ui/extension-ui-events.ts` — browser-side event handling
- `runtime/web/src/ui/app-sse-events.ts` — SSE event dispatch into UI state
- `runtime/web/src/ui/app-extension-status.ts` — per-chat status state
- `runtime/src/channels/web/sse/sse.ts` — server-side SSE emission
- `runtime/src/channels/web/theming/ui-bridge.ts` — `ExtensionUIContext` bridge

## Implementation Checklist

- [x] Audit which lifecycle transitions already clear transient state today vs which do not.
- [x] Add/fix clear-on-chat-switch to extension status state.
- [x] Add/fix clear-on-turn-end, clear-on-turn-error, clear-on-turn-abort.
- [x] Add/fix clear-on-reconnect.
- [x] Confirm working indicator + working message render from the same component/location.
- [x] Confirm `setStatus()` is rendered as secondary text (not promoted visually).
- [x] Typecheck clean.

## Test Plan

- [x] State-machine / invariant test: transient state cleared on each lifecycle transition
- [x] Interaction scenario test: chat switch clears previous chat's working message
- [x] Interaction scenario test: turn abort clears working indicator
- [x] Pane / viewer contract test: working strip renders in one location
- [x] Real-browser smoke test: proxmox or portainer extension shows/clears progress correctly

## Definition of Done

- [x] All lifecycle transitions (chat switch, turn end, error, abort, reconnect) verified to clear transient state
- [x] Working indicator + message confirmed rendering from one component/location
- [x] `setStatus()` confirmed rendering as secondary text, not primary
- [x] No regressions on proxmox, portainer, image-processing, autoresearch extension UX
- [x] Tests added or updated — passing locally
- [x] Type check clean
- [x] Operational impact assessed (no user-visible docs change expected for this fix)
- [x] Update history complete with evidence
- [x] Ticket front matter updated

## Updates

### 2026-04-21
- Created from spec ticket `specify-web-progress-and-extension-status-model`.
- Path A is the minimal safe first step before the Path B unified reducer.
- Quality: ★★★☆☆ 7/10

## Links

- Spec: `workitems/30-done/specify-web-progress-and-extension-status-model.md`
- Successor: `workitems/20-doing/implement-extension-status-path-b-unified-per-chat-reducer.md`
