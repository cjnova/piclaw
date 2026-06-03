import katex from "katex";
import { escapeHtml } from "./escape-html";
import { DISPLAY_MATH_PATTERN, INLINE_MATH_PATTERN, shouldRenderMath } from "./math-patterns";

const PROTECTED_TAGS_PATTERN = /<(code|pre|a)\b[^>]*>[\s\S]*?<\/\1>/gi;

function protectTags(html: string): { content: string; placeholders: Map<string, string> } {
  const placeholders = new Map<string, string>();
  let index = 0;

  const content = html.replace(PROTECTED_TAGS_PATTERN, (match) => {
    const key = `__MD_PIPELINE_PLACEHOLDER_${index++}__`;
    placeholders.set(key, match);
    return key;
  });

  return { content, placeholders };
}

function restoreTags(html: string, placeholders: Map<string, string>): string {
  let restored = html;
  for (const [key, value] of placeholders) {
    restored = restored.replaceAll(key, value);
  }
  return restored;
}

function renderMath(tex: string, displayMode: boolean): string {
  const normalized = tex.trim();
  if (!shouldRenderMath(tex, displayMode)) {
    return displayMode ? `$$${tex}$$` : `$${tex}$`;
  }

  const source = displayMode ? `$$${tex}$$` : `$${tex}$`;
  const sourceAttr = escapeHtml(source, { escapeSingleQuote: true });

  try {
    const rendered = katex.renderToString(normalized, { displayMode, throwOnError: true });
    return `<span class="katex-copyable" data-katex-source="${sourceAttr}" role="button" tabindex="0" aria-label="Copy equation source">${rendered}</span>`;
  } catch (error) {
    const message = error instanceof Error ? error.message : String(error);
    return `<span class="math-error katex-copyable" data-katex-source="${sourceAttr}" role="button" tabindex="0" aria-label="Copy equation source" title="${escapeHtml(message, { escapeSingleQuote: true })}">${escapeHtml(source, { escapeSingleQuote: true })}</span>`;
  }
}

export function renderInlineMath(html: string): string {
  if (!html || !html.includes("$")) {
    return html;
  }

  const { content, placeholders } = protectTags(html);

  const withDisplayMath = content.replace(DISPLAY_MATH_PATTERN, (_, tex: string) => renderMath(tex, true));
  const withInlineMath = withDisplayMath.replace(INLINE_MATH_PATTERN, (_, tex: string) => renderMath(tex, false));

  return restoreTags(withInlineMath, placeholders);
}

function parseFrontmatterValue(value: string): unknown {
  const trimmed = value.trim();
  if (trimmed === "true") return true;
  if (trimmed === "false") return false;
  if (trimmed === "null") return null;
  if (/^-?\d+(\.\d+)?$/.test(trimmed)) return Number(trimmed);
  return trimmed.replace(/^['"]|['"]$/g, "");
}

export function stripFrontmatter(text: string): { content: string; frontmatter: Record<string, unknown> | null } {
  const match = text.match(/^---\s*\r?\n([\s\S]*?)\r?\n---\s*(?:\r?\n|$)/);
  if (!match) {
    return { content: text, frontmatter: null };
  }

  const frontmatterBlock = match[1] || "";
  const frontmatter: Record<string, unknown> = {};

  for (const rawLine of frontmatterBlock.split(/\r?\n/)) {
    const line = rawLine.trim();
    if (!line || line.startsWith("#")) {
      continue;
    }

    const separatorIndex = line.indexOf(":");
    if (separatorIndex === -1) {
      continue;
    }

    const key = line.slice(0, separatorIndex).trim();
    const value = line.slice(separatorIndex + 1);

    if (!key) {
      continue;
    }

    frontmatter[key] = parseFrontmatterValue(value);
  }

  return {
    content: text.slice(match[0].length),
    frontmatter: Object.keys(frontmatter).length > 0 ? frontmatter : {},
  };
}
