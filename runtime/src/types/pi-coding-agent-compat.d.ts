import "@mariozechner/pi-coding-agent";

declare module "@mariozechner/pi-coding-agent" {
  interface AgentSessionRuntime {
    session: import("@mariozechner/pi-coding-agent").AgentSession;
    cwd: string;
    diagnostics: unknown[];
    modelFallbackMessage?: string;
    extensionsResult?: unknown;
    services?: unknown;
    dispose(): Promise<void>;
  }
}

export {};
