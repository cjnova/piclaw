const ANNOTATION_DISABLED_SELECTOR = "[data-annotation-disabled=\"true\"]";
const STRUCTURAL_DISABLED_SELECTOR = ".chat__fenced-block--math, .katex, .katex-display";
const DISABLED_ZONE_SELECTOR = `${ANNOTATION_DISABLED_SELECTOR}, ${STRUCTURAL_DISABLED_SELECTOR}`;

export function rangeTouchesAnnotationDisabledZone(range: Range, container: ParentNode): boolean {
  const startBlocked = findClosestAnnotationDisabled(range.startContainer, container);
  if (startBlocked) {
    return true;
  }

  const endBlocked = findClosestAnnotationDisabled(range.endContainer, container);
  if (endBlocked) {
    return true;
  }

  const blockedNodes = Array.from(container.querySelectorAll<HTMLElement>(DISABLED_ZONE_SELECTOR));
  return blockedNodes.some((node) => rangeIntersectsNode(range, node));
}

function findClosestAnnotationDisabled(node: Node, container: ParentNode): HTMLElement | null {
  let current: Node | null = node;

  while (current && current !== container) {
    if (current instanceof HTMLElement && current.matches(DISABLED_ZONE_SELECTOR)) {
      return current;
    }
    current = current.parentNode;
  }

  return null;
}

function rangeIntersectsNode(range: Range, node: Node): boolean {
  if (typeof range.intersectsNode === "function") {
    try {
      return range.intersectsNode(node);
    } catch {
      // Ignore and use boundary comparison fallback below.
    }
  }

  const nodeRange = document.createRange();
  nodeRange.selectNodeContents(node);

  const rangeEndsBeforeOrAtNodeStart = range.compareBoundaryPoints(Range.END_TO_START, nodeRange) <= 0;
  const rangeStartsAfterOrAtNodeEnd = range.compareBoundaryPoints(Range.START_TO_END, nodeRange) >= 0;

  nodeRange.detach?.();

  return !rangeEndsBeforeOrAtNodeStart && !rangeStartsAfterOrAtNodeEnd;
}
