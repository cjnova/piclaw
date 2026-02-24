import { expect, test } from "bun:test";
import { escapeXml, formatMessages, stripInternalTags, formatOutbound } from "../src/router.js";

test("escapeXml escapes special characters", () => {
  expect(escapeXml("<tag> & \"quote\""))
    .toBe("&lt;tag&gt; &amp; &quot;quote&quot;");
});

test("formatMessages wraps messages in XML", () => {
  const messages = [
    { sender_name: "You", timestamp: "2026-01-01T00:00:00.000Z", content: "Hello & hi" },
    { sender_name: "Pi", timestamp: "2026-01-01T00:00:01.000Z", content: "<ok>" },
  ];
  const out = formatMessages(messages as any);
  expect(out).toContain("<messages>");
  expect(out).toContain("sender=\"You\"");
  expect(out).toContain("Hello &amp; hi");
  expect(out).toContain("&lt;ok&gt;");
});

test("stripInternalTags removes internal content", () => {
  const text = "Hello<internal>secret</internal> World";
  expect(stripInternalTags(text)).toBe("Hello World");
});

test("formatOutbound removes internal tags and trims", () => {
  const text = "  Hi<internal>secret</internal>  ";
  expect(formatOutbound(text)).toBe("Hi");
});
