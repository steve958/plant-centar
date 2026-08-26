import CategoryPage from "../CategoryPage/CategoryPage";
import yara from "../../../assets/partneri/yara.png";
import timac from "../../../assets/partneri/timac.png";
import kimitec from "../../../assets/partneri/kimitec.png";
import elixir from "../../../assets/partneri/elixir.png";
import agriitalia from "../../../assets/partneri/agriitalia.jfif";
import fitofert from "../../../assets/partneri/fitofert.png";
import cosmocel from "../../../assets/partneri/cosmocel.png";
import basicLogo from "../../../assets/categories/ishrana/osnovna-White.png";
import basicLogoHovered from "../../../assets/categories/ishrana/osnovna-Green.png";
import cristalLogo from "../../../assets/categories/ishrana/kristalna-White.png";
import cristalLogoHovered from "../../../assets/categories/ishrana/kristalna-Green.png";
import liquidLogo from "../../../assets/categories/ishrana/tecna-White.png";
import liquidLogoHovered from "../../../assets/categories/ishrana/tecna-Green.png";
import microLogo from "../../../assets/categories/ishrana/mikroelementi-White.png";
import microLogoHovered from "../../../assets/categories/ishrana/mikroelementi-Green.png";
import organicLogo from "../../../assets/categories/ishrana/organska-White.png";
import organicLogoHovered from "../../../assets/categories/ishrana/organska-Green.png";
import bioLogo from "../../../assets/categories/ishrana/mikrobioloska-White.png";
import bioLogoHovered from "../../../assets/categories/ishrana/mikrobioloska-Green.png";

export default function CropNutrition() {
  return (
    <CategoryPage
      eyebrow="Ishrana i razvoj"
      title="Sredstva za ishranu bilja"
      description="Pravilna ishrana je temelj stabilnog prinosa. Naš portfolio obuhvata osnovna, specijalizovana i biostimulativna đubriva uz stručnu podršku za odgovornu primenu."
      items={[
        { heading: "Osnovna granulisana đubriva", iconUrl: basicLogo, hoveredIconUrl: basicLogoHovered },
        { heading: "Kristalna vodootopiva đubriva", iconUrl: cristalLogo, hoveredIconUrl: cristalLogoHovered },
        { heading: "Tečna đubriva i biostimulatori", iconUrl: liquidLogo, hoveredIconUrl: liquidLogoHovered },
        { heading: "Đubriva sa mikroelementima", iconUrl: microLogo, hoveredIconUrl: microLogoHovered },
        { heading: "Organska đubriva i poboljšivači", iconUrl: organicLogo, hoveredIconUrl: organicLogoHovered },
        { heading: "Mikrobiološka đubriva", iconUrl: bioLogo, hoveredIconUrl: bioLogoHovered },
      ]}
      partners={[
        { src: yara, name: "Yara" },
        { src: timac, name: "Timac Agro" },
        { src: kimitec, name: "Kimitec" },
        { src: elixir, name: "Elixir" },
        { src: agriitalia, name: "Agriitalia" },
        { src: fitofert, name: "Fitofert" },
        { src: cosmocel, name: "Cosmocel" },
      ]}
    />
  );
}
