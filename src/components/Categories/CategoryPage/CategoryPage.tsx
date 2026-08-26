import { Link } from "react-router-dom";
import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";
import CategoryCard from "../CategoryCard/CategoryCard";
import "./CategoryPage.css";

export interface CategoryItem {
  heading: string;
  description?: string;
  link?: string;
  iconUrl?: string;
  hoveredIconUrl?: string;
}

export interface CategoryPartner {
  src: string;
  name: string;
}

interface CategoryPageProps {
  eyebrow: string;
  title: string;
  description: string;
  items?: CategoryItem[];
  partners: CategoryPartner[];
  note?: string;
}

function PartnerSet({
  partners,
  hidden = false,
}: {
  partners: CategoryPartner[];
  hidden?: boolean;
}) {
  return (
    <div className="category-page__partner-set" aria-hidden={hidden || undefined}>
      {partners.map((partner) => (
        <div
          className="category-page__partner-card"
          key={`${hidden ? "copy" : "original"}-${partner.name}`}
        >
          <img src={partner.src} alt={hidden ? "" : partner.name} />
        </div>
      ))}
    </div>
  );
}

export default function CategoryPage({
  eyebrow,
  title,
  description,
  items = [],
  partners,
  note,
}: CategoryPageProps) {
  return (
    <main className="category-page">
      <section className="category-page__hero">
        <div className="category-page__shell category-page__hero-grid">
          <div>
            <span className="category-page__eyebrow">{eyebrow}</span>
            <h1>{title}</h1>
          </div>
          <div className="category-page__intro">
            <p>{description}</p>
            <Link to="/kontakt">
              Zatražite stručni savet <ArrowForwardRoundedIcon aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      {items.length > 0 && (
        <section className="category-page__offers" aria-labelledby="category-offers-title">
          <div className="category-page__shell">
            <div className="category-page__section-heading">
              <div>
                <span>Naš asortiman</span>
                <h2 id="category-offers-title">Izaberite oblast koja vas zanima</h2>
              </div>
              <p>{note ?? "Provereni proizvodi i podrška pri izboru pravog rešenja."}</p>
            </div>
            <div className="category-page__cards">
              {items.map((item) => (
                <CategoryCard key={item.heading} {...item} link={item.link ?? "/prodavnica"} />
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="category-page__partners" aria-label="Partneri u ovoj kategoriji">
        <div className="category-page__shell">
          <div className="category-page__partner-heading">
            <span>Provereni proizvođači</span>
            <p>Partneri čije proizvode možete pronaći u našoj ponudi</p>
          </div>
          <div
            className={`category-page__partner-window${partners.length < 3 ? " is-compact" : ""}`}
          >
            <div className="category-page__partner-track">
              <PartnerSet partners={partners} />
              <PartnerSet partners={partners} hidden />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
