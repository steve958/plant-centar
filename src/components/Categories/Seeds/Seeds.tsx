import "./Seeds.css";
import logo1 from "../../../assets/partneri/konus.png";
import logo2 from "../../../assets/partneri/zp.png";
import logo3 from "../../../assets/partneri/seminis.jpg";
import logo4 from "../../../assets/partneri/bc.png";
import logo5 from "../../../assets/partneri/kws.png";
import logo6 from "../../../assets/partneri/bejo.png";
import CategoryCard from "../CategoryCard/CategoryCard";
import wheatLogo from '../../../assets/categories/seme/ratarske-White.png'
import wheatLogoHovered from '../../../assets/categories/seme/ratarske-Green.png'
import vegetablesLogo from '../../../assets/categories/seme/povrce-White.png'
import vegetablesLogoHovered from '../../../assets/categories/seme/povrce-Green.png'
import fruitsLogo from '../../../assets/categories/seme/voce-White.png'
import fruitsLogoHovered from '../../../assets/categories/seme/voce-Green.png'
import flowersLogo from '../../../assets/categories/seme/ukrasno-White.png'
import flowersLogoHovered from '../../../assets/categories/seme/ukrasno-Green.png'


export default function Seeds() {
    return (
        <div className="category-container">
            <div className="description-wrapper">
                <h3>Semenska roba</h3>
                <p>
                    Semenska roba kao i sadni materijal predstavljaju osnovu uzgoja većine
                    poljoprivrednih kultura. Shodno tome, našim saradnicima omogućili smo
                    širok izbor semena za ratarsku i povrtarsku proizvodnju, kao i sadnice
                    voćarskih kultura i ukrasnog bilja za uređenje pejzaža.
                </p>
            </div>

            <div className="categories-wrapper">
                <CategoryCard
                    heading="Seme ratarskih kultura"
                    link="https://plant-centar.vercel.app/prodavnica"
                    iconUrl={wheatLogo}
                    hoveredIconUrl={wheatLogoHovered}
                />
                <CategoryCard
                    heading="Seme povrtarskih kultura"
                    link="https://plant-centar.vercel.app/prodavnica"
                    iconUrl={vegetablesLogo}
                    hoveredIconUrl={vegetablesLogoHovered}
                />
                <CategoryCard
                    heading="Sadnice ukrasnog bilja"
                    link="https://plant-centar.vercel.app/prodavnica"
                    iconUrl={flowersLogo}
                    hoveredIconUrl={flowersLogoHovered}
                />
                <CategoryCard
                    heading="Sadnice voća"
                    link="https://plant-centar.vercel.app/prodavnica"
                    iconUrl={fruitsLogo}
                    hoveredIconUrl={fruitsLogoHovered}
                />
            </div>

            {/* Infinite Scrolling Carousel */}
            <div className="partners-wrapper">
                <div className="partners-track">
                    {/* First set of logos */}
                    <img src={logo1} alt="" />
                    <img src={logo2} alt="" />
                    <img src={logo3} alt="" />
                    <img src={logo4} alt="" />
                    <img src={logo5} alt="" />
                    <img src={logo6} alt="" />

                    {/* Second set of the same logos */}
                    <img src={logo1} alt="" />
                    <img src={logo2} alt="" />
                    <img src={logo3} alt="" />
                    <img src={logo4} alt="" />
                    <img src={logo5} alt="" />
                    <img src={logo6} alt="" />
                </div>
            </div>
        </div>
    );
}
