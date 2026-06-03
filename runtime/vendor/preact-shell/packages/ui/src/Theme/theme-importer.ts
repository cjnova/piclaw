/**
 * VS Code theme importer — maps VS Code color keys to CSS custom properties
 * and handles persistence via localStorage.
 */

import { safeParse } from "../utils";

export const THEME_VARS_STORAGE_KEY = "preact-shell-theme-vars";
export const THEME_NAME_STORAGE_KEY = "preact-shell-theme-name";
export const THEME_MODE_STORAGE_KEY = "preact-shell-theme-mode";
const STYLE_ID = "preact-shell-theme-override";
export const THEME_CHANGE_EVENT = "preact-shell-theme-change";

/** VS Code → our CSS var mappings */
const VSCODE_TO_CSS: Record<string, string> = {
  "editor.background": "--bg",
  "sideBar.background": "--bg-sidebar",
  "activityBar.background": "--bg-sidebar",
  "panel.background": "--bg-terminal",
  "statusBar.background": "--bg-status",
  "titleBar.activeBackground": "--bg-status",
  "input.background": "--input-bg",
  "dropdown.background": "--input-bg",
  "editorWidget.background": "--bg-elevated",
  "list.activeSelectionBackground": "--bg-elevated",
  "list.hoverBackground": "--bg-elevated",
  "quickInput.background": "--bg-elevated",
  "notifications.background": "--bg-elevated",
  "menu.background": "--bg-elevated",

  "editor.foreground": "--text",
  "sideBar.foreground": "--text",
  "activityBar.foreground": "--text",
  "statusBar.foreground": "--text-soft",
  "tab.activeForeground": "--text",
  "tab.inactiveForeground": "--text-muted",
  "list.activeSelectionForeground": "--text",
  "list.inactiveSelectionForeground": "--text-muted",
  "input.foreground": "--text",
  "dropdown.foreground": "--text",
  "menu.foreground": "--text",
  "quickInput.foreground": "--text",

  "input.border": "--border",
  "panel.border": "--border",
  "sideBar.border": "--border",
  "editorGroup.border": "--border",
  "activityBar.border": "--border",
  "statusBar.border": "--border",
  "tab.border": "--border",
  "menu.border": "--border",

  "focusBorder": "--accent",
  "button.background": "--accent",
  "progressBar.background": "--accent",
  "list.highlightForeground": "--accent",
  "editorLink.activeForeground": "--accent",
  "textLink.foreground": "--accent",
  "textLink.activeForeground": "--accent",
  "selection.background": "--accent",
  "editor.selectionBackground": "--accent",

  "errorForeground": "--error",
  "editorError.foreground": "--error",
  "inputValidation.errorBorder": "--error",
  "editorWarning.foreground": "--warning",
  "inputValidation.warningBorder": "--warning",
  "gitDecoration.addedResourceForeground": "--success",
  "testing.iconPassed": "--success",

  "editorLineNumber.foreground": "--text-muted",
  "editorLineNumber.activeForeground": "--text",
  "editorCursor.foreground": "--accent",
  "editorIndentGuide.background": "--border",
  "editorIndentGuide.activeBackground": "--border",
  "editorWhitespace.foreground": "--text-muted",

  "scrollbar.shadow": "--handle",
  "scrollbarSlider.background": "--handle",
  "scrollbarSlider.hoverBackground": "--handle-hover",
  "scrollbarSlider.activeBackground": "--handle-hover",

  "terminal.ansiBlack": "--term-black",
  "terminal.ansiRed": "--term-red",
  "terminal.ansiGreen": "--term-green",
  "terminal.ansiYellow": "--term-yellow",
  "terminal.ansiBlue": "--term-blue",
  "terminal.ansiMagenta": "--term-magenta",
  "terminal.ansiCyan": "--term-cyan",
  "terminal.ansiWhite": "--term-white",
  "terminal.ansiBrightBlack": "--term-bright-black",
  "terminal.ansiBrightRed": "--term-bright-red",
  "terminal.ansiBrightGreen": "--term-bright-green",
  "terminal.ansiBrightYellow": "--term-bright-yellow",
  "terminal.ansiBrightBlue": "--term-bright-blue",
  "terminal.ansiBrightMagenta": "--term-bright-magenta",
  "terminal.ansiBrightCyan": "--term-bright-cyan",
  "terminal.ansiBrightWhite": "--term-bright-white",
  "terminal.foreground": "--term-fg",
  "terminal.background": "--bg-terminal",
};

const TOKEN_SCOPE_TO_CSS: Record<string, string> = {
  keyword: "--syn-keyword",
  "keyword.control": "--syn-keyword",
  "keyword.operator": "--syn-operator",
  string: "--syn-string",
  "string.quoted": "--syn-string",
  "constant.numeric": "--syn-number",
  "constant.language.boolean": "--syn-bool",
  "constant.language.null": "--syn-null",
  comment: "--syn-comment",
  "comment.line": "--syn-comment",
  "comment.block": "--syn-comment",
  variable: "--syn-variableName",
  "variable.other": "--syn-variableName",
  "variable.parameter": "--syn-variableName",
  "entity.name.function": "--syn-function",
  "entity.name.type": "--syn-typeName",
  "entity.name.class": "--syn-className",
  "entity.other.attribute-name": "--syn-attribute",
  "support.function": "--syn-function",
  "support.type": "--syn-typeName",
  "support.class": "--syn-className",
  "storage.type": "--syn-typeName",
  "storage.modifier": "--syn-keyword",
  "meta.tag": "--syn-tag",
  "meta.preprocessor": "--syn-meta",
  punctuation: "--syn-punctuation",
  "punctuation.definition.tag": "--syn-tag",
  "punctuation.definition.comment": "--syn-comment",
  "constant.regexp": "--syn-regexp",
};

const TOKEN_SCOPE_KEYWORDS: Array<[string, string]> = [
  ["keyword", "--syn-keyword"],
  ["string", "--syn-string"],
  ["number", "--syn-number"],
  ["numeric", "--syn-number"],
  ["comment", "--syn-comment"],
  ["operator", "--syn-operator"],
  ["variable", "--syn-variableName"],
  ["definition", "--syn-definition"],
  ["function", "--syn-function"],
  ["type", "--syn-typeName"],
  ["property", "--syn-property"],
  ["punctuation", "--syn-punctuation"],
  ["bool", "--syn-bool"],
  ["boolean", "--syn-bool"],
  ["null", "--syn-null"],
  ["class", "--syn-className"],
  ["tag", "--syn-tag"],
  ["attribute", "--syn-attribute"],
  ["meta", "--syn-meta"],
  ["regexp", "--syn-regexp"],
  ["regex", "--syn-regexp"],
];

function getSyntaxVarForScope(rawScope: string): string | null {
  const normalized = rawScope.trim().toLowerCase();

  if (!normalized) {
    return null;
  }

  const direct = TOKEN_SCOPE_TO_CSS[normalized];
  if (direct) {
    return direct;
  }

  const segments = normalized.split(".");
  for (let i = segments.length; i > 0; i -= 1) {
    const candidate = segments.slice(0, i).join(".");
    const match = TOKEN_SCOPE_TO_CSS[candidate];
    if (match) {
      return match;
    }
  }

  for (const [needle, cssVar] of TOKEN_SCOPE_KEYWORDS) {
    if (normalized.includes(needle)) {
      return cssVar;
    }
  }

  return null;
}

export interface VSCodeThemeJSON {
  name?: string;
  type?: "dark" | "light";
  colors?: Record<string, string>;
  tokenColors?: Array<{
    name?: string;
    scope?: string | string[];
    settings?: {
      foreground?: string;
      background?: string;
      fontStyle?: string;
    };
  }>;
}

export function importVSCodeTheme(json: VSCodeThemeJSON): Record<string, string> {
  const result: Record<string, string> = {};
  const colors = json.colors ?? {};

  for (const [vsKey, cssVar] of Object.entries(VSCODE_TO_CSS)) {
    const value = colors[vsKey];
    if (value && !result[cssVar]) {
      result[cssVar] = normalizeColor(value);
    }
  }

  if (Array.isArray(json.tokenColors)) {
    for (const rule of json.tokenColors) {
      const scopes = Array.isArray(rule.scope)
        ? rule.scope
        : typeof rule.scope === "string"
          ? rule.scope.split(",").map((scope) => scope.trim())
          : [];

      for (const scope of scopes) {
        const cssVar = getSyntaxVarForScope(scope);
        if (cssVar && rule.settings?.foreground && !result[cssVar]) {
          const color = normalizeColor(rule.settings.foreground);
          result[cssVar] = color;

          if (cssVar === "--syn-function" && !result["--syn-definition"]) {
            result["--syn-definition"] = color;
          }
          if (cssVar === "--syn-typeName" && !result["--syn-className"]) {
            result["--syn-className"] = color;
          }
          if (cssVar === "--syn-variableName" && !result["--syn-property"]) {
            result["--syn-property"] = color;
          }
        }
      }
    }
  }

  return result;
}

function normalizeColor(value: string): string {
  if (!value.startsWith("#")) {
    return value;
  }

  if (value.length === 9) {
    const r = Number.parseInt(value.slice(1, 3), 16);
    const g = Number.parseInt(value.slice(3, 5), 16);
    const b = Number.parseInt(value.slice(5, 7), 16);
    const a = (Number.parseInt(value.slice(7, 9), 16) / 255).toFixed(3);
    return `rgba(${r},${g},${b},${a})`;
  }

  return value;
}

export function applyTheme(vars: Record<string, string>): void {
  if (typeof document === "undefined") {
    return;
  }

  // Remove any inline CSS custom properties on :root so the <style> element wins
  const root = document.documentElement;
  for (const key of Object.keys(vars)) {
    root.style.removeProperty(key);
  }

  const existing = document.getElementById(STYLE_ID);
  if (existing) {
    existing.remove();
  }

  const style = document.createElement("style");
  style.id = STYLE_ID;
  style.textContent = `html[data-theme][data-theme] { ${Object.entries(vars).map(([key, value]) => `${key}: ${value}`).join("; ")} }`;
  document.head.appendChild(style);
}

function readThemeVars(): Record<string, string> {
  if (typeof window === "undefined") {
    return {};
  }

  try {
    const raw = window.localStorage.getItem(THEME_VARS_STORAGE_KEY);
    if (!raw) {
      return {};
    }

    const parsed = safeParse<Record<string, string>>(raw, {});
    if (parsed && typeof parsed === "object") {
      return parsed as Record<string, string>;
    }
  } catch {
    // Ignore localStorage failures.
  }

  return {};
}

export function loadSavedTheme(): Record<string, string> | null {
  const vars = readThemeVars();
  return Object.keys(vars).length > 0 ? vars : null;
}

export function saveTheme(vars: Record<string, string>, themeName?: string): void {
  if (typeof window !== "undefined") {
    try {
      window.localStorage.setItem(THEME_VARS_STORAGE_KEY, JSON.stringify(vars));
      if (themeName) {
        window.localStorage.setItem(THEME_NAME_STORAGE_KEY, themeName);
      }
      window.dispatchEvent(new CustomEvent(THEME_CHANGE_EVENT, { detail: { name: themeName ?? null } }));
    } catch {
      // Ignore localStorage failures.
    }
  }

  applyTheme(vars);
}

export function resetTheme(): void {
  if (typeof document !== "undefined") {
    const existing = document.getElementById(STYLE_ID);
    if (existing) {
      existing.remove();
    }
  }

  if (typeof window !== "undefined") {
    try {
      window.localStorage.removeItem(THEME_VARS_STORAGE_KEY);
      window.localStorage.removeItem(THEME_NAME_STORAGE_KEY);
      window.dispatchEvent(new CustomEvent(THEME_CHANGE_EVENT, { detail: { name: null } }));
    } catch {
      // Ignore localStorage failures.
    }
  }
}

export function getSavedThemeVars(): Record<string, string> {
  return readThemeVars();
}

export function getSavedThemeName(): string | null {
  if (typeof window === "undefined") {
    return null;
  }

  try {
    return window.localStorage.getItem(THEME_NAME_STORAGE_KEY);
  } catch {
    return null;
  }
}
