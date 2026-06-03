/**
 * computeTextOffset — map a DOM Range (from user selection) to message-level character offsets.
 *
 * Reads data-offset-start/data-offset-end attributes stamped by ParsedContent
 * to determine which fragment contains the selection, then walks text nodes
 * within that fragment to compute the exact offset.
 */
export function computeTextOffset(
  container: HTMLElement,
  range: Range,
): { startOffset: number; endOffset: number } | null {
  if (!container.contains(range.startContainer) || !container.contains(range.endContainer)) {
    return null;
  }

  const startStamped = findStampedAncestor(range.startContainer, container);
  const endStamped = findStampedAncestor(range.endContainer, container);

  if (!startStamped || !endStamped) {
    return null;
  }

  // Cross-fragment selections are not currently supported.
  if (startStamped !== endStamped) {
    return null;
  }

  const startResult = resolveOffsetInStamped(startStamped, range.startContainer, range.startOffset);
  const endResult = resolveOffsetInStamped(endStamped, range.endContainer, range.endOffset);

  if (startResult === null || endResult === null) {
    return null;
  }

  return {
    startOffset: Math.min(startResult, endResult),
    endOffset: Math.max(startResult, endResult),
  };
}

function resolveOffsetInStamped(stamped: HTMLElement, node: Node, offset: number): number | null {
  if (!(stamped === node || stamped.contains(node))) {
    return null;
  }

  const startAttr = stamped.getAttribute("data-offset-start");
  const endAttr = stamped.getAttribute("data-offset-end");

  if (!startAttr || !endAttr) {
    return null;
  }

  const baseOffset = Number.parseInt(startAttr, 10);
  const stampedEnd = Number.parseInt(endAttr, 10);

  if (!Number.isFinite(baseOffset) || !Number.isFinite(stampedEnd) || stampedEnd < baseOffset) {
    return null;
  }

  const textOffset = countTextCharsTo(stamped, node, offset);
  if (textOffset === null) {
    return null;
  }

  const absoluteOffset = baseOffset + textOffset;
  if (absoluteOffset < baseOffset || absoluteOffset > stampedEnd) {
    return null;
  }

  return absoluteOffset;
}

export function findStampedAncestor(node: Node, container: HTMLElement): HTMLElement | null {
  let current: Node | null = node;

  while (current && current !== container) {
    if (current instanceof HTMLElement && current.hasAttribute("data-offset-start")) {
      return current;
    }
    current = current.parentNode;
  }

  if (container.hasAttribute("data-offset-start")) {
    return container;
  }

  return null;
}

export function countTextCharsTo(root: HTMLElement, targetNode: Node, targetOffset: number): number | null {
  const maxOffset = targetNode.nodeType === Node.TEXT_NODE
    ? (targetNode.textContent || "").length
    : targetNode.childNodes.length;

  if (targetOffset < 0 || targetOffset > maxOffset) {
    return null;
  }

  try {
    const probe = document.createRange();
    probe.setStart(root, 0);
    probe.setEnd(targetNode, targetOffset);
    const text = probe.toString();
    probe.detach?.();
    return text.length;
  } catch {
    return null;
  }
}
