interface WorkspaceFetchOptions extends RequestInit {
  query?: Record<string, string>;
}

export function withWorkspaceQuery(url: string, params: Record<string, string>): string {
  const resolved = new URL(url, window.location.origin);

  for (const [key, value] of Object.entries(params)) {
    resolved.searchParams.set(key, value);
  }

  return resolved.toString();
}

export async function workspaceFetch(url: string, options: WorkspaceFetchOptions = {}): Promise<Response> {
  const { query, headers: incomingHeaders, method, ...init } = options;
  const resolvedUrl = query ? withWorkspaceQuery(url, query) : url;
  const headers = new Headers(incomingHeaders);

  if (method && method !== "GET" && method !== "HEAD" && !headers.has("X-Requested-With")) {
    headers.set("X-Requested-With", "preact-shell");
  }

  return fetch(resolvedUrl, {
    ...init,
    method,
    headers,
  });
}

interface WorkspaceFetchJsonOptions extends WorkspaceFetchOptions {
  errorMessage: string;
}

export async function workspaceFetchJson<T>(url: string, options: WorkspaceFetchJsonOptions): Promise<T> {
  const { errorMessage, ...fetchOptions } = options;
  const response = await workspaceFetch(url, fetchOptions);

  if (!response.ok) {
    throw new Error(errorMessage);
  }

  return (await response.json()) as T;
}
