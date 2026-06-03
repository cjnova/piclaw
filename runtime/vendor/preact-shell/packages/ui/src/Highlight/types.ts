import type { RefObject } from "preact";

export type HighlightColorId = "yellow" | "green" | "blue" | "pink" | "orange";

export interface HighlightColor {
  id: HighlightColorId;
  label: string;
  className: string;
}

export interface StoredHighlight {
  id: string;
  groupId: string;
  messageId: string;
  colorId: HighlightColorId;
  startOffset: number;
  endOffset: number;
}

export interface HighlightStoreAdapter {
  load(): StoredHighlight[];
  save(highlights: StoredHighlight[]): void;
}

export interface HighlightContext {
  referenced: Array<{
    colorId: string;
    text: string;
    messageId: string;
  }>;
  formatted: string;
}

export interface HighlightPaletteState {
  open: boolean;
  paletteRef: RefObject<HTMLDivElement>;
  colors: HighlightColor[];
}
