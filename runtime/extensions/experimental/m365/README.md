# Experimental M365 extension

This packaged extension brings Microsoft 365 tools into Piclaw as an **experimental** runtime extension.

## Scope

It provides tools for:

- Teams chat listing, reading, and sending
- Microsoft Graph profile, people, and mail operations
- OneDrive and SharePoint browse/search/download/upload/share flows
- calendar queries and calendar SVG output
- Teams file-card helpers that upload/share documents before sending

## Safety and audit notes

This copy was reviewed before import into the Piclaw tree.

Findings:

- no embedded credentials, cookies, or tokens were found
- auth state is RAM-only inside the running process
- destructive/send flows use `confirm` and usually support `dryRun`
- user consent is required for accessing M365 tokens by exposing a consent page

## Platform support

The extension is intended to work on:

- Windows
- macOS
- Linux

Browser search order is always:

1. Edge
2. Chrome
3. Chromium

That order is applied for:

- Windows
- macOS
- Linux
- PATH fallback lookup

Stale browser/CDP cleanup also has platform-aware equivalents:

- Windows: PowerShell process filtering + `taskkill`
- macOS/Linux: `ps` process enumeration + `process.kill()` process-group cleanup

The extension was primarily tested on **Windows**, especially with:

- `PICLAW_ENABLE_M365_EXPERIMENTAL=1`
- `PICLAW_M365_YOLO=1`

If browser auto-detection is not enough, set:

```bash
M365_EDGE_PATH=/full/path/to/browser
```

## Runtime gating

This extension is bundled but **not active by default**.

Enable it with:

```bash
PICLAW_ENABLE_M365_EXPERIMENTAL=1
```

Optional behavior flags:

```bash
PICLAW_M365_YOLO=1
M365_USE_TEMP_EDGE_PROFILE=true
M365_EDGE_PATH=/full/path/to/browser
M365_TENANT_ID=<tenant-or-common>
M365_CHATSVC_REGION=<emea|amer|apac>
```

## Validation

From the repo root:

```bash
bun x tsc --noEmit -p runtime/extensions/experimental/m365/tsconfig.json
bun run runtime/extensions/experimental/m365/tests/validate.ts
```

## Limitations

- still experimental
- depends on a signed-in browser session for many auth-sensitive flows
- best coverage today is Windows + Edge/Chrome-family browser sessions
- non-Windows support is intended and browser lookup is implemented, but it has less field testing than Windows
