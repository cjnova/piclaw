# MCP via pi-mcp-adapter

PiClaw ships [`pi-mcp-adapter`](https://github.com/nicobailon/pi-mcp-adapter) so you can use external MCP servers without exposing every MCP tool directly in the base prompt.

## What ships

- bundled `pi-mcp-adapter` dependency
- automatic extension loading in PiClaw sessions
- project-local starter config at `.pi/mcp.json.example`
- workspace skill guidance under `.pi/skills/mcp-adapter/`

The adapter exposes one primary proxy tool:

```text
mcp({ ... })
```

and slash commands such as:

```text
/mcp
/mcp status
/mcp tools
/mcp reconnect
/mcp reconnect <server>
/mcp-auth <server>
```

In the web UI, plain `/mcp` opens the MCP management panel. In non-UI contexts it falls back to a text status summary.

## Config locations

The adapter merges configuration in this order:

1. Pi-home config at `~/.pi/agent/mcp.json` (or an override path passed via `--mcp-config`)
2. optional `imports` pulled from other tool configs
3. project-local `.pi/mcp.json` overrides everything for the current workspace

### Preferred project-local config

```text
/workspace/.pi/mcp.json
```

Create it from the starter example:

```bash
cp /workspace/.pi/mcp.json.example /workspace/.pi/mcp.json
```

### Global Pi config

The adapter also supports Pi's global MCP config:

```text
~/.pi/agent/mcp.json
```

In the container image, that Pi home is typically bind-mounted at:

```text
/config/.pi/agent/mcp.json
```

In PiClaw, prefer the project-local file when the server configuration belongs to the current workspace.

## Imports from other tool configs

`pi-mcp-adapter` can also import MCP server definitions from other tools by setting `imports` in the Pi-home config. The current supported import kinds are:

- `cursor`
- `claude-code`
- `claude-desktop`
- `codex`
- `windsurf`
- `vscode`

Imported servers are merged in before the project-local `.pi/mcp.json`, so the workspace config can override them.

## Minimal example

```json
{
  "mcpServers": {
    "filesystem": {
      "command": "bunx",
      "args": [
        "-y",
        "@modelcontextprotocol/server-filesystem",
        "."
      ],
      "lifecycle": "lazy"
    }
  }
}
```

## Typical flow

1. Create `.pi/mcp.json`
2. Add one or more MCP servers
3. Start a new PiClaw chat/session or restart PiClaw
4. Discover tools with:
   - `mcp({})`
   - `mcp({ search: "..." })`
   - `mcp({ describe: "tool_name" })`
   - `/mcp`
   - `/mcp status`
   - `/mcp tools`
   - `/mcp reconnect [server]`
5. Call tools through the proxy:

```text
mcp({ tool: "filesystem_read_file", args: "{\"path\":\"./README.md\"}" })
```

`args` must be a JSON string.

## Notes

- `pi-mcp-adapter` does not require `mcp-cli`.
- MCP servers are lazy by default, so they do not connect until first use.
- `/mcp-auth <server>` currently shows OAuth token-file setup guidance for HTTP/OAuth MCP servers; it is not a full interactive browser OAuth flow.
- Global `settings.toolPrefix` controls whether proxied/direct tool names are server-prefixed (`server`, `short`, or `none`).
- Global `settings.directTools` can expose all imported MCP tools as first-class Pi tools; per-server `directTools` can enable all tools or only a named subset.
- Keep large MCP servers behind the proxy unless you intentionally want `directTools`.
