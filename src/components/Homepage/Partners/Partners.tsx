import { useState, type CSSProperties } from "react";
import PauseRoundedIcon from "@mui/icons-material/PauseRounded";
import PlayArrowRoundedIcon from "@mui/icons-material/PlayArrowRounded";
import "./Partners.css";
import agromarket from "../../../assets/partneri/agromarket.jpeg";
import savacoop from "../../../assets/partneri/savacoop.png";
import gebi from "../../../assets/partneri/gebi.svg";
import arum from "../../../assets/partneri/arum.jpeg";
import agrosava from "../../../assets/partneri/agrosava.png";
import basf from "../../../assets/partneri/basf.png";
import corteva from "../../../assets/partneri/corteva.png";
import elixir from "../../../assets/partneri/elixir.png";
import villager from "../../../assets/partneri/villager.png";
import konus from "../../../assets/partneri/konus.png";
import fertico from "../../../assets/campaign/fertico-logo.webp";
import agriFortis from "../../../assets/campaign/agri-fortis-logo-white.svg";
import agrimatco from "../../../assets/campaign/agrimatco-logo.svg";
import galenika from "../../../assets/partneri/galenika.png";

const partners = [
  { src: agromarket, href: "https://www.agromarketsrbija.rs/srb", name: "Agromarket" },
  { src: savacoop, href: "https://savacoop.rs/", name: "Savacoop", scale: 1.12 },
  { src: gebi, href: "https://www.gebi.rs/", name: "Gebi", scale: 0.72 },
  { src: arum, href: "https://www.arum.rs/", name: "Arum" },
  { src: agrosava, href: "https://agrosava.com/", name: "Agrosava", scale: 0.78 },
  { src: basf, href: "https://www.basf.com/rs/sr", name: "BASF" },
  { src: corteva, href: "https://www.corteva.rs/", name: "Corteva", scale: 1.08 },
  { src: elixir, href: "https://www.elixirgroup.rs/", name: "Elixir" },
  { src: villager, href: "https://www.villager.rs/", name: "Villager", scale: 0.78 },
  { src: konus, href: "https://www.konusglorija.rs/", name: "Konus Glorija" },
  { src: fertico, href: "https://fertico.rs/sr/", name: "Fertico", scale: 0.86 },
  { src: agriFortis, href: "https://agrifortis.rs/", name: "Agri Fortis", scale: 0.82, theme: "dark" },
  { src: agrimatco, href: "https://www.agrimatco.rs/", name: "Agrimatco", scale: 0.88 },
  { src: galenika, href: "https://www.fitofarmacija.rs/", name: "Galenika Fitofarmacija", scale: 0.92 },
];

function PartnerSet({ hidden = false }: { hidden?: boolean }) {
  return (
    <div className="partners-logo-set" aria-hidden={hidden || undefined}>
      {partners.map((partner) => (
        <a
          className={`partners-logo-card${partner.theme === "dark" ? " partners-logo-card--dark" : ""}`}
          href={partner.href}
          key={`${hidden ? "copy" : "original"}-${partner.name}`}
          target="_blank"
          rel="noreferrer"
          aria-label={hidden ? undefined : `Posetite sajt partnera ${partner.name}`}
          tabIndex={hidden ? -1 : undefined}
        >
          <img
            src={partner.src}
            alt={hidden ? "" : partner.name}
            style={{ "--partner-scale": partner.scale ?? 1 } as CSSProperties}
          />
        </a>
      ))}
    </div>
  );
}

export default function Partners() {
  const [isPaused, setIsPaused] = useState(false);

  return (
    <section className="partners-section" aria-labelledby="partners-title">
      <div className="partners-shell">
        <div className="partners-heading">
          <div>
            <span className="partners-kicker">Pouzdana saradnja</span>
            <h2 id="partners-title">Brendovi kojima verujemo</h2>
          </div>
          <p>
            Biramo proverene proizvođače kako biste na jednom mestu dobili
            kvalitetna i pouzdana rešenja.
          </p>
        </div>

        <div className="partners-carousel-row">
          <div className="partners-carousel">
            <div className={`partners-track${isPaused ? " is-paused" : ""}`}>
              <PartnerSet />
              <PartnerSet hidden />
            </div>
          </div>
          <button
            type="button"
            className="partners-motion-toggle"
            onClick={() => setIsPaused((paused) => !paused)}
            aria-label={isPaused ? "Pokreni karusel partnera" : "Pauziraj karusel partnera"}
            aria-pressed={isPaused}
          >
            {isPaused ? <PlayArrowRoundedIcon /> : <PauseRoundedIcon />}
          </button>
        </div>
      </div>
    </section>
  );
}
