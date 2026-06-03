/**
 * M365 authentication via WAM token broker.
 * The broker runs on Windows (localhost:9365) and provides device-bound tokens.
 * We simply consume the token from the broker's HTTP endpoint.
 */

const BROKER_URL = "http://localhost:9365";

export interface M365Profile {
  displayName: string;
  mail: string;
  userPrincipalName: string;
  id: string;
}

interface CachedToken {
  accessToken: string;
  expiresAt: number;
}

let cachedToken: CachedToken | null = null;
let cachedProfile: M365Profile | null = null;

/**
 * Get an access token from the WAM broker.
 */
export async function getM365AccessToken(): Promise<string | null> {
  if (cachedToken && Date.now() < cachedToken.expiresAt) {
    return cachedToken.accessToken;
  }

  try {
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 2000);
    const response = await fetch(`${BROKER_URL}/token`, { signal: controller.signal });
    clearTimeout(timeout);
    if (!response.ok) return null;

    const data = await response.json() as { access_token: string; expires_on: number };
    cachedToken = {
      accessToken: data.access_token,
      expiresAt: data.expires_on - 60_000, // 1 min buffer
    };
    return cachedToken.accessToken;
  } catch {
    cachedToken = null;
    return null;
  }
}

/**
 * Check if the WAM broker is running and has a valid token.
 */
export async function isM365Connected(): Promise<boolean> {
  try {
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 2000);
    const response = await fetch(`${BROKER_URL}/status`, { signal: controller.signal });
    clearTimeout(timeout);
    if (!response.ok) return false;
    const data = await response.json() as { authenticated: boolean };
    return data.authenticated;
  } catch {
    return false;
  }
}

/**
 * Get user profile from Microsoft Graph.
 */
export async function getM365Profile(): Promise<M365Profile | null> {
  if (cachedProfile) return cachedProfile;

  try {
    // Try broker's profile first (from MSAL account cache)
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 3000);
    const brokerResp = await fetch(`${BROKER_URL}/profile`, { signal: controller.signal });
    clearTimeout(timeout);

    if (brokerResp.ok) {
      const data = await brokerResp.json() as { name?: string; username?: string; tenantId?: string };
      if (data.username) {
        cachedProfile = {
          displayName: data.name || data.username,
          mail: data.username,
          userPrincipalName: data.username,
          id: data.username,
        };
        return cachedProfile;
      }
    }

    // Fallback: call Graph via broker proxy
    const ctrl2 = new AbortController();
    const t2 = setTimeout(() => ctrl2.abort(), 5000);
    const response = await fetch(`${BROKER_URL}/graph/v1.0/me`, { signal: ctrl2.signal });
    clearTimeout(t2);
    if (!response.ok) return null;

    const graphData = await response.json() as M365Profile;
    cachedProfile = graphData;
    return cachedProfile;
  } catch {
    return null;
  }
}

/**
 * Get user avatar from Microsoft Graph.
 */
export async function getM365Avatar(): Promise<{ bytes: Uint8Array; contentType: string } | null> {
  try {
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 5000);
    const response = await fetch(`${BROKER_URL}/graph/v1.0/me/photo/$value`, { signal: controller.signal });
    clearTimeout(timeout);
    if (!response.ok) return null;

    return {
      bytes: new Uint8Array(await response.arrayBuffer()),
      contentType: response.headers.get("content-type") || "image/jpeg",
    };
  } catch {
    return null;
  }
}

/**
 * Clear local cache (doesn't affect the broker).
 */
export function clearM365Cache(): void {
  cachedToken = null;
  cachedProfile = null;
}

/**
 * Get cached token info for debugging.
 */
export function getM365TokenInfo(): { accessToken: string; expiresAt: number } | null {
  if (!cachedToken || Date.now() >= cachedToken.expiresAt) return null;
  return { ...cachedToken };
}
