---
id: pending-user-turns-after-reload-not-fully-handled
title: Pending user turns after reload are still not fully handled
status: inbox
priority: high
created: 2026-03-14
updated: 2026-03-14
target_release: next
estimate: M
risk: medium
tags:
  - work-item
  - kanban
  - web
  - recovery
  - restart
  - reload
  - queue
  - threading
owner: pi
---

# Pending user turns after reload are still not fully handled

## Summary

Follow-up ticket for the web chat reload/restart path.

Although several related tickets are already closed, there is still active user
concern that already-submitted user turns are not always handled correctly after
reload/restart. This should be treated as a fresh verification/fix ticket, not
as proof that the earlier recovery work was invalid.

The goal is to verify whether any remaining gap exists in how the system
recovers, resumes, surfaces, or correctly parents pending user turns after a
reload/restart — and to fix it if confirmed.

## Problem Statement

The project already closed substantial recovery/restart work under:

- `kanban/50-done/restart-recovery-and-terminal-publication-hardening.md`
- `kanban/50-done/fix-stale-thread-root-on-queued-web-chat-retry.md`
- `kanban/50-done/queue-inflight-turn-parenting-regression.md`
- `kanban/50-done/fix-queued-message-loss-after-mid-queue-removal.md`
- `kanban/50-done/fix-active-inactive-streaming-state-mismatch-for-queue-submit.md`

However, the user explicitly requested a new ticket because they still suspect
that pending user turns after reload are not fully handled in practice.

Potential remaining failure modes include:

- a submitted user turn exists before reload but is not resumed/processed after restart
- a pending turn is resumed but the UI does not show the resulting terminal post reliably
- a recovered turn is processed under the wrong thread root after ordering/retry drift
- queue/deferred follow-up state survives restart, but materialized persisted turns do not drain correctly afterward
- frontend reconnect logic makes a recovered turn appear lost even when backend state eventually recovers

## Acceptance Criteria

- [ ] A user turn submitted before reload/restart is either:
  - resumed and completed exactly once, or
  - surfaced as an explicit failed terminal outcome,
  but is never silently lost.
- [ ] A recovered turn cannot be attached to the wrong user thread after restart/retry ordering changes.
- [ ] If the backend completes a recovered turn, the web UI surfaces the resulting terminal post without requiring a manual nudge beyond normal reconnect behavior.
- [ ] Deferred queued follow-ups and persisted pending turns remain distinguishable and are drained in the intended order after restart.
- [ ] No pending user turn can disappear from both:
  - the queue/deferred state, and
  - the persisted timeline / terminal outcome path.
- [ ] Regression coverage exists for the confirmed failure mode.

## Investigation Plan

- [ ] Re-audit restart-time handling of:
  - inflight persisted user turns
  - deferred queued follow-ups
  - `resume_pending` startup IPC
  - reconnect-time timeline/status refresh
- [ ] Verify whether the bug is primarily:
  - backend recovery,
  - queue drain ordering,
  - thread-root derivation,
  - frontend visibility/reconciliation,
  - or a combination of the above.
- [ ] Reproduce with fixture/in-memory DB tests rather than injecting live probe messages into the real chat.
- [ ] Confirm whether this is a new regression, an uncovered edge case, or a UI-only visibility bug.

## Test Plan

- [ ] Add/extend recovery tests around persisted user turns that exist before restart but have not yet reached a terminal assistant outcome.
- [ ] Add/extend queue/retry tests for restart-time ordering where multiple pending items exist.
- [ ] Add/extend frontend/web tests if the failure is visibility-only after reconnect.
- [ ] Run `bun run quality` from `/workspace/piclaw/piclaw`.

## Definition of Done

- [ ] Root cause confirmed with code/test evidence or DB-backed runtime evidence
- [ ] Remaining reload/pending-turn gap fixed or explicitly disproven
- [ ] Regression coverage added for the confirmed scenario
- [ ] Related older tickets linked and differentiated clearly
- [ ] `bun run quality` passes

## Updates

### 2026-03-14
- Created from explicit user request after reviewing closed reload/recovery/turn tickets and concluding the topic still needs a fresh follow-up investigation.
- This ticket intentionally assumes prior work may be largely correct while still allowing for a real remaining gap in pending-turn handling after reload.

## Notes

- Do not assume that a previously closed recovery ticket means no new regression exists.
- Prefer evidence from fixture coverage, DB state, and restart/reconnect behavior over intuition.
- Keep Supervisor/container assumptions aligned with the live runtime model documented elsewhere in the repo.

## Links

- `kanban/50-done/restart-recovery-and-terminal-publication-hardening.md`
- `kanban/50-done/fix-stale-thread-root-on-queued-web-chat-retry.md`
- `kanban/50-done/queue-inflight-turn-parenting-regression.md`
- `kanban/50-done/fix-queued-message-loss-after-mid-queue-removal.md`
- `kanban/50-done/fix-active-inactive-streaming-state-mismatch-for-queue-submit.md`
- `piclaw/src/channels/web/recovery.ts`
- `piclaw/src/channels/web/chat-run-control.ts`
- `piclaw/src/channels/web/handlers/agent.ts`
- `piclaw/src/runtime/startup.ts`
- `piclaw/web/src/app.ts`
