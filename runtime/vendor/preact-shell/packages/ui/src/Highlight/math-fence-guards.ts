import { getTokenText, getTokenTextLength } from "../Renderers/extract-text";
import { marked } from "../Renderers/markdown";
import { DISPLAY_MATH_PATTERN, INLINE_MATH_PATTERN, shouldRenderMath } from "../Renderers/math-patterns";
import type { Token } from "marked";

export interface OffsetRange {
  startOffset: number;
  endOffset: number;
}

const MATH_FENCE_LANGUAGES = new Set(["math", "latex", "katex"]);

export function isMathFenceLanguage(language: string | undefined): boolean {
  return MATH_FENCE_LANGUAGES.has((language || "").trim().toLowerCase());
}

export function getKaTeXRanges(content: string): OffsetRange[] {
  const tokens = marked.lexer(content, { gfm: true });
  const ranges: OffsetRange[] = [];
  let offset = 0;

  for (const token of tokens) {
    const tokenLength = getTokenTextLength(token as Token);
    if (tokenLength <= 0) {
      continue;
    }

    if (token.type === "code" && isMathFenceLanguage(token.lang)) {
      ranges.push({
        startOffset: offset,
        endOffset: offset + tokenLength,
      });
      offset += tokenLength;
      continue;
    }

    const tokenText = getTokenText(token as Token);
    const mathRanges = getInlineAndDisplayMathRanges(tokenText, offset);
    ranges.push(...mathRanges);
    offset += tokenLength;
  }

  return mergeRanges(ranges);
}

function getInlineAndDisplayMathRanges(text: string, baseOffset: number): OffsetRange[] {
  if (!text || !text.includes("$")) {
    return [];
  }

  const ranges: OffsetRange[] = [];

  for (const match of text.matchAll(DISPLAY_MATH_PATTERN)) {
    const [fullMatch, tex = ""] = match;
    const matchIndex = match.index;
    if (typeof matchIndex !== "number" || !shouldRenderMath(tex, true)) {
      continue;
    }

    ranges.push({
      startOffset: baseOffset + matchIndex,
      endOffset: baseOffset + matchIndex + fullMatch.length,
    });
  }

  for (const match of text.matchAll(INLINE_MATH_PATTERN)) {
    const [fullMatch, tex = ""] = match;
    const matchIndex = match.index;
    if (typeof matchIndex !== "number" || !shouldRenderMath(tex, false)) {
      continue;
    }

    ranges.push({
      startOffset: baseOffset + matchIndex,
      endOffset: baseOffset + matchIndex + fullMatch.length,
    });
  }

  return ranges;
}

export function subtractOffsetRanges(range: OffsetRange, excludedRanges: OffsetRange[]): OffsetRange[] {
  if (range.endOffset <= range.startOffset) {
    return [];
  }

  const normalizedExcluded = mergeRanges(excludedRanges);
  const result: OffsetRange[] = [];
  let cursor = range.startOffset;

  for (const excluded of normalizedExcluded) {
    if (excluded.endOffset <= cursor) {
      continue;
    }

    if (excluded.startOffset >= range.endOffset) {
      break;
    }

    if (excluded.startOffset > cursor) {
      result.push({
        startOffset: cursor,
        endOffset: Math.min(excluded.startOffset, range.endOffset),
      });
    }

    cursor = Math.max(cursor, excluded.endOffset);

    if (cursor >= range.endOffset) {
      break;
    }
  }

  if (cursor < range.endOffset) {
    result.push({
      startOffset: cursor,
      endOffset: range.endOffset,
    });
  }

  return result;
}

function mergeRanges(ranges: OffsetRange[]): OffsetRange[] {
  const normalized = ranges
    .filter((range) => range.endOffset > range.startOffset)
    .map((range) => ({
      startOffset: Math.trunc(range.startOffset),
      endOffset: Math.trunc(range.endOffset),
    }))
    .sort((a, b) => a.startOffset - b.startOffset || a.endOffset - b.endOffset);

  if (normalized.length <= 1) {
    return normalized;
  }

  const merged: OffsetRange[] = [normalized[0]];

  for (let i = 1; i < normalized.length; i++) {
    const current = normalized[i];
    const previous = merged[merged.length - 1];

    if (current.startOffset <= previous.endOffset) {
      previous.endOffset = Math.max(previous.endOffset, current.endOffset);
      continue;
    }

    merged.push(current);
  }

  return merged;
}
