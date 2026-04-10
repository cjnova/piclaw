# Experimental M365 extension

Piclaw can bundle an experimental Microsoft 365 extension under:

- `runtime/extensions/experimental/m365/`

## Enable it

Set:

```bash
PICLAW_ENABLE_M365_EXPERIMENTAL=1
```

The session loader will then add the packaged extension entry:

- `runtime/extensions/experimental/m365/index.ts`

## What it provides

The extension exposes tools for:

- Teams chats and messages
- Teams message sending and file-card helpers
- Microsoft Graph profile / people / mail queries
- OneDrive helpers
- SharePoint browse / search / download / upload / move flows
- calendar queries and calendar SVG rendering

## Platform support

The bundled copy is intended to run on:

- Windows
- macOS
- Linux

Browser detection order is always:

1. Edge
2. Chrome
3. Chromium

Supported lookup surfaces:

- well-known install paths for Windows, macOS, and Linux
- PATH fallback lookup
- explicit override with `M365_EDGE_PATH`

Stale browser/CDP cleanup also has platform-aware support:

- Windows: PowerShell process filtering and `taskkill`
- macOS/Linux: `ps` enumeration plus signal-based process-group cleanup

## Operational notes

This extension remains **experimental**.

Important behavior:

- primarily validated on Windows
- by design, the extension requires user consent to operate and access M365
- Leverages browser authentication to ensure full compliance with security policies (i.e., you will need to authenticate manually with whatever security mechanisms you have set up for consumer or business M365)
- only supports a single account (also by design)
- safe behaviors by design: dry-run mode, only drafts e-mails, doesn't send them, etc.
- `PICLAW_M365_YOLO=1` skips the explicit consent interstitial and was the main Windows validation mode
- auth/token/cookie caching is RAM-only in this redistributed copy
- destructive/send actions are guarded with `confirm` and generally support `dryRun`

## Audit summary

Before import, the redistributed bundle was checked for:

- embedded secrets or credentials
- hard-coded local-only operational assumptions
- obvious Windows-only path lock-in

Results:

- no embedded private credentials were found
- personal/local Windows path references from the bundle README were removed from the adopted docs
- browser lookup was expanded so Windows/macOS/Linux all search Edge, then Chrome, then Chromium

## Validation

```bash
bun x tsc --noEmit -p runtime/extensions/experimental/m365/tsconfig.json
bun run runtime/extensions/experimental/m365/tests/validate.ts
```
