import { useEffect, useState, useRef } from "react";
import crops from "../../../assets/crops.jpg";
import blueberry from "../../../assets/blueberry.jpg";
import "./Carousel.css";
import Button from "@mui/material/Button";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import dogs from "../../../assets/psi.jpg";
import sustainable from "../../../assets/odrzivo.jpg";
import sustainable1 from "../../../assets/odrzivo2.jpg";

export default function Carousel() {
  const carousel = [
    {
      image: crops,
      heading: "Priroda i zemljište",
      moreInfo:
        "Priroda predstavlja biljni i životinjski svet koji nas okružuje, kao i nas same. Sam život ne bi bio moguć bez našeg najvrednijeg resursa a to je zemljište, koje je vekovima i milenijumima oblikuje naš živi svet. Poljoprivredna proizvodnja ne bi bila moguća bez kvalitetnih obradivih površina, samim tim manipulacija istim predstavlja ključnu tačku u održivosti poljoprivredne proizvodnje.",
    },
    {
      image: sustainable1,
      heading: "Tehnologija gajenja",
      moreInfo:
        "Savremena poljoprivreda zahteva i savremena tehnološka rešenja gajenja bilja. Novi hibridi i sorte prilagođeni savremenim vremenskim uticajima predstavljaju polaznu tačku, dok novija rešenja u oblastima zaštite i ishrane bilja nadopunjuju čitavu tehnologiju u cilju dobijanja maksimalnog potencijala gajenih biljaka.",
    },
    {
      image: blueberry,
      heading: "Intezivni uzgoj voća",
      moreInfo:
        "U našoj zemlji poslednih godina zastupljena je ekspanzija useva i zasada po najnovijim konrolisanim sistemima gajenja. Borovnica se pokazala kao pionir i kao kultura koja je postala naš svojevrsni brend, dok se u tom pravcu ide i u gajenju ostalih kultura poput jagode i maline, a takođe i raznih povrtarskih kultura. Poznavanje fiziologije i potreba u gajenju ovih kultura predstavlja iskorak u budućnost poljoprivrede i oblast gde se mi kao kompanija uspešno pronalazimo.",
    },
    {
      image: sustainable,
      heading: "Zaštita životne sredine",
      moreInfo: "Svedoci smo sve izraženijih klimatskih promena prethodnu deceniju, što je svakao utiče na život gajenih biljaka, ostalog živog sveta a i nas samih. Promenom pristupa u svim oblastima života a naravno i u poljoprivredi možemo uticati na smanjenje štetnih uticaja. Upotrebom ekoloških preparata, doziranom primenom pesticida i đubriva kao i zbrinjavanjem prazne ambalaže trudimo se da doprinesemo ublažavanju ovog globalnog problema, na kom je potrebno još više i udruženo raditi.",
    },
    {
      image: dogs,
      heading: "Briga, ishrana i oprema za životinje",
      moreInfo: "Gajenje životinja i prilagođavanje raznoraznim potrebama zastupljeno je od samog nastanka civilizacije, a takođe i briga o njima. Kvalitetna hrana i oprema, danas predstavljaju glavne preduslove za održavanje životinja zdravim i srećnim bez obzira da li ih gajili za profesionalnu potrebu ili lično zadovoljstvo u druženju sa njima.",
    },
  ];

  const [selectedItem, setSelectedItem] = useState<number>(0);
  const [showText, setShowText] = useState<boolean>(false);
  const [moreInfoClicked, setMoreInfoClicked] = useState<boolean>(false);

  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (!moreInfoClicked) {
      startCarousel();
    }
    return () => terminateInterval();
  }, [moreInfoClicked]);

  useEffect(() => {
    showTextTimeout();
    return () => clearShowTextTimeout();
  }, [selectedItem]);

  const startCarousel = () => {
    intervalRef.current = setInterval(() => {
      changeSelectedItem(1);
      setShowText(false);
    }, 10000);
  };

  const terminateInterval = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  const showTextTimeout = () => {
    timeoutRef.current = setTimeout(() => {
      setShowText(true);
    }, 2000);
  };

  const clearShowTextTimeout = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
  };

  const moreInfo = () => {
    setMoreInfoClicked(true);
    setShowText(false);
    terminateInterval();

    // Reset moreInfoClicked after 15 seconds
    setTimeout(() => {
      setMoreInfoClicked(false);
      startCarousel(); // Restart carousel after 15 seconds
    }, 15000);
  };

  const changeSelectedItem = (direction: number) => {
    setSelectedItem(
      (prevSelectedItem) => (prevSelectedItem + direction + carousel.length) % carousel.length
    );
  };

  return (
    <div className="carousel-container">
      {carousel.map((item, index) => (
        <img
          key={index}
          src={item.image}
          alt={item.heading}
          className={index === selectedItem ? "active" : "inactive"}
        />
      ))}
      <ArrowBackIosNewIcon
        className="carousel-arrow-left"
        onClick={() => changeSelectedItem(-1)}
      />
      <ArrowForwardIosIcon
        className="carousel-arrow-right"
        onClick={() => changeSelectedItem(1)}
      />
      {showText && !moreInfoClicked && (
        <div className="carousel-item">
          <p className="carousel-heading">{carousel[selectedItem].heading}</p>
          <Button variant="contained" className="carousel-button" onClick={moreInfo}>
            Više informacija
          </Button>
        </div>
      )}
      {moreInfoClicked && (
        <div className="more-info-text">
          <p>{carousel[selectedItem].moreInfo}</p>
        </div>
      )}
    </div>
  );
}