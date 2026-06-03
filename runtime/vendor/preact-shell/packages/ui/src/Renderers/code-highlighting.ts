import type { Parser } from "@lezer/common";
import { parser as cssParser } from "@lezer/css";
import { parser as goParser } from "@lezer/go";
import { highlightTree, classHighlighter } from "@lezer/highlight";
import { parser as htmlParser } from "@lezer/html";
import { parser as javascriptParser } from "@lezer/javascript";
import { parser as jsonParser } from "@lezer/json";
import { parser as markdownParser } from "@lezer/markdown";
import { parser as pythonParser } from "@lezer/python";
import { parser as yamlParser } from "@lezer/yaml";
import { createLazySignal } from "../hooks";

export const LEGACY_LANGUAGE_ALIASES = new Set([
  "sh",
  "bash",
  "zsh",
  "shell",
  "ps1",
  "powershell",
  "pwsh",
  "bicep",
]);

type LegacyParserMap = Record<string, Parser>;

export const legacyParsers = createLazySignal<LegacyParserMap>(async () => {
  const [{ StreamLanguage }, { shell }, { powerShell }, { bicepMode }] = await Promise.all([
    import("@codemirror/language"),
    import("@codemirror/legacy-modes/mode/shell"),
    import("@codemirror/legacy-modes/mode/powershell"),
    import("./bicep-mode"),
  ]);

  const shellParser = StreamLanguage.define(shell).parser;
  const powershellParser = StreamLanguage.define(powerShell).parser;
  const bicepParser = StreamLanguage.define(bicepMode).parser;

  return {
    sh: shellParser,
    bash: shellParser,
    zsh: shellParser,
    shell: shellParser,
    ps1: powershellParser,
    powershell: powershellParser,
    pwsh: powershellParser,
    bicep: bicepParser,
  };
});

legacyParsers.load();

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/\"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

const PARSERS: Record<string, Parser> = {
  js: javascriptParser,
  javascript: javascriptParser,
  jsx: javascriptParser,
  ts: javascriptParser,
  typescript: javascriptParser,
  tsx: javascriptParser,
  css: cssParser,
  html: htmlParser,
  xml: htmlParser,
  json: jsonParser,
  md: markdownParser,
  markdown: markdownParser,
  py: pythonParser,
  python: pythonParser,
  yml: yamlParser,
  yaml: yamlParser,
  go: goParser,
  golang: goParser,
};

const LANGUAGE_LABELS: Record<string, string> = {
  js: "JavaScript",
  javascript: "JavaScript",
  jsx: "JSX",
  ts: "TypeScript",
  typescript: "TypeScript",
  tsx: "TSX",
  css: "CSS",
  html: "HTML",
  xml: "XML",
  json: "JSON",
  md: "Markdown",
  markdown: "Markdown",
  py: "Python",
  python: "Python",
  sh: "Shell",
  bash: "Bash",
  zsh: "Zsh",
  shell: "Shell",
  ps1: "PowerShell",
  powershell: "PowerShell",
  pwsh: "PowerShell",
  yml: "YAML",
  yaml: "YAML",
  go: "Go",
  golang: "Go",
  bicep: "Bicep",
  txt: "Text",
  text: "Text",
  plaintext: "Text",
};

export function normalizeLanguage(lang?: string): string {
  return String(lang || "").trim().toLowerCase();
}

export function usesLegacyParser(lang?: string): boolean {
  const normalized = normalizeLanguage(lang);
  return LEGACY_LANGUAGE_ALIASES.has(normalized);
}

export function getLanguageLabel(lang?: string): string {
  const normalized = normalizeLanguage(lang);
  if (!normalized) {
    return "Text";
  }

  return LANGUAGE_LABELS[normalized] || normalized;
}

function parserForLanguage(lang?: string): Parser | null {
  const normalized = normalizeLanguage(lang);

  if (!normalized) {
    return null;
  }

  const parser = PARSERS[normalized];
  if (parser) {
    return parser;
  }

  if (!usesLegacyParser(normalized)) {
    return null;
  }

  const legacyState = legacyParsers.state.value;
  if (legacyState.status !== "ready") {
    return null;
  }

  return legacyState.module[normalized] || null;
}

export function highlightCodeToHtml(code: string, lang?: string): string {
  const parser = parserForLanguage(lang);

  if (!parser) {
    return escapeHtml(code);
  }

  const segments: Array<{ from: number; to: number; classes: string }> = [];

  try {
    const tree = parser.parse(code);
    highlightTree(tree, classHighlighter, (from, to, classes) => {
      if (!classes || from >= to) {
        return;
      }

      segments.push({ from, to, classes });
    });
  } catch {
    return escapeHtml(code);
  }

  if (segments.length === 0) {
    return escapeHtml(code);
  }

  segments.sort((a, b) => a.from - b.from || a.to - b.to);

  let cursor = 0;
  let html = "";

  for (const segment of segments) {
    if (segment.from > cursor) {
      html += escapeHtml(code.slice(cursor, segment.from));
    }

    html += `<span class=\"${escapeHtml(segment.classes)}\">${escapeHtml(code.slice(segment.from, segment.to))}</span>`;
    cursor = Math.max(cursor, segment.to);
  }

  if (cursor < code.length) {
    html += escapeHtml(code.slice(cursor));
  }

  return html;
}
