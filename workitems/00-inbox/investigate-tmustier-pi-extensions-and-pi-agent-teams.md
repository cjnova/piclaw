---
id: investigate-tmustier-pi-extensions-and-pi-agent-teams
title: Investigate tmustier/pi-extensions and pi-agent-teams for Piclaw integration
status: inbox
priority: medium
created: 2026-04-21
updated: 2026-04-21
target_release: later
estimate: M
risk: low
tags:
  - work-item
  - kanban
  - extensions
  - evaluation
  - skills
  - ui
  - agent-swarm
  - subagents
owner: pi
blocked-by: []
---

# Investigate tmustier/pi-extensions and pi-agent-teams for Piclaw integration

## Summary

Evaluate the extension collection and related repos from Thomas Mustier
([`tmustier/pi-extensions`](https://github.com/tmustier/pi-extensions)) for
adoption or inspiration in Piclaw.

This covers the extension bundle itself plus the related high-star repos from
the same author that are likely what "pi-curious" refers to:

- [`tmustier/pi-extensions`](https://github.com/tmustier/pi-extensions) — 217★
- [`tmustier/pi-agent-teams`](https://github.com/tmustier/pi-agent-teams) — 52★
- [`tmustier/pi-subagents`](https://github.com/tmustier/pi-subagents) — async subagent delegation
- [`tmustier/pi-session-hud`](https://github.com/tmustier/pi-session-hud) — persistent session HUD widget
- [`tmustier/long-task-harness`](https://github.com/tmustier/long-task-harness) — session continuity for long-running tasks

> **Note:** `tmustier/pi-curious` does not exist as a public repo at this time
> (404). The most likely candidates for what was intended are `pi-extensions`
> (the main bundle) and `pi-agent-teams`. This ticket covers both, plus the
> subagents and session HUD repos.

## What pi-extensions provides

The bundle ships 8 extensions + 3 skills:

| Extension | Description | Piclaw overlap |
|---|---|---|
| `/readfiles` | In-terminal file browser/viewer widget, diffs, code selection | Overlaps with workspace explorer; could complement |
| `tab-status` | Terminal tab indicators: ✅ done / 🚧 stuck / 🛑 timed out | Different context (TUI vs web) |
| `pi-ralph-wiggum` | Long-running task loop without diluting model attention | Relates to autoresearch |
| `agent-guidance` | Switch between Claude/Codex/Gemini with model-specific guidance files | Piclaw has model switching; guidance files are interesting |
| `/usage` | Cost/token/message dashboard by provider/model across time windows | Piclaw has `token-chart` skill; UI approach differs |
| `/paste` | Paste editable text instead of truncated `[paste #1]` | Web UI handles attachments differently |
| `/code` | Pick code blocks from assistant messages to copy/insert/run | No direct Piclaw equivalent — useful |
| `arcade` | Minigames while tests run | Fun; unlikely to ship |
| `extending-pi` skill | Guide for extending Pi | Relevant to Piclaw's extension docs |
| `skill-creator` | Detailed guidance for creating Pi skills | Relevant |
| `pi-ralph-wiggum` skill | Instructions for long-running development loops | Relevant to autoresearch |

## What pi-agent-teams provides

Experimental agent swarm extension for Pi, inspired by Claude agent teams.

- delegate tasks to parallel subagent instances
- coordinate results back to the calling session
- relates to `tmustier/pi-subagents` (async delegation with truncation, artifacts, session sharing)

Piclaw already has autoresearch supervision (`runtime/src/extensions/autoresearch-supervisor.ts`)
and a task scheduler. Agent teams would be a different coordination model.

## Evaluation questions

1. Which extensions provide the highest-value behavior not already in Piclaw?
   - `/code` (code block selection from assistant messages) looks most unique
   - `agent-guidance` (model-specific guidance files) is interesting
   - long-task-harness patterns for session continuity vs Piclaw's existing approach
2. How does `pi-agent-teams` / `pi-subagents` compare to Piclaw's autoresearch supervisor?
   - Are these complementary (different coordination model) or redundant?
3. Can any of these be adopted as Piclaw extensions or skills directly?
4. Are there UX patterns (tab-status, session HUD, /usage dashboard) worth
   adapting to the Piclaw web UI instead?
5. What does `long-task-harness` do that Piclaw's scheduler doesn't?

## Acceptance Criteria

- [ ] Each of the 5 repos above is evaluated.
- [ ] Overlap with existing Piclaw features is mapped.
- [ ] At least one concrete "adopt" or "adapt" recommendation is recorded per repo.
- [ ] Follow-up implementation tickets created for any agreed adoptions.
- [ ] No existing Piclaw functionality is broken by any adoption.

## Implementation Paths

### Path A — adopt as Piclaw extensions
Port the highest-value extensions directly into `runtime/extensions/`.

### Path B — adapt as Piclaw skills
Turn the behavior into workspace skills rather than bundled extensions.

### Path C — reference-only
Use as design/UX reference; build Piclaw-native equivalents.

### Path D — install alongside via Pi's package manager
Since these are Pi-native packages, evaluate whether they can be installed
alongside Piclaw without conflict via Pi's `settings.json` packages mechanism.

## Test Plan

- [ ] Evaluation documented per repo.
- [ ] Any adopted code passes existing Piclaw typecheck and test suite.

## Definition of Done

- [ ] All 5 repos evaluated and recommendations recorded.
- [ ] Follow-up tickets created.
- [ ] Ticket history complete.

## Updates

### 2026-04-21
- Created from user request to evaluate `tmustier/pi-extensions` and `pi-curious`.
- `pi-curious` does not exist as a public repo; ticket expanded to cover the full
  relevant repo set from the same author.
- Initial surface read: `/code`, `agent-guidance`, `pi-agent-teams`, and
  `long-task-harness` look most interesting relative to Piclaw's current feature set.
- Quality: ★★★☆☆ 7/10 (problem: 2, scope: 2, test: 1, deps: 1, risk: 1)

## Links

- https://github.com/tmustier/pi-extensions
- https://github.com/tmustier/pi-agent-teams
- https://github.com/tmustier/pi-subagents
- https://github.com/tmustier/pi-session-hud
- https://github.com/tmustier/long-task-harness
- `workitems/00-inbox/investigate-pi-computer-use-and-expand-cross-platform-desktop-automation.md`
