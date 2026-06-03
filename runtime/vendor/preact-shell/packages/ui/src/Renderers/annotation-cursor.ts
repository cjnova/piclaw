import type { ContentAnnotation } from "./annotation-types";

/**
 * AnnotationCursor — tracks cumulative text offset as content is rendered
 * fragment-by-fragment, and returns per-fragment annotations with local offsets.
 */
export interface AnnotationCursor {
  /** Get annotations for the next fragment of `textLength` characters and advance cursor */
  slice(textLength: number): ContentAnnotation[];
  /** Peek at annotations for the next fragment without advancing */
  peek(textLength: number): ContentAnnotation[];
  /** Manually advance cursor without returning annotations (skip non-text content) */
  skip(textLength: number): void;
  /** Current offset position */
  readonly offset: number;
}

/**
 * Create an AnnotationCursor from message-level annotations.
 */
export function createAnnotationCursor(annotations: ContentAnnotation[]): AnnotationCursor {
  let offset = 0;

  // Pre-sort by startOffset for efficient intersection
  const sorted = [...annotations].sort((a, b) => a.startOffset - b.startOffset);

  function getIntersecting(start: number, end: number): ContentAnnotation[] {
    const result: ContentAnnotation[] = [];

    for (const ann of sorted) {
      // Past the fragment — all remaining will also be past
      if (ann.startOffset >= end) break;
      // Before the fragment — skip
      if (ann.endOffset <= start) continue;

      // Intersects — adjust to local offsets
      result.push({
        ...ann,
        startOffset: Math.max(0, ann.startOffset - start),
        endOffset: Math.min(end - start, ann.endOffset - start),
      });
    }

    return result;
  }

  return {
    slice(textLength: number): ContentAnnotation[] {
      const start = offset;
      const end = offset + textLength;
      offset = end;
      return getIntersecting(start, end);
    },

    peek(textLength: number): ContentAnnotation[] {
      const start = offset;
      const end = offset + textLength;
      return getIntersecting(start, end);
    },

    skip(textLength: number): void {
      offset += textLength;
    },

    get offset() {
      return offset;
    },
  };
}
