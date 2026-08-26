import GalleryCollection from "../GalleryCollection/GalleryCollection";
import img1 from "../../../assets/vegetables/paprika1.jfif";
import img3 from "../../../assets/vegetables/paprika3.jfif";
import img4 from "../../../assets/vegetables/paprika4.jfif";
import img5 from "../../../assets/vegetables/paradjaz1.jfif";
import img6 from "../../../assets/vegetables/rasad1.jfif";
import img7 from "../../../assets/vegetables/rasad2.jfif";
import img8 from "../../../assets/vegetables/rasad3.jfif";
import img9 from "../../../assets/vegetables/sargarepa1.jfif";
import img10 from "../../../assets/vegetables/zasad1.jpg";
import img11 from "../../../assets/vegetables/zasad2.jpg";
import img12 from "../../../assets/vegetables/kupus1.jfif";
import img13 from "../../../assets/vegetables/kupus2.jfif";
import img14 from "../../../assets/vegetables/kupus3.jfif";
import img15 from "../../../assets/vegetables/keleraba1.jfif";

export default function Vegetables() {
  return (
    <GalleryCollection
      eyebrow="Proizvodnja na terenu"
      title="Povrtarska proizvodnja"
      description="Rasad, zasadi i povrtarske kulture kroz rad naših saradnika i različite uslove proizvodnje."
      images={[img1, img3, img4, img5, img6, img7, img8, img9, img10, img11, img12, img13, img14, img15]}
      imageAlt="Povrtarska proizvodnja"
    />
  );
}
