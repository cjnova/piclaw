# Vendored `@cjnova/preact-shell*` package artifacts

PiClaw vendors prebuilt `@cjnova/preact-shell*` npm tarballs under `vendor/npm/` so local/CI installs do not depend on live GitHub Packages availability for these framework packages.

## Why this exists

- GitHub Packages auth/network issues can break otherwise unrelated installs.
- We only need the published package outputs, not the framework source repository.
- Vendored tarballs make installs reproducible and reviewable in Git history.

## Current vendored packages

- `@cjnova/preact-shell-ui`
- `@cjnova/preact-shell-auth-provider`
- `@cjnova/preact-shell-identity-contracts`
- `@cjnova/preact-shell-workspace-provider`

Dependencies and overrides in root `package.json` are pinned to local files using:

```json
"@cjnova/preact-shell-ui": "file:vendor/npm/cjnova-preact-shell-ui-<version>.tgz"
```

## Refreshing tarballs

1. Ensure GitHub Packages access is available (either `NODE_AUTH_TOKEN` exported or `gh auth login` completed).
2. Run:

```bash
./scripts/refresh-vendored-preact-shell-artifacts.sh
```

The script will:

- resolve latest versions from `https://npm.pkg.github.com`
- download `.tgz` artifacts into `vendor/npm/`
- patch `workspace:*` internal dependency declarations inside fetched tarballs to concrete versions
- rewrite `package.json` dependency/override file references for the four packages
- run `bun install` to update `bun.lock`

3. Commit updated tarballs, `package.json`, and `bun.lock` together.
