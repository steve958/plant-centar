import "./CropProtection.css";
import logo1 from "../../../assets/partneri/basf.png";
import logo2 from "../../../assets/partneri/bayer.png";
import logo3 from "../../../assets/partneri/syngenta.svg";
import logo4 from "../../../assets/partneri/galenika.png";
import logo5 from "../../../assets/partneri/agromarket.jpeg";
import logo6 from "../../../assets/partneri/savacoop.png";
import logo7 from "../../../assets/partneri/agrosava.png";
import logo8 from "../../../assets/partneri/corteva.png";
import protectionLogo from '../../../assets/icons/white/Icons-V1.3.png'
import CategoryCard from "../CategoryCard/CategoryCard";


export default function CropProtection() {
    return (
        <div className="category-container">
            <div className="description-wrapper">
                <h3>Sredstva za zaštitu bilja</h3>
                <p>
                    Zahvaljujući saradnji sa renomiranim proizvođačima I distributerima, u
                    našoj ponudi nalazi se širok portfolio sredstava za zaštitu I ishranu bilja, a
                    takođe i preparata registrovanih za organsku proizvodnju, za koje
                    smatramo da predstavljaju budućnost u održivosti proizvodnje.
                </p>
            </div>
            <div className="categories-wrapper">
                <CategoryCard
                    heading="Herbicidi"
                    link="https://plant-centar.vercel.app/prodavnica"
                    iconUrl={protectionLogo}
                />
                <CategoryCard
                    heading="Fungicidi"
                    link="https://plant-centar.vercel.app/prodavnica"
                    iconUrl={protectionLogo}
                />
                <CategoryCard
                    heading="Insekticidi"
                    link="https://plant-centar.vercel.app/prodavnica"
                    iconUrl={protectionLogo}
                />
                <CategoryCard
                    heading="Organski preparati"
                    link="https://plant-centar.vercel.app/prodavnica"
                    iconUrl={protectionLogo}
                />
            </div>
            <div className="partners-wrapper">
                <div className="partners-track">
                    {/* First set of logos */}
                    <img src={logo1} alt="ups" />
                    <img src={logo2} alt="ups" />
                    <img src={logo3} alt="ups" />
                    <img src={logo4} alt="ups" />
                    <img src={logo5} alt="ups" />
                    <img src={logo6} alt="ups" />
                    <img src={logo7} alt="ups" />
                    <img src={logo8} alt="ups" />

                    {/* Second set of the same logos for seamless looping */}
                    <img src={logo1} alt="ups" />
                    <img src={logo2} alt="ups" />
                    <img src={logo3} alt="ups" />
                    <img src={logo4} alt="ups" />
                    <img src={logo5} alt="ups" />
                    <img src={logo6} alt="ups" />
                    <img src={logo7} alt="ups" />
                    <img src={logo8} alt="ups" />
                </div>
            </div>
            <div></div>
        </div>
    );
}
