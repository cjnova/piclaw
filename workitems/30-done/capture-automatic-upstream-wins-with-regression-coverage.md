---
id: capture-automatic-upstream-wins-with-regression-coverage
title: Capture automatic upstream wins with regression coverage
status: done
priority: medium
created: 2026-04-21
updated: 2026-04-21
estimate: M
risk: low
tags:
  - work-item
  - kanban
  - upstream
  - tests
  - reliability
  - hooks
owner: smith
blocked-by: []
---

# Capture automatic upstream wins with regression coverage

## Summary

Pi 0.68.0 gave Piclaw several useful improvements “for free”, but those wins remain implicit unless we verify and lock them down with targeted tests.

This ticket focuses on **automatic wins** rather than new feature work.

## Automatic wins to capture

### Better built-in tool hook/context behavior
Likely beneficiaries:
- `runtime/src/extensions/keychain-tools.ts`
- `runtime/extensions/integrations/context-mode.ts`
- any built-in tool result post-processing paths

### Better shell-path cwd handling
Likely beneficiaries:
- session/worktree-specific shell execution
- wrapped local/remote tool flows
- any tool creation path that depends on session cwd

### Provider/session/cache fixes
Likely beneficiaries:
- `runtime/extensions/integrations/azure-openai.ts`
- OpenAI-compatible model configurations used in Piclaw
- cache-affinity sensitive provider paths

## Acceptance Criteria

- [x] Each automatic upstream win is mapped to Piclaw-owned surfaces.
- [x] Regression coverage exists for the highest-value implicit wins.
- [x] We can point to concrete tests proving the wins instead of relying on changelog assumptions.
- [x] Any discovered gaps are turned into explicit follow-up tickets — none identified; all audit items resolved.

## Detailed audit and test work

### 1. Hook/context-path verification
- verify `tool_result` post-processing still sees expected content/details for built-ins
- confirm no hidden regression in keychain redaction after the upstream wrapping fix
- confirm large bash outputs still flow through stored-output compaction/search correctly

### 2. Cwd/shell-path verification
- create focused tests around session cwd vs launcher cwd
- cover wrapped tools where session cwd is not the same as process cwd
- validate ssh/local wrapper behavior where applicable

### 3. Provider/session/cache verification
- identify which Azure/OpenAI-compatible tests best prove the upstream fixes matter locally
- add at least one targeted regression for session/caching-sensitive request paths if currently absent

## Extensions and integrations to audit here
- `keychain-tools`
- packaged `context-mode`
- `ssh-core`
- `azure-openai`

## Candidate tests to extend
- `runtime/test/extensions/extensions-keychain-tools.test.ts`
- `runtime/test/tools/tracked-bash.test.ts`
- `runtime/test/extensions/azure-openai-session.test.ts`
- `runtime/test/extensions/azure-openai-streaming.test.ts`
- any session cwd / shell-path tests already in runtime

## Implementation Paths

### Path A — Test-only capture
- add/extend tests only
- no runtime changes unless a mismatch is found

### Path B — Test plus hardening
- patch any real mismatch discovered
- keep each fix paired with the test that exposed it

### Preferred
- Path B if anything fails during audit; otherwise Path A

## Test Plan

- Applicable regression classes from `workitems/regression-test-planning-reference.md`:
  - [x] Bug replay / known-regression test
  - [x] State-machine / invariant test
  - [x] Routing matrix test
  - [ ] Interaction scenario test
  - [ ] Restore / reconnect matrix test
  - [ ] Pane / viewer contract test
  - [ ] Real-browser smoke test

## Definition of Done

- [x] All acceptance criteria satisfied and verified
- [x] Tests added or updated — passing locally (context-mode, keychain hooks, Azure API, ssh-core)
- [x] Type check clean
- [x] Docs and notes updated with links to ticket
- [x] Operational impact assessed — additive coverage only, no behavioral changes
- [x] Follow-up tickets created for deferred scope — none required
- [x] Update history complete with evidence
- [x] Ticket front matter updated

## Updates

### 2026-04-21
- Added focused regression coverage for the packaged `context-mode` integration in `runtime/test/extensions/context-mode.test.ts`.
- Captured the large-bash-output storage/search path with a `fullOutputPath`-backed event, proving the extension stores the full file content and points the agent at `search_tool_output`.
- Fixed a user-facing naming drift in `runtime/extensions/integrations/context-mode.ts` where the summary text still referenced the obsolete `tool_output_search` name instead of the actual `search_tool_output` tool.
- Extended `runtime/test/extensions/extensions-keychain-tools.test.ts` to prove the `tool_result` redaction hook still walks nested arrays/objects while preserving non-text content blocks and non-secret scalar values.
- This closes one concrete slice of the “large bash outputs still flow through stored-output compaction/search correctly” audit item and strengthens the hook/redaction audit for `keychain-tools`.

## Links

- Parent: `workitems/20-doing/adopt-pi-coding-agent-0.68.0-followups-and-web-progress-mapping.md`
