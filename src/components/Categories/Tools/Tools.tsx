import "./Tools.css";
import logo1 from "../../../assets/partneri/villager.png";
import logo2 from "../../../assets/partneri/dolomite.jpg";
import logo3 from "../../../assets/partneri/fiskars.png";
import logo4 from "../../../assets/partneri/gerovit.png";
import logo5 from "../../../assets/partneri/eurodrip.jpg";
import logo6 from "../../../assets/partneri/toro.jpg";
import gardenIcon from "../../../assets/icons/white/Icons-V1.4.png";
import CategoryCard from "../CategoryCard/CategoryCard";

export default function Tools() {
    return (
        <div className="category-container">
            <div className="description-wrapper">
                <h3>Garden oprema, alati i repromaterijal</h3>
                <p>
                    U našem programu možete pronaći veliki izbor opreme i alata kao i
                    repromaterijala za poljoprivrednu proizvodnju i opreme za baštu i
                    domaćinstvo.
                </p>
            </div>

            <div className="categories-wrapper">
                <CategoryCard
                    heading="Mašine"
                    link="https://plant-centar.com/#/prodavnica"
                    iconUrl={gardenIcon}
                />
                <CategoryCard
                    heading="Alati"
                    link="https://plant-centar.com/#/prodavnica"
                    iconUrl={gardenIcon}
                />
                <CategoryCard
                    heading="Oprema za navodnjavanje"
                    link="https://plant-centar.com/#/prodavnica"
                    iconUrl={gardenIcon}
                />
                <CategoryCard
                    heading="Folije i veziva"
                    link="https://plant-centar.com/#/prodavnica"
                    iconUrl={gardenIcon}
                />
                <CategoryCard
                    heading="Supstrati, malčevi i zemlja za cveće"
                    link="https://plant-centar.com/#/prodavnica"
                    iconUrl={gardenIcon}
                />
                <CategoryCard
                    heading="Saksije i žardinjere"
                    link="https://plant-centar.com/#/prodavnica"
                    iconUrl={gardenIcon}
                />
                <CategoryCard
                    heading="Baštenski nameštaj"
                    link="https://plant-centar.com/#/prodavnica"
                    iconUrl={gardenIcon}
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
