import { describe, expect, test } from "bun:test";
import { renderInlineMath } from "./markdown-pipeline";

function decodeHtmlEntities(value: string): string {
  return value
    .replace(/&quot;/g, "\"")
    .replace(/&#39;/g, "'")
    .replace(/&gt;/g, ">")
    .replace(/&lt;/g, "<")
    .replace(/&amp;/g, "&");
}

describe("renderInlineMath", () => {
  test("stores inline TeX source in data-katex-source for copy round-trip", () => {
    const rendered = renderInlineMath("Equation: $x<y$");
    const attrMatch = rendered.match(/data-katex-source=\"([^\"]+)\"/);

    expect(attrMatch).toBeTruthy();
    expect(decodeHtmlEntities(attrMatch?.[1] ?? "")).toBe("$x<y$");
  });

  test("stores display TeX source in data-katex-source for copy round-trip", () => {
    const rendered = renderInlineMath("$$x^2+y^2$$");
    const attrMatch = rendered.match(/data-katex-source=\"([^\"]+)\"/);

    expect(attrMatch).toBeTruthy();
    expect(decodeHtmlEntities(attrMatch?.[1] ?? "")).toBe("$$x^2+y^2$$");
  });
});
