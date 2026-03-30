---
id: queued-messages-do-not-immediately-appear-at-bottom-of-queue
title: Queued messages do not immediately appear at the bottom of the queue
status: doing
priority: medium
created: 2026-03-17
updated: 2026-03-30
estimate: M
risk: medium
tags:
  - work-item
  - kanban
  - web
  - queue
  - compose
  - followups
owner: pi
---

# Queued messages do not immediately appear at the bottom of the queue

## Summary

There is still an intermittent queue-stack visibility bug in the web compose UI.

A newly queued follow-up sometimes does **not** immediately show up at the
bottom of the visible queue stack, even though the user expects it to appear
there right away. This may be a continuation of the earlier queue refresh /
reconciliation issues, or it may be a distinct append-order / optimistic-state
bug.

## Acceptance Criteria

- Newly queued follow-up messages appear at the bottom of the visible queue
  stack immediately after submit.
- Queue ordering remains FIFO and visually matches backend-authoritative order.
- The UI does not require an extra refresh, reconnect, or unrelated state change
  before showing the newly queued item.
- If the queue cannot be updated immediately, the failure mode is explicit and
  no queued item appears to be missing.
- A regression test exists for the observed append/visibility case.

## Updates

### 2026-03-30
- Lane change: `50-done` → `20-doing` after a fresh live repro showed the ticket was closed prematurely.
- Root-cause hypothesis: deferred queued followups can reuse negative synthetic `row_id` values after removal, which collides with client-side dismissed-row filtering and can hide a newly queued item until a later refresh.
- Implementation in progress: updating deferred queue id allocation plus queue-refresh reconciliation so a dismissed synthetic row id cannot immediately suppress a newly queued follow-up.
- Planned verification: `bun test runtime/test/web/app-status-refresh-orchestration.test.ts runtime/test/web/app-followup-queue.test.ts runtime/test/channels/web/queued-followup-lifecycle-service.test.ts` plus a live web repro in the compose queue UI.
- Quality: ★★★★☆ 8/10 (problem: 2, scope: 2, test: 2, deps: 1, risk: 1)

### 2026-03-30
- Lane change: `10-next` → `50-done` per explicit user instruction to close the ticket.
- Closure rationale: current web queue handling already includes immediate queued-submit refresh (`runtime/web/src/ui/app-auth-bootstrap.ts`), optimistic `agent_followup_queued` append plus authoritative refresh (`runtime/web/src/ui/app-sse-events.ts`), and append-to-bottom semantics in `runtime/web/src/ui/app-followup-queue.ts`.
- Verification: focused queue coverage passed via `cd runtime && bun test test/web/app-followup-queue.test.ts test/web/queue-state.test.ts test/channels/web/web-channel.test.ts --timeout 30000`.
- No distinct remaining implementation gap was confirmed during review; if a fresh repro appears, reopen with a narrower reproduction case rather than keeping this as a speculative active bug.
- Quality: ★★★★★ 9/10 (problem: 2, scope: 2, test: 2, deps: 1, risk: 2)

### 2026-03-28
- Lane retained: `10-next` via web next-card decision.
- Next-lane outcome recorded from the adaptive-card submission: **Keep in Next**.
- Still awaiting fresh implementation evidence or a narrowed repro before promotion back into active work.

### 2026-03-26
- Lane change: `40-review` → `10-next`.
- Board review outcome: this still reads as an unresolved bug ticket, not a completed fix awaiting final verification.
- Kept in `next` rather than `doing` because there is no current implementation evidence recorded on the ticket.
- Quality: ★★★☆☆ 6/10 (problem: 2, scope: 1, test: 1, deps: 1, risk: 1)

### 2026-03-17
- Ticket created from a fresh user report: queued messages sometimes do not
  immediately appear at the bottom of the queue.
- Initial triage: likely related to earlier queue-stack refresh/reconciliation
  work, but should be treated as a fresh follow-up until proven identical.
- Related historical ticket already closed:
  `workitems/50-done/queued-followup-stack-does-not-refresh-after-removal.md`

## Notes

Questions to resolve:
- Does this only happen after queue item removal, reconnect, or reload?
- Is the item missing only in the UI, or missing from `/agent/queue-state` too?
- Is the item eventually shown in the correct position after polling/SSE?
- Is the bug specifically an append-to-bottom rendering problem, or a broader
  stale refresh generation / optimistic-state merge issue?

Likely investigation areas:
- `piclaw/web/src/app.ts`
- `piclaw/web/src/components/compose-box.ts`
- queue-state refresh / reconciliation logic
- optimistic queue updates after submit
- SSE handling for `agent_followup_queued`
- ordering logic when queue state is re-fetched after submit

## Links

- `workitems/50-done/queued-followup-stack-does-not-refresh-after-removal.md`
- `piclaw/web/src/app.ts`
- `piclaw/web/src/components/compose-box.ts`
- `piclaw/src/channels/web/handlers/agent.ts`
