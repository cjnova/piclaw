import { randomUUID } from "node:crypto";
import { Hono } from "hono";
import { avatarCache, fetchAndCacheAvatar } from "./avatar-cache";
import { azureCliRoutes } from "./azure-cli";
import { getAuthStatus, getUserProfile, logoutAccount, startDeviceFlow, switchAccount } from "./github";
import {
  clearM365Cache,
  getM365AccessToken,
  getM365Avatar,
  getM365Profile,
  getM365TokenInfo,
  isM365Connected,
} from "./m365";
import type { Account, FlowStatus, Profile } from "./types";

interface FlowState {
  process: Bun.Subprocess;
  status: FlowStatus;
  stderrPromise: Promise<string>;
  timeout: ReturnType<typeof setTimeout>;
}

const FLOW_TTL_MS = 5 * 60 * 1000;
const flowMap = new Map<string, FlowState>();

let basePath = "";

/** Set the mount prefix so avatar URLs are absolute (e.g. "/identity") */
export function setBasePath(prefix: string) {
  basePath = prefix.replace(/\/$/, "");
}

function mapAccount(account: { username: string; active: boolean; connected: boolean; scopes: string[] }): Account {
  return {
    id: account.username,
    username: account.username,
    displayName: account.username,
    avatarUrl: `${basePath}/accounts/${account.username}/avatar`,
    active: account.active,
    connected: account.connected,
    scopes: account.scopes,
    provider: "github",
  };
}

async function loadAccounts(): Promise<Account[]> {
  const ghAccounts = await getAuthStatus();
  const accounts = ghAccounts.map(mapAccount);

  if (await isM365Connected()) {
    const profile = await getM365Profile();
    if (profile) {
      accounts.push({
        id: `m365-${profile.id}`,
        username: profile.userPrincipalName,
        displayName: profile.displayName,
        avatarUrl: `${basePath}/m365/avatar`,
        active: false,
        connected: true,
        scopes: ["User.Read"],
        provider: "m365",
      });
    }
  }

  return accounts;
}

async function monitorFlow(flowId: string) {
  const flow = flowMap.get(flowId);
  if (!flow) {
    return;
  }

  const exitCode = await flow.process.exited;
  if (!flowMap.has(flowId)) {
    return;
  }

  if (flow.status.status !== "pending") {
    return;
  }

  if (exitCode === 0) {
    const accounts = await loadAccounts();
    const activeAccount = accounts.find((account) => account.active);
    flow.status = {
      status: "completed",
      account: activeAccount,
    };
    return;
  }

  const stderr = await flow.stderrPromise;
  flow.status = {
    status: "failed",
    error: stderr.trim() || "GitHub login failed",
  };
}

async function resolveAvatarUrlForUser(username: string): Promise<string> {
  const accounts = await getAuthStatus();
  const activeAccount = accounts.find((account) => account.active);

  if (activeAccount?.username === username) {
    const profile = await getUserProfile();
    return profile.avatar_url;
  }

  return `https://github.com/${encodeURIComponent(username)}.png?size=128`;
}

export const authRoutes = new Hono();

authRoutes.route("/azure", azureCliRoutes);

authRoutes.get("/accounts", async (c) => {
  try {
    const accounts = await loadAccounts();
    return c.json({ accounts });
  } catch (error) {
    const message = error instanceof Error ? error.message : "Failed to read accounts";
    return c.json({ error: message }, 500);
  }
});

authRoutes.post("/login", async (c) => {
  try {
    const started = await startDeviceFlow();
    const timeout = setTimeout(() => {
      const current = flowMap.get(started.flowId);
      if (!current || current.status.status !== "pending") {
        return;
      }

      current.process.kill();
      current.status = { status: "failed", error: "Login flow timed out" };
    }, FLOW_TTL_MS);

    flowMap.set(started.flowId, {
      process: started.process,
      stderrPromise: started.stderrPromise,
      status: { status: "pending" },
      timeout,
    });

    void monitorFlow(started.flowId);

    return c.json({
      flowId: started.flowId,
      code: started.code,
      url: started.url,
    });
  } catch (error) {
    const message = error instanceof Error ? error.message : "Failed to start login";
    return c.json({ error: message }, 500);
  }
});

authRoutes.get("/login/:flowId/status", async (c) => {
  const flowId = c.req.param("flowId");
  const flow = flowMap.get(flowId);

  if (!flow) {
    return c.json({ status: "failed", error: "Unknown flowId" } satisfies FlowStatus, 404);
  }

  if (flow.status.status !== "pending") {
    clearTimeout(flow.timeout);
    flowMap.delete(flowId);
  }

  return c.json(flow.status);
});

// M365 routes — uses az cli for token management

authRoutes.get("/m365/status", async (c) => {
  const connected = await isM365Connected();
  return c.json({ connected });
});

authRoutes.get("/m365/token", async (c) => {
  const info = getM365TokenInfo();
  if (!info) {
    // Try to get a fresh one
    const token = await getM365AccessToken();
    if (!token) return c.json({ error: "Not authenticated. Run 'az login' first." }, 401);
    return c.json({ access_token: token });
  }
  return c.json({ access_token: info.accessToken });
});

authRoutes.get("/m365/profile", async (c) => {
  const profile = await getM365Profile();
  if (!profile) return c.json({ error: "Not authenticated" }, 401);
  return c.json(profile);
});

authRoutes.get("/m365/avatar", async () => {
  const avatar = await getM365Avatar();
  if (!avatar) return Response.json({ error: "No avatar" }, { status: 404 });

  const body = avatar.bytes.buffer instanceof ArrayBuffer
    ? avatar.bytes.buffer.slice(avatar.bytes.byteOffset, avatar.bytes.byteOffset + avatar.bytes.byteLength)
    : Uint8Array.from(avatar.bytes).buffer;

  return new Response(body, {
    headers: { "Content-Type": avatar.contentType, "Cache-Control": "public, max-age=3600" },
  });
});

authRoutes.post("/m365/logout", (c) => {
  clearM365Cache();
  return c.json({ success: true });
});

authRoutes.post("/switch", async (c) => {
  const body = await c.req.json<{ username?: string }>().catch((): { username?: string } => ({ username: undefined }));
  if (!body.username) {
    return c.json({ error: "username is required" }, 400);
  }

  const success = await switchAccount(body.username);
  if (!success) {
    return c.json({ success: false, error: "Failed to switch account" }, 500);
  }

  return c.json({ success: true, active: body.username });
});

authRoutes.post("/logout", async (c) => {
  const body = await c.req.json<{ username?: string }>().catch((): { username?: string } => ({ username: undefined }));
  if (!body.username) {
    return c.json({ error: "username is required" }, 400);
  }

  const success = await logoutAccount(body.username);
  if (!success) {
    return c.json({ success: false, error: "Failed to logout account" }, 500);
  }

  return c.json({ success: true });
});

authRoutes.get("/accounts/:username/profile", async (c) => {
  const username = c.req.param("username");

  try {
    const accounts = await getAuthStatus();
    const active = accounts.find((account) => account.active);
    if (!active || active.username !== username) {
      return c.json({ error: "Only active account profile is currently supported" }, 400);
    }

    const ghProfile = await getUserProfile();
    const profile: Profile = {
      username: ghProfile.login,
      displayName: ghProfile.name || ghProfile.login,
      email: ghProfile.email || undefined,
      avatarUrl: `${basePath}/accounts/${ghProfile.login}/avatar`,
      bio: ghProfile.bio || undefined,
      company: ghProfile.company || undefined,
      githubId: ghProfile.id,
    };

    return c.json(profile);
  } catch (error) {
    const message = error instanceof Error ? error.message : "Failed to load profile";
    return c.json({ error: message }, 500);
  }
});

authRoutes.get("/accounts/:username/avatar", async (c) => {
  const username = c.req.param("username");

  const cached = avatarCache.get(username);
  if (cached) {
    return new Response(new Blob([new Uint8Array(cached.bytes)], { type: cached.contentType }), {
      headers: {
        "Content-Type": cached.contentType,
        "Cache-Control": "public, max-age=3600",
      },
    });
  }

  try {
    const avatarUrl = await resolveAvatarUrlForUser(username);
    const fetched = await fetchAndCacheAvatar(username, avatarUrl);

    return new Response(new Blob([new Uint8Array(fetched.bytes)], { type: fetched.contentType }), {
      headers: {
        "Content-Type": fetched.contentType,
        "Cache-Control": "public, max-age=3600",
      },
    });
  } catch (error) {
    const message = error instanceof Error ? error.message : "Failed to load avatar";
    return c.json({ error: message }, 500);
  }
});
