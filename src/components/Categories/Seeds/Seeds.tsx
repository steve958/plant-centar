import CategoryPage from "../CategoryPage/CategoryPage";
import konus from "../../../assets/partneri/konus.png";
import zp from "../../../assets/partneri/zp.png";
import seminis from "../../../assets/partneri/seminis.jpg";
import bc from "../../../assets/partneri/bc.png";
import kws from "../../../assets/partneri/kws.png";
import bejo from "../../../assets/partneri/bejo.png";
import wheatLogo from "../../../assets/categories/seme/ratarske-White.png";
import wheatLogoHovered from "../../../assets/categories/seme/ratarske-Green.png";
import vegetablesLogo from "../../../assets/categories/seme/povrce-White.png";
import vegetablesLogoHovered from "../../../assets/categories/seme/povrce-Green.png";
import fruitsLogo from "../../../assets/categories/seme/voce-White.png";
import fruitsLogoHovered from "../../../assets/categories/seme/voce-Green.png";
import flowersLogo from "../../../assets/categories/seme/ukrasno-White.png";
import flowersLogoHovered from "../../../assets/categories/seme/ukrasno-Green.png";

export default function Seeds() {
  return (
    <CategoryPage
      eyebrow="Siguran početak"
      title="Semenska roba"
      description="Kvalitetno seme i sadni materijal postavljaju osnovu uspešne proizvodnje. Biramo proverene sorte za ratarsku, povrtarsku, voćarsku i ukrasnu proizvodnju."
      items={[
        { heading: "Seme ratarskih kultura", iconUrl: wheatLogo, hoveredIconUrl: wheatLogoHovered },
        { heading: "Seme povrtarskih kultura", iconUrl: vegetablesLogo, hoveredIconUrl: vegetablesLogoHovered },
        { heading: "Sadnice ukrasnog bilja", iconUrl: flowersLogo, hoveredIconUrl: flowersLogoHovered },
        { heading: "Sadnice voća", iconUrl: fruitsLogo, hoveredIconUrl: fruitsLogoHovered },
      ]}
      partners={[
        { src: konus, name: "Konus Glorija" },
        { src: zp, name: "ZP" },
        { src: seminis, name: "Seminis" },
        { src: bc, name: "BC Institut" },
        { src: kws, name: "KWS" },
        { src: bejo, name: "Bejo" },
      ]}
    />
  );
}
