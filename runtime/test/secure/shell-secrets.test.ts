/**
 * secure/shell-secrets.test.ts – Tests for injected shell command building.
 * Redaction was removed; only command-building tests remain.
 */
import { describe, expect, test } from "bun:test";
import { buildInjectedExecCommand } from "../../src/secure/shell-secrets.js";

// ── buildInjectedExecCommand ──────────────────────────────────────────

describe("buildInjectedExecCommand", () => {
  test("posix command wraps in sh -lc with exec", async () => {
    const result = await buildInjectedExecCommand("posix", "echo", ["hello"]);
    expect(result.command).toBe("sh");
    expect(result.commandArgs[0]).toBe("-lc");
    expect(result.commandArgs[1]).toContain("exec");
    expect(result.commandArgs[1]).toContain("echo");
    expect(result.commandArgs[1]).toContain("hello");
    expect(result.env).toEqual({});
  });

  test("powershell command wraps in powershell -NoProfile -Command", async () => {
    const result = await buildInjectedExecCommand("powershell", "Get-Date", []);
    expect(result.command).toBe("powershell");
    expect(result.commandArgs).toContain("-NoProfile");
    expect(result.commandArgs).toContain("-Command");
    const cmd = result.commandArgs[result.commandArgs.length - 1];
    expect(cmd).toContain("Get-Date");
    expect(cmd).toContain("$ErrorActionPreference");
    expect(result.env).toEqual({});
  });

  test("posix quotes arguments with single quotes", async () => {
    const result = await buildInjectedExecCommand("posix", "echo", ["it's a test"]);
    expect(result.commandArgs[1]).toContain("it");
    expect(result.command).toBe("sh");
    expect(result.env).toEqual({});
  });

  test("command with no args works", async () => {
    const result = await buildInjectedExecCommand("posix", "ls", []);
    expect(result.command).toBe("sh");
    expect(result.commandArgs[1]).toContain("exec");
    expect(result.commandArgs[1]).toContain("ls");
    expect(result.env).toEqual({});
  });
});
