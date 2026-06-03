import type { RefObject } from "preact";
import { Icon } from "../Icon";
import { useDismissableLayer } from "../hooks";
import type { HighlightColor } from "./types";

interface HighlightPaletteProps {
  open: boolean;
  paletteRef: RefObject<HTMLDivElement>;
  colors: HighlightColor[];
  onApplyColor: (colorId: HighlightColor["id"]) => void;
  onErase: () => void;
  onDismiss: () => void;
}

export function HighlightPalette({
  open,
  paletteRef,
  colors,
  onApplyColor,
  onErase,
  onDismiss,
}: HighlightPaletteProps) {
  useDismissableLayer({ ref: paletteRef, open, onDismiss });

  if (!open) {
    return null;
  }

  return (
    <div ref={paletteRef} className="text-highlight-palette" role="dialog" aria-label="Text highlight options">
      <div className="text-highlight-palette__swatches" role="group" aria-label="Highlight colors">
        {colors.map((color) => (
          <button
            key={color.id}
            type="button"
            className={`text-highlight-palette__swatch ${color.className}`}
            aria-label={`Highlight ${color.label}`}
            title={color.label}
            onClick={() => onApplyColor(color.id)}
          />
        ))}
      </div>
      <button
        type="button"
        className="text-highlight-palette__erase"
        onClick={onErase}
        aria-label="Erase highlight"
        title="Erase highlight"
      >
        <Icon name="trash" size={14} />
      </button>
    </div>
  );
}
