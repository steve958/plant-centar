import { Link } from "react-router-dom";
import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";
import ArrowOutwardRoundedIcon from "@mui/icons-material/ArrowOutwardRounded";
import { trustedPartners } from "../../data/trustedPartners";
import "./TrustedPartners.css";

export default function TrustedPartners() {
  return (
    <main className="trusted-page">
      <section className="trusted-page__hero">
        <div className="trusted-page__shell trusted-page__hero-grid">
          <div>
            <span className="trusted-page__eyebrow">Partnerstva koja traju</span>
            <h1>Brendovi koje biramo sa razlogom.</h1>
          </div>
          <div className="trusted-page__hero-copy">
            <p>
              Dobar rezultat počinje pouzdanim proizvodom. Zato sarađujemo sa
              proizvođačima čiji kvalitet, razvoj i podrška prate potrebe naših kupaca.
            </p>
            <Link to="/kontakt">
              Razgovarajte sa našim tim <ArrowForwardRoundedIcon aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      <section className="trusted-page__intro" aria-label="Naš pristup partnerstvima">
        <div className="trusted-page__shell trusted-page__intro-grid">
          <span>Proveren izbor</span>
          <p>
            Partneri nisu samo logotipi u našem asortimanu. Oni su deo sistema
            podrške koji povezuje stručan savet, odgovarajući proizvod i sigurniju primenu.
          </p>
          <div className="trusted-page__principles">
            <span>Kvalitet</span>
            <span>Kontinuitet</span>
            <span>Stručna podrška</span>
          </div>
        </div>
      </section>

      <section className="trusted-page__brands" aria-labelledby="trusted-brands-title">
        <div className="trusted-page__shell">
          <div className="trusted-page__section-heading">
            <div>
              <span className="trusted-page__eyebrow">Brendovi kojima verujemo</span>
              <h2 id="trusted-brands-title">Pouzdani programi za različite potrebe</h2>
            </div>
            <p>
              Od semena i ishrane do zaštite, mehanizacije i programa za životinje.
            </p>
          </div>

          <div className="trusted-page__grid">
            {trustedPartners.map((partner) => (
              <a
                className="trusted-card"
                href={partner.href}
                target="_blank"
                rel="noreferrer"
                key={partner.name}
                aria-label={`Posetite sajt partnera ${partner.name}`}
              >
                <div
                  className={`trusted-card__logo${partner.theme === "dark" ? " is-dark" : ""}`}
                >
                  <img
                    src={partner.src}
                    alt={partner.name}
                  />
                </div>
                <div className="trusted-card__content">
                  <span>{partner.category}</span>
                  <h2>{partner.name}</h2>
                  <p>{partner.description}</p>
                  <strong>
                    Posetite sajt <ArrowOutwardRoundedIcon aria-hidden="true" />
                  </strong>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

    </main>
  );
}
