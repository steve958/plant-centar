import { Link } from "react-router-dom";
import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";
import StorefrontOutlinedIcon from "@mui/icons-material/StorefrontOutlined";
import brandMark from "../../../assets/plant-centar-znak.svg";
import "./ShopIdle.css";

export default function ShopIdle() {
  return (
    <main className="shop-idle">
      <div className="shop-idle__shell">
        <div className="shop-idle__content">
          <span className="shop-idle__kicker">
            <StorefrontOutlinedIcon aria-hidden="true" /> Plant shop
          </span>
          <h1>Online prodavnica uskoro stiže.</h1>
          <p>
            Pripremamo jednostavniji način da pregledate naš asortiman i pronađete
            proizvode za svoju proizvodnju. Do tada, naš tim je dostupan za preporuke
            i informacije o ponudi.
          </p>
          <div className="shop-idle__actions">
            <Link to="/kontakt" className="shop-idle__primary">
              Kontaktirajte nas <ArrowForwardRoundedIcon aria-hidden="true" />
            </Link>
            <Link to="/pocetna" className="shop-idle__secondary">Nazad na početnu</Link>
          </div>
        </div>
        <div className="shop-idle__visual" aria-hidden="true">
          <div className="shop-idle__orbit shop-idle__orbit--outer" />
          <div className="shop-idle__orbit shop-idle__orbit--inner" />
          <div className="shop-idle__mark">
            <img src={brandMark} alt="" />
          </div>
          <span>U pripremi</span>
        </div>
      </div>
    </main>
  );
}
