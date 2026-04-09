import { afterEach, describe, expect, test } from "bun:test";
import { EventEmitter } from "node:events";
import { execFileSync } from "node:child_process";
import { PassThrough, Writable } from "node:stream";
import type { ExtensionAPI } from "@mariozechner/pi-coding-agent";

import sshCoreExtension, {
  applyLiveSshConfig,
  hasLiveChatSshSession,
  parseSshFlag,
  parseSshPort,
  parseStrictHostKeyCheckingMode,
  registerLiveChatSshSession,
  resolveRemoteTarget,
  setSshConnectionResolverForTests,
  unregisterLiveChatSshSession,
} from "../../extensions/integrations/ssh-core/index.ts";
import {
  buildScopedBashCommand,
  PersistentRemoteShell,
  setPersistentSshInterruptGraceMsForTests,
  setPersistentSshSpawnForTests,
} from "../../src/extensions/ssh-core.js";

type FakeState = {
  tools: Map<string, any>;
  flags: Map<string, any>;
};

function createFakeApi(): { api: ExtensionAPI; state: FakeState } {
  const state: FakeState = {
    tools: new Map<string, any>(),
    flags: new Map<string, any>(),
  };

  const api: ExtensionAPI = {
    on() {},
    registerTool(tool: any) {
      state.tools.set(tool.name, tool);
    },
    registerCommand() {},
    registerShortcut() {},
    registerFlag(name: string, options: any) {
      state.flags.set(name, options);
    },
    getFlag() { return undefined; },
    registerMessageRenderer() {},
    sendMessage() {},
    sendUserMessage() {},
    appendEntry() {},
    setSessionName() {},
    getSessionName() { return undefined; },
    setLabel() {},
    exec: async () => ({ exitCode: 0, stdout: "", stderr: "" }),
    getActiveTools: () => [],
    getAllTools: () => [],
    setActiveTools() {},
    getCommands: () => [],
    setModel: async () => true,
    getThinkingLevel: () => "off" as any,
    setThinkingLevel() {},
    registerProvider() {},
    unregisterProvider() {},
  } as unknown as ExtensionAPI;

  return { api, state };
}

class FakeSshChild extends EventEmitter {
  stdinWrites: string[] = [];
  stdout = new PassThrough();
  stderr = new PassThrough();
  killed = false;
  killCalls = 0;
  stdin = new Writable({
    write: (chunk, _encoding, callback) => {
      this.stdinWrites.push(Buffer.isBuffer(chunk) ? chunk.toString("utf8") : String(chunk));
      callback();
    },
  });

  kill(): boolean {
    this.killed = true;
    this.killCalls += 1;
    queueMicrotask(() => this.emit("close", null));
    return true;
  }
}

const fakeConnection = {
  sshTarget: "agent@example.com",
  port: 22,
  remoteCwd: "/srv/project",
  remoteHome: "/home/agent",
  localCwd: "/workspace",
  localHome: "/home/agent",
  privateKeyPath: "/tmp/test-key",
  controlPath: "/tmp/test-control",
  strictHostKeyChecking: "yes" as const,
  tempDir: "/tmp/piclaw-ssh-test",
};

afterEach(() => {
  setPersistentSshSpawnForTests(null);
  setPersistentSshInterruptGraceMsForTests(null);
});

describe("ssh-core helpers", () => {
  test("parseSshFlag handles remote host and explicit remote path", () => {
    expect(parseSshFlag("user@example.com")).toEqual({ remote: "user@example.com" });
    expect(parseSshFlag("user@example.com:/srv/app")).toEqual({ remote: "user@example.com", remotePath: "/srv/app" });
    expect(parseSshFlag("host:~/repo")).toEqual({ remote: "host", remotePath: "~/repo" });
  });

  test("resolveRemoteTarget uses username fallback when target omits it", () => {
    expect(resolveRemoteTarget("example.com:/srv/app", "alice")).toEqual({
      sshTarget: "alice@example.com",
      remotePath: "/srv/app",
    });
  });

  test("buildScopedBashCommand wraps commands in a clean bash scope and env", () => {
    expect(buildScopedBashCommand("echo hi")).toContain("bash --noprofile --norc -lc 'echo hi'");
    expect(buildScopedBashCommand("echo $TOKEN", { TOKEN: "secret", USERNAME: "alice" })).toContain(
      "env TOKEN='secret' USERNAME='alice' bash --noprofile --norc -lc 'echo $TOKEN'"
    );
  });

  test("buildScopedBashCommand preserves commands that contain single quotes", () => {
    const scoped = buildScopedBashCommand("printf 'ok:%s' 'quoted'");
    const output = execFileSync("bash", ["-lc", `if true; then ${scoped}; fi`], { encoding: "utf8" });
    expect(output).toBe("ok:quoted");
  });

  test("parseSshPort and host key mode validate inputs", () => {
    expect(parseSshPort(undefined)).toBe(22);
    expect(parseSshPort("2222")).toBe(2222);
    expect(parseStrictHostKeyCheckingMode(undefined)).toBe("yes");
    expect(parseStrictHostKeyCheckingMode("accept-new")).toBe("accept-new");
    expect(() => parseSshPort("0")).toThrow();
    expect(() => parseStrictHostKeyCheckingMode("maybe")).toThrow();
  });
});

describe("ssh-core persistent shell", () => {
  test("hard-stops a wedged command after timeout", async () => {
    const child = new FakeSshChild();
    setPersistentSshSpawnForTests(() => child as unknown as any);
    setPersistentSshInterruptGraceMsForTests(10);

    const shell = new PersistentRemoteShell(fakeConnection as any);
    const result = shell.exec("sleep 99", "/workspace", { onData() {}, timeout: 0.01 });

    await expect(result).rejects.toThrow("timeout:0.01");
    expect(child.stdinWrites.some((value) => value.includes("\x03"))).toBe(true);
    expect(child.killCalls).toBeGreaterThanOrEqual(1);
  });

  test("hard-stops a wedged command after abort", async () => {
    const child = new FakeSshChild();
    setPersistentSshSpawnForTests(() => child as unknown as any);
    setPersistentSshInterruptGraceMsForTests(10);

    const shell = new PersistentRemoteShell(fakeConnection as any);
    const controller = new AbortController();
    const result = shell.exec("sleep 99", "/workspace", { onData() {}, signal: controller.signal, timeout: 60 });
    controller.abort();

    await expect(result).rejects.toThrow("aborted");
    expect(child.stdinWrites.some((value) => value.includes("\x03"))).toBe(true);
    expect(child.killCalls).toBeGreaterThanOrEqual(1);
  });
});

describe("ssh-core live state", () => {
  test("applies SSH config immediately for a registered live chat session", async () => {
    setSshConnectionResolverForTests(async (_rawTarget, localCwd, localHome, port) => ({
      sshTarget: "agent@example.com",
      port,
      remoteCwd: "/srv/project",
      remoteHome: "/home/agent",
      localCwd,
      localHome,
      privateKeyPath: "/tmp/test-key",
      controlPath: "/tmp/test-control",
      strictHostKeyChecking: "yes",
      tempDir: "/tmp/piclaw-ssh-test",
    }) as any);

    await registerLiveChatSshSession("web:default", { localCwd: "/workspace", localHome: "/home/agent" });
    expect(hasLiveChatSshSession("web:default")).toBe(true);

    const connection = await applyLiveSshConfig("web:default", {
      target: "agent@example.com:/srv/project",
      port: 22,
      privateKeyKeychain: "ssh-prod",
      strictHostKeyChecking: "yes",
    });

    expect(connection.remoteCwd).toBe("/srv/project");

    await unregisterLiveChatSshSession("web:default");
    setSshConnectionResolverForTests(null);
    expect(hasLiveChatSshSession("web:default")).toBe(false);
  });
});

describe("ssh-core extension registration", () => {
  test("registers core tool overrides and SSH flags", () => {
    const fake = createFakeApi();

    sshCoreExtension(fake.api);

    expect(Array.from(fake.state.tools.keys())).toEqual(["read", "write", "edit", "bash"]);
    expect(fake.state.flags.has("ssh")).toBe(true);
    expect(fake.state.flags.has("ssh-port")).toBe(true);
    expect(fake.state.flags.has("p")).toBe(true);
    expect(fake.state.flags.has("ssh-keychain")).toBe(true);
    expect(fake.state.flags.has("ssh-known-hosts-keychain")).toBe(true);
    expect(fake.state.flags.has("ssh-strict-host-key-checking")).toBe(true);
  });
});
