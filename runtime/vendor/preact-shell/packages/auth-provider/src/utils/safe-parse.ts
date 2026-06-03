/**
 * Safely parse a JSON string with a fallback value.
 * Returns fallback when raw is null or parsing fails.
 */
export function safeParse<T>(raw: string | null, fallback: T): T {
  if (raw === null) return fallback;
  try {
    return JSON.parse(raw) as T;
  } catch {
    return fallback;
  }
}
