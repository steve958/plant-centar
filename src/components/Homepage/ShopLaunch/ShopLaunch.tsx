import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";
import LocalOfferOutlinedIcon from "@mui/icons-material/LocalOfferOutlined";
import LocalShippingOutlinedIcon from "@mui/icons-material/LocalShippingOutlined";
import PersonOffOutlinedIcon from "@mui/icons-material/PersonOffOutlined";
import SupportAgentOutlinedIcon from "@mui/icons-material/SupportAgentOutlined";
import { SHOP_URL } from "../../../data/shop";
import protectionIcon from "../../../assets/categories/zastita/insekticidi-White.png";
import nutritionIcon from "../../../assets/categories/ishrana/kristalna-White.png";
import seedIcon from "../../../assets/categories/seme/povrce-White.png";
import gardenIcon from "../../../assets/categories/garden/alati-White.png";
import "./ShopLaunch.css";

const perks = [
    { icon: <PersonOffOutlinedIcon />, label: "Kupovina bez registracije" },
    { icon: <LocalOfferOutlinedIcon />, label: "Proizvodi na akciji" },
    { icon: <LocalShippingOutlinedIcon />, label: "Dostava širom Srbije" },
    { icon: <SupportAgentOutlinedIcon />, label: "Stručna podrška" },
];

const previewCategories = [
    { label: "Zaštita bilja", icon: protectionIcon },
    { label: "Ishrana bilja", icon: nutritionIcon },
    { label: "Seme i sadnice", icon: seedIcon },
    { label: "Garden program", icon: gardenIcon },
];

/** Homepage announcement for the newly launched web shop. */
export default function ShopLaunch() {
    return (
        <section className="shop-launch" aria-labelledby="shop-launch-title">
            <div className="shop-launch__shell">
                <div className="shop-launch__copy">
                    <span className="shop-launch__badge">
                        <span aria-hidden="true" /> Novo · Online prodavnica
                    </span>
                    <h2 id="shop-launch-title">
                        Plant Centar web shop je <em>otvoren</em>
                    </h2>
                    <p>
                        Kompletan asortiman za zaštitu i ishranu bilja, seme, sadnice i garden
                        program sada možete pregledati i poručiti online — brzo, jednostavno i
                        uz podršku našeg stručnog tima.
                    </p>

                    <ul className="shop-launch__perks">
                        {perks.map((perk) => (
                            <li key={perk.label}>
                                <span aria-hidden="true">{perk.icon}</span>
                                {perk.label}
                            </li>
                        ))}
                    </ul>

                    <div className="shop-launch__actions">
                        <a className="shop-launch__primary" href={SHOP_URL}>
                            Posetite web shop <ArrowForwardRoundedIcon aria-hidden="true" />
                        </a>
                        <a className="shop-launch__secondary" href={`${SHOP_URL}/početna#akcija`}>
                            Pogledajte akcije
                        </a>
                    </div>
                </div>

                <a className="shop-launch__visual" href={SHOP_URL} aria-label="Otvorite Plant Centar web shop" tabIndex={-1}>
                    <div className="shop-launch__window" aria-hidden="true">
                        <div className="shop-launch__window-bar">
                            <span /><span /><span />
                            <div className="shop-launch__url">shop-plantcentar.com</div>
                        </div>
                        <div className="shop-launch__window-body">
                            <div className="shop-launch__window-heading">
                                <strong>Izaberite program</strong>
                                <i />
                            </div>
                            <div className="shop-launch__tiles">
                                {previewCategories.map((category) => (
                                    <div className="shop-launch__tile" key={category.label}>
                                        <img src={category.icon} alt="" loading="lazy" decoding="async" />
                                        <strong>{category.label}</strong>
                                        <i />
                                        <i className="short" />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="shop-launch__float shop-launch__float--sale" aria-hidden="true">
                        <LocalOfferOutlinedIcon /> Akcija
                    </div>
                    <div className="shop-launch__float shop-launch__float--cart" aria-hidden="true">
                        <LocalShippingOutlinedIcon /> Poručite online
                    </div>
                </a>
            </div>
        </section>
    );
}
