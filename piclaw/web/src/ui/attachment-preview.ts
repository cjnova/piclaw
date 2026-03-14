const TEXT_PREVIEW_TYPES = new Set([
  "application/json",
  "application/xml",
  "text/csv",
  "text/html",
  "text/markdown",
  "text/plain",
  "text/xml",
]);

export type AttachmentPreviewKind = "image" | "pdf" | "text" | "unsupported";

export function getAttachmentPreviewKind(contentType: unknown): AttachmentPreviewKind {
  const normalized = typeof contentType === "string" ? contentType.trim().toLowerCase() : "";
  if (!normalized) return "unsupported";
  if (normalized.startsWith("image/")) return "image";
  if (normalized === "application/pdf") return "pdf";
  if (TEXT_PREVIEW_TYPES.has(normalized) || normalized.startsWith("text/")) return "text";
  return "unsupported";
}

export function getAttachmentPreviewLabel(kind: AttachmentPreviewKind): string {
  switch (kind) {
    case "image":
      return "Image preview";
    case "pdf":
      return "PDF preview";
    case "text":
      return "Text preview";
    default:
      return "Preview unavailable";
  }
}
