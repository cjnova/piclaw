/**
 * agent-pool/tool-factory.ts – Creates the default built-in tool set for agent sessions.
 *
 * Keeps tool construction separate from AgentPool orchestration so the pool can
 * compose a focused factory instead of owning direct SDK tool wiring.
 */

import { createBashTool, createEditTool, createReadTool, createWriteTool } from "@mariozechner/pi-coding-agent";

/** The tracked bash operations injected into the built-in bash tool. */
export type AgentBashOperations = NonNullable<Parameters<typeof createBashTool>[1]>["operations"];

/** Options for constructing the default agent tool factory. */
export interface AgentToolFactoryOptions {
  workspaceDir: string;
  bashOperations?: AgentBashOperations;
  platform?: NodeJS.Platform;
}

/**
 * Creates the default built-in tool set for agent sessions.
 * On Windows, bash is omitted so the PowerShell extension can provide the active shell tool.
 */
export class AgentToolFactory {
  constructor(private readonly options: AgentToolFactoryOptions) {}

  createDefaultTools() {
    const { workspaceDir, bashOperations, platform = process.platform } = this.options;
    return [
      createReadTool(workspaceDir),
      ...(platform === "win32"
        ? []
        : [createBashTool(workspaceDir, bashOperations ? { operations: bashOperations } : undefined)]),
      createEditTool(workspaceDir),
      createWriteTool(workspaceDir),
    ];
  }
}
