---
id: context-auto-compacting-affordance-persistence
title: Persist the context auto-compacting affordance state
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
  - web
  - ux
  - compaction
  - persistence
  - session
owner: pi
---

# Persist the context auto-compacting affordance state

## Summary

The UI affordance around **context auto-compacting** should preserve its state
across reloads/reconnects so it does not feel transient, misleading, or easy to
lose during normal web use.

This ticket tracks defining what exactly should persist, where that state should
live, and how it should be restored so the compaction affordance remains
trustworthy and comprehensible after refresh, restart, reconnect, or resumed
sessions.

## Problem Statement

A compaction-related affordance that appears only ephemerally can create user
confusion:

- the user may see that compaction is available or imminent, then lose the hint after reload
- a dismissed or acknowledged affordance may reappear unexpectedly
- a pending compaction-related state may not survive reconnect even when the underlying session context still warrants it
- the UI can appear out of sync with the real session/context state

Because context growth and compaction are long-lived session concerns, the
associated affordance should behave more like persisted session UI state than a
purely transient toast.

## Scope

### In scope
- Define the **affordance state model**, including which of these must persist:
  - visibility
  - dismissed/acknowledged state
  - warning/escalation level
  - timestamp or last-seen metadata
  - session/chat association
- Decide persistence layer:
  - browser-local only,
  - SQLite-backed per chat/session,
  - or hybrid
- Restore the affordance consistently after:
  - hard reload
  - SSE reconnect
  - Supervisor/service restart
  - resumed session rotation / compaction-related transitions
- Ensure the affordance reflects the **current effective context/session state**, not stale cached assumptions.

### Out of scope
- Reworking the underlying compaction engine itself
- Full redesign of all status/toast surfaces
- New session-rotation policies unrelated to the affordance behavior

## Acceptance Criteria

- [ ] The auto-compacting affordance has a clearly defined persisted state model.
- [ ] Its behavior after reload/reconnect is deterministic and documented.
- [ ] A dismissed or acknowledged affordance does not reappear spuriously.
- [ ] If the underlying session/context state still warrants the affordance, it restores correctly after reload.
- [ ] The affordance remains scoped to the correct chat/session context.
- [ ] Persistence does not make the UI lie after a compaction, rotation, or context reset.
- [ ] Regression coverage exists for the chosen persistence behavior.

## Investigation / Design Questions

- Is this state fundamentally:
  - per browser tab,
  - per browser profile,
  - per chat,
  - or per session tree?
- Should dismissal persist forever, until the next threshold crossing, or only until the next compaction event?
- Should restoration be derived from backend truth every time, or can the frontend keep a local hint cache?
- Does session rotation reset the affordance or carry it forward with the effective context?
- Is there already enough signal in `/state`, session metadata, or web status endpoints to derive this without adding a new store?

## Test Plan

- [ ] Add web/UI tests covering reload/restoration behavior.
- [ ] Add backend/state tests if persistence is not purely frontend-local.
- [ ] Validate transitions for:
  1. threshold reached / affordance shown
  2. user dismisses or acknowledges
  3. page reloads
  4. SSE reconnects
  5. compaction happens
  6. affordance clears or updates correctly
- [ ] Run `bun run quality` from `/workspace/piclaw/piclaw`.

## Definition of Done

- [ ] Persistence model chosen and implemented
- [ ] Behavior documented in code/comments or runtime docs as appropriate
- [ ] Reload/reconnect behavior validated
- [ ] Regression coverage added
- [ ] `bun run quality` passes

## Updates

### 2026-03-15
- Created from user request to explicitly track persistence for the context auto-compacting affordance.
- Initial framing assumes this is primarily a UX/state-coherence issue tied to longer-lived session/context state.

## Notes

- Prefer truth derived from real session/context state over purely cosmetic frontend memory where possible.
- Keep the affordance aligned with existing session rotation and compaction semantics.
- Avoid reintroducing noisy or sticky warnings that outlive the condition they represent.

## Links

- `piclaw/src/agent-control/handlers/info.ts`
- `piclaw/src/session-rotation.ts`
- `piclaw/src/agent-pool.ts`
- `piclaw/web/src/app.ts`
- `piclaw/web/src/components/status.ts`
- `piclaw/web/src/ui/status-duration.ts`
