import type { ImageSlotData } from "../data/content";

interface Props {
  image: ImageSlotData;
  className?: string;
}


export default function ImageSlot({ image, className = "" }: Props) {
  if (image.src) {
    return (
      <img
        className={`image-slot ${className}`.trim()}
        src={image.src}
        alt={image.alt}
        loading="lazy"
        style={{ objectFit: image.objectFit, objectPosition: image.objectPosition }}
      />
    );
  }

  return (
    <div
      className={`image-slot image-slot--placeholder ${className}`.trim()}
      role="img"
      aria-label={`${image.label} placeholder. Image to be added.`}
    >
      {image.initials ? (
        <span className="placeholder-initials" aria-hidden="true">
          {image.initials}
        </span>
      ) : (
        <svg viewBox="0 0 24 24" width="30" height="30" aria-hidden="true" focusable="false">
          <path
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3 5h18v14H3zM3 16l5-5 4 4 3-3 6 6M9 9.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"
          />
        </svg>
      )}
      <span className="placeholder-label">{image.label}</span>
      <span className="placeholder-note">Image to be added</span>
    </div>
  );
}
