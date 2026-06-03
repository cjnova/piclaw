# preact-shell

A Bun workspace monorepo with a VS Code-like shell app and a reusable UI package.

## Workspace layout

- `app/` — runnable shell application (`preact-shell-app`)
- `packages/ui/` — reusable components package (`@cjnova/preact-shell-ui`)

## Run locally

```bash
bun install
bun run dev
```

This starts an esbuild dev server on `http://localhost:4173`.

## Build

```bash
bun run build
```

Build output is written to `dist/app.bundle.js`.

## Notes

- App panel configuration lives in `app/src/config.ts`.
- Account switcher UI lives in `packages/ui/src/AccountSwitcher/`.
