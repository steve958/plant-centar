import { useEffect, useState } from "react";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";
import { Link } from "react-router-dom";
import avatar from "../../assets/avatar.png";
import businessCard from "../../assets/vizitka.jpg";
import storeImage from "../../assets/campaign/store-about.webp";
import "./AboutUs.css";

const team = [
  {
    name: "Đorđe Arsenović",
    education: "dipl. inž. zaštite bilja",
    role: "Prodaja i stručna služba",
    hasDetails: true,
  },
  {
    name: "Slađana Čačić",
    education: "dipl. inž. zaštite bilja",
    role: "Agronom — stručni konsultant",
  },
  {
    name: "Đorđe Petrović",
    education: "dipl. inž. zaštite bilja",
    role: "Agronom — stručni konsultant",
  },
];

export default function AboutUs() {
  const [showDetails, setShowDetails] = useState(false);

  useEffect(() => {
    if (!showDetails) return;
    const previousOverflow = document.body.style.overflow;
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setShowDetails(false);
    };

    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", closeOnEscape);
    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", closeOnEscape);
    };
  }, [showDetails]);

  return (
    <main className="about-page">
      <section className="about-hero">
        <div className="about-shell about-hero__grid">
          <div className="about-hero__content">
            <span className="about-kicker">O Plant Centru</span>
            <h1>Partner proizvodnje koja traje.</h1>
            <p>
              Povezujemo znanje agronoma, proverene proizvode i neposrednu podršku
              kako bi svaka odluka na terenu bila sigurnija.
            </p>
            <Link to="/kontakt">
              Razgovarajte sa našim timom <ArrowForwardRoundedIcon aria-hidden="true" />
            </Link>
          </div>
          <div className="about-hero__image">
            <img src={storeImage} alt="Prodajni centar kompanije Plant Centar" />
            <div className="about-hero__note">
              <strong>Stručna podrška</strong>
              <span>od izbora proizvoda do primene</span>
            </div>
          </div>
        </div>
      </section>

      <section className="about-story">
        <div className="about-shell">
          <div className="about-section-heading">
            <span className="about-kicker">Naš pristup</span>
            <h2>Znanje koje se vidi u rezultatu</h2>
          </div>
          <div className="about-story__grid">
            <article>
              <span>01</span>
              <h3>Blizu proizvođača</h3>
              <p>
                Sarađujemo neposredno sa poljoprivrednicima i prilagođavamo preporuke
                stvarnim uslovima njihove proizvodnje.
              </p>
            </article>
            <article>
              <span>02</span>
              <h3>Proveren kvalitet</h3>
              <p>
                Biramo pouzdane dobavljače, savremene tehnologije i proizvode koji
                zadovoljavaju visoke standarde kvaliteta.
              </p>
            </article>
            <article>
              <span>03</span>
              <h3>Odgovorna budućnost</h3>
              <p>
                Podržavamo održivu proizvodnju, racionalnu primenu sredstava i očuvanje
                životne sredine.
              </p>
            </article>
          </div>
          <div className="about-manifesto">
            <p>
              Plant Centar je osnovan sa željom da kvalitetan repromaterijal prati
              kvalitetan savet. Zato proizvođačima pružamo novosti sa tržišta, stručnu
              podršku i pristup rešenjima koja povećavaju produktivnost uz odgovoran
              odnos prema zemljištu i klimi.
            </p>
          </div>
        </div>
      </section>

      <section className="about-team" aria-labelledby="about-team-title">
        <div className="about-shell">
          <div className="about-section-heading about-section-heading--centered">
            <span className="about-kicker">Ljudi Plant Centra</span>
            <h2 id="about-team-title">Tim na koji možete da se oslonite</h2>
            <p>Iskusni agronomi, dostupni za pitanja iz svakodnevne proizvodnje.</p>
          </div>
          <div className="about-team__grid">
            {team.map((member) => {
              const card = (
                <>
                  <div className="about-team__avatar">
                    <img src={avatar} alt="" />
                  </div>
                  <span className="about-team__role">{member.role}</span>
                  <h3>{member.name}</h3>
                  <p>{member.education}</p>
                  {member.hasDetails && (
                    <span className="about-team__action">
                      Kontakt podaci <ArrowForwardRoundedIcon aria-hidden="true" />
                    </span>
                  )}
                </>
              );

              return member.hasDetails ? (
                <button
                  type="button"
                  className="about-team__card"
                  key={member.name}
                  onClick={() => setShowDetails(true)}
                >
                  {card}
                </button>
              ) : (
                <article className="about-team__card" key={member.name}>
                  {card}
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {showDetails && (
        <div
          className="about-modal-backdrop"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) setShowDetails(false);
          }}
        >
          <section className="about-modal" role="dialog" aria-modal="true" aria-label="Kontakt podaci">
            <button
              type="button"
              onClick={() => setShowDetails(false)}
              aria-label="Zatvori"
            >
              <CloseRoundedIcon />
            </button>
            <img src={businessCard} alt="Kontakt kartica Đorđa Arsenovića" />
          </section>
        </div>
      )}
    </main>
  );
}
