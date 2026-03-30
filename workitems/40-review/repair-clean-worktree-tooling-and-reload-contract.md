---
id: repair-clean-worktree-tooling-and-reload-contract
title: Repair clean-worktree tooling and reload contract
status: review
priority: high
created: 2026-03-29
updated: 2026-03-30
estimate: L
risk: medium
tags:
  - work-item
  - kanban
  - refactor
  - tooling
  - worktrees
  - reload
  - quality
owner: pi
blocked-by: []
---

# Repair clean-worktree tooling and reload contract

## Summary

Fresh clean worktrees, sandbox copies, and autoresearch environments still show two related operational problems:

1. repo-local commands can fail with tool-resolution errors such as `tsc: command not found` and `eslint: command not found`, especially when package scripts `cd runtime` and rely on PATH / dependency layout assumptions that do not always hold in copied or alternate checkout roots
2. the documented agent-driven reload flow expects `PICLAW_SKIP_RESTART=1 make local-install`, but the current `Makefile` does not actually implement a skip-restart contract

This ticket should make worktree-based validation and reload behavior reliable in the authoritative container environment:

- host/runtime: container
- service manager: Supervisor
- canonical workspace: `/workspace`
- canonical global Bun root: `/usr/local/lib/bun`

The goal is not to redesign packaging. It is to make clean worktrees and agent-driven reloads deterministic, documented, and consistent with the code that actually ships.

## Acceptance Criteria

- [ ] A fresh clean worktree or sandbox copy can run the standard validation commands without `tsc` / `eslint` resolution failures.
- [ ] `bun run lint`, `bun run typecheck`, and `bun run build:web` work from a clean worktree without depending on hidden host state.
- [ ] The documented reload contract matches the implemented one:
  - [ ] either `PICLAW_SKIP_RESTART=1 make local-install` is supported in the `Makefile`
  - [ ] or the reload skill/docs are updated to the real supported flow
- [ ] The container reload path continues to install into `/usr/local/lib/bun/install/global/node_modules/piclaw` and does not depend on workspace-local Bun roots.
- [ ] The fix does not reintroduce repo-local `.bun/` cache commits or require tracked cache state for successful builds.
- [ ] Validation evidence is recorded from at least one clean worktree or sandbox-style checkout.

## Implementation Paths

### Path A — Fix the implementation to match the documented contract (recommended)
- Add explicit `PICLAW_SKIP_RESTART` handling to `make local-install`.
- Normalize Bun/tool invocation so worktree-local `bun run ...` resolves `tsc` and `eslint` reliably after `cd runtime`.
- Keep the install destination and restart behavior aligned with the current container runtime (`/usr/local/lib/bun`, Supervisor).

Why this is preferred:
- preserves the already-documented agent-driven reload flow
- reduces future confusion in chats, skills, and automation
- keeps worktree/autoresearch behavior closest to normal repo usage

### Path B — Change the docs/skill contract to match the current implementation
- Leave `Makefile` behavior mostly unchanged.
- Update `/workspace/.pi/skills/reload/SKILL.md` and any related instructions to describe the exact supported flow.
- Add separate documented commands for “install only” vs “install and restart”.

Why this is weaker:
- keeps operational friction in tooling and autoresearch flows
- does not address the underlying worktree command-resolution brittleness by itself

## Test Plan

- [ ] Create or use a fresh clean worktree / sandbox checkout.
- [ ] From that checkout, run:
  - [ ] `bun run lint`
  - [ ] `bun run typecheck`
  - [ ] `bun run build:web`
- [ ] Verify no `tsc: command not found` or `eslint: command not found` failures occur.
- [ ] Validate the chosen reload contract:
  - [ ] if implementing skip-restart, run `PICLAW_SKIP_RESTART=1 make local-install` and confirm install succeeds without restarting
  - [ ] if updating docs instead, run the documented equivalent and confirm it matches real behavior
- [ ] Confirm the install destination remains `/usr/local/lib/bun/install/global/node_modules/piclaw` in this container.
- [ ] Record any remaining follow-up gaps in `## Updates`.

## Definition of Done

- [ ] Clean worktree validation is reproducibly green for the standard commands.
- [ ] Reload docs and implementation no longer disagree.
- [ ] The container-specific install/restart contract is explicit and preserved.
- [ ] No `.bun/`-style repo-local cache dependency is required for the fixed workflow.
- [ ] Evidence and commands are recorded in `## Updates`.

## Updates

### 2026-03-30
- Lane change: `20-doing` → `40-review` during board cleanup because the implementation evidence now covers the ticket’s intended Path A scope.
- Review focus from here: confirm the recorded evidence is sufficient for closeout rather than continue treating this as an active implementation ticket.
- Existing evidence carried forward into review:
  - `runtime/scripts/repo-dev-command.ts` now runs repo-owned `build`, `lint`, and `typecheck` through deterministic repo-local tool paths instead of cwd-sensitive bare `tsc` / `eslint`
  - root `package.json` scripts were updated to call that helper
  - `Makefile` `local-install` now supports `PICLAW_SKIP_RESTART=1`
  - focused coverage landed in `runtime/test/scripts/repo-dev-command.test.ts`
  - `cd runtime && bun test test/scripts/vendor-workflow.test.ts test/scripts/repo-dev-command.test.ts` → `5 pass, 0 fail`
  - repo checkout: `bun run lint` and `bun run typecheck` → exit `0`
  - fresh detached worktree with `node_modules/` removed each time:
    - `bun run lint` → exit `0`
    - `bun run typecheck` → exit `0`
    - `bun run build:web` → exit `0`
  - non-destructive reload-contract smoke in the authoritative container environment:
    - `cd /workspace/piclaw && PICLAW_SKIP_RESTART=1 make local-install` → exit `0`
    - install completed at `/usr/local/lib/bun/install/global/node_modules/piclaw`
    - restart was explicitly skipped and logged as `[local-install] Skipping restart (PICLAW_SKIP_RESTART=1)`
- Quality: ★★★★☆ 8/10 (problem: 2, scope: 2, test: 2, deps: 1, risk: 1)

### 2026-03-30
- Continued active implementation on branch `feature/repair-clean-worktree-tooling-and-reload-contract`.
- Path A tranche landed locally:
  - added `runtime/scripts/repo-dev-command.ts` to run repo-owned `build`, `lint`, and `typecheck` through deterministic repo-local tool paths instead of cwd-sensitive bare `tsc` / `eslint`
  - updated root `package.json` scripts to call that helper
  - implemented `PICLAW_SKIP_RESTART=1` handling in `Makefile` `local-install`
  - added focused coverage in `runtime/test/scripts/repo-dev-command.test.ts`
- Validation evidence so far:
  - `cd runtime && bun test test/scripts/vendor-workflow.test.ts test/scripts/repo-dev-command.test.ts` → `5 pass, 0 fail`
  - repo checkout: `bun run lint` and `bun run typecheck` → exit `0`
  - fresh detached worktree with `node_modules/` removed each time:
    - `bun run lint` → exit `0`
    - `bun run typecheck` → exit `0`
    - `bun run build:web` → exit `0`
- Non-destructive reload-contract smoke now recorded in the authoritative container environment:
  - `cd /workspace/piclaw && PICLAW_SKIP_RESTART=1 make local-install` → exit `0`
  - install completed at `/usr/local/lib/bun/install/global/node_modules/piclaw`
  - restart was explicitly skipped and logged as `[local-install] Skipping restart (PICLAW_SKIP_RESTART=1)`
- Quality: ★★★★☆ 8/10 (problem: 2, scope: 2, test: 2, deps: 1, risk: 1)

### 2026-03-30
- Lane change: `10-next` → `20-doing` because implementation of Path A has started.
- Fresh detached worktree validation reproduced the remaining failures exactly:
  - `bun run build:web` now succeeds from a clean worktree after the earlier vendor self-heal work
  - `bun run lint` still fails by falling through to system `eslint` 6.4.0 instead of the repo toolchain
  - `bun run typecheck` still fails with `tsc: command not found`
- Implementation intent for this tranche: add a repo-owned dependency/bootstrap command path for build/lint/typecheck so clean worktrees do not depend on cwd-sensitive PATH lookup, and implement the missing `PICLAW_SKIP_RESTART` contract in `make local-install`.
- Note: this ticket is now active alongside the newly added CI simplification ticket because the user explicitly requested both tracking and implementation work in the same session.
- Quality: ★★★★☆ 8/10 (problem: 2, scope: 2, test: 2, deps: 1, risk: 1)

### 2026-03-29
- Created after board prioritization and Adaptive Card selection of **Worktree Tooling** as the next refactor focus.
- Captured the two concrete pain points already observed during recent refactor/autoresearch work:
  - clean worktrees can fail with `tsc: command not found` / `eslint: command not found`
  - the reload skill documents `PICLAW_SKIP_RESTART=1 make local-install`, but the current `Makefile` does not implement that contract yet
- Quality: ★★★★☆ 8/10 (problem: 2, scope: 2, test: 1, deps: 2, risk: 1)

## Notes

- Recent `.bun/` secret-scanning cleanup solved the history problem, but this ticket is about runtime/tooling determinism rather than Git history.
- Keep identity continuity explicit while implementing:
  - active runtime is the container
  - Supervisor is the service manager
  - `/workspace` is authoritative
  - `/usr/local/lib/bun` is the canonical Bun root
- The already-completed `vendor-beautiful-mermaid-for-clean-worktrees` ticket reduced one clean-worktree failure class; this ticket should address the remaining command-resolution and reload-contract gaps.

## Links

- `/workspace/.pi/skills/reload/SKILL.md`
- `Makefile`
- `workitems/20-doing/codebase-quality-cleanup-2026.md`
- `workitems/50-done/vendor-beautiful-mermaid-for-clean-worktrees.md`
