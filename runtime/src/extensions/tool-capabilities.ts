/**
 * tool-capabilities – compact capability metadata for internal tool discovery.
 *
 * Each entry describes a tool's behavioral profile so that list_internal_tools
 * can return actionable summaries without dumping full schemas.
 */

export type ToolKind = "read-only" | "mutating" | "mixed";
export type ToolWeight = "lightweight" | "standard" | "heavy";
export type ToolActivation = "default" | "on-demand";

export interface ToolCapability {
  /** Behavioral kind: read-only (no side-effects), mutating (writes/deletes), mixed (both). */
  kind: ToolKind;
  /** Execution weight hint: lightweight (fast, small output), standard, heavy (slow or large). */
  weight: ToolWeight;
  /** Optional one-line capability summary. When omitted, callers should use the tool's own description. */
  summary?: string;
}

/**
 * Capability registry for known internal tools.
 *
 * Tools not in this map get a sensible default via `getToolCapability()`.
 */
const TOOL_CAPABILITIES: Record<string, ToolCapability> = {
  // core (upstream pi-coding-agent)
  read:                   { kind: "read-only",  weight: "lightweight" },
  bash:                   { kind: "mutating",   weight: "standard" },
  powershell:             { kind: "mutating",   weight: "standard" },
  edit:                   { kind: "mutating",   weight: "lightweight" },
  write:                  { kind: "mutating",   weight: "lightweight" },
  find:                   { kind: "read-only",  weight: "lightweight" },
  grep:                   { kind: "read-only",  weight: "lightweight" },
  ls:                     { kind: "read-only",  weight: "lightweight" },

  // discovery
  list_internal_tools:    { kind: "read-only",  weight: "lightweight" },
  activate_tools:         { kind: "mutating",   weight: "lightweight" },
  reset_active_tools:     { kind: "mutating",   weight: "lightweight" },

  // attachments
  attach_file:            { kind: "read-only",  weight: "lightweight" },
  read_attachment:        { kind: "read-only",  weight: "lightweight" },
  export_attachment:      { kind: "mutating",   weight: "lightweight" },

  // model control
  get_model_state:        { kind: "read-only",  weight: "lightweight" },
  list_models:            { kind: "read-only",  weight: "lightweight" },
  switch_model:           { kind: "mutating",   weight: "lightweight" },
  switch_thinking:        { kind: "mutating",   weight: "lightweight" },

  // data
  messages:               { kind: "mixed",      weight: "standard" },
  introspect_sql:         { kind: "read-only",  weight: "standard" },
  keychain:               { kind: "mixed",      weight: "lightweight" },

  // workspace
  search_workspace:       { kind: "read-only",  weight: "standard" },
  refresh_workspace_index:{ kind: "mutating",   weight: "standard",    summary: "Rebuild the workspace FTS index." },
  open_drawio_editor:     { kind: "mutating",   weight: "standard" },
  open_office_viewer:     { kind: "read-only",  weight: "standard" },
  office_read:            { kind: "read-only",  weight: "standard" },
  office_write:           { kind: "mutating",   weight: "heavy" },
  open_workspace_file:    { kind: "read-only",  weight: "lightweight" },

  // automation
  schedule_task:          { kind: "mutating",   weight: "standard" },
  bun_run:                { kind: "mutating",   weight: "standard" },
  exec_batch:             { kind: "mutating",   weight: "heavy" },
  search_tool_output:     { kind: "read-only",  weight: "lightweight" },

  // remote
  ssh:                    { kind: "mixed",      weight: "standard" },
  proxmox:                { kind: "mixed",      weight: "standard" },
  portainer:              { kind: "mixed",      weight: "standard" },

  // browser
  cdp_browser:            { kind: "mixed",      weight: "heavy" },

  // ui
  send_adaptive_card:     { kind: "mutating",   weight: "lightweight" },
  send_dashboard_widget:  { kind: "mutating",   weight: "standard" },

  // experiments
  start_autoresearch:     { kind: "mutating",   weight: "heavy" },
  stop_autoresearch:      { kind: "mutating",   weight: "standard" },
  autoresearch_status:    { kind: "read-only",  weight: "lightweight" },

  // lifecycle
  exit_process:           { kind: "mutating",   weight: "lightweight" },
};

const DEFAULT_CAPABILITY: ToolCapability = {
  kind: "mixed",
  weight: "standard",
};

/** Look up capability metadata for a tool. Returns a sensible default for unknown tools. */
export function getToolCapability(toolName: string): ToolCapability {
  return TOOL_CAPABILITIES[toolName] ?? DEFAULT_CAPABILITY;
}
