import agromarket from "../assets/partneri/agromarket.jpeg";
import savacoop from "../assets/partneri/savacoop.png";
import gebi from "../assets/partneri/gebi.svg";
import arum from "../assets/partneri/arum.jpeg";
import agrosava from "../assets/partneri/agrosava.png";
import basf from "../assets/partneri/basf.png";
import corteva from "../assets/partneri/corteva.png";
import elixir from "../assets/partneri/elixir.png";
import villager from "../assets/partneri/villager.png";
import konus from "../assets/partneri/konus.png";
import fertico from "../assets/campaign/fertico-logo.webp";
import agriFortis from "../assets/campaign/agri-fortis-logo-white.svg";
import agrimatco from "../assets/campaign/agrimatco-logo.svg";
import galenika from "../assets/partneri/galenika.png";

export interface TrustedPartner {
  src: string;
  href: string;
  name: string;
  category: string;
  description: string;
  scale?: number;
  theme?: "dark";
}

export const trustedPartners: TrustedPartner[] = [
  {
    src: agromarket,
    href: "https://www.agromarketsrbija.rs/srb",
    name: "Agromarket",
    category: "Poljoprivredni program",
    description: "Širok portfolio rešenja za poljoprivredu, baštu i profesionalnu proizvodnju.",
  },
  {
    src: savacoop,
    href: "https://savacoop.rs/",
    name: "Savacoop",
    category: "Zaštita i ishrana bilja",
    description: "Pouzdana rešenja namenjena savremenoj i odgovornoj biljnoj proizvodnji.",
    scale: 1.12,
  },
  {
    src: gebi,
    href: "https://www.gebi.rs/",
    name: "Gebi",
    category: "Hrana za životinje",
    description: "Proveren program za ishranu domaćih životinja i kućnih ljubimaca.",
    scale: 0.72,
  },
  {
    src: arum,
    href: "https://www.arum.rs/",
    name: "Arum",
    category: "Poljoprivredni program",
    description: "Praktična rešenja za različite potrebe profesionalnih i hobi proizvođača.",
  },
  {
    src: agrosava,
    href: "https://agrosava.com/",
    name: "Agrosava",
    category: "Zaštita bilja",
    description: "Domaći program za sigurniju zaštitu useva i stabilniju proizvodnju.",
    scale: 0.78,
  },
  {
    src: basf,
    href: "https://www.basf.com/rs/sr",
    name: "BASF",
    category: "Zaštita bilja",
    description: "Inovativna rešenja za zdravije useve, kvalitet i pouzdaniji prinos.",
  },
  {
    src: corteva,
    href: "https://www.corteva.rs/",
    name: "Corteva",
    category: "Seme i zaštita useva",
    description: "Savremeni program za važne faze razvoja i zaštite poljoprivrednih kultura.",
    scale: 1.08,
  },
  {
    src: elixir,
    href: "https://www.elixirgroup.rs/",
    name: "Elixir",
    category: "Ishrana bilja",
    description: "Mineralna đubriva i rešenja za plansku, efikasnu ishranu biljaka.",
  },
  {
    src: villager,
    href: "https://www.villager.rs/",
    name: "Villager",
    category: "Mašine i alati",
    description: "Oprema za baštu, voćnjak i svakodnevne poslove oko domaćinstva.",
    scale: 0.78,
  },
  {
    src: konus,
    href: "https://www.konusglorija.rs/",
    name: "Konus Glorija",
    category: "Semenski program",
    description: "Pažljivo odabran semenski program za profesionalne i hobi proizvođače.",
  },
  {
    src: fertico,
    href: "https://fertico.rs/sr/",
    name: "Fertico",
    category: "Ishrana bilja",
    description: "Specijalizovana rešenja koja podržavaju pravilan razvoj i vitalnost biljaka.",
    scale: 0.86,
  },
  {
    src: agriFortis,
    href: "https://agrifortis.rs/",
    name: "Agri Fortis",
    category: "Ishrana i supstrati",
    description: "Program za profesionalnu proizvodnju i praktičnu primenu u bašti.",
    scale: 0.82,
    theme: "dark",
  },
  {
    src: agrimatco,
    href: "https://www.agrimatco.rs/",
    name: "Agrimatco",
    category: "Kompletan proizvodni program",
    description: "Međunarodno iskustvo u semenu, ishrani i zaštiti biljaka.",
    scale: 0.88,
  },
  {
    src: galenika,
    href: "https://www.fitofarmacija.rs/",
    name: "Galenika Fitofarmacija",
    category: "Zaštita bilja",
    description: "Prepoznatljiv domaći program sredstava za pouzdanu zaštitu useva.",
    scale: 0.92,
  },
];
