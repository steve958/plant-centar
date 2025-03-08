import "./CropProtection.css";
import logo1 from "../../../assets/partneri/basf.png";
import logo2 from "../../../assets/partneri/bayer.png";
import logo3 from "../../../assets/partneri/syngenta.svg";
import logo4 from "../../../assets/partneri/galenika.png";
import logo5 from "../../../assets/partneri/agromarket.jpeg";
import logo6 from "../../../assets/partneri/savacoop.png";
import logo7 from "../../../assets/partneri/agrosava.png";
import logo8 from "../../../assets/partneri/corteva.png";
import herbLogo from '../../../assets/categories/zastita/herbicidi-White.png'
import herbLogoHovered from '../../../assets/categories/zastita/herbicidi-Green.png'
import fungLogo from '../../../assets/categories/zastita/fungicidi-White.png'
import fungLogoHovered from '../../../assets/categories/zastita/fungicidi-Green.png'
import insectLogo from '../../../assets/categories/zastita/insekticidi-White.png'
import insectLogoHovered from '../../../assets/categories/zastita/insekticidi-Green.png'
import organicLogo from '../../../assets/categories/zastita/organski-White.png'
import organicLogoHovered from '../../../assets/categories/zastita/organski-Green.png'
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
                    iconUrl={herbLogo}
                    hoveredIconUrl={herbLogoHovered}
                />
                <CategoryCard
                    heading="Fungicidi"
                    link="https://plant-centar.vercel.app/prodavnica"
                    iconUrl={fungLogo}
                    hoveredIconUrl={fungLogoHovered}
                />
                <CategoryCard
                    heading="Insekticidi"
                    link="https://plant-centar.vercel.app/prodavnica"
                    iconUrl={insectLogo}
                    hoveredIconUrl={insectLogoHovered}
                />
                <CategoryCard
                    heading="Organski preparati"
                    link="https://plant-centar.vercel.app/prodavnica"
                    iconUrl={organicLogo}
                    hoveredIconUrl={organicLogoHovered}
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
