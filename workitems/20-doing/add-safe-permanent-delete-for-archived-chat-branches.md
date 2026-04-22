---
id: add-safe-permanent-delete-for-archived-chat-branches
title: Add safe permanent delete for archived chat branches
status: doing
priority: medium
created: 2026-04-18
updated: 2026-04-21
estimate: M
risk: medium
tags:
  - work-item
  - web
  - sessions
  - agents
  - cleanup
  - data-integrity
owner: pi
origin: "User request"
blocked-by: []
---

# Add safe permanent delete for archived chat branches

## Summary

Piclaw already supports pruning a branch from the active agent picker by setting
`chat_branches.archived_at` and disposing the live runtime. That is a soft
archive only: chat history, cursor state, token usage rows, and persisted
session directories remain in place, and the branch can still be restored.

Add a separate, explicit **permanent delete** path for **already archived**
branches only. It removes all durable state for the branch, cleans up orphaned
media and session artifacts, and leaves active/root branches untouched.

Also provide a Bun maintenance script for recurring batch cleanup.

## Current behaviour

- UI prune → `POST /agent/branch-prune` → `agentPool.pruneChatBranch()` →
  `archiveChatBranch()` sets `chat_branches.archived_at` and disposes live
  runtimes — **does not delete any rows**.
- Root branches: blocked by `archiveChatBranch()`.
- Archived branches can be restored at any time.

### Surfaces involved

| File | Role |
|---|---|
| `runtime/src/db/chat-branches.ts` | `archiveChatBranch()` — soft prune only |
| `runtime/src/agent-pool/branch-manager.ts` | `pruneChatBranch()` — orchestration |
| `runtime/src/channels/web/agent/agent-control-plane-service.ts` | `POST /agent/branch-prune` handler |
| `runtime/src/db/connection.ts` | Schema — all tables below |
| `runtime/src/db/media.ts` | `deleteUnreferencedMedia(mediaIds[])` |
| `runtime/src/agent-pool/session.ts` | `sanitiseJid(jid)` — session dir naming |
| `runtime/src/core/config.ts` | `SESSIONS_DIR` = `DATA_DIR/sessions` |
| `runtime/src/agent-pool/branch-seeding.ts` | `.branch-seed.json` / `.branch-seed.claimed.json` |

## Delete surface — all tables to clean per `chat_jid`

Confirmed from schema audit (`db/connection.ts`):

| Table | Key | Notes |
|---|---|---|
| `chat_branches` | `chat_jid` | primary target — verified archived before delete |
| `chats` | `jid` | branch chat row |
| `messages` | `chat_jid` | `messages_ad` trigger auto-removes `messages_fts` on DELETE — handled transparently |
| `message_media` | via `message_rowid` | collect `media_id` set before deleting messages; then run `deleteUnreferencedMedia()` |
| `chat_cursors` | `chat_jid PRIMARY KEY` | |
| `token_usage` | `chat_jid` | |
| `scheduled_tasks` | `chat_jid` | cancel/delete any tasks owned by the branch |
| `ssh_configs` | `chat_jid PRIMARY KEY` | |
| `proxmox_configs` | `chat_jid PRIMARY KEY` | |
| `portainer_configs` | `chat_jid PRIMARY KEY` | |

**Not keyed by `chat_jid` — do not delete:**
- `tool_outputs` — keyed by own `id`, shared
- `media` — cleaned via `deleteUnreferencedMedia()` after `message_media` purge
- `link_preview_image_cache` — expires independently
- `web_sessions`, `keychain_entries`, `webauthn_*` — global

### Session directory cleanup

Pattern: `SESSIONS_DIR / sanitiseJid(chatJid)` and
`SESSIONS_DIR / sanitiseJid(chatJid)__*` (named variants from `session.ts`).

Also remove `.branch-seed.json` and `.branch-seed.claimed.json` under the
session directory — safe for permanent delete (unlike soft prune, which must
preserve seed for restore).

### FTS note

`messages_fts` is maintained by the `messages_ad` AFTER DELETE trigger.
Deleting rows from `messages` automatically removes them from FTS — no manual
FTS cleanup needed.

## Acceptance Criteria

- [ ] A `permanentDeleteArchivedBranch(chatJid)` function exists in
      `db/chat-branches.ts` that runs the full delete inside a single DB
      transaction.
- [ ] The function throws if the branch is not found or not archived.
- [ ] The function throws if the branch is the root branch.
- [ ] All 10 tables in the delete surface are covered.
- [ ] `message_media` media IDs are collected before message deletion; then
      `deleteUnreferencedMedia()` is called to clean up now-orphaned blobs.
- [ ] Session directories (`SESSIONS_DIR/sanitiseJid(chatJid)` and `__*`
      variants) are removed after the DB transaction commits.
- [ ] `.branch-seed.json` and `.branch-seed.claimed.json` are removed.
- [ ] A `permanentPurgeChatBranch(chatJid)` method exists on `BranchManager`
      that: verifies not active, calls the DB function, cleans session dirs,
      emits an SSE event to remove the branch from the picker.
- [ ] A `POST /agent/branch-purge` endpoint exists, wired to
      `agentControlPlane.permanentPurgeChatBranch()`.
- [ ] The endpoint is rate-limited alongside `branch-prune` in
      `rate-limit-rules.ts`.
- [ ] The UI shows an explicit confirmation before calling the endpoint, with
      copy that makes irreversibility clear.
- [ ] The branch disappears from the picker immediately after successful purge.
- [ ] A maintenance script `runtime/scripts/prune-archived-branches.ts` exists
      with `--dry-run` / `--apply`, `--all-archived`, `--chat-jid <jid>`,
      `--vacuum` options.
- [ ] `--dry-run` output lists what would be deleted with row counts; does not
      modify anything.
- [ ] `--apply` prints a summary of what was deleted.

## Non-goals

- Deleting root chats.
- Deleting non-archived branches without an explicit archive step.
- Rewriting general timeline cleanup or message deletion semantics.

## Suggested implementation order

1. `permanentDeleteArchivedBranch()` in `db/chat-branches.ts` — DB transaction,
   returns `{ messagesDeleted, mediaDeleted, tablesAffected }`.
2. Unit tests for the DB function (in-memory DB, covers all 10 tables).
3. `permanentPurgeChatBranch()` on `BranchManager` — calls DB fn, cleans
   session dirs, emits SSE.
4. `POST /agent/branch-purge` endpoint in `agent-control-plane-service.ts` +
   rate-limit entry.
5. UI confirmation in `app-branch-actions.ts` / branch picker component.
6. Maintenance script `runtime/scripts/prune-archived-branches.ts`.

## Maintenance script shape

```bash
# Preview what would be deleted
bun runtime/scripts/prune-archived-branches.ts --dry-run --all-archived

# Apply to all archived branches
bun runtime/scripts/prune-archived-branches.ts --apply --all-archived

# Target specific branches
bun runtime/scripts/prune-archived-branches.ts --dry-run --chat-jid web:default:branch:abc123
bun runtime/scripts/prune-archived-branches.ts --apply --chat-jid web:default:branch:abc123

# Vacuum after cleanup
bun runtime/scripts/prune-archived-branches.ts --apply --all-archived --vacuum
```

## UI confirmation copy

> **Permanently delete `@agent-name`?**
>
> This removes all chat history, token usage, cursor state, scheduled tasks,
> and session files for this branch. It cannot be undone.

Two-step: first click shows the warning; second click sends the request.

## Test Plan

- [ ] Unit: `permanentDeleteArchivedBranch` — non-archived branch throws
- [ ] Unit: `permanentDeleteArchivedBranch` — root branch throws
- [ ] Unit: `permanentDeleteArchivedBranch` — deletes rows across all 10 tables
      for the target `chat_jid`; sibling/root rows untouched
- [ ] Unit: `permanentDeleteArchivedBranch` — `deleteUnreferencedMedia` called
      with correct media IDs
- [ ] Unit: `permanentDeleteArchivedBranch` — shared media referenced by other
      messages is NOT deleted
- [ ] Unit: `BranchManager.permanentPurgeChatBranch` — active branch throws
- [ ] Unit: `BranchManager.permanentPurgeChatBranch` — session dir removal
      attempted after DB commit
- [ ] Interaction scenario: branch disappears from picker after purge
- [ ] Interaction scenario: confirmation copy is irreversibility-explicit
- [ ] Data lifecycle: `--dry-run` lists targets without modifying DB
- [ ] Data lifecycle: `--apply` removes all expected rows; `--vacuum` runs

## Definition of Done

- [ ] `permanentDeleteArchivedBranch()` implemented and all unit tests pass
- [ ] `POST /agent/branch-purge` endpoint wired and rate-limited
- [ ] Session dir + seed file cleanup confirmed in tests
- [ ] UI confirmation ships with irreversibility copy
- [ ] Maintenance script `prune-archived-branches.ts` works end-to-end
- [ ] Tests added — passing locally
- [ ] Type check clean
- [ ] `docs/` updated if any user-facing API or CLI surface is new
- [ ] Operational impact assessed (irreversible; documented in script help text)
- [ ] Update history complete with evidence
- [ ] Ticket front matter updated

## Updates

### 2026-04-21
- Refined: full schema audit completed. Added exact table list (10 tables, 3
  skipped with rationale). Pinned session dir pattern from `session.ts`.
  Confirmed `messages_fts` is handled by `messages_ad` trigger — no manual
  cleanup needed. Added `.branch-seed.json` cleanup scope. Added
  `permanentDeleteArchivedBranch()` / `permanentPurgeChatBranch()` naming and
  suggested implementation order. Added `POST /agent/branch-purge` endpoint
  spec and rate-limit note. Rewrote test plan with concrete scenario coverage.

### 2026-04-19
- Moved next → doing.

### 2026-04-18
- Created after confirming that current branch prune is archive-only.

## Links

- `runtime/src/db/chat-branches.ts`
- `runtime/src/db/connection.ts`
- `runtime/src/db/media.ts` — `deleteUnreferencedMedia()`
- `runtime/src/agent-pool/branch-manager.ts`
- `runtime/src/agent-pool/session.ts` — `sanitiseJid()`, `SESSIONS_DIR`
- `runtime/src/agent-pool/branch-seeding.ts` — `.branch-seed.json`
- `runtime/src/channels/web/agent/agent-control-plane-service.ts`
- `runtime/src/channels/web/http/rate-limit-rules.ts`
- `runtime/web/src/ui/app-branch-actions.ts`
