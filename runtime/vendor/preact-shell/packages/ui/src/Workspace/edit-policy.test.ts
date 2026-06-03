import { describe, expect, test } from "bun:test";
import { isEditableFileType } from "./edit-policy";

describe("isEditableFileType", () => {
  test("returns true for known editable code and text files", () => {
    expect(isEditableFileType("src/main.ts")).toBe(true);
    expect(isEditableFileType("README.md")).toBe(true);
    expect(isEditableFileType("notes/todo.txt")).toBe(true);
    expect(isEditableFileType("styles/site.css")).toBe(true);
    expect(isEditableFileType("scripts/deploy.sh")).toBe(true);
  });

  test("returns false for known non-editable office and media files", () => {
    expect(isEditableFileType("docs/spec.pdf")).toBe(false);
    expect(isEditableFileType("proposal.docx")).toBe(false);
    expect(isEditableFileType("sheet.xlsx")).toBe(false);
    expect(isEditableFileType("assets/image.png")).toBe(false);
    expect(isEditableFileType("video/demo.mp4")).toBe(false);
    expect(isEditableFileType("archive/build.zip")).toBe(false);
  });

  test("returns false for unknown extensions", () => {
    expect(isEditableFileType("config/custom.foobar")).toBe(false);
    expect(isEditableFileType("notes/PLAN.unknownext")).toBe(false);
  });
});
