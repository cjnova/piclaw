---
id: adopt-mcp-style-discovery-for-internal-tools
title: Adopt MCP-style discovery for internal tools
status: inbox
priority: medium
created: 2026-04-05
updated: 2026-04-05
estimate: L
risk: medium
tags:
  - work-item
  - kanban
  - tools
  - discovery
  - ux
  - context
  - mcp
owner: pi
---

# Adopt MCP-style discovery for internal tools

## Summary

Emulate the compact discovery approach used by `mcp-cli` across piclaw's
internal tool surface so tool selection becomes more consistent, more
progressive, and less context-expensive.

Today we already have pieces of this for some surfaces:
- `list_internal_tools`
- `activate_tools`
- small always-on baseline tools
- compact infra discovery flows like `discover → capabilities/recommend → workflow_help → workflow`

But the internal-tool experience is still inconsistent:
- some tools are effectively “all details up front”
- some discovery flows are optimized for progressive disclosure while others are not
- capability discovery, fit-for-intent recommendation, activation, and detailed schema help are not expressed through one shared model
- the system does not yet expose a clearly layered discovery path for internal tools comparable to the MCP-style mental model

This ticket tracks a design/evaluation pass to make internal tool discovery feel
more like a first-class protocol surface: compact overview first, targeted detail
second, activation last.

## Desired Outcome

A user or agent should be able to discover tools with a low-context path such as:

`discover/recommend` → `capabilities/summary` → `details/help/schema` → `activate/use`

without paying the cost of dumping full tool inventories and schemas too early.

## Acceptance Criteria

- [ ] The current internal-tool discovery flow is inventoried end to end.
- [ ] Current pain points are documented with concrete examples of context waste or inconsistent progressive disclosure.
- [ ] A proposed MCP-style discovery model is defined for internal tools.
- [ ] The proposed model clearly separates:
  - [ ] compact discovery / recommendation
  - [ ] capability summaries
  - [ ] detailed help / schema / examples
  - [ ] activation / use
- [ ] The model explains how existing tools such as `list_internal_tools` and `activate_tools` fit, change, or get wrapped.
- [ ] The model explicitly supports context saving and progressive disclosure as primary goals.
- [ ] Follow-up implementation tickets are split if the work spans runtime APIs, prompt guidance, tool metadata, and UI/docs.

## Implementation Paths

### Path A — thin compatibility layer over existing internal-tool primitives
1. Keep `list_internal_tools` and `activate_tools` as the substrate.
2. Add a compact recommendation/discovery layer on top.
3. Add a narrower “details/help” step that only expands when requested.
4. Update prompt/docs so the preferred flow becomes consistent.

**Pros:**
- lower risk
- preserves current runtime primitives
- easier migration path

**Cons:**
- may leave underlying metadata inconsistent
- can become a UX convention rather than a true contract

### Path B — first-class internal-tool discovery contract (recommended)
1. Define a shared discovery contract for internal tools similar in spirit to the MCP-style flow.
2. Add explicit metadata for categories, intent fit, activation requirements, cost/context weight, and help granularity.
3. Expose compact recommendation/capability surfaces separately from full schema/detail surfaces.
4. Align prompt guidance and runtime behavior around the same staged flow.

**Pros:**
- clearer long-term model
- better consistency across tool families
- stronger context-conservation story

**Cons:**
- broader runtime and prompt-touching design work
- likely needs staged rollout

## Recommended Path

Path B — define the contract clearly, then implement it incrementally over the
existing primitives.

## Test Plan

- Applicable regression classes from `workitems/regression-test-planning-reference.md`:
  - [ ] Bug replay / known-regression test
  - [ ] State-machine / invariant test
  - [ ] Routing matrix test
  - [ ] Interaction scenario test
  - [ ] Restore / reconnect matrix test
  - [ ] Pane / viewer contract test
  - [ ] Real-browser smoke test
- [ ] Existing tests to rerun are listed.
- [ ] New regression coverage to add is listed.
- [ ] Discovery flow is validated against representative intents (for example: scheduling, infra access, message search, chart generation, auth/setup).
- [ ] Compact discovery responses are shown to reduce unnecessary schema/context output.
- [ ] Real-browser smoke pass required? If yes, record the surface.

## Definition of Done

- [ ] Discovery problem statement and target contract are documented clearly.
- [ ] The staged discovery flow for internal tools is defined.
- [ ] Existing primitives (`list_internal_tools`, `activate_tools`, related help surfaces) are mapped into the new model.
- [ ] Follow-up implementation tickets are created for any runtime/docs/prompt splits.
- [ ] Update history includes concrete examples and recommended next actions.
- [ ] Ticket is refined enough to move to `10-next/` or split into smaller ready slices.

## Updates

### 2026-04-05
- Created from request to emulate the discovery mechanism/mental model of `mcp-cli` across internal tools.
- Primary goal is consistency in context saving and progressive disclosure, not merely adding another listing command.
- This should align with the existing context-conserving discovery direction already documented for infra surfaces, while extending the same design discipline to internal tools.
- Quality: ★★★☆☆ 5/10 (problem: 2, scope: 1, test: 1, deps: 0, risk: 1)

## Notes

- This is related to, but broader than, the existing `bundle-mcp-cli` ticket.
- The key design question is not “make internal tools literally speak MCP”, but “adopt the same staged discovery ergonomics and compactness where it improves operator/agent behavior.”
- Likely areas involved:
  - tool metadata shape
  - recommendation surfaces
  - schema/help rendering
  - activation semantics
  - prompt guidance for preferred discovery order

## Links

- `workitems/10-next/bundle-mcp-cli.md`
- `README.md`
- `docs/runtime-flows.md`
- `docs/tools-and-skills.md`
