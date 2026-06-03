import type { ComponentChildren } from "preact";
import { useCallback } from "preact/hooks";
import { CodeRenderer } from "../Renderers/CodeRenderer";
import { CsvRenderer } from "../Renderers/CsvRenderer";
import { FencedBlock } from "./FencedBlock";
import { MathRenderer } from "../Renderers/MathRenderer";
import { MermaidRenderer } from "../Renderers/MermaidRenderer";
import { applyAnnotations } from "../Renderers/annotations";
import { createAnnotationCursor } from "../Renderers/annotation-cursor";
import { getTokenTextLength } from "../Renderers/extract-text";
import type { ContentAnnotation } from "../Renderers/annotation-types";
import { sanitizeHtml, decodeEntitiesDeep } from "../Renderers/sanitize";
import { renderInlineMath, stripFrontmatter } from "../Renderers/markdown-pipeline";
import { marked, type Token, type Tokens, type TokensList } from "marked";

export interface ParsedContentProps {
  content: string;
  /** Optional annotations to apply to rendered content (message-level offsets) */
  annotations?: ContentAnnotation[];
  /** Called when user clicks copy — parent handles clipboard */
  onCopy?: (text: string) => void;
  /** Called when user clicks download — parent handles file save */
  onDownload?: (content: string, filename: string) => void;
  /** Called when user clicks maximize — parent manages overlay */
  onMaximize?: (
    content: ComponentChildren,
    title: string,
    mode?: "spatial" | "document",
    source?: string,
    startEditing?: boolean,
    kind?: "code" | "mermaid",
    lang?: string,
  ) => void;
}

function applyHtmlPipeline(html: string, annotations?: ContentAnnotation[]): string {
  const processed = sanitizeHtml(renderInlineMath(html));
  return annotations?.length ? applyAnnotations(processed, annotations) : processed;
}

function parseTokenToHtml(token: Token, links: TokensList["links"], annotations?: ContentAnnotation[]): string {
  const tokenList = [token] as TokensList;
  tokenList.links = links;
  return applyHtmlPipeline(marked.parser(tokenList, { async: false }) as string, annotations);
}

function getInlineMathSource(target: EventTarget | null): string | null {
  if (!(target instanceof Element)) {
    return null;
  }

  const sourceElement = target.closest("[data-katex-source]");
  return sourceElement?.getAttribute("data-katex-source") ?? null;
}

/**
 * Parses markdown content into Preact nodes with optional data-driven annotations.
 *
 * Each rendered fragment is stamped with data-offset-start/data-offset-end for
 * DOM→offset mapping via computeTextOffset().
 *
 * Pure component — all side effects (clipboard, download, overlay) are delegated to parent via callbacks.
 */
export function ParsedContent({ content, annotations, onCopy, onMaximize }: ParsedContentProps) {
  const decodedContent = decodeEntitiesDeep(content);
  const { content: markdownContent } = stripFrontmatter(decodedContent);
  const tokens = marked.lexer(markdownContent, { gfm: true });

  const handleInlineMathCopy = useCallback((event: MouseEvent | KeyboardEvent) => {
    if (!onCopy) {
      return;
    }

    if (event instanceof KeyboardEvent && event.key !== "Enter" && event.key !== " ") {
      return;
    }

    const source = getInlineMathSource(event.target);
    if (!source) {
      return;
    }

    event.preventDefault();
    onCopy(source);
  }, [onCopy]);

  // Cursor tracks cumulative offset and slices annotations per token
  const cursor = annotations?.length ? createAnnotationCursor(annotations) : null;
  let offsetPos = 0;

  return (
    <>
      {tokens.map((token, index) => {
        if (token.type === "code") {
          const lang = (token.lang || "").trim().toLowerCase();
          const startOffset = offsetPos;
          const textLen = token.text.length;
          const tokenAnns = cursor?.slice(textLen) ?? undefined;
          offsetPos += textLen;
          const stampAttrs = { "data-offset-start": String(startOffset), "data-offset-end": String(offsetPos) };

          if (lang === "mermaid") {
            return (
              <div key={index} {...stampAttrs}>
                <MermaidRenderer
                  source={token.text}
                  onCopy={() => onCopy?.(token.text)}
                  onMaximize={(node, title) => onMaximize?.(node, title, "spatial", token.text, false, "mermaid")}
                />
              </div>
            );
          }

          if (lang === "math" || lang === "latex" || lang === "katex") {
            return (
              <div key={index} {...stampAttrs} data-annotation-disabled="true">
                <MathRenderer source={token.text} onCopy={() => onCopy?.(token.text)} />
              </div>
            );
          }

          if (lang === "csv" || lang === "tsv") {
            const delimiter = lang === "tsv" ? "\t" : ",";
            return (
              <div key={index} {...stampAttrs}>
                <CsvRenderer
                  source={token.text}
                  delimiter={delimiter}
                  annotations={tokenAnns}
                  onCopy={() => onCopy?.(token.text)}
                />
              </div>
            );
          }

          return (
            <div key={index} {...stampAttrs}>
              <CodeRenderer
                source={token.text}
                lang={token.lang}
                annotations={tokenAnns}
                onCopy={() => onCopy?.(token.text)}
              />
            </div>
          );
        }

        if (token.type === "table") {
          const tableToken = token as Tokens.Table;
          const startOffset = offsetPos;
          const textLen = getTokenTextLength(tableToken);
          const tokenAnns = cursor?.slice(textLen) ?? undefined;
          offsetPos += textLen;

          let cellOffset = 0;

          return (
            <div key={index} data-offset-start={String(startOffset)} data-offset-end={String(offsetPos)}>
              <FencedBlock label="table" variant="table" onCopy={() => onCopy?.(tableToken.raw)}>
                <table>
                  <thead>
                    <tr>
                      {tableToken.header.map((header, headerIndex) => {
                        const cellText = header.text || "";
                        const cellAnns = tokenAnns?.length
                          ? tokenAnns
                              .filter((a) => a.endOffset > cellOffset && a.startOffset < cellOffset + cellText.length)
                              .map((a) => ({ ...a, startOffset: Math.max(0, a.startOffset - cellOffset), endOffset: Math.min(cellText.length, a.endOffset - cellOffset) }))
                          : undefined;
                        const html = applyHtmlPipeline(new marked.Parser().parseInline(header.tokens) as string, cellAnns);
                        const cellStart = startOffset + cellOffset;
                        cellOffset += cellText.length;
                        return (
                          <th key={headerIndex} data-offset-start={String(cellStart)} data-offset-end={String(cellStart + cellText.length)} style={header.align ? { textAlign: header.align } : undefined}>
                            <span dangerouslySetInnerHTML={{ __html: html }} />
                          </th>
                        );
                      })}
                    </tr>
                  </thead>
                  <tbody>
                    {tableToken.rows.map((row, rowIndex) => (
                      <tr key={rowIndex}>
                        {row.map((cell, cellIndex) => {
                          const cellText = cell.text || "";
                          const cellAnns = tokenAnns?.length
                            ? tokenAnns
                                .filter((a) => a.endOffset > cellOffset && a.startOffset < cellOffset + cellText.length)
                                .map((a) => ({ ...a, startOffset: Math.max(0, a.startOffset - cellOffset), endOffset: Math.min(cellText.length, a.endOffset - cellOffset) }))
                            : undefined;
                          const html = applyHtmlPipeline(new marked.Parser().parseInline(cell.tokens) as string, cellAnns);
                          const cellStart = startOffset + cellOffset;
                          cellOffset += cellText.length;
                          return (
                            <td key={cellIndex} data-offset-start={String(cellStart)} data-offset-end={String(cellStart + cellText.length)} style={cell.align ? { textAlign: cell.align } : undefined}>
                              <span dangerouslySetInnerHTML={{ __html: html }} />
                            </td>
                          );
                        })}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </FencedBlock>
            </div>
          );
        }

        // Prose / generic tokens
        const startOffset = offsetPos;
        const textLen = getTokenTextLength(token);
        const tokenAnns = cursor?.slice(textLen) ?? undefined;
        offsetPos += textLen;

        const proseHtml = parseTokenToHtml(token, tokens.links, tokenAnns);
        const hasCopyableMath = Boolean(onCopy) && proseHtml.includes("data-katex-source=");

        return (
          <div
            key={index}
            data-offset-start={String(startOffset)}
            data-offset-end={String(offsetPos)}
            {...(hasCopyableMath ? { onClick: handleInlineMathCopy, onKeyDown: handleInlineMathCopy } : {})}
            dangerouslySetInnerHTML={{ __html: proseHtml }}
          />
        );
      })}
    </>
  );
}
