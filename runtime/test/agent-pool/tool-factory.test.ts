import { expect, test } from "bun:test";

import { AgentToolFactory } from "../../src/agent-pool/tool-factory.js";

test("AgentToolFactory builds the default read/bash/edit/write tool name set on non-Windows", () => {
  const factory = new AgentToolFactory({ workspaceDir: "/workspace", platform: "linux" });
  const tools = factory.createDefaultTools();

  expect(tools).toEqual(["read", "bash", "edit", "write"]);
});

test("AgentToolFactory omits bash on Windows so PowerShell can replace it", () => {
  const factory = new AgentToolFactory({ workspaceDir: "/workspace", platform: "win32" });
  const tools = factory.createDefaultTools();

  expect(tools).toEqual(["read", "edit", "write"]);
});
