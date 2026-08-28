import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import ArrowBackRoundedIcon from "@mui/icons-material/ArrowBackRounded";
import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";
import ArrowOutwardRoundedIcon from "@mui/icons-material/ArrowOutwardRounded";
import blueberry from "../../../assets/blueberry.jpg";
import greenhouse from "../../../assets/vegetables/zasad1.jpg";
import seedlings from "../../../assets/rasad.jpg";
import greenGoLogo from "../../../assets/campaign/greengo-logo.png";
import greenGoPrime from "../../../assets/campaign/greengo-prime.jpg";
import greenGoPower from "../../../assets/campaign/greengo-power.jpg";
import greenGoMegaField from "../../../assets/campaign/greengo-mega-field.jpg";
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
        <div className="plant-poster-concept" aria-hidden="true">
          <svg
            className="plant-poster-mark"
            viewBox="20 5 380 400"
            xmlns="http://www.w3.org/2000/svg"
            focusable="false"
          >
            <defs>
              <clipPath id="poster-leaf-top" clipPathUnits="userSpaceOnUse">
                <path d="M210 18C151 82 151 157 210 222C269 157 269 82 210 18Z" />
              </clipPath>
              <clipPath id="poster-leaf-left" clipPathUnits="userSpaceOnUse">
                <path d="M35 178C47 281 110 350 203 389C211 288 155 211 35 178Z" />
              </clipPath>
              <clipPath id="poster-leaf-right" clipPathUnits="userSpaceOnUse">
                <path d="M385 165C277 177 217 249 211 350C308 325 375 261 385 165Z" />
              </clipPath>
            </defs>
            <image
              href={seedlings}
              x="145"
              y="10"
              width="130"
              height="220"
              preserveAspectRatio="xMidYMid slice"
              clipPath="url(#poster-leaf-top)"
            />
            <image
              href={greenhouse}
              x="28"
              y="170"
              width="185"
              height="225"
              preserveAspectRatio="xMidYMid slice"
              clipPath="url(#poster-leaf-left)"
            />
            <image
              href={blueberry}
              x="205"
              y="155"
              width="190"
              height="205"
              preserveAspectRatio="xMidYMid slice"
              clipPath="url(#poster-leaf-right)"
            />
          </svg>
          <div className="plant-poster-statement">
            <span>Partner u poljoprivredi</span>
            <strong>Danas. Sutra. Zajedno.</strong>
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
        <div className="greengo-products" aria-label="GreenGo Prime, Power i Mega Field">
          <img src={greenGoPrime} alt="GreenGo Prime" />
          <img src={greenGoPower} alt="GreenGo Power" />
          <img src={greenGoMegaField} alt="GreenGo Mega Field" />
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
