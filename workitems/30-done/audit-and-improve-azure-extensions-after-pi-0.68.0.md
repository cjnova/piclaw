---
id: audit-and-improve-azure-extensions-after-pi-0.68.0
title: Audit and improve Azure extensions after Pi 0.68.0
status: done
priority: high
created: 2026-04-21
updated: 2026-04-21
estimate: L
risk: medium
tags:
  - work-item
  - kanban
  - azure
  - extensions
  - providers
  - upstream
owner: smith
blocked-by: []
---

# Audit and improve Azure extensions after Pi 0.68.0

## Summary

Piclaw ships substantial Azure-specific integration logic:

- `runtime/extensions/integrations/azure-openai.ts`
- `runtime/extensions/integrations/azure-openai-images.ts`
- `runtime/src/extensions/azure-openai-api.ts`
- `runtime/src/utils/azure-tool-call-limit.ts`

Upstream 0.68.0 includes session/caching/header behavior fixes and new lifecycle metadata that may improve our Azure provider flows. This ticket audits the Azure stack specifically and lands any worthwhile Piclaw-side improvements.

## Audit questions

### Lifecycle and teardown
- should `azure-openai` use `session_shutdown.reason` / `targetSessionFile`?
- are bootstrap refresh loops doing the right thing on reload vs quit vs fork/clone?
- can we preserve useful cached state on non-terminal shutdown classes?

### Request/session behavior
- do upstream session-affinity and caching fixes overlap with or supersede any Piclaw-local Azure logic?
- should we align or simplify any custom correlation/header behavior in:
  - `runtime/src/extensions/azure-openai-api.ts`
  - `runtime/extensions/integrations/azure-openai.ts`

### UX / progress / observability
- should Azure provider bootstrap expose `setStatus` and/or `setWorkingIndicator` in web?
- should image generation expose richer progress state before files are posted?
- do we want provider-refresh diagnostics in a low-noise way?

### Context/tool-call behavior
- are our replay-sanitization and tool-call-limit guards still necessary as-is after upstream changes?
- can any of the request trimming or replay-repair logic be simplified?

## Acceptance Criteria

- [x] Audit the Azure extension stack end to end.
- [x] Adopt `session_shutdown` metadata if it improves behavior.
- [x] Document whether upstream session/cache/header fixes reduce Piclaw-local complexity.
- [x] Decide whether Azure bootstrap/image flows should surface richer web progress/status.
- [x] Implement at least the highest-value safe improvement discovered, or record a no-change rationale.
- [x] Add/update Azure-focused regression coverage for any changed behavior.

## Files in scope

### Primary runtime files
- `runtime/extensions/integrations/azure-openai.ts`
- `runtime/extensions/integrations/azure-openai-images.ts`
- `runtime/src/extensions/azure-openai-api.ts`
- `runtime/src/utils/azure-tool-call-limit.ts`

### Relevant tests to inspect
- `runtime/test/extensions/azure-openai-api.test.ts`
- `runtime/test/extensions/azure-openai-image-output.test.ts`
- `runtime/test/extensions/azure-openai-retry-after.test.ts`
- `runtime/test/extensions/azure-openai-routing.test.ts`
- `runtime/test/extensions/azure-openai-session.test.ts`
- `runtime/test/extensions/azure-openai-streaming.test.ts`
- `runtime/test/extensions/azure-openai-tool-call-limit.test.ts`

## Spec for improvement work

### Minimum improvements to evaluate
- adopt `session_shutdown.reason`
- add low-noise provider bootstrap status/progress to web
- evaluate progress/status for image generation
- verify no duplicated session-affinity/header logic remains after upstream fixes

### Nice-to-have improvements to evaluate
- clearer operator diagnostics for bootstrap/refresh states
- cleaner separation between Azure-specific transport logic and generic OpenAI-compatible behaviors
- reduce local complexity if upstream behavior now covers it safely

## Implementation Paths

### Path A — Audit plus lifecycle adoption
- shutdown metadata
- logging/teardown refinement
- tests

### Path B — Audit plus UX/status improvements
- Path A
- bootstrap status/indicator support
- image-generation progress/status support

### Preferred
- Path A immediately, Path B if the web progress plumbing lands first

## Test Plan

- Applicable regression classes from `workitems/regression-test-planning-reference.md`:
  - [x] Bug replay / known-regression test
  - [x] State-machine / invariant test
  - [x] Routing matrix test
  - [x] Interaction scenario test
  - [ ] Restore / reconnect matrix test
  - [ ] Pane / viewer contract test
  - [ ] Real-browser smoke test

## Definition of Done

- [x] All acceptance criteria satisfied and verified
- [x] Tests added or updated — passing locally (102 pass, 0 fail across 8 Azure test files)
- [x] Type check clean (`bunx tsc --noEmit -p runtime/tsconfig.json`)
- [x] Docs and notes updated with links to ticket
- [x] Operational impact assessed — no behavioral regressions; cache-retention centralisation is additive
- [x] Follow-up tickets created for deferred scope — none required; no deferred scope identified
- [x] Update history complete with evidence
- [x] Ticket front matter updated

## Updates

### 2026-04-21
- Adopted web-visible bootstrap progress/status in `runtime/extensions/integrations/azure-openai.ts`.
- Added failure-path UI cleanup/notification coverage in `runtime/test/extensions/azure-openai-bootstrap.test.ts`.
- Adopted the same lifecycle/status pattern in `runtime/extensions/experimental/azure-openai.harness.ts`, including shutdown metadata logging and timer cleanup, with coverage in `runtime/test/extensions/azure-openai-harness-bootstrap.test.ts`.
- Added lazy-loading regression coverage for the lightweight session shim in `runtime/test/extensions/azure-openai-session.test.ts`, proving provider/image modules are only loaded on the matching hook/command path.
- Added request/session-affinity regression coverage in `runtime/test/extensions/azure-openai-api.test.ts` for:
  - non-mutating correlation-header application
  - stale correlation-header overwrite behavior
  - stale `x-ms-client-request-id` cleanup when Azure mirroring is disabled
  - `buildBaseOptions()` preservation of `sessionId`, `cacheRetention`, headers, retry delay, and metadata
  - cache-retention resolution plus `cacheRetention: "none"` suppression of session-affinity reuse
- Tightened `applySessionCorrelationHeaders()` so a stale `x-ms-client-request-id` cannot leak forward when a request only wants `session_id`/`x-client-request-id` correlation.
- Aligned the custom Azure Responses paths (`azure-openai.ts` and the harness copy) with upstream cache-retention semantics by suppressing `session_id` / `x-client-request-id` mirroring and `prompt_cache_key` when cache retention resolves to `none`.
- Added explicit image-command UX coverage in `runtime/test/extensions/azure-openai-image-output.test.ts`, proving `/image` and `/flux` emit an immediate status message before final success/failure delivery.
- Current audit conclusion for image progress/status: the existing placeholder/status-message flow is sufficient for now; no extra web-only working-indicator surface is required beyond the already posted image/flux status messages.
- Remaining Azure audit scope is now primarily request/session/cache simplification rather than lifecycle/status adoption.
- Committed `b25b8d38` — Align Azure cache-retention session affinity.

### Audit conclusions
- **session_shutdown**: Already adopted in `ssh-core`; Azure bootstrap uses `setStatus`/teardown and does not benefit from additional `session_shutdown` metadata.
- **Upstream cache/header overlap**: `resolveCacheRetention`/`resolveCacheSessionId` now centralise what was previously implicit per-caller logic. Stale `x-ms-client-request-id` cleanup prevents header leakage across requests.
- **Image progress/status**: The existing `/image` and `/flux` status-message flow is sufficient; no extra web-only working-indicator surface is needed.
- **Replay sanitisation**: Still necessary — Azure's silent `response.failed` on bad `arguments` and orphan reasoning items has no upstream equivalent.
- **Tool-call-limit guards**: Still necessary — Azure's streaming TPM exhaustion shape requires proactive input trimming.

## Links

- Parent: `workitems/20-doing/adopt-pi-coding-agent-0.68.0-followups-and-web-progress-mapping.md`
- Related: `workitems/20-doing/adopt-systempromptoptions-and-session-shutdown-metadata.md`
- Related: `workitems/20-doing/audit-packaged-integrations-for-pi-0.68.0-adoption.md`
