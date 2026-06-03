import { randomUUID } from "node:crypto";
import { safeParse } from "./utils/safe-parse";
import type { GhAccount, GhProfile } from "./types";

const ACCOUNT_LINE = /^\s*✓ Logged in to github\.com account\s+([^\s]+)/;
const ACTIVE_LINE = /^\s*- Active account:\s*(true|false)/;
const SCOPES_LINE = /^\s*- Token scopes:\s*(.*)$/;

async function runGh(args: string[]): Promise<{ stdout: string; stderr: string; exitCode: number }> {
  const proc = Bun.spawn({
    cmd: ["gh", ...args],
    stdout: "pipe",
    stderr: "pipe",
  });

  const [stdout, stderr, exitCode] = await Promise.all([
    new Response(proc.stdout).text(),
    new Response(proc.stderr).text(),
    proc.exited,
  ]);

  return { stdout, stderr, exitCode };
}

function parseScopes(raw: string): string[] {
  return raw
    .split(",")
    .map((scope) => scope.trim().replace(/^'+|'+$/g, ""))
    .filter(Boolean);
}

export async function getAuthStatus(): Promise<GhAccount[]> {
  const { stdout, stderr, exitCode } = await runGh(["auth", "status"]);
  if (exitCode !== 0) {
    return [];
  }

  // gh cli v2.x writes to stdout; older versions used stderr
  const output = stdout || stderr;
  const lines = output.split(/\r?\n/);
  const accounts: GhAccount[] = [];
  let current: GhAccount | null = null;

  for (const line of lines) {
    const accountMatch = line.match(ACCOUNT_LINE);
    if (accountMatch) {
      if (current) {
        accounts.push(current);
      }

      current = {
        username: accountMatch[1],
        active: false,
        connected: true,
        scopes: [],
      };
      continue;
    }

    if (!current) {
      continue;
    }

    const activeMatch = line.match(ACTIVE_LINE);
    if (activeMatch) {
      current.active = activeMatch[1] === "true";
      continue;
    }

    const scopesMatch = line.match(SCOPES_LINE);
    if (scopesMatch) {
      current.scopes = parseScopes(scopesMatch[1]);
    }
  }

  if (current) {
    accounts.push(current);
  }

  return accounts;
}

function parseDeviceInfo(text: string): { code?: string; url?: string } {
  const codeMatch = text.match(/one-time code:\s*([A-Z0-9-]+)/i);
  const urlMatch = text.match(/https:\/\/github\.com\/login\/device\S*/i);
  return {
    code: codeMatch?.[1],
    url: urlMatch?.[0],
  };
}

export async function startDeviceFlow(): Promise<{
  process: Bun.Subprocess;
  flowId: string;
  code: string;
  url: string;
  stderrPromise: Promise<string>;
}> {
  const process = Bun.spawn({
    cmd: ["gh", "auth", "login", "--hostname", "github.com", "--web", "--git-protocol", "https"],
    stdout: "pipe",
    stderr: "pipe",
  });

  const flowId = randomUUID();
  const reader = process.stderr.getReader();
  let stderrText = "";
  let resolved = false;
  let readyResolve!: (value: { code: string; url: string }) => void;
  let readyReject!: (reason?: unknown) => void;

  const readyPromise = new Promise<{ code: string; url: string }>((resolve, reject) => {
    readyResolve = resolve;
    readyReject = reject;
  });

  const stderrPromise = (async () => {
    try {
      while (true) {
        const { value, done } = await reader.read();
        if (done) {
          break;
        }

        stderrText += new TextDecoder().decode(value);
        if (!resolved) {
          const parsed = parseDeviceInfo(stderrText);
          if (parsed.code && parsed.url) {
            resolved = true;
            readyResolve({ code: parsed.code, url: parsed.url });
          }
        }
      }
    } finally {
      reader.releaseLock();
      if (!resolved) {
        readyReject(new Error("Unable to parse device flow code from gh output"));
      }
    }

    return stderrText;
  })();

  const timeoutPromise = new Promise<never>((_, reject) => {
    setTimeout(() => reject(new Error("Timed out waiting for GitHub device code")), 15000);
  });

  const { code, url } = await Promise.race([readyPromise, timeoutPromise]);
  return { process, flowId, code, url, stderrPromise };
}

export async function switchAccount(username: string): Promise<boolean> {
  const { exitCode } = await runGh(["auth", "switch", "--user", username]);
  return exitCode === 0;
}

export async function logoutAccount(username: string): Promise<boolean> {
  const proc = Bun.spawn({
    cmd: ["gh", "auth", "logout", "--user", username],
    stdout: "pipe",
    stderr: "pipe",
    stdin: new TextEncoder().encode("y\n"),
  });
  const exitCode = await proc.exited;
  return exitCode === 0;
}

export async function getUserProfile(): Promise<GhProfile> {
  const { stdout, exitCode, stderr } = await runGh([
    "api",
    "/user",
    "--jq",
    "{login,name,email,avatar_url,bio,company,id}",
  ]);

  if (exitCode !== 0) {
    throw new Error(stderr || "Failed to fetch GitHub profile");
  }

  return safeParse<GhProfile>(stdout, { login: "", avatar_url: "", id: 0 });
}
