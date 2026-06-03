import { marked } from "./markdown";
import type { Token } from "marked";

export function getTokenText(token: Token): string {
  if (token.type === "code") {
    return token.text;
  }

  if (token.type === "table") {
    let text = "";

    for (const header of token.header) {
      text += header.text || "";
    }

    for (const row of token.rows) {
      for (const cell of row) {
        text += cell.text || "";
      }
    }

    return text;
  }

  if (token.type === "heading") {
    return token.text || "";
  }

  if (token.type === "paragraph" || token.type === "text") {
    return token.text || token.raw || "";
  }

  if (token.type === "list") {
    let text = "";
    for (const item of token.items || []) {
      text += item.text || "";
    }
    return text;
  }

  return token.raw || "";
}

export function getTokenTextLength(token: Token): number {
  return getTokenText(token).length;
}

export function extractTextAtOffsets(content: string, startOffset: number, endOffset: number): string {
  const start = Math.max(0, Math.trunc(startOffset));
  const end = Math.max(0, Math.trunc(endOffset));

  if (end <= start) {
    return "";
  }

  const tokens = marked.lexer(content, { gfm: true });
  const chunks: string[] = [];
  let offset = 0;

  for (const token of tokens) {
    const tokenText = getTokenText(token);
    if (!tokenText) {
      continue;
    }

    const tokenStart = offset;
    const tokenEnd = tokenStart + tokenText.length;

    if (tokenEnd <= start) {
      offset = tokenEnd;
      continue;
    }

    if (tokenStart >= end) {
      break;
    }

    const localStart = Math.max(0, start - tokenStart);
    const localEnd = Math.min(tokenText.length, end - tokenStart);

    if (localEnd > localStart) {
      chunks.push(tokenText.slice(localStart, localEnd));
    }

    offset = tokenEnd;
  }

  return chunks.join("");
}
