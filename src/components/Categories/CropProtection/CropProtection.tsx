import "./CropProtection.css";
import logo1 from "../../../assets/partneri/basf.png";
import logo2 from "../../../assets/partneri/bayer.png";
import logo3 from "../../../assets/partneri/syngenta.svg";
import logo4 from "../../../assets/partneri/galenika.png";
import logo5 from "../../../assets/partneri/agromarket.jpeg";

export default function CropProtection() {
    return (
        <div className="category-container">
            <div className="description-wrapper">
                <h3>Sredstva za zaštitu bilja</h3>
                <p>
                    Zahvaljujuci saradnji sa renomiranim proizvodjacima I distributerima, u
                    nasoj ponudi nalazi se sirok portfolio sredstava za zastitu I ishranu bilja, a
                    takodje I preparata registrovanih za organsku proizvodnju, za koje
                    smatramo da predtavljaju buducnost u odrzivosti proizvodnje.
                </p>
            </div>
            <div className="partners-wrapper">
                <img src={logo1} alt="" />
                <img src={logo2} alt="" />
                <img src={logo3} alt="" />
                <img src={logo4} alt="" />
                <img src={logo5} alt="" />
            </div>
            <div></div>
        </div>
    );
}
