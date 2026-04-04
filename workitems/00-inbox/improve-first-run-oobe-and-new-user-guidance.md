---
id: improve-first-run-oobe-and-new-user-guidance
title: Improve first-run OOBE and guidance for new users
status: inbox
priority: medium
created: 2026-04-04
updated: 2026-04-04
estimate: L
risk: medium
tags:
  - work-item
  - kanban
  - ux
  - onboarding
  - oobe
  - docs
  - web
owner: pi
---

# Improve first-run OOBE and guidance for new users

## Summary

Create a clearer first-run / new-user experience for piclaw so someone opening it
for the first time can understand:

- what piclaw is
- what they need to configure first
- what the difference is between web login, provider login, and workspace setup
- what the next recommended actions are after the first successful load

This should cover both product UX and guidance surfaces, not just documentation.
The goal is to reduce confusion, dead ends, and “what do I do now?” moments for
new users.

## Acceptance Criteria

- [ ] The major first-run entry points are inventoried (for example: fresh web visit, unauthenticated web visit, first authenticated chat, first provider login, first workspace use).
- [ ] Current first-run confusion points are documented with concrete examples.
- [ ] A proposed MVP OOBE flow exists with explicit stages and user-facing copy.
- [ ] The MVP clarifies the difference between:
  - [ ] web/session login
  - [ ] provider/model login
  - [ ] workspace/project setup
- [ ] The MVP includes a clear “next steps” path after first successful login.
- [ ] Guidance is available in-product where possible rather than relying only on README/docs.
- [ ] Follow-up implementation tickets are split by area if needed (web onboarding, provider auth guidance, docs, sample flows, etc.).

## Implementation Paths

### Path A — documentation-first guidance pass
1. Audit the current first-run experience.
2. Improve README / install docs / inline help copy.
3. Add lightweight in-app pointers to those docs.

**Pros:**
- low implementation risk
- fastest way to reduce confusion

**Cons:**
- still requires users to leave the product flow
- does not fully solve poor empty-state UX

### Path B — productized onboarding / welcome flow (recommended)
1. Audit first-run entry points and confusing branches.
2. Define a small in-product OOBE surface (welcome card, checklist, setup page, or contextual first-run prompts).
3. Add contextual guidance for login/setup states.
4. Add explicit next-step affordances once a user completes each stage.

**Pros:**
- addresses confusion where it happens
- gives new users a guided path instead of scattered instructions

**Cons:**
- touches both product UX and content design
- likely needs several follow-up tickets

## Recommended Path

Path B — start with a compact, productized onboarding flow, then use docs as
supporting detail rather than the primary first-run surface.

## Test Plan

- [ ] Validate the current first-run paths end to end and record confusion/failure points.
- [ ] Review the proposed OOBE flow against at least these scenarios:
  - [ ] first unauthenticated web visit
  - [ ] first authenticated visit with no provider configured
  - [ ] first successful provider login
  - [ ] first workspace/project interaction
- [ ] Confirm the user can identify the next recommended action at each stage.
- [ ] Confirm new guidance does not obscure normal returning-user flows.

## Definition of Done

- [ ] First-run journey is documented as a concrete staged flow.
- [ ] MVP user-facing surfaces and copy are defined.
- [ ] Related setup/auth/doc gaps are split into implementation tickets where needed.
- [ ] Update history includes audit findings and recommended next actions.
- [ ] Ticket is either refined into `10-next/` or split into smaller ready tickets.

## Updates

### 2026-04-04
- Created from direct request to track a broader first-run / new-user experience pass.
- Initial scope is intentionally broader than certificate/passkey onboarding alone: it should also cover login guidance, empty states, and “what next?” direction after first launch.
- Related existing onboarding ticket already covers the narrower mkcert + passkey flow; this ticket should act as the umbrella for the broader OOBE/guidance problem.
- Quality: ★★★☆☆ 5/10 (problem: 2, scope: 1, test: 1, deps: 0, risk: 1)

## Notes

- This is broader than `web-onboarding-mkcert-passkey`.
- Likely needs to unify several currently separate concepts that are easy for new users to confuse:
  - web authentication
  - AI provider authentication
  - workspace/project readiness
  - optional features and advanced tooling
- A good outcome may be a welcome/checklist pattern plus contextual hints rather than one monolithic wizard.

## Links

- `workitems/00-inbox/web-onboarding-mkcert-passkey.md`
- `workitems/40-review/login-command-passthrough.md`
- `README.md`
- `docs/install-from-repo.md`
