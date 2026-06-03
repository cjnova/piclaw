import { describe, expect, mock, test } from "bun:test";
import { createWindow } from "@mixmark-io/domino";

function ensureDom() {
  if (typeof document !== "undefined") {
    return;
  }

  const window = createWindow("<!doctype html><html><body></body></html>");

  class SimpleKeyboardEvent extends window.Event {
    key: string;

    constructor(type: string, init: EventInit & { key?: string } = {}) {
      super(type, init);
      this.key = init.key ?? "";
    }
  }

  Object.assign(globalThis, {
    window,
    document: window.document,
    Element: window.Element,
    HTMLElement: window.HTMLElement,
    Node: window.Node,
    Text: window.Text,
    Event: window.Event,
    MouseEvent: window.MouseEvent,
    KeyboardEvent: SimpleKeyboardEvent,
    NodeFilter: window.NodeFilter,
    DocumentFragment: window.DocumentFragment,
  });
}

ensureDom();

mock.module("../Renderers/sanitize", () => ({
  sanitizeHtml: (html: string) => html,
  decodeEntitiesDeep: (text: string) => text,
}));

const { render } = await import("preact");
const { ParsedContent } = await import("./ParsedContent");

describe("ParsedContent inline KaTeX copy", () => {
  test("renders hashtags as plain text after the full render pipeline", () => {
    const host = document.createElement("div");

    render(<ParsedContent content={"Track #issue135 progress"} />, host);

    expect(host.querySelector(".hashtag-link")).toBeFalsy();
    expect(host.textContent).toContain("#issue135");

    render(null, host);
  });

  test("stamps data-katex-source and copies original inline TeX on click", () => {
    const copied: string[] = [];
    const host = document.createElement("div");

    render(
      <ParsedContent content={"Inline math: $x+y$"} onCopy={(text) => copied.push(text)} />,
      host,
    );

    const copyableMath = host.querySelector(".katex-copyable");
    expect(copyableMath).toBeTruthy();
    expect(copyableMath?.getAttribute("data-katex-source")).toBe("$x+y$");

    copyableMath?.dispatchEvent(new Event("click", { bubbles: true }));
    expect(copied).toEqual(["$x+y$"]);

    render(null, host);
  });

  test("copies original display TeX source on keyboard Enter", () => {
    const copied: string[] = [];
    const host = document.createElement("div");

    render(
      <ParsedContent content={"Display math: $$x^2$$"} onCopy={(text) => copied.push(text)} />,
      host,
    );

    const copyableMath = host.querySelector(".katex-copyable");
    expect(copyableMath).toBeTruthy();
    expect(copyableMath?.getAttribute("data-katex-source")).toBe("$$x^2$$");

    copyableMath?.dispatchEvent(new KeyboardEvent("keydown", { key: "Enter", bubbles: true }));
    expect(copied).toEqual(["$$x^2$$"]);

    render(null, host);
  });
});
