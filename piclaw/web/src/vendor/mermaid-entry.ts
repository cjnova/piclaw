/**
 * Browser entry point for beautiful-mermaid vendor bundle.
 *
 * Exposes the library as `globalThis.beautifulMermaid` (IIFE-style)
 * so markdown.ts can access it via `window.beautifulMermaid`.
 *
 * Build with:
 *   bun build web/src/vendor/mermaid-entry.ts \
 *     --target=browser --minify \
 *     --outfile web/static/js/vendor/beautiful-mermaid.js
 */

import {
  renderMermaidSVG,
  renderMermaidSVGAsync,
  renderMermaid,
  renderMermaidSync,
  THEMES,
  DEFAULTS,
  fromShikiTheme,
  parseMermaid,
} from "beautiful-mermaid";

(globalThis as any).beautifulMermaid = {
  renderMermaid,
  renderMermaidSync,
  renderMermaidSVG,
  renderMermaidSVGAsync,
  THEMES,
  DEFAULTS,
  fromShikiTheme,
  parseMermaid,
};
