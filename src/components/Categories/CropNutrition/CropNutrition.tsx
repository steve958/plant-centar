import "./CropNutrition.css";
import logo1 from "../../../assets/partneri/yara.png";
import logo2 from "../../../assets/partneri/timac.png";
import logo3 from "../../../assets/partneri/kimitec.png";
import logo4 from "../../../assets/partneri/elixir.png";
import logo5 from "../../../assets/partneri/agriitalia.jfif";
import logo6 from "../../../assets/partneri/fitofert.png";
import logo7 from "../../../assets/partneri/cosmocel.png";
import nutritionLogo from "../../../assets/icons/white/Icons-PSD-V2.18.png";
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
                    link="https://plant-centar.vercel.app/#/prodavnica"
                    iconUrl={nutritionLogo}
                />
                <CategoryCard
                    heading="Kristalna vodootopiva đubriva"
                    link="https://plant-centar.vercel.app/#/prodavnica"
                    iconUrl={nutritionLogo}
                />
                <CategoryCard
                    heading="Tečna đubriva i biostimulatori"
                    link="https://plant-centar.vercel.app/#/prodavnica"
                    iconUrl={nutritionLogo}
                />
                <CategoryCard
                    heading="Mikroelementarna đubriva"
                    link="https://plant-centar.vercel.app/#/prodavnica"
                    iconUrl={nutritionLogo}
                />
                <CategoryCard
                    heading="Organska đubriva i poboljšivači zemljišta"
                    link="https://plant-centar.vercel.app/#/prodavnica"
                    iconUrl={nutritionLogo}
                />
                <CategoryCard
                    heading="Mikrobiološka đubriva"
                    link="https://plant-centar.vercel.app/#/prodavnica"
                    iconUrl={nutritionLogo}
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
