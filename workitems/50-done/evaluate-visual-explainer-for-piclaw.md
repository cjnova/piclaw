---
id: evaluate-visual-explainer-for-piclaw
title: Evaluate visual-explainer as a Piclaw integration and vendoring target
status: done
priority: medium
created: 2026-04-14
updated: 2026-04-19
completed: 2026-04-19
target_release: later
estimate: M
risk: medium
tags:
  - work-item
  - kanban
  - evaluation
  - integration
  - vendoring
  - web-ui
  - visualization
  - extension
  - external-dependency
owner: pi
---

# Evaluate visual-explainer as a Piclaw integration and vendoring target

## Summary

Review [`nicobailon/visual-explainer`](https://github.com/nicobailon/visual-explainer)
as a possible Piclaw integration target.

This should begin as an **evaluation + integration design** ticket, not as an
immediate commitment to ship the upstream project verbatim.

The main goal is to determine whether `visual-explainer` is best treated as:

- a vendored web dependency,
- a pluggable viewer/editor extension,
- a generated-widget or timeline-native explainer surface,
- a skill-backed artifact generator,
- or simply inspiration for a Piclaw-native feature.

## Why

Piclaw already has multiple surfaces for rich interactive output:

- workspace viewers/editors,
- generated widgets,
- timeline-native rich content,
- file-based artifacts opened through the workspace explorer,
- and vendored client-side visualization bundles.

If `visual-explainer` provides a compelling way to turn code, structure, or
concepts into explainable visual output, it may fit Piclaw well — but only if
it can be integrated without fighting the current architecture.

This ticket exists to answer whether the project should be:

- embedded,
- wrapped,
- partially vendored,
- reinterpreted,
- or rejected.

## Evaluation focus

The evaluation should answer these questions clearly:

1. What does `visual-explainer` actually produce?
   - static visual artifacts,
   - interactive browser UI,
   - diagrams,
   - step-by-step explainers,
   - or a hybrid workflow?
2. Is the main value in:
   - rendering,
   - authoring,
   - transformation,
   - prompting/workflow,
   - or UI presentation?
3. Does it map naturally to Piclaw as:
   - a `WebPaneExtension`,
   - a generated widget,
   - a viewer route,
   - a vendored JS library,
   - a skill/tool wrapper,
   - or some combination?
4. Can it be packaged safely and repeatably in repo installs and packaged installs?
5. What dependencies, assets, licenses, and update risks would vendoring introduce?
6. Would a Piclaw-native reimplementation be cleaner than direct integration?

## Scope

### In scope
- review the upstream repository/product shape
- identify the minimum useful Piclaw integration shape
- assess vendoring feasibility and update strategy
- assess runtime/asset/licensing implications
- identify whether the best fit is pane/widget/skill/viewer/other
- define a bounded MVP if the idea looks worthwhile

### Out of scope
- shipping the full integration immediately
- rewriting major Piclaw UI architecture around the upstream repo
- committing to long-term support before fit is understood
- blindly mirroring the upstream UX if it conflicts with Piclaw’s timeline-first model

## Integration hypotheses to evaluate

### Option A — vendored web runtime wrapped as a Piclaw extension
Treat `visual-explainer` as an embedded frontend dependency and mount it through
an adapter layer.

Potential shapes:
- a `WebPaneExtension` for explainer source/artifact files
- a dedicated viewer route under `runtime/src/channels/web/http/`
- a generated-widget surface for ephemeral interactive explainers

**Pros**
- maximum fidelity to upstream behavior
- easier to compare upstream updates over time
- aligns with existing vendored viewer strategy used elsewhere in Piclaw

**Risks**
- packaging/build complexity
- route/runtime drift
- CSS/JS isolation issues
- harder long-term maintenance if upstream is not bundler-friendly

### Option B — skill/tool integration with Piclaw-native rendering
Treat upstream as reference logic or transformation machinery, but render the
result in Piclaw-native outputs.

Potential shapes:
- a skill that generates HTML/SVG/JSON artifacts
- a command/tool that emits generated widgets or static files
- a workflow that stores a workspace artifact and opens it in a viewer

**Pros**
- better fit with Piclaw’s existing artifact + timeline model
- lower UI coupling
- easier fallback behavior

**Risks**
- may lose upstream interactivity
- may require partial reimplementation

### Option C — Piclaw-native reimplementation inspired by upstream
Use `visual-explainer` mostly as a product/design reference rather than a
vendored dependency.

**Pros**
- cleaner fit to Piclaw architecture
- fewer vendoring/update concerns
- stronger control over UX and persistence model

**Risks**
- more engineering effort
- greater risk of underestimating the value of upstream implementation details

## Vendoring checklist

If upstream looks promising as a packaged dependency, the evaluation must call
out:

- exact dependency footprint
- build tool assumptions
- browser/runtime assumptions
- whether it can be bundled into Piclaw’s current vendor pipeline
- whether it needs iframe isolation
- whether it requires dedicated backend routes
- whether packaged/repo installs will include every required asset
- whether the license is compatible with vendoring and redistribution
- how updates would be pinned, reviewed, and tested

## Desired outcome

By the end of this ticket, Piclaw should have a clear recommendation:

- **Adopt directly** as a vendored integration target,
- **Adapt selectively** through a Piclaw-native wrapper,
- **Use only as inspiration**,
- or **reject/defer**.

If the recommendation is positive, this ticket should also produce a small,
bounded follow-up implementation ticket with:

- chosen integration surface,
- artifact/runtime contract,
- asset packaging plan,
- and focused test coverage expectations.

## Acceptance Criteria

- [ ] `visual-explainer` is reviewed for architecture, UX shape, and runtime assumptions.
- [ ] The likely Piclaw fit is classified as one or more of: vendored dependency, pane extension, widget, viewer route, skill, or reference-only inspiration.
- [ ] Vendoring feasibility is documented, including dependencies, asset pipeline, and packaging concerns.
- [ ] Licensing/distribution implications are explicitly called out.
- [ ] A recommendation is recorded: adopt, adapt, emulate, or reject.
- [ ] If promising, a concrete implementation follow-up ticket exists with bounded scope.

## Suggested work slices

### Slice 1 — upstream review
- inspect repo structure and primary UX
- identify what part of the project is the actual reusable asset
- determine whether it is library-first, app-first, or workflow-first

### Slice 2 — Piclaw fit mapping
- map the project onto Piclaw surfaces:
  - workspace viewer/editor
  - widget
  - timeline artifact
  - skill/tool output
- identify the least invasive integration point

### Slice 3 — vendoring assessment
- list required JS/CSS/assets/fonts/workers
- identify bundling/isolation requirements
- determine if current vendor scripts and route model can support it

### Slice 4 — recommendation and follow-up
- write final recommendation
- if viable, create implementation ticket with MVP scope and test plan

## Test Plan

### Evaluation / design validation
- [ ] Review upstream docs/examples/repo layout.
- [ ] Record the smallest viable Piclaw integration surface.
- [ ] Verify whether repo-install and packaged-install flows can carry required assets.
- [ ] Verify whether a dedicated route, iframe, or widget sandbox would be required.
- [ ] Verify license compatibility for vendoring.

### Follow-up implementation validation (only if pursued)
- [ ] Example explainer loads inside the chosen Piclaw surface.
- [ ] Asset pipeline includes all required dependencies in packaged/repo installs.
- [ ] Failure/fallback behavior is defined when the explainer runtime is unavailable.
- [ ] Resulting artifacts can be reopened, edited, or regenerated predictably.

## Definition of Done

- [ ] Integration/vendoring assessment is written up.
- [ ] Packaging and license implications are documented.
- [ ] Chosen Piclaw fit is explicit.
- [ ] A recommendation is made.
- [ ] If viable, a follow-up implementation ticket is created.
- [ ] Ticket history is updated with evidence and links.
- [ ] Ticket moves to `50-done/` once the evaluation is complete.

## Notes

- Prefer a Piclaw-native interpretation over a literal clone if the upstream UI
  shape conflicts with Piclaw’s timeline/workspace model.
- Avoid patching upstream directly unless the maintenance/update path is clear.
- If vendoring is chosen, keep the integration boundary explicit and narrow.
- Reuse lessons from existing vendored viewers/editors and pop-out/route audits.

## Updates

### 2026-04-19
- Evaluation completed. Full feasibility presentation generated and attached.
- Upstream evaluation concluded: **adapt selectively, do not vendor as runtime**.
- Superseded by implementation ticket:
  - `workitems/20-doing/adopt-visual-explainer-skill-for-piclaw.md`
- Lane change: `00-inbox` → `50-done`.

### 2026-04-14
- Created from request to track `nicobailon/visual-explainer` as a potential Piclaw integration and vendoring target.
- Intentionally framed as evaluation/design first so the project can choose the right integration surface before implementation.

## Links

- `https://github.com/nicobailon/visual-explainer`
- `workitems/00-inbox/evaluate-pi-boomerang.md`
- `workitems/00-inbox/popout-consistency-and-viewer-routing-audit.md`
- `workitems/00-inbox/yaml-mindmap-editor-extension.md`
- `docs/mcp.md`
