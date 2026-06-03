import DOMPurify from "dompurify";

const MATHML_TAGS = [
  "math", "mrow", "mi", "mn", "mo", "msup", "msub", "mfrac", "msqrt", "mroot",
  "annotation", "semantics", "mtext", "mspace", "mtable", "mtr", "mtd", "mover",
  "munder", "munderover", "menclose", "mphantom", "merror",
];

const SHARED_SANITIZE_OPTIONS: DOMPurify.Config = {
  USE_PROFILES: { html: true },
  ADD_TAGS: MATHML_TAGS,
  ADD_ATTR: ["class", "style", "id"],
  ALLOW_ARIA_ATTR: true,
  ALLOW_DATA_ATTR: true,
  ALLOWED_URI_REGEXP: /^(?:(?:https?|mailto):|#|\/|\.\/|\.\.\/|[^a-z]|[a-z+.-]+(?:[^a-z+.-:]|$))/i,
};

export { DOMPurify };

export function sanitizeHtml(html: string): string {
  return DOMPurify.sanitize(html, SHARED_SANITIZE_OPTIONS);
}

const ENTITY_MAP: Record<string, string> = {
  "&amp;": "&",
  "&lt;": "<",
  "&gt;": ">",
  "&quot;": '"',
  "&#39;": "'",
  "&apos;": "'",
  "&nbsp;": " ",
};

export function decodeEntities(text: string): string {
  if (!text) {
    return text;
  }

  if (typeof document !== "undefined") {
    const textarea = document.createElement("textarea");
    textarea.innerHTML = text;
    return textarea.value;
  }

  return text.replace(/&(amp|lt|gt|quot|#39|apos|nbsp);/g, (entity) => ENTITY_MAP[entity] ?? entity);
}

export function decodeEntitiesDeep(text: string, passes = 2): string {
  let decoded = text;
  const iterations = Math.max(1, passes);

  for (let index = 0; index < iterations; index += 1) {
    decoded = decodeEntities(decoded);
  }

  return decoded;
}
