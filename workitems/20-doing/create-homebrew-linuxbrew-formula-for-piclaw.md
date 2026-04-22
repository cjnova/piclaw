---
id: create-homebrew-linuxbrew-formula-for-piclaw
title: Create a Homebrew / Linuxbrew formula for one-line piclaw installation
status: doing
priority: medium
created: 2026-04-21
updated: 2026-04-22
target_release: next
estimate: M
risk: medium
tags:
  - work-item
  - kanban
  - packaging
  - homebrew
  - linuxbrew
  - install
  - ux
  - distribution
owner: pi
blocked-by: []
---

# Create a Homebrew / Linuxbrew formula for one-line piclaw installation

## Summary

Provide a Homebrew (macOS) and Linuxbrew (Linux) formula so users can install
piclaw with a single command:

```bash
brew install rcarmo/piclaw/piclaw
```

The current install paths are Docker or `bun add -g github:rcarmo/piclaw`,
both of which require prior Bun or Docker knowledge. A `brew install` path is
the lowest-friction entry point for developers on macOS and Linux who already
have Homebrew.

## Problem Statement

- Docker is the primary production install but requires Docker knowledge
- `bun add -g github:rcarmo/piclaw` requires Bun already installed
- Neither path is a single-command "YOLO install" for developers
- Homebrew is the de-facto standard for this kind of CLI tool on macOS/Linux
- No tap or formula exists today

## Desired Behavior

```bash
brew tap rcarmo/piclaw          # add the tap once
brew install piclaw              # install

# or in one step with a custom tap:
brew install rcarmo/piclaw/piclaw
```

After install:
- `piclaw` binary in PATH
- `brew upgrade piclaw` updates to the latest release
- Uninstall via `brew uninstall piclaw`
- Works on macOS (Intel + Apple Silicon) and Linux (via Linuxbrew)

## Design decisions to make

### 1. Formula approach vs cask

- **Formula** — preferred; compiles or installs from source/binary
- **Cask** — for macOS app bundles; not appropriate here

### 2. Dependency: Bun

Piclaw requires Bun at runtime. Options:

- **Option A** — declare `depends_on "oven-sh/bun/bun"` in the formula
  - clean; `brew install piclaw` installs Bun automatically
  - Bun has an official Homebrew formula: `brew install bun`

- **Option B** — bundle a portable Bun binary inside the formula
  - heavier; avoids the dependency declaration
  - not recommended

- **Option C** — shell wrapper that checks for Bun and errors helpfully
  - lightweight stopgap; poor UX

**Recommended: Option A** — declare the Bun dependency.

### 3. Tap vs core formula

- **Tap (`rcarmo/homebrew-piclaw`)** — faster to ship; no Homebrew core review
  - users add with `brew tap rcarmo/piclaw`
  - or use inline `brew install rcarmo/piclaw/piclaw`
- **Homebrew core** — high-traffic but requires maintenance contracts, license
  review, and formula standards compliance
  - consider after the tap is stable

**Recommended: start with a tap**, promote to core later if warranted.

### 4. Source formula vs binary bottle

- **Source formula** — installs from a release tarball with vendored `node_modules`
  - portable; no per-platform binaries to manage or sign
  - Homebrew sandbox has no network: tarball must include `node_modules` (vendored)
  - `bun install --frozen-lockfile` must succeed offline from the tarball
  - the release workflow must produce a vendored tarball (extend `make pack` or a new `make dist` target)
- **Binary bottle** — pre-built artifacts per platform uploaded to GitHub releases
  - fast install; requires CI to build and sign per-platform
  - more maintenance; defer until source formula is stable

**Decided: source formula with vendored tarball.** Bun dependency declared via
`depends_on`; no bundled Bun binary. Binary bottles are explicitly deferred.

#### Vendored tarball approach

The release workflow must produce a tarball that includes `node_modules` so
Homebrew's sandboxed install can run without network access:

1. Extend `make pack` (or add `make dist`) to run `bun install` then archive
   `package.json`, `bun.lock`, `node_modules/`, `runtime/`, and the web build
   output into a single `.tar.gz`.
2. Upload that tarball as a GitHub release asset alongside the source zip.
3. The formula `url` points to this vendored tarball, not the raw source zip.
4. The `install` block skips `bun install` (already vendored) and runs only
   `bun run build:web` if the web assets are not pre-built, then `bin.install`.

Alternatively, if `bun install --offline` works from a `bun.lock` + bundled
cache, the raw source tarball could be used with an offline install flag — but
this is less reliable and should be tested before committing.

## Acceptance Criteria

- [ ] A new GitHub repo `rcarmo/homebrew-piclaw` exists with the tap and formula.
- [ ] `brew tap rcarmo/piclaw && brew install piclaw` installs piclaw on macOS
  (Intel and Apple Silicon) and Linux (via Linuxbrew).
- [ ] The formula declares the Bun dependency correctly.
- [ ] `piclaw --version` works after install.
- [ ] `brew upgrade piclaw` fetches the latest tag.
- [ ] `brew uninstall piclaw` removes cleanly.
- [ ] The formula is tested with `brew audit --new-formula piclaw`.
- [ ] Install instructions are added to `docs/install-from-repo.md` and `README.md`.

## Implementation Paths

### Path A — tap + source formula with vendored tarball ✅ preferred

1. Extend `make pack` / add `make dist` to produce a vendored tarball:
   - `bun install --frozen-lockfile` inside the pack step
   - archive `package.json`, `bun.lock`, `node_modules/`, `runtime/`, pre-built web assets
   - upload as `piclaw-v{VERSION}-vendored.tar.gz` to the GitHub release
2. Create `rcarmo/homebrew-piclaw` tap repo.
3. Write `Formula/piclaw.rb`:
   - `url` pointing to the vendored tarball release asset
   - `depends_on "oven-sh/bun/bun"`
   - `install` block: skip `bun install` (vendored), run `bun run build:web` if
     web assets are not pre-built, then `bin.install`
4. Test locally: `brew install --build-from-source ./Formula/piclaw.rb`
5. Publish tap, update README/docs.

### Path B — tap + binary bottles via CI (deferred)

Defer until Path A is proven stable:
- Add GitHub Actions to build and bottle per platform on release.
- Attach bottle block to the formula.
- Upload bottles as GitHub release assets.

## Formula sketch (vendored tarball)

```ruby
class Piclaw < Formula
  desc "Self-hosted AI workspace with streaming web UI and multi-provider LLM support"
  homepage "https://github.com/rcarmo/piclaw"
  # Points to the vendored tarball asset, not the raw source archive
  url "https://github.com/rcarmo/piclaw/releases/download/v#{version}/piclaw-v#{version}-vendored.tar.gz"
  sha256 "..." # updated per release via `brew bump-formula-pr`

  license "MIT"

  # Bun is required at runtime (script interpreter)
  depends_on "oven-sh/bun/bun"

  def install
    # node_modules already vendored in the tarball — no network needed
    # Web assets pre-built in the tarball — skip build:web
    # Entry point: runtime/src/index.ts executed by bun
    (bin/"piclaw").write <<~SH
      #!/bin/bash
      exec "#{Formula["oven-sh/bun/bun"].opt_bin}/bun" "#{libexec}/runtime/src/index.ts" "$@"
    SH
    libexec.install Dir["*"]
  end

  test do
    assert_match version.to_s, shell_output("#{bin}/piclaw --version")
  end
end
```

> The `bun` shim wrapper approach avoids a native compile step entirely.
> `libexec` holds the full source tree; the `bin/piclaw` shim delegates to
> the installed Bun. This is the pattern used by other TypeScript CLI tools in
> Homebrew (e.g. `vite`, `typescript`).

## Additional considerations

- **Version pinning**: the formula should track tagged releases, not `main`
- **Workspace defaults**: piclaw expects `/workspace` to exist; document that
  users should configure `PICLAW_WORKSPACE` via a launchd plist or `.env`
- **Service management**: macOS users may want `brew services start piclaw`
  — a `.plist` service definition could be added to the formula

## Test Plan

- [ ] `brew install --build-from-source` passes on macOS (Intel + ARM).
- [ ] `brew install --build-from-source` passes on Linux with Linuxbrew.
- [ ] `brew audit --new-formula piclaw` is clean.
- [ ] `piclaw --version` returns the expected version string after install.
- [ ] `brew upgrade piclaw` succeeds after a version bump.

## Definition of Done

- [ ] All acceptance criteria satisfied and verified
- [ ] Formula repo is public and documented
- [ ] Install instructions updated in README.md and docs/install-from-repo.md
- [ ] `brew audit` passes
- [ ] Update history complete with evidence
- [ ] Ticket front matter updated

## Updates

### 2026-04-22
- Locked install approach: **source formula with vendored tarball**; binary
  bottles explicitly deferred.
- Resolved sandbox problem: use `bun` shim wrapper (`bin/piclaw` → `bun
  libexec/runtime/src/index.ts`); node_modules vendored in release tarball;
  no network access needed during Homebrew install.
- Release workflow change required: `make dist` (or extend `make pack`) to
  produce `piclaw-vVERSION-vendored.tar.gz` including `node_modules/` and
  pre-built web assets.
- Formula sketch updated to reflect shim pattern.

### 2026-04-21
- Created from user request for a one-line YOLO install via Homebrew/Linuxbrew.
- Quality: ★★★☆☆ 7/10

## Links

- https://docs.brew.sh/Formula-Cookbook
- https://docs.brew.sh/Taps
- `docs/install-from-repo.md`
- `Makefile` (`pack`, `local-install` targets)
- `package.json` (version, bin entry)
- `BUN_VERSION` (currently `1.3.11`)
