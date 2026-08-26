import GalleryCollection from "../GalleryCollection/GalleryCollection";
import img1 from "../../../assets/firma/firma1.jpg";
import img2 from "../../../assets/store.jpg";
import img3 from "../../../assets/firma/firma3.jfif";
import img4 from "../../../assets/firma/firma4.jfif";
import img5 from "../../../assets/firma/radnja1.jfif";
import img6 from "../../../assets/firma/radnja2.jfif";
import img7 from "../../../assets/firma/radnja3.jfif";
import img8 from "../../../assets/firma/radnja4.jfif";
import img9 from "../../../assets/firma/radnja5.jfif";

export default function Company() {
  return (
    <GalleryCollection
      eyebrow="Plant Centar izbliza"
      title="Naši prodajni objekti"
      description="Zavirite u prostor u kom se svakodnevno susreću stručni savet, provereni proizvodi i potrebe naših kupaca."
      images={[img1, img2, img3, img4, img5, img6, img7, img8, img9]}
      imageAlt="Prodajni objekat Plant Centra"
    />
  );
}
