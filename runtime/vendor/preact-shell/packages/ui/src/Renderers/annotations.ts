import type { ContentAnnotation } from "./annotation-types";

const ENTITY_PATTERN = /^#\d+$|^#x[\da-fA-F]+$|^[a-zA-Z][a-zA-Z0-9]+$/;
const ATTRIBUTE_NAME_PATTERN = /^(class|data-[a-z0-9_.:-]+|aria-[a-z0-9_.:-]+)$/i;

function escapeAttributeValue(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/\"/g, "&quot;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

function isEntity(html: string, index: number): number {
  if (html[index] !== "&") return 0;
  const semi = html.indexOf(";", index + 1);
  if (semi === -1 || semi - index > 10) return 0;
  const body = html.slice(index + 1, semi);
  if (ENTITY_PATTERN.test(body)) return semi + 1 - index;
  return 0;
}

function findTagEnd(html: string, startIndex: number): number {
  if (html.startsWith("<!--", startIndex)) {
    const commentEnd = html.indexOf("-->", startIndex + 4);
    return commentEnd === -1 ? html.length : commentEnd + 3;
  }

  let inSingle = false;
  let inDouble = false;

  for (let i = startIndex + 1; i < html.length; i++) {
    const c = html[i];
    if (c === "'" && !inDouble) {
      inSingle = !inSingle;
      continue;
    }
    if (c === '"' && !inSingle) {
      inDouble = !inDouble;
      continue;
    }
    if (c === ">" && !inSingle && !inDouble) return i + 1;
  }

  return html.length;
}

interface NormalizedAnnotation {
  id: number;
  type: string;
  startOffset: number;
  endOffset: number;
  attributes: Record<string, string>;
}

function buildOpenTag(a: NormalizedAnnotation): string {
  const parts: string[] = [];

  for (const [name, value] of Object.entries(a.attributes || {})) {
    if (ATTRIBUTE_NAME_PATTERN.test(name)) {
      parts.push(`${name}=\"${escapeAttributeValue(String(value))}\"`);
    }
  }

  if (a.type) {
    parts.push(`data-annotation-type=\"${escapeAttributeValue(a.type)}\"`);
  }

  return parts.length > 0 ? `<mark ${parts.join(" ")}>` : "<mark>";
}

/**
 * Apply data-driven annotations to an HTML string.
 *
 * Pure string→string transformation. Annotations specify character offsets
 * in the text content (HTML tags and entities are transparent — an entity
 * like `&amp;` counts as one character).
 *
 * Produces valid HTML by closing and reopening marks at element boundaries.
 *
 * Handles:
 * - Annotations within a single text node
 * - Annotations spanning across inline HTML elements
 * - Multiple non-overlapping annotations
 * - Overlapping/nested annotations
 * - Zero-overhead fast path when annotations array is empty
 */
export function applyAnnotations(html: string, annotations: ContentAnnotation[]): string {
  if (!annotations.length) {
    return html;
  }

  // Normalize: filter invalid, sort by start asc then end desc (wider first)
  const sorted: NormalizedAnnotation[] = [];
  for (let i = 0; i < annotations.length; i++) {
    const a = annotations[i];
    if (a.endOffset > a.startOffset) {
      sorted.push({
        id: i,
        type: a.type,
        startOffset: a.startOffset,
        endOffset: a.endOffset,
        attributes: a.attributes,
      });
    }
  }

  if (!sorted.length) return html;
  sorted.sort((a, b) => a.startOffset - b.startOffset || b.endOffset - a.endOffset || a.id - b.id);

  const result: string[] = [];
  let textOffset = 0;
  let srcIdx = 0;
  let nextAnnIdx = 0;
  const active: NormalizedAnnotation[] = [];

  function closeEnded() {
    // Remove annotations whose endOffset <= textOffset
    let changed = true;
    while (changed) {
      changed = false;
      for (let k = active.length - 1; k >= 0; k--) {
        if (active[k].endOffset <= textOffset) {
          // Close from innermost down to k
          for (let j = active.length - 1; j >= k; j--) {
            result.push("</mark>");
          }
          active.splice(k, 1);
          // Reopen those that are still active (after k)
          for (let j = k; j < active.length; j++) {
            result.push(buildOpenTag(active[j]));
          }
          changed = true;
          break;
        }
      }
    }
  }

  function openNew() {
    while (nextAnnIdx < sorted.length && sorted[nextAnnIdx].startOffset === textOffset) {
      const a = sorted[nextAnnIdx];
      active.push(a);
      result.push(buildOpenTag(a));
      nextAnnIdx++;
    }
  }

  while (srcIdx < html.length) {
    const ch = html[srcIdx];

    if (ch === "<") {
      const tagEnd = findTagEnd(html, srcIdx);
      const tag = html.slice(srcIdx, tagEnd);

      if (active.length > 0) {
        // Close marks, output tag, reopen only those still active at current textOffset
        for (let k = active.length - 1; k >= 0; k--) result.push("</mark>");
        result.push(tag);
        // Before reopening, filter out any that should have ended
        // (this handles the case where a tag appears right at an annotation's endOffset)
        for (let k = active.length - 1; k >= 0; k--) {
          if (active[k].endOffset <= textOffset) {
            active.splice(k, 1);
          }
        }
        for (const a of active) result.push(buildOpenTag(a));
      } else {
        result.push(tag);
      }

      srcIdx = tagEnd;
      continue;
    }

    // At a text character position: close ended, open new
    closeEnded();
    openNew();

    // Entity
    const entityLen = isEntity(html, srcIdx);
    if (entityLen > 0) {
      result.push(html.slice(srcIdx, srcIdx + entityLen));
      srcIdx += entityLen;
      textOffset += 1;
      continue;
    }

    // Regular character
    result.push(ch);
    srcIdx += 1;
    textOffset += 1;
  }

  // Final close
  closeEnded();
  for (let k = active.length - 1; k >= 0; k--) result.push("</mark>");

  return result.join("");
}
