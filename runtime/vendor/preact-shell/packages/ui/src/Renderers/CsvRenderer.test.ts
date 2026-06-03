import { describe, expect, test } from "bun:test";
import { resolvePapaParser } from "./CsvRenderer";

describe("resolvePapaParser", () => {
  test("uses parse method from default export object", () => {
    const parse = () => ({ data: [] });
    const parser = resolvePapaParser({ default: { parse } });
    expect(parser.parse).toBe(parse);
  });

  test("uses parse method from nested default export", () => {
    const parse = () => ({ data: [] });
    const parser = resolvePapaParser({ default: { default: { parse } } });
    expect(parser.parse).toBe(parse);
  });

  test("falls back to function module export", () => {
    const parse = () => ({ data: [] });
    const parser = resolvePapaParser(parse);
    expect(parser.parse).toBe(parse);
  });

  test("throws when no parse function is found", () => {
    expect(() => resolvePapaParser({ default: {} })).toThrow("Failed to load papaparse parser");
  });
});
