# Vendored `@cjnova/preact-shell*` source (integration branch model)

On `integration/preact-shell-app`, PiClaw treats vendored `preact-shell` **source** as canonical. We no longer vendor npm tarballs for these framework packages.

## Canonical layout

Vendored framework packages live under:

- `runtime/vendor/preact-shell/packages/ui`
- `runtime/vendor/preact-shell/packages/auth-provider`
- `runtime/vendor/preact-shell/packages/identity-contracts`
- `runtime/vendor/preact-shell/packages/workspace-provider`

Root `package.json` dependencies and overrides point directly to these paths via `file:` references.

## Sync flow

1. Pull latest `preact-shell` source locally.
2. From piclaw root run:

```bash
./scripts/refresh-vendored-preact-shell-artifacts.sh /path/to/preact-shell
```

3. Commit vendored source updates together with `package.json`/`bun.lock` changes.

This keeps the integration branch reproducible while allowing framework changes to be reviewed as source diffs instead of tarball blobs.
