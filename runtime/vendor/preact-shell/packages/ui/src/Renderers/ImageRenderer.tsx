import { useEffect, useState } from "preact/hooks";
import { FencedBlock } from "../Chat/FencedBlock";
import { Icon } from "../Icon";

interface ImageRendererProps {
  /** Image source — data URL, blob URL, or remote URL */
  src: string;
  /** Alt text for accessibility */
  alt?: string;
  /** Called when download action is triggered */
  onDownload?: () => void;
  /** Called when maximize action is triggered */
  onMaximize?: () => void;
}

export function ImageRenderer({ src, alt, onDownload, onMaximize }: ImageRendererProps) {
  const [status, setStatus] = useState<"loading" | "loaded" | "error">("loading");

  useEffect(() => {
    setStatus("loading");
  }, [src]);

  const resolvedAlt = alt || "Image";

  return (
    <FencedBlock variant="image" onDownload={onDownload} onMaximize={onMaximize}>
      <div className="image-renderer">
        {status === "loading" ? <div className="image-renderer__loading" aria-hidden="true" /> : null}

        {status === "error" ? (
          <div className="image-renderer__error" role="status" aria-live="polite">
            <Icon name="image-off" size={16} />
            <span>Failed to load image</span>
          </div>
        ) : null}

        <img
          className="image-renderer__preview"
          src={src}
          alt={resolvedAlt}
         
          onLoad={() => setStatus("loaded")}
          onError={() => setStatus("error")}
          onClick={onMaximize}
          hidden={status !== "loaded"}
        />
      </div>
    </FencedBlock>
  );
}

export type { ImageRendererProps };
