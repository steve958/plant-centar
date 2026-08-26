import GalleryCollection from "../GalleryCollection/GalleryCollection";
import img2 from "../../../assets/fruits/borovnica2.jfif";
import img3 from "../../../assets/fruits/borovnica3.jfif";
import img4 from "../../../assets/fruits/borovnica4.jfif";
import img5 from "../../../assets/fruits/borovnica5.jfif";
import img7 from "../../../assets/fruits/borovnica6.jfif";
import img8 from "../../../assets/fruits/borovnica7.jfif";
import img9 from "../../../assets/fruits/jabuka1.jfif";
import img10 from "../../../assets/fruits/jagoda1.jfif";
import img11 from "../../../assets/fruits/jagoda2.jfif";
import img12 from "../../../assets/fruits/jagoda3.jfif";
import img13 from "../../../assets/fruits/jagoda4.jfif";
import img14 from "../../../assets/fruits/jagoda5.jfif";
import img15 from "../../../assets/fruits/jagoda6.jfif";
import img16 from "../../../assets/fruits/jagoda7.jfif";
import img17 from "../../../assets/fruits/jagoda8.jfif";
import img18 from "../../../assets/fruits/malina1.jfif";
import img19 from "../../../assets/fruits/malina2.jfif";
import img20 from "../../../assets/fruits/malina3.jfif";
import img21 from "../../../assets/fruits/malina4.jfif";
import img22 from "../../../assets/fruits/jagoda9.jpeg";
import img23 from "../../../assets/fruits/jagoda10.jpeg";
import img24 from "../../../assets/fruits/jagoda11.jpeg";
import img25 from "../../../assets/fruits/jagoda12.jfif";

export default function Fruits() {
  return (
    <GalleryCollection
      eyebrow="Rezultati iz zasada"
      title="Voćarska proizvodnja"
      description="Borovnica, jagoda, malina i druge kulture kroz različite faze razvoja i proizvodne sezone."
      images={[
        img2, img3, img4, img5, img7, img8, img9, img10, img11, img12, img13,
        img14, img15, img16, img17, img22, img23, img24, img25, img18, img19, img20, img21,
      ]}
      imageAlt="Voćarska proizvodnja"
    />
  );
}
