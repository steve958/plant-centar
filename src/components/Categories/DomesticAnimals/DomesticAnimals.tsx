import CategoryPage from "../CategoryPage/CategoryPage";
import gebi from "../../../assets/partneri/gebi.svg";
import livestockLogo from "../../../assets/categories/pet/domace-White.png";
import livestockLogoHovered from "../../../assets/categories/pet/domace-Green.png";

export default function DomesticAnimals() {
  return (
    <CategoryPage
      eyebrow="Pouzdana ishrana"
      title="Hrana za domaće životinje"
      description="U saradnji sa kompanijom Gebi nudimo kvalitetnu hranu za različite vrste domaćih životinja, uz podršku pri izradi odgovarajućeg programa ishrane."
      items={[
        {
          heading: "Programi ishrane domaćih životinja",
          description: "Razgovarajte sa našim timom o potrebama vašeg gazdinstva.",
          link: "/kontakt",
          iconUrl: livestockLogo,
          hoveredIconUrl: livestockLogoHovered,
        },
      ]}
      partners={[{ src: gebi, name: "Gebi" }]}
      note="Stručna podrška pri izboru hrane i izradi plana ishrane."
    />
  );
}
