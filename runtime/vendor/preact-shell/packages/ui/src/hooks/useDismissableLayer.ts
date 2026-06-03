import type { RefObject } from "preact";
import { useEffect, useRef } from "preact/hooks";

interface UseDismissableLayerOptions {
  ref: RefObject<HTMLElement>;
  open: boolean;
  onDismiss: () => void;
  outsideEvent?: "pointerdown" | "mousedown" | "click";
  escape?: boolean;
}

export function useDismissableLayer({
  ref,
  open,
  onDismiss,
  outsideEvent = "pointerdown",
  escape = true,
}: UseDismissableLayerOptions) {
  const onDismissRef = useRef(onDismiss);
  onDismissRef.current = onDismiss;

  useEffect(() => {
    if (!open) {
      return;
    }

    const handleOutside = (event: Event) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        onDismissRef.current();
      }
    };

    const handleKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onDismissRef.current();
      }
    };

    document.addEventListener(outsideEvent, handleOutside);

    if (escape) {
      document.addEventListener("keydown", handleKey);
    }

    return () => {
      document.removeEventListener(outsideEvent, handleOutside);

      if (escape) {
        document.removeEventListener("keydown", handleKey);
      }
    };
  }, [open, ref, outsideEvent, escape]);
}
