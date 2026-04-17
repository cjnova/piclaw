/**
 * test/channels/web/post-link-preview-content.test.ts
 *
 * Regression test: message text must remain unchanged when OpenGraph link
 * previews exist. We render preview cards in addition to user text, not instead
 * of URL text.
 */

import { expect, test } from "bun:test";
import "../../helpers.js";
import { buildLinkPreviewBackgroundStyle, getDisplayContent } from "../../../web/src/components/post.ts";

test("getDisplayContent keeps URL text when previews are present", () => {
  const content = "Check this out: https://example.com/article";
  const previews = [
    {
      url: "https://example.com/article",
      title: "Example Article",
    },
  ];

  expect(getDisplayContent(content, previews)).toBe(content);
});

test("getDisplayContent preserves exact formatting (no trim/removal)", () => {
  const content = "https://example.com   \n\n";
  const previews = [{ url: "https://example.com" }];

  expect(getDisplayContent(content, previews)).toBe(content);
});

test("getDisplayContent returns empty string for non-string content", () => {
  expect(getDisplayContent(null as any, [])).toBe("");
  expect(getDisplayContent(undefined as any, [])).toBe("");
});

test("buildLinkPreviewBackgroundStyle keeps image URLs confined to backgroundImage", () => {
  const style = buildLinkPreviewBackgroundStyle("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg'></svg>');color:red;/*");

  expect(style).toEqual({
    backgroundImage: `url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg'></svg>');color:red;/*")`,
  });

  if (typeof document !== "undefined") {
    const node = document.createElement("a");
    for (const [name, value] of Object.entries(style || {})) {
      (node.style as any)[name] = value;
    }
    expect(node.style.color).toBe("");
  }
});
