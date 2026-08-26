import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";
import { Link } from "react-router-dom";
import company from "../../assets/store.jpg";
import fruits from "../../assets/fruits/borovnica7.jfif";
import vegetables from "../../assets/vegetables/zasad1.jpg";
import "./Gallery.css";

const collections = [
  {
    title: "Prodajni objekti",
    caption: "Mesto susreta, razgovora i proverenih proizvoda.",
    image: company,
    to: "/galerija/kompanija",
    className: "gallery-card--wide",
  },
  {
    title: "Voćarska proizvodnja",
    caption: "Iskustva i rezultati iz savremenih zasada.",
    image: fruits,
    to: "/galerija/voce",
  },
  {
    title: "Povrtarska proizvodnja",
    caption: "Kulture, rasad i proizvodnja na terenu.",
    image: vegetables,
    to: "/galerija/povrce",
  },
];

export default function Gallery() {
  return (
    <main className="gallery-page">
      <section className="gallery-hero">
        <div className="gallery-shell gallery-hero__grid">
          <div>
            <span className="gallery-kicker">Plant Centar na terenu</span>
            <h1>Priče koje najbolje govore kroz slike.</h1>
          </div>
          <p>
            Pogledajte naše prodajne objekte, proizvodnju naših saradnika i rezultate
            koji nastaju uz znanje, posvećenost i pravi izbor.
          </p>
        </div>
      </section>

      <section className="gallery-collections" aria-label="Galerijske kolekcije">
        <div className="gallery-shell gallery-collections__grid">
          {collections.map((collection) => (
            <Link
              to={collection.to}
              className={`gallery-card ${collection.className ?? ""}`}
              key={collection.title}
            >
              <img src={collection.image} alt="" />
              <div className="gallery-card__overlay" />
              <div className="gallery-card__content">
                <span>Kolekcija</span>
                <h2>{collection.title}</h2>
                <p>{collection.caption}</p>
                <strong>
                  Pogledajte fotografije <ArrowForwardRoundedIcon aria-hidden="true" />
                </strong>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
