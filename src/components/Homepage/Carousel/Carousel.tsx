import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import ArrowBackRoundedIcon from "@mui/icons-material/ArrowBackRounded";
import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";
import ArrowOutwardRoundedIcon from "@mui/icons-material/ArrowOutwardRounded";
import mainBanner from "../../../assets/1788104161408-transparent.png";
import greenGoLogo from "../../../assets/campaign/greengo-logo.png";
import greenGoBuild from "../../../assets/green/GreenGo-BUILD-web.png";
import greenGoForm from "../../../assets/green/GreenGo-FORM jpg-web.png";
import greenGoMegaField from "../../../assets/green/GreenGo-MEGA-FIELD-5l-frontal-web.png";
import greenGoMicroOneLiter from "../../../assets/green/GreenGo-MICRO-2026-1L-web.png";
import greenGoMicroFiveLiter from "../../../assets/green/GreenGo-MICRO-5l-frontal-web.png";
import agriFortisLogo from "../../../assets/campaign/agri-fortis-logo-white.svg";
import hansaForestry from "../../../assets/campaign/hansa-forestry.avif";
import hansaHobby from "../../../assets/campaign/hansa-hobi.avif";
import "./Carousel.css";

const slideCount = 3;

export default function Carousel() {
  const [selectedItem, setSelectedItem] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const changeSelectedItem = (direction: number) => {
    setSelectedItem((current) => (current + direction + slideCount) % slideCount);
  };

  useEffect(() => {
    if (isPaused) return;

    intervalRef.current = setInterval(() => changeSelectedItem(1), 9000);
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [isPaused]);

  const selectSlide = (index: number) => {
    setSelectedItem(index);
    if (intervalRef.current) clearInterval(intervalRef.current);
  };

  return (
    <section
      className="carousel-container"
      aria-roledescription="karusel"
      aria-label="Izdvajamo iz Plant Centra"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onFocus={() => setIsPaused(true)}
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) setIsPaused(false);
      }}
    >
      <article
        className={`poster-slide poster-slide--plant${selectedItem === 0 ? " is-active" : ""}`}
        aria-hidden={selectedItem !== 0}
      >
        <div className="poster-copy poster-copy--dark">
          <span className="poster-eyebrow">Sve što proizvodnja traži</span>
          <h1>Znanje koje raste zajedno sa vašim usevima.</h1>
          <p>
            Ishrana i zaštita bilja, semenska roba, garden i pet program — uz
            stručnu podršku na jednom mestu.
          </p>
          <Link to="/o-nama" tabIndex={selectedItem === 0 ? 0 : -1}>
            Upoznajte Plant Centar <ArrowOutwardRoundedIcon aria-hidden="true" />
          </Link>
        </div>
        <div
          className="plant-poster-concept"
          role="img"
          aria-label="Plant Centar znak sa prizorima lista, useva i borovnica"
        >
          <div className="plant-poster-leaves" aria-hidden="true">
            <img className="plant-poster-leaf plant-poster-leaf--top" src={mainBanner} alt="" />
            <img className="plant-poster-leaf plant-poster-leaf--left" src={mainBanner} alt="" />
            <img className="plant-poster-leaf plant-poster-leaf--right" src={mainBanner} alt="" />
          </div>
        </div>
      </article>

      <article
        className={`poster-slide poster-slide--greengo${selectedItem === 1 ? " is-active" : ""}`}
        aria-hidden={selectedItem !== 1}
      >
        <div className="poster-copy poster-copy--light">
          <img className="poster-brand-logo poster-brand-logo--greengo" src={greenGoLogo} alt="GreenGo" />
          <span className="poster-eyebrow">Regionalni distributer</span>
          <h2>Kompletan program ishrane bilja.</h2>
          <p>
            Kristalna, praškasta i tečna rešenja za snažan početak, stabilan
            razvoj i kvalitetan završetak proizvodnje.
          </p>
          <Link to="/sredstva-za-ishranu-bilja" tabIndex={selectedItem === 1 ? 0 : -1}>
            Istražite program <ArrowOutwardRoundedIcon aria-hidden="true" />
          </Link>
        </div>
        <div className="greengo-products" aria-label="GreenGo program ishrane bilja">
          <img src={greenGoBuild} alt="GreenGo Build, pakovanje od jednog kilograma" />
          <img src={greenGoForm} alt="GreenGo Form, pakovanje od jednog kilograma" />
          <img src={greenGoMegaField} alt="GreenGo Mega Field, pakovanje od pet litara" />
          <img src={greenGoMicroOneLiter} alt="GreenGo Micro, pakovanje od jednog litra" />
          <img src={greenGoMicroFiveLiter} alt="GreenGo Micro, pakovanje od pet litara" />
        </div>
      </article>

      <article
        className={`poster-slide poster-slide--hansa${selectedItem === 2 ? " is-active" : ""}`}
        aria-hidden={selectedItem !== 2}
      >
        <div className="poster-copy poster-copy--light">
          <img className="poster-brand-logo poster-brand-logo--fortis" src={agriFortisLogo} alt="Agri Fortis" />
          <span className="poster-eyebrow">Pouzdana distribucija</span>
          <h2>Agri Fortis ishrana i Hansa Forestry supstrati.</h2>
          <p>
            Profesionalni supstrati za setvu i sadnju, uz praktična pakovanja za
            hobi proizvođače i svakodnevnu negu biljaka.
          </p>
          <Link to="/garden-program" tabIndex={selectedItem === 2 ? 0 : -1}>
            Pogledajte ponudu <ArrowOutwardRoundedIcon aria-hidden="true" />
          </Link>
        </div>
        <div className="hansa-products" aria-label="Hansa Forestry profesionalni i hobi supstrati">
          <div><img src={hansaForestry} alt="Hansa Forestry profesionalni supstrati" /></div>
          <div><img src={hansaHobby} alt="Fortis i Hansa hobi supstrati" /></div>
        </div>
      </article>

      <button
        type="button"
        className="carousel-arrow carousel-arrow--left"
        onClick={() => changeSelectedItem(-1)}
        aria-label="Prethodni poster"
      >
        <ArrowBackRoundedIcon />
      </button>
      <button
        type="button"
        className="carousel-arrow carousel-arrow--right"
        onClick={() => changeSelectedItem(1)}
        aria-label="Sledeći poster"
      >
        <ArrowForwardRoundedIcon />
      </button>

      <div className="carousel-progress" aria-label="Izaberite poster">
        {Array.from({ length: slideCount }, (_, index) => (
          <button
            type="button"
            className={selectedItem === index ? "is-active" : ""}
            onClick={() => selectSlide(index)}
            aria-label={`Poster ${index + 1}`}
            aria-current={selectedItem === index ? "true" : undefined}
            key={index}
          />
        ))}
      </div>
    </section>
  );
}
