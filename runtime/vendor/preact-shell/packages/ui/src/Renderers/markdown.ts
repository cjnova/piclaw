import { marked } from "marked";
import { sanitizeHtml } from "./sanitize";

/**
 * Render markdown to HTML string (synchronous).
 * Single source of truth for marked usage in the framework.
 */
export function renderMarkdown(content: string): string {
  const rendered = marked.parse(content, { async: false }) as string;
  return sanitizeHtml(rendered);
}

export { marked };
