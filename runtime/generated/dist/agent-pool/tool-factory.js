/**
 * agent-pool/tool-factory.ts – Creates the default built-in tool set for agent sessions.
 *
 * Keeps tool construction separate from AgentPool orchestration so the pool can
 * compose a focused factory instead of owning direct SDK tool wiring.
 */
import { createBashTool, createEditTool, createReadTool, createWriteTool } from "@mariozechner/pi-coding-agent";
/**
 * Creates the default built-in tool set for agent sessions.
 * On Windows, bash is omitted so the PowerShell extension can provide the active shell tool.
 */
export class AgentToolFactory {
    options;
    constructor(options) {
        this.options = options;
    }
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
