import type * as Papa from "papaparse";
import { useCallback } from "preact/hooks";
import { FencedBlock } from "../Chat/FencedBlock";
import { createLazySignal } from "../hooks";
import { applyAnnotations } from "./annotations";
import type { ContentAnnotation } from "./annotation-types";
import { escapeHtml } from "./escape-html";
import { isRendererLifecyclePending, useRendererLifecycle } from "./useRendererLifecycle";

type PapaParser = Pick<typeof Papa, "parse">;

export function resolvePapaParser(module: unknown): PapaParser {
  const candidates = [
    module,
    (module as { default?: unknown } | undefined)?.default,
    (module as { default?: { default?: unknown } } | undefined)?.default?.default,
  ];

  for (const candidate of candidates) {
    const parse = (candidate as { parse?: unknown } | null | undefined)?.parse;
    if (typeof parse === "function") {
      return { parse: parse as typeof Papa.parse };
    }

    if (typeof candidate === "function") {
      return { parse: candidate as typeof Papa.parse };
    }
  }

  throw new Error("Failed to load papaparse parser");
}

const papaSignal = createLazySignal(async () => {
  const mod = await import("papaparse");
  return resolvePapaParser(mod);
});

interface CsvRendererProps {
  source: string;
  delimiter?: string;
  annotations?: ContentAnnotation[];
  onCopy?: () => void;
}

interface CsvRenderOutput {
  parsed: Papa.ParseResult<string[]>;
  resolvedDelimiter: string;
  label: string;
}

function resolveDelimiter(source: string, delimiter?: string): string {
  if (delimiter) {
    return delimiter;
  }

  return source.includes("\t") ? "\t" : ",";
}

/**
 * Compute cell offsets within the source text.
 * Returns an array of [startOffset, endOffset] for each cell in row order
 * (header first, then body rows left-to-right, top-to-bottom).
 */
function computeCellOffsets(source: string, delimiter: string): Array<[number, number]> {
  const offsets: Array<[number, number]> = [];
  const lines = source.trim().split("\n");
  let cursor = 0;

  for (const line of lines) {
    // Walk through the line splitting by delimiter, tracking positions
    let linePos = 0;
    const cells = line.split(delimiter);

    for (let i = 0; i < cells.length; i++) {
      const cellStart = cursor + linePos;
      const cellEnd = cellStart + cells[i].length;
      offsets.push([cellStart, cellEnd]);
      linePos += cells[i].length + delimiter.length;
    }

    cursor += line.length + 1; // +1 for newline
  }

  return offsets;
}

/**
 * Get annotations that intersect a cell's offset range, adjusted to be relative to the cell.
 */
function getCellAnnotations(
  annotations: ContentAnnotation[],
  cellStart: number,
  cellEnd: number,
): ContentAnnotation[] {
  const result: ContentAnnotation[] = [];

  for (const ann of annotations) {
    if (ann.endOffset <= cellStart || ann.startOffset >= cellEnd) {
      continue;
    }

    result.push({
      ...ann,
      startOffset: Math.max(0, ann.startOffset - cellStart),
      endOffset: Math.min(cellEnd - cellStart, ann.endOffset - cellStart),
    });
  }

  return result;
}

function renderCell(text: string, cellAnnotations: ContentAnnotation[]): string {
  const html = escapeHtml(text);
  if (!cellAnnotations.length) return html;
  return applyAnnotations(html, cellAnnotations);
}

export function CsvRenderer({ source, delimiter, annotations, onCopy }: CsvRendererProps) {
  const parseCsv = useCallback((papaModule: PapaParser): CsvRenderOutput => {
    const resolvedDelimiter = resolveDelimiter(source, delimiter);
    const parsed = papaModule.parse<string[]>(source.trim(), {
      delimiter: resolvedDelimiter,
      skipEmptyLines: "greedy",
    });

    return {
      parsed,
      resolvedDelimiter,
      label: resolvedDelimiter === "\t" ? "tsv" : "csv",
    };
  }, [delimiter, source]);

  const lifecycle = useRendererLifecycle({
    resource: papaSignal,
    deps: [source, delimiter],
    getOutput: parseCsv,
  });

  if (isRendererLifecyclePending(lifecycle.status)) {
    return (
      <FencedBlock label="csv" variant="csv" actions={[]}>
        <div className="csv-renderer__loading">Loading…</div>
      </FencedBlock>
    );
  }

  if (lifecycle.status === "error" || !lifecycle.output) {
    return (
      <FencedBlock label="csv" variant="csv" onCopy={onCopy}>
        <div className="csv-renderer__error">{lifecycle.error?.message || "Failed to parse data"}</div>
      </FencedBlock>
    );
  }

  const { parsed, resolvedDelimiter, label } = lifecycle.output;
  const [header, ...rows] = parsed.data;

  const cellOffsets = annotations?.length
    ? computeCellOffsets(source, resolvedDelimiter)
    : null;

  let cellIndex = 0;

  return (
    <FencedBlock label={label} variant="csv" onCopy={onCopy}>
      <div className="csv-renderer">
        {parsed.errors.length > 0 ? (
          <div className="csv-renderer__error">{parsed.errors[0]?.message || "Failed to parse data"}</div>
        ) : (
          <table>
            {header ? (
              <thead>
                <tr>
                  {header.map((cell: string, idx: number) => {
                    const ci = cellIndex++;
                    if (cellOffsets && annotations?.length) {
                      const [start, end] = cellOffsets[ci] || [0, 0];
                      const cellAnns = getCellAnnotations(annotations, start, end);
                      return <th key={idx} dangerouslySetInnerHTML={{ __html: renderCell(cell, cellAnns) }} />;
                    }
                    return <th key={idx}>{cell}</th>;
                  })}
                </tr>
              </thead>
            ) : null}
            <tbody>
              {rows.map((row: string[], rowIdx: number) => (
                <tr key={rowIdx}>
                  {row.map((cell: string, idx: number) => {
                    const ci = cellIndex++;
                    if (cellOffsets && annotations?.length) {
                      const [start, end] = cellOffsets[ci] || [0, 0];
                      const cellAnns = getCellAnnotations(annotations, start, end);
                      return <td key={idx} dangerouslySetInnerHTML={{ __html: renderCell(cell, cellAnns) }} />;
                    }
                    return <td key={idx}>{cell}</td>;
                  })}
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </FencedBlock>
  );
}
