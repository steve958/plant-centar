import { useEffect } from "react";
import { Link } from "react-router-dom";
import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";
import StorefrontOutlinedIcon from "@mui/icons-material/StorefrontOutlined";
import brandMark from "../../../assets/plant-centar-znak.svg";
import { SHOP_URL } from "../../../data/shop";
import "./ShopIdle.css";

/** Old /prodavnica links now forward to the live web shop. */
export default function ShopIdle() {
  useEffect(() => {
    window.location.replace(SHOP_URL);
  }, []);

  return (
    <main className="shop-idle">
      <div className="shop-idle__shell">
        <div className="shop-idle__content">
          <span className="shop-idle__kicker">
            <StorefrontOutlinedIcon aria-hidden="true" /> Prodavnica
          </span>
          <h1>Preusmeravamo vas u online prodavnicu.</h1>
          <p>
            Naš kompletan asortiman pronađite u Plant Centar web shopu. Ako se stranica
            ne otvori automatski, kliknite na dugme ispod.
          </p>
          <div className="shop-idle__actions">
            <a href={SHOP_URL} className="shop-idle__primary">
              Otvorite web shop <ArrowForwardRoundedIcon aria-hidden="true" />
            </a>
            <Link to="/pocetna" className="shop-idle__secondary">Nazad na početnu</Link>
          </div>
        </div>
        <div className="shop-idle__visual" aria-hidden="true">
          <div className="shop-idle__orbit shop-idle__orbit--outer" />
          <div className="shop-idle__orbit shop-idle__orbit--inner" />
          <div className="shop-idle__mark">
            <img src={brandMark} alt="" />
          </div>
          <span>Web shop</span>
        </div>
      </div>
    </main>
  );
}
