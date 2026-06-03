import { useCallback, useEffect, useMemo, useRef, useState } from "preact/hooks";
import type { Message } from "../Chat";
import type { ContentAnnotation } from "../Renderers";
import { computeTextOffset, extractTextAtOffsets, findStampedAncestor, countTextCharsTo } from "../Renderers";
import { rangeTouchesAnnotationDisabledZone } from "./annotation-disabled";
import { getKaTeXRanges, subtractOffsetRanges, type OffsetRange } from "./math-fence-guards";
import { localStorageHighlightAdapter } from "./highlight-store";
import type {
  HighlightColor,
  HighlightColorId,
  HighlightContext,
  HighlightPaletteState,
  HighlightStoreAdapter,
  StoredHighlight,
} from "./types";

export interface UseHighlightManagerOptions {
  messages: Message[];
  store?: HighlightStoreAdapter;
}

export interface UseHighlightManagerReturn {
  getAnnotations(messageId: string): ContentAnnotation[];
  palette: HighlightPaletteState;
  applyColor(colorId: HighlightColorId): void;
  eraseSelection(): void;
  dismissPalette(): void;
  onContainerRef: (el: HTMLElement | null) => void;
  resolveContext(userInput: string): HighlightContext | null;
  getTextForColor(colorId: HighlightColorId): Array<{ text: string; messageId: string }>;
}

interface SelectionSegment {
  messageId: string;
  startOffset: number;
  endOffset: number;
}

export const HIGHLIGHT_COLORS: HighlightColor[] = [
  { id: "yellow", label: "Yellow", className: "ps-highlight--yellow" },
  { id: "green", label: "Green", className: "ps-highlight--green" },
  { id: "blue", label: "Blue", className: "ps-highlight--blue" },
  { id: "pink", label: "Pink", className: "ps-highlight--pink" },
  { id: "orange", label: "Orange", className: "ps-highlight--orange" },
];

const COLORS_BY_ID = new Set(HIGHLIGHT_COLORS.map((item) => item.id));

export function useHighlightManager({ messages, store }: UseHighlightManagerOptions): UseHighlightManagerReturn {
  const adapter = useMemo(() => store ?? localStorageHighlightAdapter(), [store]);
  const containerRef = useRef<HTMLElement | null>(null);
  const paletteRef = useRef<HTMLDivElement>(null);
  const [storedHighlights, setStoredHighlights] = useState<StoredHighlight[]>([]);
  const [selectionSegments, setSelectionSegments] = useState<SelectionSegment[]>([]);
  const [paletteOpen, setPaletteOpen] = useState(false);
  const messagesById = useMemo(() => new Map(messages.map((message) => [message.id, message])), [messages]);
  const katexRangeCacheRef = useRef(new Map<string, { content: string; ranges: OffsetRange[] }>());
  const katexRangesByMessage = useMemo(() => {
    const map = new Map<string, OffsetRange[]>();
    const activeMessageIds = new Set<string>();

    for (const message of messages) {
      activeMessageIds.add(message.id);
      const cached = katexRangeCacheRef.current.get(message.id);

      if (cached && cached.content === message.content) {
        map.set(message.id, cached.ranges);
        continue;
      }

      const ranges = getKaTeXRanges(message.content);
      katexRangeCacheRef.current.set(message.id, { content: message.content, ranges });
      map.set(message.id, ranges);
    }

    for (const messageId of katexRangeCacheRef.current.keys()) {
      if (!activeMessageIds.has(messageId)) {
        katexRangeCacheRef.current.delete(messageId);
      }
    }

    return map;
  }, [messages]);

  useEffect(() => {
    const loaded = adapter.load();
    setStoredHighlights(loaded);
  }, [adapter]);

  // GC: remove highlights for deleted messages (only when message IDs actually change)
  const prevMessageIdsRef = useRef<Set<string>>(new Set());
  useEffect(() => {
    const messageIds = new Set(messages.map((message) => message.id));
    // Skip if message IDs haven't changed (avoids GC churn during streaming)
    const prev = prevMessageIdsRef.current;
    if (messageIds.size === prev.size && [...messageIds].every((id) => prev.has(id))) {
      return;
    }
    prevMessageIdsRef.current = messageIds;

    setStoredHighlights((current) => {
      const next = current.filter((item) => messageIds.has(item.messageId));
      if (next.length !== current.length) {
        adapter.save(next);
      }
      return next;
    });
  }, [messages, adapter]);

  const dismissPalette = useCallback(() => {
    setPaletteOpen(false);
    setSelectionSegments([]);
  }, []);

  const updatePalettePosition = useCallback((range: Range) => {
    const pointRange = document.createRange();
    pointRange.setStart(range.startContainer, range.startOffset);
    pointRange.setEnd(range.startContainer, range.startOffset);

    const rect = pointRange.getBoundingClientRect();
    const fallbackRect = range.getBoundingClientRect();
    pointRange.detach?.();

    const left = Math.max(8, Math.round((rect.width > 0 || rect.height > 0 ? rect.left : fallbackRect.left) + window.scrollX));
    const top = Math.max(8, Math.round((rect.width > 0 || rect.height > 0 ? rect.bottom : fallbackRect.bottom) + window.scrollY + 8));

    document.documentElement.style.setProperty("--ps-highlight-palette-x", `${left}px`);
    document.documentElement.style.setProperty("--ps-highlight-palette-y", `${top}px`);
  }, []);

  const resolveSelection = useCallback(() => {
    const container = containerRef.current;
    const selection = window.getSelection();

    if (!container || !selection || selection.rangeCount === 0 || selection.isCollapsed) {
      dismissPalette();
      return;
    }

    const range = selection.getRangeAt(0).cloneRange();
    if (!container.contains(range.commonAncestorContainer)) {
      dismissPalette();
      return;
    }

    // Restrict to single message — both endpoints must be in the same [data-message-id]
    const startBubble = range.startContainer instanceof HTMLElement
      ? range.startContainer.closest("[data-message-id]")
      : range.startContainer.parentElement?.closest("[data-message-id]") ?? null;
    const endBubble = range.endContainer instanceof HTMLElement
      ? range.endContainer.closest("[data-message-id]")
      : range.endContainer.parentElement?.closest("[data-message-id]") ?? null;

    if (!startBubble || !endBubble || startBubble !== endBubble) {
      dismissPalette();
      return;
    }

    const messageContent = startBubble.querySelector<HTMLElement>(".chat__content") ?? container;
    // Keep both guards: the DOM-level check prevents opening the palette over live KaTeX,
    // while offset subtraction below preserves old stored highlights that may overlap math.
    if (rangeTouchesAnnotationDisabledZone(range, messageContent)) {
      dismissPalette();
      return;
    }

    const segments = getSelectionSegments(range, container, katexRangesByMessage);
    if (!segments.length) {
      dismissPalette();
      return;
    }

    setSelectionSegments(segments);
    updatePalettePosition(range);
    setPaletteOpen(true);
  }, [dismissPalette, katexRangesByMessage, updatePalettePosition]);

  useEffect(() => {
    let timer: number | undefined;

    const schedule = () => {
      if (timer !== undefined) {
        window.clearTimeout(timer);
      }

      timer = window.setTimeout(() => {
        resolveSelection();
      }, 40);
    };

    document.addEventListener("selectionchange", schedule);
    document.addEventListener("pointerup", schedule);
    document.addEventListener("touchend", schedule);

    return () => {
      document.removeEventListener("selectionchange", schedule);
      document.removeEventListener("pointerup", schedule);
      document.removeEventListener("touchend", schedule);
      if (timer !== undefined) {
        window.clearTimeout(timer);
      }
    };
  }, [resolveSelection]);

  const applyColor = useCallback((colorId: HighlightColorId) => {
    if (!selectionSegments.length || !COLORS_BY_ID.has(colorId)) {
      dismissPalette();
      return;
    }

    const groupId = createId("group");
    const added = selectionSegments.map((segment) => ({
      id: createId("hl"),
      groupId,
      messageId: segment.messageId,
      colorId,
      startOffset: segment.startOffset,
      endOffset: segment.endOffset,
    }));

    setStoredHighlights((current) => {
      const next = [...current, ...added];
      adapter.save(next);
      return next;
    });

    dismissPalette();
    window.getSelection()?.removeAllRanges();
  }, [adapter, dismissPalette, selectionSegments]);

  const eraseSelection = useCallback(() => {
    if (!selectionSegments.length) {
      dismissPalette();
      return;
    }

    setStoredHighlights((current) => {
      const matchedGroupIds = new Set(
        current
          .filter((item) => selectionSegments.some((segment) =>
            segment.messageId === item.messageId
            && item.startOffset < segment.endOffset
            && item.endOffset > segment.startOffset,
          ))
          .map((item) => item.groupId),
      );

      if (!matchedGroupIds.size) {
        return current;
      }

      const next = current.filter((item) => !matchedGroupIds.has(item.groupId));
      adapter.save(next);
      return next;
    });

    dismissPalette();
    window.getSelection()?.removeAllRanges();
  }, [adapter, dismissPalette, selectionSegments]);

  const getAnnotations = useCallback((messageId: string): ContentAnnotation[] => {
    const excludedRanges = katexRangesByMessage.get(messageId) ?? [];

    return storedHighlights
      .filter((item) => item.messageId === messageId)
      .flatMap((item) => {
        const visibleRanges = subtractOffsetRanges({
          startOffset: item.startOffset,
          endOffset: item.endOffset,
        }, excludedRanges);

        return visibleRanges.map((range) => ({
          type: "highlight",
          startOffset: range.startOffset,
          endOffset: range.endOffset,
          attributes: {
            class: `ps-highlight ps-highlight--${item.colorId}`,
            "data-highlight-group": item.groupId,
            "data-highlight-id": item.id,
          },
        }));
      });
  }, [katexRangesByMessage, storedHighlights]);

  const getTextForColor = useCallback((colorId: HighlightColorId): Array<{ text: string; messageId: string }> => {
    return storedHighlights
      .filter((item) => item.colorId === colorId)
      .map((item) => {
        const message = messagesById.get(item.messageId);
        return {
          messageId: item.messageId,
          text: message ? extractTextAtOffsets(message.content, item.startOffset, item.endOffset) : "",
        };
      })
      .filter((item) => item.text.trim().length > 0);
  }, [messagesById, storedHighlights]);

  const resolveContext = useCallback((userInput: string): HighlightContext | null => {
    if (!storedHighlights.length) return null;

    const input = userInput.toLowerCase();

    // Must mention highlighting concept — color alone is not enough
    const mentionsHighlights = /highlight(ed|s)?|\bmarked\b|\bannotat/.test(input);
    // Check for color + highlight proximity patterns
    const colorPattern = HIGHLIGHT_COLORS.map((c) => c.id).join("|");
    const colorWithContext = new RegExp(`(${colorPattern})\\s+(highlight|text|part|section|mark)|highlight(ed|s)?\\s+(${colorPattern})|(the|that|this)\\s+(${colorPattern})\\s+(text|part|section)`, "i");
    const hasColorReference = colorWithContext.test(input);

    if (!mentionsHighlights && !hasColorReference) {
      return null;
    }

    // Determine which colors were referenced (or all if generic "highlighted")
    const requestedColors = HIGHLIGHT_COLORS
      .filter((item) => input.includes(item.id))
      .map((item) => item.id);

    const referenced = storedHighlights
      .filter((item) => requestedColors.length === 0 || requestedColors.includes(item.colorId))
      .map((item) => {
        const message = messagesById.get(item.messageId);
        const text = message ? extractTextAtOffsets(message.content, item.startOffset, item.endOffset).trim() : "";
        return {
          colorId: item.colorId,
          messageId: item.messageId,
          text,
        };
      })
      .filter((item) => item.text.length > 0);

    if (!referenced.length) {
      return null;
    }

    const formatted = referenced
      .map((item) => `- [${item.colorId}] (${item.messageId}) ${item.text}`)
      .join("\n");

    return { referenced, formatted };
  }, [messagesById, storedHighlights]);

  const onContainerRef = useCallback((el: HTMLElement | null) => {
    containerRef.current = el;
  }, []);

  return {
    getAnnotations,
    palette: {
      open: paletteOpen,
      paletteRef,
      colors: HIGHLIGHT_COLORS,
    },
    applyColor,
    eraseSelection,
    dismissPalette,
    onContainerRef,
    resolveContext,
    getTextForColor,
  };
}

function getSelectionSegments(
  range: Range,
  container: HTMLElement,
  katexRangesByMessage: Map<string, OffsetRange[]>,
): SelectionSegment[] {
  const messageNodes = Array.from(container.querySelectorAll<HTMLElement>("[data-message-id]"));
  const result: SelectionSegment[] = [];

  for (const node of messageNodes) {
    const content = node.querySelector<HTMLElement>(".chat__content");
    const messageId = node.dataset.messageId;

    if (!content || !messageId) {
      continue;
    }

    const segmentRange = intersectRangeWithContainer(range, content);
    if (!segmentRange) {
      continue;
    }

    const offsets = computeOffsets(content, segmentRange);
    if (!offsets || offsets.endOffset <= offsets.startOffset) {
      continue;
    }

    const visibleRanges = subtractOffsetRanges(offsets, katexRangesByMessage.get(messageId) ?? []);

    for (const visibleRange of visibleRanges) {
      if (visibleRange.endOffset <= visibleRange.startOffset) {
        continue;
      }

      result.push({
        messageId,
        startOffset: visibleRange.startOffset,
        endOffset: visibleRange.endOffset,
      });
    }
  }

  return result;
}

function intersectRangeWithContainer(range: Range, container: HTMLElement): Range | null {
  const containerRange = document.createRange();
  containerRange.selectNodeContents(container);

  const startsAfterContainer = comparePoints(
    range.startContainer,
    range.startOffset,
    containerRange.endContainer,
    containerRange.endOffset,
  ) >= 0;

  const endsBeforeContainer = comparePoints(
    range.endContainer,
    range.endOffset,
    containerRange.startContainer,
    containerRange.startOffset,
  ) <= 0;

  if (startsAfterContainer || endsBeforeContainer) {
    return null;
  }

  const startsInside = comparePoints(
    range.startContainer,
    range.startOffset,
    containerRange.startContainer,
    containerRange.startOffset,
  ) >= 0;

  const endsInside = comparePoints(
    range.endContainer,
    range.endOffset,
    containerRange.endContainer,
    containerRange.endOffset,
  ) <= 0;

  const intersection = document.createRange();

  if (startsInside) {
    intersection.setStart(range.startContainer, range.startOffset);
  } else {
    intersection.setStart(containerRange.startContainer, containerRange.startOffset);
  }

  if (endsInside) {
    intersection.setEnd(range.endContainer, range.endOffset);
  } else {
    intersection.setEnd(containerRange.endContainer, containerRange.endOffset);
  }

  containerRange.detach?.();
  return intersection;
}

function comparePoints(aNode: Node, aOffset: number, bNode: Node, bOffset: number): number {
  const aRange = document.createRange();
  aRange.setStart(aNode, aOffset);
  aRange.collapse(true);

  const bRange = document.createRange();
  bRange.setStart(bNode, bOffset);
  bRange.collapse(true);

  const result = aRange.compareBoundaryPoints(Range.START_TO_START, bRange);
  aRange.detach?.();
  bRange.detach?.();
  return result;
}

function computeOffsets(container: HTMLElement, range: Range): { startOffset: number; endOffset: number } | null {
  const direct = computeTextOffset(container, range);
  if (direct) {
    return direct;
  }

  const start = resolvePointOffset(container, range.startContainer, range.startOffset);
  const end = resolvePointOffset(container, range.endContainer, range.endOffset);

  if (start === null || end === null) {
    return null;
  }

  return {
    startOffset: Math.min(start, end),
    endOffset: Math.max(start, end),
  };
}

function resolvePointOffset(container: HTMLElement, node: Node, offset: number): number | null {
  const stamped = findStampedAncestor(node, container);
  if (!stamped) {
    return null;
  }

  const startAttr = stamped.getAttribute("data-offset-start");
  if (!startAttr) {
    return null;
  }

  const baseOffset = Number.parseInt(startAttr, 10);
  if (!Number.isFinite(baseOffset)) {
    return null;
  }

  const localOffset = countTextCharsTo(stamped, node, offset);
  if (localOffset === null) {
    return null;
  }

  return baseOffset + localOffset;
}

function createId(prefix: string): string {
  const random = Math.random().toString(36).slice(2, 10);
  return `${prefix}-${Date.now()}-${random}`;
}
