import { expect, test } from "bun:test";
import "../../test/helpers.js";

import { buildBtwInjectionText, parseBtwCommand } from "../../web/src/ui/btw.ts";

test("parseBtwCommand parses ask/clear/help variants", () => {
  expect(parseBtwCommand("/btw hello there")).toEqual({ type: "ask", question: "hello there" });
  expect(parseBtwCommand("/btw clear")).toEqual({ type: "clear" });
  expect(parseBtwCommand("/btw")).toEqual({ type: "help" });
  expect(parseBtwCommand("hello")).toBeNull();
});

test("buildBtwInjectionText formats question and answer", () => {
  expect(buildBtwInjectionText({ question: "What changed?", answer: "A short answer." })).toBe(
    "BTW side conversation\n\nQuestion: What changed?\n\nAnswer:\nA short answer.",
  );
});
