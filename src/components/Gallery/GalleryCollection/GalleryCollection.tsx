import { useCallback, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ArrowBackRoundedIcon from "@mui/icons-material/ArrowBackRounded";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import NavigateBeforeRoundedIcon from "@mui/icons-material/NavigateBeforeRounded";
import NavigateNextRoundedIcon from "@mui/icons-material/NavigateNextRounded";
import "./GalleryCollection.css";

interface GalleryCollectionProps {
  eyebrow: string;
  title: string;
  description: string;
  images: string[];
  imageAlt: string;
}

export default function GalleryCollection({
  eyebrow,
  title,
  description,
  images,
  imageAlt,
}: GalleryCollectionProps) {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const showPrevious = useCallback(() => {
    setSelectedIndex((current) =>
      current === null ? null : (current - 1 + images.length) % images.length,
    );
  }, [images.length]);

  const showNext = useCallback(() => {
    setSelectedIndex((current) =>
      current === null ? null : (current + 1) % images.length,
    );
  }, [images.length]);

  useEffect(() => {
    if (selectedIndex === null) return;
    const previousOverflow = document.body.style.overflow;
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setSelectedIndex(null);
      if (event.key === "ArrowLeft") showPrevious();
      if (event.key === "ArrowRight") showNext();
    };

    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedIndex, showNext, showPrevious]);

  return (
    <main className="gallery-collection">
      <section className="gallery-collection__hero">
        <div className="gallery-collection__shell">
          <Link to="/galerija" className="gallery-collection__back">
            <ArrowBackRoundedIcon aria-hidden="true" /> Sve kolekcije
          </Link>
          <span>{eyebrow}</span>
          <h1>{title}</h1>
          <p>{description}</p>
        </div>
      </section>

      <section className="gallery-collection__content" aria-label={title}>
        <div className="gallery-collection__shell gallery-collection__grid">
          {images.map((image, index) => (
            <button
              type="button"
              className="gallery-collection__item"
              key={`${image}-${index}`}
              onClick={() => setSelectedIndex(index)}
              aria-label={`Otvorite fotografiju ${index + 1}`}
            >
              <img src={image} alt={`${imageAlt} — fotografija ${index + 1}`} loading="lazy" />
              <span>Pogledajte</span>
            </button>
          ))}
        </div>
      </section>

      {selectedIndex !== null && (
        <div
          className="gallery-lightbox"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) setSelectedIndex(null);
          }}
        >
          <button
            type="button"
            className="gallery-lightbox__close"
            onClick={() => setSelectedIndex(null)}
            aria-label="Zatvori fotografiju"
          >
            <CloseRoundedIcon />
          </button>
          <button
            type="button"
            className="gallery-lightbox__nav gallery-lightbox__nav--previous"
            onClick={showPrevious}
            aria-label="Prethodna fotografija"
          >
            <NavigateBeforeRoundedIcon />
          </button>
          <figure>
            <img src={images[selectedIndex]} alt={`${imageAlt} — uvećana fotografija`} />
            <figcaption>{selectedIndex + 1} / {images.length}</figcaption>
          </figure>
          <button
            type="button"
            className="gallery-lightbox__nav gallery-lightbox__nav--next"
            onClick={showNext}
            aria-label="Sledeća fotografija"
          >
            <NavigateNextRoundedIcon />
          </button>
        </div>
      )}
    </main>
  );
}
