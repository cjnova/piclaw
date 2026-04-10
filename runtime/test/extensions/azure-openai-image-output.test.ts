import { expect, test } from "bun:test";

import {
  formatGeneratedImageMessage,
  formatImageGenerationError,
  type SavedImageFile,
} from "../../extensions/integrations/azure-openai.ts";

test("formatGeneratedImageMessage renders workspace file pills instead of download links", () => {
  const files: SavedImageFile[] = [
    {
      absPath: "/workspace/exports/images/azure-image-1.png",
      relPath: "exports/images/azure-image-1.png",
      rawUrl: "/workspace/raw?path=exports%2Fimages%2Fazure-image-1.png",
      alt: "prompt one",
    },
    {
      absPath: "/workspace/exports/images/azure-image-2.png",
      relPath: "exports/images/azure-image-2.png",
      rawUrl: "/workspace/raw?path=exports%2Fimages%2Fazure-image-2.png",
      alt: "prompt two",
    },
  ];

  const message = formatGeneratedImageMessage("Azure image (gpt-image-1-5, 1024x1024) — prompt", files);

  expect(message).toContain("![prompt one](/workspace/raw?path=exports%2Fimages%2Fazure-image-1.png)");
  expect(message).toContain("![prompt two](/workspace/raw?path=exports%2Fimages%2Fazure-image-2.png)");
  expect(message).toContain("\nFiles:\n- /workspace/exports/images/azure-image-1.png\n- /workspace/exports/images/azure-image-2.png");
  expect(message).not.toContain("Download:");
});

test("formatImageGenerationError normalizes connection errors across providers", () => {
  expect(formatImageGenerationError("Azure OpenAI", new Error("Connection error.")))
    .toBe("❌ Image generation failed (Azure OpenAI): Unable to connect to the configured proxy or upstream endpoint.");
  expect(formatImageGenerationError("Azure Foundry", new Error("Unable to connect. Is the computer able to access the url?")))
    .toBe("❌ Image generation failed (Azure Foundry): Unable to connect to the configured proxy or upstream endpoint.");
});

test("formatImageGenerationError preserves structured HTTP details", () => {
  const raw = '400 {"error":{"code":"bad_request","message":"Model rejected prompt"}}';
  expect(formatImageGenerationError("Azure OpenAI", new Error(raw)))
    .toBe("❌ Image generation failed (Azure OpenAI): [bad_request] Model rejected prompt");
});
