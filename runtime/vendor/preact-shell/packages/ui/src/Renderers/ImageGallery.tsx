import { FencedBlock } from "../Chat/FencedBlock";
import { ImageRenderer } from "./ImageRenderer";

interface ImageGalleryProps {
  /** Array of image sources */
  images: Array<{ src: string; alt?: string }>;
  /** Called when download action is triggered for an image */
  onDownload?: (src: string) => void;
  /** Called when maximize action is triggered for an image */
  onMaximize?: (src: string, alt?: string) => void;
}

function getGalleryClassName(count: number): string {
  const classNames = ["image-gallery"];

  if (count === 1) {
    classNames.push("image-gallery--single");
  }

  return classNames.join(" ");
}

export function ImageGallery({ images, onDownload, onMaximize }: ImageGalleryProps) {
  if (images.length === 0) {
    return null;
  }

  if (images.length === 1) {
    const image = images[0];
    return (
      <ImageRenderer
        src={image.src}
        alt={image.alt}
        onDownload={() => onDownload?.(image.src)}
        onMaximize={() => onMaximize?.(image.src, image.alt)}
      />
    );
  }

  const label = `${images.length} images`;

  return (
    <FencedBlock label={label} variant="image" actions={[]}>
      <div className={getGalleryClassName(images.length)}>
        {images.map((image, index) => {
          const shouldSpan = images.length === 3 && index === 0;
          const itemClassName = shouldSpan ? "image-gallery__item image-gallery__item--span" : "image-gallery__item";

          return (
            <button
              key={`${image.src}-${index}`}
              type="button"
              className={itemClassName}
              onClick={() => onMaximize?.(image.src, image.alt)}
              title={image.alt || "Image"}
              aria-label={image.alt || `Image ${index + 1}`}
            >
              <img src={image.src} alt={image.alt || `Image ${index + 1}`} />
            </button>
          );
        })}
      </div>
    </FencedBlock>
  );
}

export type { ImageGalleryProps };
