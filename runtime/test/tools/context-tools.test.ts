import { expect, test } from "bun:test";

import { createBatchExecTool } from "../../src/tools/context-tools.js";

test("exec_batch forwards the original toolCallId and abort signal to each command", async () => {
  const calls: Array<{ toolCallId: string; params: { command: string; timeout?: number }; signal?: AbortSignal }> = [];
  const controller = new AbortController();
  const bashTool = {
    async execute(toolCallId: string, params: { command: string; timeout?: number }, signal?: AbortSignal) {
      calls.push({ toolCallId, params, signal });
      return { content: [{ type: "text", text: `ran ${params.command}` }], details: {} };
    },
  } as any;

  const tool = createBatchExecTool(process.cwd(), bashTool);
  const result = await tool.execute("batch-call-1", { commands: ["pwd", "ls"], timeout: 7 }, controller.signal);

  expect(result.content).toEqual([
    {
      type: "text",
      text: "Command: pwd\nran pwd\n\nCommand: ls\nran ls",
    },
  ]);
  expect(calls).toEqual([
    {
      toolCallId: "batch-call-1",
      params: { command: "pwd", timeout: 7 },
      signal: controller.signal,
    },
    {
      toolCallId: "batch-call-1",
      params: { command: "ls", timeout: 7 },
      signal: controller.signal,
    },
  ]);
});

test("exec_batch stops immediately when the parent abort signal cancels a command", async () => {
  const controller = new AbortController();
  let executeCalls = 0;
  let secondCommandRan = false;
  const bashTool = {
    async execute(_toolCallId: string, params: { command: string }, signal?: AbortSignal) {
      executeCalls += 1;
      if (params.command === "sleep 10") {
        return await new Promise((_, reject) => {
          signal?.addEventListener("abort", () => reject(new Error("aborted")), { once: true });
        });
      }
      secondCommandRan = true;
      return { content: [{ type: "text", text: "should not run" }], details: {} };
    },
  } as any;

  const tool = createBatchExecTool(process.cwd(), bashTool);
  const pending = tool.execute("batch-call-2", { commands: ["sleep 10", "echo done"] }, controller.signal);
  controller.abort();

  await expect(pending).rejects.toThrow("aborted");
  expect(executeCalls).toBe(1);
  expect(secondCommandRan).toBe(false);
});
