import { Link } from "react-router-dom";
import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import PhoneOutlinedIcon from "@mui/icons-material/PhoneOutlined";
import brandMark from "../../assets/plant-centar-znak.svg";
import "./Footer.css";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="footer-shell">
        <div className="footer-cta">
          <div>
            <span>Tu smo da pomognemo</span>
            <h2>Pronađimo pravo rešenje za vašu proizvodnju.</h2>
          </div>
          <Link to="/kontakt" className="footer-cta-link">
            Kontaktirajte nas <ArrowForwardRoundedIcon aria-hidden="true" />
          </Link>
        </div>

        <div className="footer-main">
          <div className="footer-brand">
            <Link to="/pocetna" className="footer-brand-link" aria-label="Plant Centar početna">
              <span className="footer-brand-mark">
                <img src={brandMark} alt="" />
              </span>
              <span className="footer-brand-name"><strong>plant</strong> centar</span>
            </Link>
            <p>
              Znanje, iskustvo i provereni proizvodi za sigurniju i uspešniju
              proizvodnju.
            </p>
            <div className="footer-socials" aria-label="Društvene mreže">
              <a
                href="https://www.facebook.com/people/Plant-centar/61556143327941/?mibextid=ZbWKwL"
                target="_blank"
                rel="noreferrer"
                aria-label="Plant Centar na Facebooku"
              >
                <FacebookIcon />
              </a>
              <a
                href="https://www.instagram.com/plant_centar/?utm_source=qr&igsh=MWRhZzM5Yzl3ZTlnaQ%3D%3D"
                target="_blank"
                rel="noreferrer"
                aria-label="Plant Centar na Instagramu"
              >
                <InstagramIcon />
              </a>
            </div>
          </div>

          <nav className="footer-column" aria-label="Navigacija u podnožju">
            <h3>Navigacija</h3>
            <Link to="/pocetna">Početna</Link>
            <Link to="/o-nama">O nama</Link>
            <Link to="/prodavnica">Prodavnica</Link>
            <Link to="/partneri">Partneri</Link>
            <Link to="/galerija">Galerija</Link>
            <Link to="/kontakt">Kontakt</Link>
          </nav>

          <div className="footer-column footer-contact">
            <h3>Kontakt</h3>
            <a href="tel:+381604055510">
              <PhoneOutlinedIcon aria-hidden="true" />
              <span><small>Telefon</small>+381 60 405 5510</span>
            </a>
            <a href="mailto:plant.centar@gmail.com">
              <EmailOutlinedIcon aria-hidden="true" />
              <span><small>Email</small>plant.centar@gmail.com</span>
            </a>
            <a
              href="https://www.google.com/maps/search/?api=1&query=44.7464481,19.7058977"
              target="_blank"
              rel="noreferrer"
            >
              <LocationOnOutlinedIcon aria-hidden="true" />
              <span><small>Adresa</small>Vojvode Janka Stojićevića 22, Šabac</span>
            </a>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© {currentYear} Plant Centar. Sva prava zadržana.</p>
          <span>Znanje. Posvećenost. Uspeh.</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
