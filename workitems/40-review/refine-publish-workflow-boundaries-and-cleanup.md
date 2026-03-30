---
id: refine-publish-workflow-boundaries-and-cleanup
title: Refine publish workflow boundaries and cleanup policy
status: review
priority: medium
created: 2026-03-30
updated: 2026-03-30
estimate: M
risk: medium
tags:
  - work-item
  - kanban
  - ci
  - github-actions
  - release
  - cleanup
owner: pi
blocked-by: []
---

# Refine publish workflow boundaries and cleanup policy

## Summary

The first CI simplification tranche already moved the common CI entry points and
publish smoke checks behind repo-owned commands. The remaining complexity is now
mostly concentrated in `.github/workflows/publish.yml`, especially around:

- runtime version resolution from repo files
- release/tag pruning policy
- old workflow-run cleanup
- Docker package/version pruning
- deciding which pieces should remain workflow-native vs move behind repo-owned wrappers

This ticket picks up that narrower follow-up so the original CI simplification
work can move to review without keeping publish-specific questions bundled into
one broad “still doing” ticket.

## Acceptance Criteria

- [ ] The remaining major responsibility areas in `publish.yml` are explicitly classified as either:
  - [ ] workflow-native and intentionally left there, or
  - [ ] repo-owned and extracted behind scripts/commands.
- [ ] Any duplicated publish workflow logic that is worth extracting is reduced.
- [ ] If workflow-local GitHub-script logic remains, the rationale is documented in the ticket and/or docs.
- [ ] Release behavior remains unchanged unless a change is explicitly intended and documented.
- [ ] Workflow YAML stays valid and references only real repo-owned commands/scripts.
- [ ] Any follow-up work discovered during the review is split into explicit tickets instead of being left implicit.

## Implementation Paths

### Path A — Keep GitHub-native cleanup logic, but tighten boundaries (recommended)
- Leave GitHub-specific pruning and release management in workflow-local `github-script` blocks where that remains the clearest place.
- Extract only the pieces that benefit from reuse or local operability.
- Document why some logic stays in workflow YAML instead of forcing everything behind scripts.

Why this is preferred:
- avoids creating artificial wrappers for logic that only runs sensibly inside GitHub Actions
- keeps repo-owned command surface small and purposeful
- still allows targeted cleanup of duplicated shell/script glue

### Path B — Push more publish behavior behind repo-owned wrappers
- Move version-resolution, pruning policy, or other publish orchestration into scripts under source control.
- Keep workflow YAML as thin dispatch only.

Why this is riskier:
- may over-abstract GitHub-native behavior
- can make local invocation appear more supported than it really is
- increases surface area for release-only scripts that are hard to test outside CI

## Test Plan

- [ ] Re-audit `.github/workflows/publish.yml` by responsibility area.
- [ ] Classify each area as workflow-native vs repo-owned.
- [ ] If code moves, validate the affected commands/scripts locally where possible.
- [ ] Parse the updated workflow YAML successfully.
- [ ] Record any environment limits explicitly (for example Docker/GitHub-only execution paths).

## Definition of Done

- [ ] The remaining publish-workflow complexity is intentionally bounded.
- [ ] Extracted logic is repo-owned only where it clearly improves maintainability.
- [ ] Non-extracted logic has an explicit rationale for staying in workflow YAML.
- [ ] Any new follow-up complexity is tracked explicitly.

## Updates

### 2026-03-30
- Lane change: `20-doing` → `40-review` after executing the boundary-classification pass.
- Decision: Path A won. The remaining major publish responsibilities are now explicitly classified as:
  - repo-owned:
    - publish smoke via `bun run ci:publish-smoke` / `make publish-smoke`
  - workflow-native and intentionally left in `.github/workflows/publish.yml`:
    - runtime version resolution from `BUN_VERSION` / `RESTIC_VERSION`
    - release/tag pruning via `actions/github-script`
    - old workflow-run cleanup via `actions/github-script`
    - GHCR package/version pruning via `actions/github-script`
    - Docker build/push/manifest orchestration tied to GitHub runners
- Implementation/documentation pass completed:
  - added boundary comments directly in `.github/workflows/publish.yml`
  - updated `docs/release.md` to explain the repo-owned smoke boundary vs GitHub-native cleanup boundary
- Validation evidence:
  - workflow YAML remains parseable after the comment updates
  - no behavior-changing extraction was introduced for GitHub-native cleanup paths
  - environment limit remains explicit: this container lacks `docker`, so publish-smoke runtime execution still depends on Docker-capable environments / GitHub runners
- Conclusion: no larger extraction pass is currently justified; forcing more publish logic behind repo-owned wrappers would add abstraction without clear maintainability benefit.
- Quality: ★★★★☆ 8/10 (problem: 2, scope: 2, test: 2, deps: 1, risk: 1)

### 2026-03-30
- Created as a direct follow-up after moving `workitems/40-review/overhaul-and-simplify-ci-process.md` into review.
- This ticket picks up the remaining publish-specific scope so the delivered CI simplification tranche is not kept artificially open-ended.
- Initial focus:
  - decide whether runtime version resolution should stay workflow-local
  - decide whether release/tag/workflow/package pruning should stay in `github-script`
  - extract only the parts that clearly benefit from repo-owned wrappers
- Quality: ★★★★☆ 8/10 (problem: 2, scope: 2, test: 1, deps: 2, risk: 1)

## Notes

- Current known environment constraint: this container does not provide `docker`, so full publish-smoke runtime execution is still validated on Docker-capable hosts / GitHub runners.
- The goal is boundary clarity, not abstraction for its own sake.

## Links

- `workitems/40-review/overhaul-and-simplify-ci-process.md`
- `.github/workflows/publish.yml`
- `scripts/docker/publish-smoke-test.sh`
- `docs/release.md`
