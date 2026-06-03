function getErrorDetail(payload: unknown): string | null {
  if (!payload || typeof payload !== "object") {
    return null;
  }

  const values = payload as Record<string, unknown>;
  for (const key of ["error", "message", "detail"]) {
    const value = values[key];
    if (typeof value === "string" && value.trim().length > 0) {
      return value.trim();
    }
  }

  return null;
}

export async function identityFetch(input: RequestInfo | URL, init: RequestInit | undefined, errorMessage: string): Promise<Response> {
  const response = await fetch(input, init);

  if (!response.ok) {
    let detail: string | null = null;

    try {
      const payload = await response.clone().json() as unknown;
      detail = getErrorDetail(payload);
    } catch {
      try {
        const text = (await response.clone().text()).trim();
        if (text.length > 0) {
          detail = text;
        }
      } catch {
        // Ignore body parsing errors and fall back to generic message.
      }
    }

    throw new Error(detail ? `${errorMessage}: ${detail}` : errorMessage);
  }

  return response;
}

export async function identityFetchJson<T>(
  input: RequestInfo | URL,
  init: RequestInit | undefined,
  errorMessage: string,
): Promise<T> {
  const response = await identityFetch(input, init, errorMessage);
  return await response.json() as T;
}
