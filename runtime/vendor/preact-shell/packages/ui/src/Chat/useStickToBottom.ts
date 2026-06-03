import { useCallback, useEffect, useRef, useState } from "preact/hooks";

interface UseStickToBottomOptions {
  initial?: "instant" | "smooth";
}

interface UseStickToBottomResult {
  scrollRef: { current: HTMLElement | null };
  contentRef: { current: HTMLElement | null };
  isAtBottom: boolean;
  scrollToBottom: () => void;
}

const BOTTOM_THRESHOLD = 30;

function prefersReducedMotion(): boolean {
  return typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

export function useStickToBottom(options?: UseStickToBottomOptions): UseStickToBottomResult {
  const scrollRef = useRef<HTMLElement | null>(null);
  const contentRef = useRef<HTMLElement | null>(null);
  const [isAtBottom, setIsAtBottom] = useState(true);
  const isAtBottomRef = useRef(true);
  const initialAppliedRef = useRef(false);
  const lastContentHeightRef = useRef(0);
  const bottomStateRafRef = useRef<number | null>(null);

  const applyBottomState = useCallback((nextAtBottom: boolean) => {
    isAtBottomRef.current = nextAtBottom;
    setIsAtBottom((prev) => (prev === nextAtBottom ? prev : nextAtBottom));
  }, []);

  const updateBottomState = useCallback(() => {
    const node = scrollRef.current;

    if (!node) {
      return;
    }

    const distanceFromBottom = node.scrollHeight - node.clientHeight - node.scrollTop;
    const nextAtBottom = distanceFromBottom <= BOTTOM_THRESHOLD;

    applyBottomState(nextAtBottom);
  }, [applyBottomState]);

  const scheduleBottomStateUpdate = useCallback(() => {
    if (bottomStateRafRef.current !== null) {
      return;
    }

    bottomStateRafRef.current = requestAnimationFrame(() => {
      bottomStateRafRef.current = null;
      updateBottomState();
    });
  }, [updateBottomState]);

  const stickToBottomInstant = useCallback(() => {
    const node = scrollRef.current;

    if (!node) {
      return;
    }

    node.scrollTop = node.scrollHeight;
    applyBottomState(true);
  }, [applyBottomState]);

  const scrollToBottomWithBehavior = useCallback((mode: "auto" | "smooth") => {
    const node = scrollRef.current;

    if (!node) {
      return;
    }

    node.scrollTo({
      top: node.scrollHeight,
      behavior: prefersReducedMotion() ? "auto" : mode,
    });
  }, []);

  const scrollToBottom = useCallback(() => {
    scrollToBottomWithBehavior("smooth");
  }, [scrollToBottomWithBehavior]);

  useEffect(() => {
    const node = scrollRef.current;

    if (!node) {
      return;
    }

    const handleScroll = () => {
      updateBottomState();
    };

    node.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => {
      node.removeEventListener("scroll", handleScroll);
    };
  }, [updateBottomState]);

  useEffect(() => {
    if (initialAppliedRef.current) {
      return;
    }

    const node = scrollRef.current;

    if (!node) {
      return;
    }

    initialAppliedRef.current = true;
    const initialMode = options?.initial === "smooth" ? "smooth" : "auto";

    const rafId = requestAnimationFrame(() => {
      scrollToBottomWithBehavior(initialMode);
      scheduleBottomStateUpdate();
    });

    return () => cancelAnimationFrame(rafId);
  }, [options?.initial, scrollToBottomWithBehavior, updateBottomState]);

  useEffect(() => {
    const contentNode = contentRef.current;
    const scrollNode = scrollRef.current;

    if (!contentNode || !scrollNode || typeof ResizeObserver === "undefined") {
      return;
    }

    lastContentHeightRef.current = contentNode.scrollHeight;

    const contentObserver = new ResizeObserver(() => {
      const nextHeight = contentNode.scrollHeight;
      const grew = nextHeight > lastContentHeightRef.current;
      lastContentHeightRef.current = nextHeight;

      if (grew && isAtBottomRef.current) {
        stickToBottomInstant();
        return;
      }

      scheduleBottomStateUpdate();
    });

    contentObserver.observe(contentNode);

    // Also observe all direct children for more granular size tracking
    for (const child of contentNode.children) {
      contentObserver.observe(child);
    }

    // Observe scroll container itself — when it shrinks (e.g. terminal opens),
    // re-scroll to bottom if user was at bottom
    const containerObserver = new ResizeObserver(() => {
      if (isAtBottomRef.current) {
        stickToBottomInstant();
        return;
      }

      scheduleBottomStateUpdate();
    });

    containerObserver.observe(scrollNode);

    // MutationObserver to catch DOM changes that don't trigger resize
    const mutationObserver = new MutationObserver(() => {
      const nextHeight = contentNode.scrollHeight;
      const grew = nextHeight > lastContentHeightRef.current;
      lastContentHeightRef.current = nextHeight;

      if (grew && isAtBottomRef.current) {
        stickToBottomInstant();
        return;
      }

      scheduleBottomStateUpdate();
    });

    mutationObserver.observe(contentNode, {
      childList: true,
      subtree: true,
      characterData: true,
    });

    return () => {
      contentObserver.disconnect();
      containerObserver.disconnect();
      mutationObserver.disconnect();
    };
  }, [scheduleBottomStateUpdate, stickToBottomInstant]);

  useEffect(() => {
    return () => {
      if (bottomStateRafRef.current !== null) {
        cancelAnimationFrame(bottomStateRafRef.current);
      }
    };
  }, []);

  return {
    scrollRef,
    contentRef,
    isAtBottom,
    scrollToBottom,
  };
}
