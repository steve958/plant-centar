import { useNavigate } from "react-router-dom";
import "./NeedHelp.css";
import helpImage from "../../../assets/protect.jpg";

export default function NeedHelp() {
    const navigate = useNavigate();

    return (
        <section className="need-help-section" aria-labelledby="need-help-title">
            <div className="need-help-shell">
                <div className="need-help-visual">
                    <img
                        src={helpImage}
                        alt="Mlada biljka u rukama agronoma"
                        className="help-img"
                    />
                    <div className="need-help-image-label">
                        <span aria-hidden="true"></span>
                        Znanje koje donosi rezultat
                    </div>
                </div>

                <div className="promo-banner">
                    <span className="need-help-kicker">Stručna podrška</span>
                    <h2 id="need-help-title">Potrebna vam je pomoć u proizvodnji?</h2>
                    <p>
                        Naš tim čine iskusni agronomi, spremni da saslušaju vaše potrebe
                        i odgovore na izazove sa kojima se susrećete.
                    </p>

                    <ul className="need-help-benefits">
                        <li><span aria-hidden="true">✓</span> Praktični saveti stručnog tima</li>
                        <li><span aria-hidden="true">✓</span> Rešenja prilagođena vašoj proizvodnji</li>
                    </ul>

                    <button
                        type="button"
                        onClick={() => navigate("/kontakt")}
                        className="learn-more-btn"
                    >
                        Kontaktirajte nas <span aria-hidden="true">→</span>
                    </button>
                </div>
            </div>
        </section>
    );
}
