/**
 * CodeMirrorEditor — lazy-loaded CodeMirror 6 editor for ContentOverlay edit mode.
 *
 * This entire module is dynamically imported so that @codemirror/view (~500KB)
 * and friends are never loaded until the user enters edit mode on a supported
 * language file.
 *
 * Supported languages: JS/TS/JSX/TSX, CSS, HTML/XML, JSON, Markdown,
 * Python, YAML, Go, Shell/Bash/Zsh, PowerShell, Bicep.
 * Unsupported languages stay in plain-text CodeMirror mode.
 */

import { useEffect, useRef } from "preact/hooks";
import { EditorState } from "@codemirror/state";
import { EditorView, lineNumbers, highlightActiveLine } from "@codemirror/view";
import {
  syntaxHighlighting,
  LRLanguage,
  LanguageSupport,
  StreamLanguage,
} from "@codemirror/language";
import { markdown as markdownLang } from "@codemirror/lang-markdown";
import { classHighlighter } from "@lezer/highlight";
import { parser as cssParser } from "@lezer/css";
import { parser as goParser } from "@lezer/go";
import { parser as htmlParser } from "@lezer/html";
import { parser as jsParser } from "@lezer/javascript";
import { parser as jsonParser } from "@lezer/json";
import { parser as pythonParser } from "@lezer/python";
import { parser as yamlParser } from "@lezer/yaml";
import { LEGACY_LANGUAGE_ALIASES, normalizeLanguage } from "../Renderers/code-highlighting";

interface CodeMirrorEditorProps {
  /** Current editor value */
  value: string;
  /** Called whenever the document changes */
  onChange: (value: string) => void;
  /** Normalized or raw language identifier (e.g. "typescript", "ts", "python") */
  language?: string;
  /** Called when editor initialization fails — parent can fall back to textarea */
  onFallback?: () => void;
}

// ─── Language map ────────────────────────────────────────────────────────────

/** Build an LRLanguage + LanguageSupport from a Lezer LR parser. */
function lrLang(parser: typeof jsParser): LanguageSupport {
  return new LanguageSupport(LRLanguage.define({ parser }));
}

const jsLang = lrLang(jsParser);
const cssLang = lrLang(cssParser);
const htmlLang = lrLang(htmlParser);
const jsonLang = lrLang(jsonParser);
const pyLang = lrLang(pythonParser);
const yamlLang = lrLang(yamlParser);
const goLang = lrLang(goParser);
const mdLang = markdownLang();

/** Eagerly-available languages (Lezer native parsers + codemirror markdown). */
const EAGER_LANGUAGES: Record<string, LanguageSupport> = {
  js: jsLang,
  javascript: jsLang,
  jsx: jsLang,
  ts: jsLang,
  typescript: jsLang,
  tsx: jsLang,
  css: cssLang,
  html: htmlLang,
  xml: htmlLang,
  json: jsonLang,
  md: mdLang,
  markdown: mdLang,
  py: pyLang,
  python: pyLang,
  yml: yamlLang,
  yaml: yamlLang,
  go: goLang,
  golang: goLang,
};

/** Lazily-built StreamLanguage instances (cached after first build). */
let legacyLanguageCache: Record<string, LanguageSupport> | null = null;

async function getLegacyLanguages(): Promise<Record<string, LanguageSupport>> {
  if (legacyLanguageCache) return legacyLanguageCache;

  const [{ shell }, { powerShell }, { bicepMode }] = await Promise.all([
    import("@codemirror/legacy-modes/mode/shell"),
    import("@codemirror/legacy-modes/mode/powershell"),
    import("../Renderers/bicep-mode"),
  ]);

  const shellLang = new LanguageSupport(StreamLanguage.define(shell));
  const psLang = new LanguageSupport(StreamLanguage.define(powerShell));
  const bicepLang = new LanguageSupport(StreamLanguage.define(bicepMode as any));

  legacyLanguageCache = {
    sh: shellLang,
    bash: shellLang,
    zsh: shellLang,
    shell: shellLang,
    ps1: psLang,
    powershell: psLang,
    pwsh: psLang,
    bicep: bicepLang,
  };

  return legacyLanguageCache;
}

// ─── Theme ───────────────────────────────────────────────────────────────────

/**
 * A minimal CodeMirror theme that defers to the shell's CSS variables so the
 * editor blends with whatever color theme is active.
 */
const shellTheme = EditorView.theme({
  "&": {
    height: "100%",
    fontSize: "inherit",
    fontFamily: "var(--font-mono, monospace)",
    background: "var(--bg)",
    color: "var(--text)",
  },
  ".cm-content": {
    padding: "12px",
    caretColor: "var(--text)",
    minHeight: "100%",
  },
  ".cm-cursor": {
    borderLeftColor: "var(--text)",
  },
  ".cm-gutters": {
    background: "var(--bg-sidebar, var(--bg))",
    color: "var(--text-muted)",
    border: "none",
    borderRight: "1px solid var(--border)",
  },
  ".cm-activeLineGutter": {
    background: "transparent",
  },
  ".cm-activeLine": {
    background: "color-mix(in srgb, var(--border) 35%, transparent)",
  },
  ".cm-selectionBackground, ::selection": {
    background: "var(--accent)",
    opacity: "0.3",
  },
  "&.cm-focused .cm-selectionBackground": {
    background: "var(--accent)",
    opacity: "0.35",
  },
  ".cm-scroller": {
    overflow: "auto",
    fontFamily: "inherit",
  },
  // Ensure Lezer highlight classes get visible colors via defaultHighlightStyle
});

// ─── Component ───────────────────────────────────────────────────────────────

export function CodeMirrorEditor({ value, onChange, language, onFallback }: CodeMirrorEditorProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const viewRef = useRef<EditorView | null>(null);
  // Track whether the current view value matches the prop to avoid infinite loops
  const internalValueRef = useRef<string>(value);

  const normalized = normalizeLanguage(language);

  useEffect(() => {
    if (!containerRef.current) return;

    let cancelled = false;

    async function build() {
      try {
        let langSupport: LanguageSupport | undefined;

        if (normalized) {
          if (EAGER_LANGUAGES[normalized]) {
            langSupport = EAGER_LANGUAGES[normalized];
          } else if (LEGACY_LANGUAGE_ALIASES.has(normalized)) {
            const legacy = await getLegacyLanguages();
            if (cancelled) return;
            langSupport = legacy[normalized];
          } else {
            // Unsupported language: keep CodeMirror in plain-text mode
            // so line numbers/edit UX stay consistent.
          }
        }
        // normalized === "" means no language specified → plain editor, no fallback

        if (cancelled || !containerRef.current) return;

        const extensions = [
          shellTheme,
          // Emit .tok-* classes so syntax colors come from framework --syn-* theme vars.
          syntaxHighlighting(classHighlighter),
          lineNumbers(),
          highlightActiveLine(),
          EditorView.lineWrapping,
          EditorView.updateListener.of((update) => {
            if (update.docChanged) {
              const newValue = update.state.doc.toString();
              internalValueRef.current = newValue;
              onChange(newValue);
            }
          }),
        ];

        if (langSupport) {
          extensions.push(langSupport);
        }

        const state = EditorState.create({
          doc: value,
          extensions,
        });

        const view = new EditorView({
          state,
          parent: containerRef.current,
        });

        internalValueRef.current = value;
        viewRef.current = view;
      } catch {
        if (!cancelled) {
          onFallback?.();
        }
      }
    }

    build();

    return () => {
      cancelled = true;
      if (viewRef.current) {
        viewRef.current.destroy();
        viewRef.current = null;
      }
    };
    // Re-create editor only when language changes
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [normalized]);

  // Sync external value changes into the live editor
  useEffect(() => {
    const view = viewRef.current;
    if (!view) return;
    if (internalValueRef.current === value) return;

    const current = view.state.doc.toString();
    if (current !== value) {
      view.dispatch({
        changes: { from: 0, to: current.length, insert: value },
      });
      internalValueRef.current = value;
    }
  }, [value]);

  return (
    <div
      className="content-overlay__codemirror"
      ref={containerRef}
      aria-label="Code editor"
    />
  );
}
