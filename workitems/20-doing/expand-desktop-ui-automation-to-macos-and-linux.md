---
id: expand-desktop-ui-automation-to-macos-and-linux
title: Expand desktop UI automation to macOS and Linux using pi-computer-use as reference
status: doing
priority: medium
created: 2026-04-21
updated: 2026-04-21
target_release: later
estimate: XL
risk: high
tags:
  - work-item
  - kanban
  - desktop-automation
  - macos
  - linux
  - computer-use
  - win32
  - accessibility
  - extension
owner: pi
blocked-by: []
---

# Expand desktop UI automation to macOS and Linux using pi-computer-use as reference

## Summary

Piclaw already ships a Windows desktop automation extension
(`runtime/extensions/platform/windows/win-ui/`) that provides 9 tools via
pure Bun FFI calls into Win32 system DLLs:

- `win_list_windows`
- `win_screenshot`
- `win_desktop_screenshot`
- `win_list_monitors`
- `win_monitor_screenshot`
- `win_region_screenshot`
- `win_find_elements`
- `win_click`
- `win_type`
- `win_tree`
- `win_kill`

These tools are no-ops on non-Windows platforms.

[injaneity/pi-computer-use](https://github.com/injaneity/pi-computer-use)
(MIT, TypeScript, macOS 15+) provides a Pi extension + skill bundle that adds
equivalent computer-use tools on macOS via a native helper binary using the
Accessibility and Screen Recording APIs:

- `screenshot`
- `click` / `double_click`
- `move_mouse`
- `drag`
- `scroll`
- `type_text`
- `keypress`
- `wait`

This ticket covers evaluating that project as an upstream reference and
defining a cross-platform desktop UI automation strategy for Piclaw.

## Why this matters

- Piclaw's Linux/container install is the primary target, but many users
  also run it on macOS and Windows.
- The Win32 extension provides a strong precedent for FFI-first no-helper
  desktop automation on one platform.
- `pi-computer-use` proves macOS can be automated with a similar tool surface
  using accessibility APIs + a thin native helper.
- Linux is largely unaddressed: AT-SPI (X11/Wayland) or xdotool/ydotool would
  cover the same workflow on Linux desktops.
- A unified cross-platform tool surface (`desktop_screenshot`, `desktop_click`,
  etc.) would let skills and prompts work across platforms without branching.

## Desired outcome

1. A clear platform decision: standalone native helpers vs FFI vs subprocess
2. macOS desktop automation tools that mirror the Windows surface
3. Linux desktop automation tools (AT-SPI, X11, or Wayland path)
4. A shared platform-agnostic tool naming convention that replaces the
   Windows-only `win_*` prefix
5. Optionally: adopt or adapt `pi-computer-use` directly as a Piclaw
   packaged extension

## Evaluation questions

1. **Is `pi-computer-use` a direct dependency or an adaptation target?**
   - Can it be packaged as a Piclaw extension (via `pi install npm:pi-computer-use`)?
   - Does the native helper model conflict with Piclaw's headless-friendly
     container-first deployment?

2. **What is the right native backend per platform?**
   - macOS: `pi-computer-use` native bridge? Apple Script? Accessibility API directly?
   - Linux: AT-SPI2 (atspi-2, gnome-at-spi)? xdotool? ydotool for Wayland?
   - Windows: existing Win32 FFI (already works) → keep + unify naming

3. **Should the extension be optional/disabled by default?**
   - Same pattern as the existing `win-ui` extension (only loads on Windows)
   - macOS and Linux variants could follow the same opt-in loading pattern

4. **Unified tool names vs platform-prefixed tools?**
   - Current: `win_screenshot`, `win_click`, etc.
   - Target: `desktop_screenshot`, `desktop_click`, `desktop_type`, …
   - The Win32 tools could be aliased or migrated when cross-platform support lands

5. **Permission model and security?**
   - macOS requires Accessibility + Screen Recording permission for the helper
   - AT-SPI on Linux requires session accessibility services to be enabled
   - Both are opt-in and require explicit user action

## Acceptance Criteria

- [ ] Platform comparison is documented: macOS (pi-computer-use / Accessibility API),
      Linux (AT-SPI / xdotool), Windows (existing Win32 FFI)
- [ ] A recommended integration strategy is defined for each platform
- [ ] `pi-computer-use` is evaluated for direct dependency vs adaptation
- [ ] Unified cross-platform tool naming convention is defined
- [ ] At least one non-Windows platform has working prototype tools
- [ ] Tool surface is documented in `docs/tools-and-skills.md`

## Implementation Paths

### Path A — adopt pi-computer-use as a packaged optional Pi extension
1. Evaluate whether `pi-computer-use` loads correctly as a Piclaw packaged extension
2. Add macOS desktop automation tools as a thin wrapper over `pi-computer-use`
3. Add Linux desktop automation tools as a separate AT-SPI / xdotool extension
4. Define and document unified platform-agnostic tool names

**Pros:** reuse upstream work for macOS, community maintained, MIT  
**Cons:** native helper adds deployment complexity; container-first users can't use it

### Path B — FFI-first on all platforms (mirror Win32 approach)
1. macOS: use `bun:ffi` with CoreGraphics + Accessibility framework calls
2. Linux: use `bun:ffi` with AT-SPI2 or XTest/XCB
3. No external helpers or dependencies

**Pros:** same architecture as the existing Windows extension, no helper binary  
**Cons:** significantly more FFI plumbing; accessibility bindings are complex

### Path C — subprocess-first (xdotool / cliclick / ydotool)
1. macOS: subprocess `cliclick` or `osascript` for basic automation
2. Linux: subprocess `xdotool` (X11) or `ydotool` (Wayland)
3. Keep Win32 FFI as-is for Windows

**Pros:** simplest implementation; no native compilation  
**Cons:** adds external tool dependencies; subprocess model is less robust than FFI

**Recommended:** Path A first (evaluate and adopt `pi-computer-use` for macOS),
then Path C as a Linux stopgap, then Path B when time permits for FFI-clean
implementations.

## Test Plan

- [ ] Tools load correctly on macOS, Linux, and Windows without errors on
      non-target platforms (no-op or graceful disable)
- [ ] Screenshot captures the correct window/screen content on each platform
- [ ] Click dispatches to the correct UI element coordinates on each platform
- [ ] Type/keyboard input reaches the target application on each platform
- [ ] Tools are correctly no-oped on container/headless environments where
      a display server is unavailable

## Definition of Done

- [ ] All acceptance criteria satisfied and verified
- [ ] Tests added or updated — passing locally
- [ ] Type check clean
- [ ] Docs and notes updated with links to ticket
- [ ] Operational impact assessed
- [ ] Follow-up tickets created for deferred scope
- [ ] Update history complete with evidence
- [ ] Ticket front matter updated

## Updates

### 2026-04-21
- Created from user request to evaluate `injaneity/pi-computer-use` and expand
  Piclaw's Windows-only `win_*` UI automation tools to macOS and Linux.
- Upstream evaluation: `pi-computer-use` is a MIT TypeScript extension/skill
  bundle for macOS 15+ using a native helper (Accessibility + Screen Recording
  APIs). Tool surface matches Piclaw's existing Win32 tools closely.
- Quality: ★★★☆☆ 7/10 (problem: 2, scope: 2, test: 1, deps: 1, risk: 1)

## Links

- `https://github.com/injaneity/pi-computer-use`
- `runtime/extensions/platform/windows/win-ui/index.ts`
- `docs/tools-and-skills.md`
- `workitems/00-inbox/explore-electrobun-desktop-shell-for-piclaw.md`
