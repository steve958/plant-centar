import "./Tools.css";
import logo1 from "../../../assets/partneri/villager.png";
import logo2 from "../../../assets/partneri/dolomite.jpg";
import logo3 from "../../../assets/partneri/fiskars.png";
import logo4 from "../../../assets/partneri/gerovit.png";
import logo5 from "../../../assets/partneri/eurodrip.jpg";
import logo6 from "../../../assets/partneri/toro.jpg";
import CategoryCard from "../CategoryCard/CategoryCard";
import machinesLogo from '../../../assets/categories/garden/masine-White.png'
import machinesLogoHovered from '../../../assets/categories/garden/masine-Green.png'
import toolsLogo from '../../../assets/categories/garden/alati-White.png'
import toolsLogoHovered from '../../../assets/categories/garden/alati-Green.png'
import irigationLogo from '../../../assets/categories/garden/navodnjavanje-White.png'
import irigationLogoHovered from '../../../assets/categories/garden/navodnjavanje-Green.png'
import foilsLogo from '../../../assets/categories/garden/folije-White.png'
import foilsLogoHovered from '../../../assets/categories/garden/folije-Green.png'
import substrateLogo from '../../../assets/categories/garden/supstrati-White.png'
import substrateLogoHovered from '../../../assets/categories/garden/supstrati-Green.png'
import potsLogo from '../../../assets/categories/garden/saksije-White.png'
import potsLogoHovered from '../../../assets/categories/garden/saksije-Green.png'
import gardenLogo from '../../../assets/categories/garden/masine-White.png'
import gardenLogoHovered from '../../../assets/categories/garden/masine-Green.png'
import workSuitsLogo from '../../../assets/categories/garden/htz-White.png'
import workSuitsLogoHovered from '../../../assets/categories/garden/htz-Green.png'



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
                    link="https://plant-centar.vercel.app/prodavnica"
                    iconUrl={machinesLogo}
                    hoveredIconUrl={machinesLogoHovered}
                />
                <CategoryCard
                    heading="Alati"
                    link="https://plant-centar.vercel.app/prodavnica"
                    iconUrl={toolsLogo}
                    hoveredIconUrl={toolsLogoHovered}
                />
                <CategoryCard
                    heading="Oprema za navodnjavanje"
                    link="https://plant-centar.vercel.app/prodavnica"
                    iconUrl={irigationLogo}
                    hoveredIconUrl={irigationLogoHovered}
                />
                <CategoryCard
                    heading="Folije i veziva"
                    link="https://plant-centar.vercel.app/prodavnica"
                    iconUrl={foilsLogo}
                    hoveredIconUrl={foilsLogoHovered}
                />
                <CategoryCard
                    heading="Supstrati, malčevi i zemlja za cveće"
                    link="https://plant-centar.vercel.app/prodavnica"
                    iconUrl={substrateLogo}
                    hoveredIconUrl={substrateLogoHovered}
                />
                <CategoryCard
                    heading="Saksije i žardinjere"
                    link="https://plant-centar.vercel.app/prodavnica"
                    iconUrl={potsLogo}
                    hoveredIconUrl={potsLogoHovered}
                />
                <CategoryCard
                    heading="Baštenski nameštaj"
                    link="https://plant-centar.vercel.app/prodavnica"
                    iconUrl={gardenLogo}
                    hoveredIconUrl={gardenLogoHovered}
                />
                <CategoryCard
                    heading="HTZ oprema"
                    link="https://plant-centar.vercel.app/prodavnica"
                    iconUrl={workSuitsLogo}
                    hoveredIconUrl={workSuitsLogoHovered}
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
