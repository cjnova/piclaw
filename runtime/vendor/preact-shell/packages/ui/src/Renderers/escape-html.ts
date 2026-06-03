interface EscapeHtmlOptions {
  escapeSingleQuote?: boolean;
}

export function escapeHtml(value: string, options?: EscapeHtmlOptions): string {
  const escaped = value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/\"/g, "&quot;");

  if (options?.escapeSingleQuote) {
    return escaped.replace(/'/g, "&#39;");
  }

  return escaped;
}
