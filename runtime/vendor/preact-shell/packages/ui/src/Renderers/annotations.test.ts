import { describe, expect, it } from "bun:test";
import { createAnnotationCursor } from "./annotation-cursor";
import { applyAnnotations } from "./annotations";
import type { ContentAnnotation } from "./annotation-types";
import { extractTextAtOffsets } from "./extract-text";

describe("applyAnnotations", () => {
  it("returns html unchanged for empty annotations", () => {
    const html = "<p>hello</p>";
    expect(applyAnnotations(html, [])).toBe(html);
  });

  it("wraps a single annotation at the correct offsets", () => {
    const html = "hello world";
    const annotations: ContentAnnotation[] = [
      {
        type: "highlight",
        startOffset: 0,
        endOffset: 5,
        attributes: { class: "ps-highlight ps-highlight--yellow" },
      },
    ];

    expect(applyAnnotations(html, annotations)).toBe(
      '<mark class="ps-highlight ps-highlight--yellow" data-annotation-type="highlight">hello</mark> world',
    );
  });

  it("handles annotation spanning inline elements", () => {
    const html = "ab<span>cd</span>ef";
    const annotations: ContentAnnotation[] = [
      {
        type: "highlight",
        startOffset: 1,
        endOffset: 5,
        attributes: { class: "ps-highlight" },
      },
    ];

    expect(applyAnnotations(html, annotations)).toBe(
      'a<mark class="ps-highlight" data-annotation-type="highlight">b</mark><span><mark class="ps-highlight" data-annotation-type="highlight">cd</mark></span><mark class="ps-highlight" data-annotation-type="highlight">e</mark>f',
    );
  });

  it("applies multiple non-overlapping annotations", () => {
    const html = "abcdef";
    const annotations: ContentAnnotation[] = [
      { type: "a", startOffset: 0, endOffset: 2, attributes: { class: "a" } },
      { type: "b", startOffset: 4, endOffset: 6, attributes: { class: "b" } },
    ];

    expect(applyAnnotations(html, annotations)).toBe(
      '<mark class="a" data-annotation-type="a">ab</mark>cd<mark class="b" data-annotation-type="b">ef</mark>',
    );
  });

  it("nests overlapping annotations", () => {
    const html = "abcdef";
    const annotations: ContentAnnotation[] = [
      { type: "outer", startOffset: 0, endOffset: 4, attributes: { class: "outer" } },
      { type: "inner", startOffset: 2, endOffset: 6, attributes: { class: "inner" } },
    ];

    expect(applyAnnotations(html, annotations)).toBe(
      '<mark class="outer" data-annotation-type="outer">ab<mark class="inner" data-annotation-type="inner">cd</mark></mark><mark class="inner" data-annotation-type="inner">ef</mark>',
    );
  });

  it("counts HTML entities as one character", () => {
    const html = "A&amp;B";
    const annotations: ContentAnnotation[] = [
      { type: "entity", startOffset: 1, endOffset: 2, attributes: { class: "entity" } },
    ];

    expect(applyAnnotations(html, annotations)).toBe(
      'A<mark class="entity" data-annotation-type="entity">&amp;</mark>B',
    );
  });

  it("supports annotation ending at text end", () => {
    const html = "hello";
    const annotations: ContentAnnotation[] = [
      { type: "tail", startOffset: 2, endOffset: 5, attributes: { class: "tail" } },
    ];

    expect(applyAnnotations(html, annotations)).toBe(
      'he<mark class="tail" data-annotation-type="tail">llo</mark>',
    );
  });
});

describe("createAnnotationCursor", () => {
  it("slice returns local scoped offsets and advances cursor", () => {
    const cursor = createAnnotationCursor([
      { type: "a", startOffset: 2, endOffset: 6, attributes: { class: "a" } },
      { type: "b", startOffset: 7, endOffset: 9, attributes: { class: "b" } },
    ]);

    expect(cursor.slice(4)).toEqual([
      { type: "a", startOffset: 2, endOffset: 4, attributes: { class: "a" } },
    ]);
    expect(cursor.offset).toBe(4);

    expect(cursor.slice(4)).toEqual([
      { type: "a", startOffset: 0, endOffset: 2, attributes: { class: "a" } },
      { type: "b", startOffset: 3, endOffset: 4, attributes: { class: "b" } },
    ]);
    expect(cursor.offset).toBe(8);

    expect(cursor.slice(4)).toEqual([
      { type: "b", startOffset: 0, endOffset: 1, attributes: { class: "b" } },
    ]);
  });
});

describe("extractTextAtOffsets", () => {
  it("extracts prose text", () => {
    expect(extractTextAtOffsets("hello world", 0, 5)).toBe("hello");
    expect(extractTextAtOffsets("hello world", 6, 11)).toBe("world");
  });

  it("extracts code block text by offsets", () => {
    const markdown = "```ts\nconst x = 1;\n```";
    expect(extractTextAtOffsets(markdown, 0, 5)).toBe("const");
    expect(extractTextAtOffsets(markdown, 6, 11)).toBe("x = 1");
  });

  it("extracts table text by offsets", () => {
    const markdown = "| Col | Value |\n| --- | --- |\n| API | Healthy |";
    expect(extractTextAtOffsets(markdown, 0, 8)).toBe("ColValue");
    expect(extractTextAtOffsets(markdown, 8, 18)).toBe("APIHealthy");
  });
});
