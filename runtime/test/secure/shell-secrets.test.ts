/**
 * secure/shell-secrets.test.ts – Tests for output redaction, streaming redaction,
 * and injected shell command building.
 */
import { describe, expect, test } from "bun:test";
import {
  createKeychainOutputRedactor,
  createStreamingTextRedactor,
  buildInjectedExecCommand,
  type TextRedactor,
} from "../../src/secure/shell-secrets.js";

// ── TextRedactor (no keychain available in test) ──────────────────────

describe("createKeychainOutputRedactor", () => {
  test("returns a no-op redactor when keychain is unavailable", async () => {
    const redactor = await createKeychainOutputRedactor();
    expect(redactor.hasReplacements).toBe(false);
    expect(redactor.maxNeedleLength).toBe(0);
    expect(redactor.redact("some secret text")).toBe("some secret text");
  });

  test("no-op redactor handles empty string", async () => {
    const redactor = await createKeychainOutputRedactor();
    expect(redactor.redact("")).toBe("");
  });
});

// ── StreamingTextRedactor ─────────────────────────────────────────────

describe("createStreamingTextRedactor", () => {
  test("pass-through when redactor has no replacements", () => {
    const noOp: TextRedactor = {
      redact: (t) => t,
      maxNeedleLength: 0,
      hasReplacements: false,
      needles: [],
    };
    const stream = createStreamingTextRedactor(noOp);
    expect(stream.push("hello")).toBe("hello");
    expect(stream.push(" world")).toBe(" world");
    expect(stream.flush()).toBe("");
  });

  test("buffers tail when redactor has replacements", () => {
    const secret = "ABCDEF";
    const redactor: TextRedactor = {
      redact: (t) => t.replaceAll(secret, "[REDACTED]"),
      maxNeedleLength: secret.length,
      hasReplacements: true,
      needles: [secret],
    };
    const stream = createStreamingTextRedactor(redactor);

    const r1 = stream.push("Hi ");
    expect(r1).toBe("Hi ");

    const r2 = stream.push("there ABCDEF end");
    const r3 = stream.flush();
    const full = r1 + r2 + r3;
    expect(full).toContain("Hi there");
    expect(full).toContain("[REDACTED]");
    expect(full).not.toContain(secret);
  });

  test("redacts secret fully contained in a single push", () => {
    const secret = "TOKEN123";
    const redactor: TextRedactor = {
      redact: (t) => t.replaceAll(secret, "[REDACTED]"),
      maxNeedleLength: secret.length,
      hasReplacements: true,
      needles: [secret],
    };
    const stream = createStreamingTextRedactor(redactor);

    // Accumulate enough in buffer, then push a large chunk
    stream.push("padding-");
    const r2 = stream.push("before TOKEN123 after and more text here");
    const r3 = stream.flush();
    const full = r2 + r3;
    expect(full).toContain("[REDACTED]");
    expect(full).not.toContain("TOKEN123");
  });

  test("flush on empty stream returns empty", () => {
    const redactor: TextRedactor = {
      redact: (t) => t,
      maxNeedleLength: 10,
      hasReplacements: true,
      needles: ["placeholder"],
    };
    const stream = createStreamingTextRedactor(redactor);
    expect(stream.flush()).toBe("");
  });
});

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
    // Should be shell-quoted
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
