import CategoryPage from "../CategoryPage/CategoryPage";
import villager from "../../../assets/partneri/villager.png";
import dolomite from "../../../assets/partneri/dolomite.jpg";
import fiskars from "../../../assets/partneri/fiskars.png";
import gerovit from "../../../assets/partneri/gerovit.png";
import eurodrip from "../../../assets/partneri/eurodrip.jpg";
import toro from "../../../assets/partneri/toro.jpg";
import machinesLogo from "../../../assets/categories/garden/masine-White.png";
import machinesLogoHovered from "../../../assets/categories/garden/masine-Green.png";
import toolsLogo from "../../../assets/categories/garden/alati-White.png";
import toolsLogoHovered from "../../../assets/categories/garden/alati-Green.png";
import irrigationLogo from "../../../assets/categories/garden/navodnjavanje-White.png";
import irrigationLogoHovered from "../../../assets/categories/garden/navodnjavanje-Green.png";
import foilsLogo from "../../../assets/categories/garden/folije-White.png";
import foilsLogoHovered from "../../../assets/categories/garden/folije-Green.png";
import substrateLogo from "../../../assets/categories/garden/supstrati-White.png";
import substrateLogoHovered from "../../../assets/categories/garden/supstrati-Green.png";
import potsLogo from "../../../assets/categories/garden/saksije-White.png";
import potsLogoHovered from "../../../assets/categories/garden/saksije-Green.png";
import workSuitsLogo from "../../../assets/categories/garden/htz-White.png";
import workSuitsLogoHovered from "../../../assets/categories/garden/htz-Green.png";

export default function Tools() {
  return (
    <CategoryPage
      eyebrow="Oprema za svaki zadatak"
      title="Garden program"
      description="Na jednom mestu pronađite opremu, alate i repromaterijal za poljoprivrednu proizvodnju, baštu i domaćinstvo."
      items={[
        { heading: "Mašine", iconUrl: machinesLogo, hoveredIconUrl: machinesLogoHovered },
        { heading: "Alati", iconUrl: toolsLogo, hoveredIconUrl: toolsLogoHovered },
        { heading: "Oprema za navodnjavanje", iconUrl: irrigationLogo, hoveredIconUrl: irrigationLogoHovered },
        { heading: "Folije i veziva", iconUrl: foilsLogo, hoveredIconUrl: foilsLogoHovered },
        { heading: "Supstrati, malčevi i zemlja", iconUrl: substrateLogo, hoveredIconUrl: substrateLogoHovered },
        { heading: "Saksije i žardinjere", iconUrl: potsLogo, hoveredIconUrl: potsLogoHovered },
        { heading: "Baštenski nameštaj", iconUrl: machinesLogo, hoveredIconUrl: machinesLogoHovered },
        { heading: "HTZ oprema", iconUrl: workSuitsLogo, hoveredIconUrl: workSuitsLogoHovered },
      ]}
      partners={[
        { src: villager, name: "Villager" },
        { src: dolomite, name: "Dolomite" },
        { src: fiskars, name: "Fiskars" },
        { src: gerovit, name: "Gerovit" },
        { src: eurodrip, name: "Eurodrip" },
        { src: toro, name: "Toro" },
      ]}
    />
  );
}
