export const DISPLAY_MATH_PATTERN = /(?<!\\)\$\$([\s\S]+?)(?<!\\)\$\$/g;
export const INLINE_MATH_PATTERN = /(?<!\\)(?<!\$)\$(?!\$)(.+?)(?<!\$)(?<!\\)\$(?!\$)/g;

export function shouldRenderMath(tex: string, displayMode: boolean): boolean {
  const normalized = tex.trim();
  if (!normalized) {
    return false;
  }

  // Treat currency-like "$1.25$" content as plain text unless explicitly display math.
  if (!displayMode && /^\d/.test(normalized)) {
    return false;
  }

  return true;
}
