interface AvatarCacheEntry {
  bytes: Uint8Array;
  contentType: string;
  expiresAt: number;
}

const MAX_ENTRIES = 20;
const TTL_MS = 60 * 60 * 1000;

export class AvatarCache {
  private readonly entries = new Map<string, AvatarCacheEntry>();

  get(key: string): AvatarCacheEntry | null {
    const entry = this.entries.get(key);
    if (!entry) {
      return null;
    }

    if (entry.expiresAt <= Date.now()) {
      this.entries.delete(key);
      return null;
    }

    this.entries.delete(key);
    this.entries.set(key, entry);
    return entry;
  }

  set(key: string, value: { bytes: Uint8Array; contentType: string }) {
    if (this.entries.has(key)) {
      this.entries.delete(key);
    }

    this.entries.set(key, {
      bytes: value.bytes,
      contentType: value.contentType,
      expiresAt: Date.now() + TTL_MS,
    });

    while (this.entries.size > MAX_ENTRIES) {
      const firstKey = this.entries.keys().next().value;
      if (!firstKey) {
        break;
      }
      this.entries.delete(firstKey);
    }
  }
}

export const avatarCache = new AvatarCache();

export async function fetchAndCacheAvatar(key: string, avatarUrl: string): Promise<AvatarCacheEntry> {
  const cached = avatarCache.get(key);
  if (cached) {
    return cached;
  }

  const response = await fetch(avatarUrl);
  if (!response.ok) {
    throw new Error(`Failed to fetch avatar (${response.status})`);
  }

  const contentType = response.headers.get("content-type") || "image/png";
  const bytes = new Uint8Array(await response.arrayBuffer());
  avatarCache.set(key, { bytes, contentType });

  const fresh = avatarCache.get(key);
  if (!fresh) {
    throw new Error("Avatar cache error");
  }

  return fresh;
}
