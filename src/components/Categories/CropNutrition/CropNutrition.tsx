import "./CropNutrition.css";
import logo1 from "../../../assets/partneri/yara.png";
import logo2 from "../../../assets/partneri/timac.png";
import logo3 from "../../../assets/partneri/kimitec.png";
import logo4 from "../../../assets/partneri/elixir.png";
import logo5 from "../../../assets/partneri/agriitalia.jfif";
import logo6 from "../../../assets/partneri/fitofert.png";
import logo7 from "../../../assets/partneri/cosmocel.png";
import basicLogo from '../../../assets/categories/ishrana/osnovna-White.png'
import basicLogoHovered from '../../../assets/categories/ishrana/osnovna-Green.png'
import cristalLogo from '../../../assets/categories/ishrana/kristalna-White.png'
import cristalLogoHovered from '../../../assets/categories/ishrana/kristalna-Green.png'
import liquidLogo from '../../../assets/categories/ishrana/tecna-White.png'
import liquidLogoHovered from '../../../assets/categories/ishrana/tecna-Green.png'
import microLogo from '../../../assets/categories/ishrana/mikroelementi-White.png'
import microLogoHovered from '../../../assets/categories/ishrana/mikroelementi-Green.png'
import organicLogo from '../../../assets/categories/ishrana/organska-White.png'
import organicLogoHovered from '../../../assets/categories/ishrana/organska-Green.png'
import bioLogo from '../../../assets/categories/ishrana/mikrobioloska-White.png'
import bioLogoHovered from '../../../assets/categories/ishrana/mikrobioloska-Green.png'
import CategoryCard from "../CategoryCard/CategoryCard";

export default function CropNutrition() {
    return (
        <div className="category-container">
            <div className="description-wrapper">
                <h3>Sredstva za ishranu bilja</h3>
                <p>
                    Pravilna ishrana bilja predstavlja temelj za uzgoj većine kultura, dok
                    savremena poljoprivredna proizvodnja pod uticajem klimatskih promena
                    iziskuju sve više znanja iz ove oblasti kao i odgovorniju manipulaciju
                    đubrivima. U našem portfoliju možete pronaći širok izbor kako osnovnih
                    đubriva, tako i kristalnih specijalizovanih i biostimulativnih
                    preparata.
                </p>
            </div>

            <div className="categories-wrapper">
                <CategoryCard
                    heading="Osnovna granulisana đubriva"
                    link="https://plant-centar.vercel.app/prodavnica"
                    iconUrl={basicLogo}
                    hoveredIconUrl={basicLogoHovered}
                />
                <CategoryCard
                    heading="Kristalna vodootopiva đubriva"
                    link="https://plant-centar.vercel.app/prodavnica"
                    iconUrl={cristalLogo}
                    hoveredIconUrl={cristalLogoHovered}
                />
                <CategoryCard
                    heading="Tečna đubriva i biostimulatori"
                    link="https://plant-centar.vercel.app/prodavnica"
                    iconUrl={liquidLogo}
                    hoveredIconUrl={liquidLogoHovered}
                />
                <CategoryCard
                    heading="Đubriva na bazi mikroelemenata"
                    link="https://plant-centar.vercel.app/prodavnica"
                    iconUrl={microLogo}
                    hoveredIconUrl={microLogoHovered}
                />
                <CategoryCard
                    heading="Organska đubriva i poboljšivači zemljišta"
                    link="https://plant-centar.vercel.app/prodavnica"
                    iconUrl={organicLogo}
                    hoveredIconUrl={organicLogoHovered}
                />
                <CategoryCard
                    heading="Mikrobiološka đubriva"
                    link="https://plant-centar.vercel.app/prodavnica"
                    iconUrl={bioLogo}
                    hoveredIconUrl={bioLogoHovered}
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
                    <img src={logo7} alt="" />

                    {/* Second set of the same logos for seamless looping */}
                    <img src={logo1} alt="" />
                    <img src={logo2} alt="" />
                    <img src={logo3} alt="" />
                    <img src={logo4} alt="" />
                    <img src={logo5} alt="" />
                    <img src={logo6} alt="" />
                    <img src={logo7} alt="" />
                </div>
            </div>
        </div>
    );
}
