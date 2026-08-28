import { useState, type CSSProperties } from "react";
import PauseRoundedIcon from "@mui/icons-material/PauseRounded";
import PlayArrowRoundedIcon from "@mui/icons-material/PlayArrowRounded";
import { trustedPartners } from "../../../data/trustedPartners";
import "./Partners.css";

function PartnerSet({ hidden = false }: { hidden?: boolean }) {
  return (
    <div className="partners-logo-set" aria-hidden={hidden || undefined}>
      {trustedPartners.map((partner) => (
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
