import CategoryPage from "../CategoryPage/CategoryPage";
import premil from "../../../assets/partneri/premil.png";
import frendy from "../../../assets/partneri/frendy.jfif";
import josera from "../../../assets/partneri/josera.png";
import happydog from "../../../assets/partneri/happydog.png";
import whiskas from "../../../assets/partneri/whiskars.png";
import royalcanin from "../../../assets/partneri/royalcanin.png";
import petsLogo from "../../../assets/categories/pet/kucni-White.png";
import petsLogoHovered from "../../../assets/categories/pet/kucni-Green.png";
import equipmentLogo from "../../../assets/categories/pet/oprema-White.png";
import equipmentLogoHovered from "../../../assets/categories/pet/oprema-Green.png";
import livestockLogo from "../../../assets/categories/pet/domace-White.png";
import livestockLogoHovered from "../../../assets/categories/pet/domace-Green.png";

export default function PetFood() {
  return (
    <CategoryPage
      eyebrow="Briga o životinjama"
      title="Pet program i hrana za životinje"
      description="Za kućne ljubimce i domaće životinje biramo kvalitetnu hranu, opremu i proverene programe ishrane prilagođene različitim potrebama."
      items={[
        { heading: "Hrana za kućne ljubimce", iconUrl: petsLogo, hoveredIconUrl: petsLogoHovered },
        { heading: "Oprema za kućne ljubimce", iconUrl: equipmentLogo, hoveredIconUrl: equipmentLogoHovered },
        {
          heading: "Hrana za domaće životinje",
          link: "/hrana-za-domace-zivotinje",
          iconUrl: livestockLogo,
          hoveredIconUrl: livestockLogoHovered,
        },
      ]}
      partners={[
        { src: premil, name: "Premil" },
        { src: frendy, name: "Frendy" },
        { src: josera, name: "Josera" },
        { src: happydog, name: "Happy Dog" },
        { src: whiskas, name: "Whiskas" },
        { src: royalcanin, name: "Royal Canin" },
      ]}
    />
  );
}
