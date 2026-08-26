import CategoryPage from "../CategoryPage/CategoryPage";
import basf from "../../../assets/partneri/basf.png";
import bayer from "../../../assets/partneri/bayer.png";
import syngenta from "../../../assets/partneri/syngenta.svg";
import galenika from "../../../assets/partneri/galenika.png";
import agromarket from "../../../assets/partneri/agromarket.jpeg";
import savacoop from "../../../assets/partneri/savacoop.png";
import agrosava from "../../../assets/partneri/agrosava.png";
import corteva from "../../../assets/partneri/corteva.png";
import herbLogo from "../../../assets/categories/zastita/herbicidi-White.png";
import herbLogoHovered from "../../../assets/categories/zastita/herbicidi-Green.png";
import fungLogo from "../../../assets/categories/zastita/fungicidi-White.png";
import fungLogoHovered from "../../../assets/categories/zastita/fungicidi-Green.png";
import insectLogo from "../../../assets/categories/zastita/insekticidi-White.png";
import insectLogoHovered from "../../../assets/categories/zastita/insekticidi-Green.png";
import organicLogo from "../../../assets/categories/zastita/organski-White.png";
import organicLogoHovered from "../../../assets/categories/zastita/organski-Green.png";

export default function CropProtection() {
  return (
    <CategoryPage
      eyebrow="Zaštita useva"
      title="Sredstva za zaštitu bilja"
      description="U saradnji sa renomiranim proizvođačima i distributerima nudimo širok portfolio preparata za pouzdanu zaštitu useva, uključujući i rešenja registrovana za organsku proizvodnju."
      items={[
        { heading: "Herbicidi", iconUrl: herbLogo, hoveredIconUrl: herbLogoHovered },
        { heading: "Fungicidi", iconUrl: fungLogo, hoveredIconUrl: fungLogoHovered },
        { heading: "Insekticidi", iconUrl: insectLogo, hoveredIconUrl: insectLogoHovered },
        { heading: "Organski preparati", iconUrl: organicLogo, hoveredIconUrl: organicLogoHovered },
      ]}
      partners={[
        { src: basf, name: "BASF" },
        { src: bayer, name: "Bayer" },
        { src: syngenta, name: "Syngenta" },
        { src: galenika, name: "Galenika" },
        { src: agromarket, name: "Agromarket" },
        { src: savacoop, name: "Savacoop" },
        { src: agrosava, name: "Agrosava" },
        { src: corteva, name: "Corteva" },
      ]}
    />
  );
}
