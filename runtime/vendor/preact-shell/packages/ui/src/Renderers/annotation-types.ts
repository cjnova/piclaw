export interface ContentAnnotation {
  /** "highlight" | "search" | "mention" | custom */
  type: string;
  /** Character offset in rendered text content (HTML tags excluded). */
  startOffset: number;
  /** Character offset in rendered text content (HTML tags excluded). */
  endOffset: number;
  /** HTML attributes for generated <mark> tags (class, data-*, aria-*, etc). */
  attributes: Record<string, string>;
}
