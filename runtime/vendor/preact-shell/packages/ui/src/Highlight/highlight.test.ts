import { describe, test, expect } from "bun:test";
import { localStorageHighlightAdapter, memoryHighlightAdapter } from "./highlight-store";
import { rangeTouchesAnnotationDisabledZone } from "./annotation-disabled";
import { getKaTeXRanges, subtractOffsetRanges } from "./math-fence-guards";
import type { StoredHighlight } from "./types";

const mockHighlight = (overrides?: Partial<StoredHighlight>): StoredHighlight => ({
  id: "h1",
  groupId: "g1",
  messageId: "msg-1",
  colorId: "yellow",
  startOffset: 10,
  endOffset: 20,
  ...overrides,
});

describe("memoryHighlightAdapter", () => {
  test("starts empty", () => {
    const store = memoryHighlightAdapter();
    expect(store.load()).toEqual([]);
  });

  test("persists highlights in memory", () => {
    const store = memoryHighlightAdapter();
    const items = [mockHighlight()];
    store.save(items);
    expect(store.load()).toEqual(items);
  });

  test("save replaces previous data", () => {
    const store = memoryHighlightAdapter();
    store.save([mockHighlight({ id: "h1" })]);
    store.save([mockHighlight({ id: "h2" })]);
    expect(store.load()).toHaveLength(1);
    expect(store.load()[0].id).toBe("h2");
  });
});

describe("localStorageHighlightAdapter", () => {
  const hasLocalStorage = typeof globalThis.localStorage !== "undefined";

  test.skipIf(!hasLocalStorage)("validates loaded data", () => {
    const store = localStorageHighlightAdapter("test-highlights");
    globalThis.localStorage.setItem("test-highlights", JSON.stringify([
      { id: "valid", groupId: "g", messageId: "m", colorId: "pink", startOffset: 0, endOffset: 5 },
      { id: "invalid-no-end" },
      null,
      42,
    ]));
    const loaded = store.load();
    expect(loaded).toHaveLength(1);
    expect(loaded[0].id).toBe("valid");
  });

  test("handles missing localStorage gracefully", () => {
    const store = localStorageHighlightAdapter("nonexistent-key-xyz");
    expect(store.load()).toEqual([]);
  });
});

describe("rangeTouchesAnnotationDisabledZone", () => {
  const hasDom = typeof document !== "undefined";

  test.skipIf(!hasDom)("returns true for selections inside disabled annotation zones", () => {
    const host = document.createElement("div");
    host.innerHTML = "<div><p>Hello</p><div data-annotation-disabled=\"true\"><span>math block</span></div></div>";

    const disabledText = host.querySelector("[data-annotation-disabled] span")?.firstChild;
    expect(disabledText).toBeTruthy();

    const range = document.createRange();
    range.setStart(disabledText as Node, 0);
    range.setEnd(disabledText as Node, 4);

    expect(rangeTouchesAnnotationDisabledZone(range, host)).toBe(true);
  });

  test.skipIf(!hasDom)("returns false for selections outside disabled annotation zones", () => {
    const host = document.createElement("div");
    host.innerHTML = "<div><p>regular text</p><div data-annotation-disabled=\"true\"><span>math block</span></div></div>";

    const textNode = host.querySelector("p")?.firstChild;
    expect(textNode).toBeTruthy();

    const range = document.createRange();
    range.setStart(textNode as Node, 0);
    range.setEnd(textNode as Node, 7);

    expect(rangeTouchesAnnotationDisabledZone(range, host)).toBe(false);
  });

  test.skipIf(!hasDom)("returns true when selection intersects math fenced block structure", () => {
    const host = document.createElement("div");
    host.innerHTML = "<div><p>regular text</p><div class=\"chat__fenced-block chat__fenced-block--math\"><span>katex block</span></div></div>";

    const textNode = host.querySelector("p")?.firstChild;
    const mathNode = host.querySelector(".chat__fenced-block--math span")?.firstChild;
    expect(textNode).toBeTruthy();
    expect(mathNode).toBeTruthy();

    const range = document.createRange();
    range.setStart(textNode as Node, 2);
    range.setEnd(mathNode as Node, 5);

    expect(rangeTouchesAnnotationDisabledZone(range, host)).toBe(true);
  });

  test.skipIf(!hasDom)("returns true when selection is inside inline KaTeX content", () => {
    const host = document.createElement("div");
    host.innerHTML = "<div><p>before <span class=\"katex\"><span class=\"katex-html\">x+y</span></span> after</p></div>";

    const mathNode = host.querySelector(".katex-html")?.firstChild;
    expect(mathNode).toBeTruthy();

    const range = document.createRange();
    range.setStart(mathNode as Node, 0);
    range.setEnd(mathNode as Node, 3);

    expect(rangeTouchesAnnotationDisabledZone(range, host)).toBe(true);
  });
});

describe("math fence guards", () => {
  test("finds KaTeX ranges for fenced, inline, and display math", () => {
    const content = [
      "Before $x+y$ and $1.25$.",
      "",
      "$$",
      "z = x^2",
      "$$",
      "",
      "```latex",
      "\\frac{a}{b}",
      "```",
    ].join("\n");

    expect(getKaTeXRanges(content)).toEqual([
      { startOffset: 7, endOffset: 12 },
      { startOffset: 26, endOffset: 39 },
      { startOffset: 41, endOffset: 52 },
    ]);
  });

  test("does not treat currency-like inline spans as math", () => {
    expect(getKaTeXRanges("Before $1.25$ and after")).toEqual([]);
  });

  test("subtractOffsetRanges removes excluded spans and splits remaining ranges", () => {
    expect(subtractOffsetRanges(
      { startOffset: 0, endOffset: 20 },
      [
        { startOffset: 5, endOffset: 8 },
        { startOffset: 10, endOffset: 12 },
      ],
    )).toEqual([
      { startOffset: 0, endOffset: 5 },
      { startOffset: 8, endOffset: 10 },
      { startOffset: 12, endOffset: 20 },
    ]);
  });

  test("subtractOffsetRanges returns empty when selection is fully inside excluded span", () => {
    expect(subtractOffsetRanges(
      { startOffset: 6, endOffset: 7 },
      [{ startOffset: 5, endOffset: 8 }],
    )).toEqual([]);
  });
});

describe("resolveContext detection", () => {
  // We can't easily test the hook directly, but we can test the regex patterns
  test("color + highlight pattern matches", () => {
    const colorPattern = "yellow|green|blue|pink|orange";
    const colorWithContext = new RegExp(`(${colorPattern})\\s+(highlight|text|part|section|mark)|highlight(ed|s)?\\s+(${colorPattern})|(the|that|this)\\s+(${colorPattern})\\s+(text|part|section)`, "i");

    expect(colorWithContext.test("explain the pink text")).toBe(true);
    expect(colorWithContext.test("explain the pink highlight")).toBe(true);
    expect(colorWithContext.test("what does the highlighted yellow part mean")).toBe(true);
    expect(colorWithContext.test("that green section")).toBe(true);
    
    // False positives that should NOT match
    expect(colorWithContext.test("the sky is blue")).toBe(false);
    expect(colorWithContext.test("I like green apples")).toBe(false);
    expect(colorWithContext.test("paint it pink")).toBe(false);
  });

  test("mentions highlights pattern matches", () => {
    const mentionsHighlights = /highlight(ed|s)?\b|\bmarked\b|\bannotat/;

    expect(mentionsHighlights.test("explain the highlighted code")).toBe(true);
    expect(mentionsHighlights.test("what are the highlights")).toBe(true);
    expect(mentionsHighlights.test("the marked section")).toBe(true);
    expect(mentionsHighlights.test("annotated text")).toBe(true);

    // Should NOT match
    expect(mentionsHighlights.test("this is a normal question")).toBe(false);
    expect(mentionsHighlights.test("marketing plan")).toBe(false);
  });
});
