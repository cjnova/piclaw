import { safeParse } from "./utils/safe-parse";
import { Hono } from "hono";

interface AzCommandResult {
  installed: boolean;
  success: boolean;
  notLoggedIn: boolean;
  exitCode: number;
  stdout: string;
  stderr: string;
}

async function runAzCommand(args: string[]): Promise<AzCommandResult> {
  try {
    const process = Bun.spawn(["az", ...args], {
      stdout: "pipe",
      stderr: "pipe",
    });

    const [exitCode, stdout, stderr] = await Promise.all([
      process.exited,
      new Response(process.stdout).text(),
      new Response(process.stderr).text(),
    ]);

    const combined = `${stdout}\n${stderr}`;
    const notLoggedIn = /please run ['"]?az login['"]?(?:\s+to setup account)?|not logged in|not have access to any subscriptions|does not have access to any subscriptions|not associated with any subscription|no active account(?:s)?|there are no active accounts|no accounts were found|could not find any account|no subscription(?:s)? found|run ['"]?az account set['"]?/i.test(combined);

    return {
      installed: true,
      success: exitCode === 0,
      notLoggedIn,
      exitCode,
      stdout: stdout.trim(),
      stderr: stderr.trim(),
    };
  } catch (error) {
    const message = error instanceof Error ? error.message : String(error);
    const notInstalled = /ENOENT|not found|No such file or directory/i.test(message);

    return {
      installed: !notInstalled,
      success: false,
      notLoggedIn: false,
      exitCode: -1,
      stdout: "",
      stderr: message,
    };
  }
}

function parseJson<T>(value: string): T | null {
  return safeParse<T | null>(value, null);
}

export const azureCliRoutes = new Hono();

azureCliRoutes.get("/status", async (c) => {
  const result = await runAzCommand(["account", "show", "-o", "json"]);

  if (!result.installed) {
    return c.json({ installed: false, authenticated: false });
  }

  if (!result.success && result.notLoggedIn) {
    return c.json({ installed: true, authenticated: false, message: "Not authenticated. Run 'az login'." });
  }

  if (!result.success) {
    return c.json({ installed: true, authenticated: false, error: result.stderr || "Failed to read Azure account status" }, 500);
  }

  const account = parseJson<Record<string, unknown>>(result.stdout);
  if (!account) {
    return c.json({ installed: true, authenticated: false, error: "Invalid Azure CLI response" }, 500);
  }

  // Check token validity — az account get-access-token fails if expired
  const tokenResult = await runAzCommand(["account", "get-access-token", "--query", "expiresOn", "-o", "tsv"]);
  if (!tokenResult.success || tokenResult.notLoggedIn) {
    return c.json({
      installed: true,
      authenticated: false,
      expired: true,
      message: "Token expired. Run 'az login' to re-authenticate.",
      account,
    });
  }

  return c.json({
    installed: true,
    authenticated: true,
    account,
  });
});

azureCliRoutes.post("/login", async (c) => {
  const result = await runAzCommand(["login", "-o", "none"]);

  if (!result.installed) {
    return c.json({ installed: false, connected: false, message: "Azure CLI is not installed" });
  }

  if (!result.success) {
    return c.json({ installed: true, connected: false, error: result.stderr || "Azure CLI login failed" }, 500);
  }

  return c.json({
    installed: true,
    connected: false,
    loginInitiated: true,
    message: "Azure CLI login initiated. Complete in your browser.",
  });
});

azureCliRoutes.post("/logout", async (c) => {
  const result = await runAzCommand(["logout"]);

  if (!result.installed) {
    return c.json({ installed: false, success: false, message: "Azure CLI is not installed" });
  }

  if (!result.success && result.notLoggedIn) {
    return c.json({ installed: true, success: true, message: "Already signed out" });
  }

  if (!result.success) {
    return c.json({ installed: true, success: false, error: result.stderr || "Azure CLI logout failed" }, 500);
  }

  return c.json({ installed: true, success: true });
});


