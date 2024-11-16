import './Partners.css';
import img1 from '../../../assets/partneri/agromarket.jpeg';
import img2 from '../../../assets/partneri/savacoop.png';
import img3 from '../../../assets/partneri/gebi.svg';
import img4 from '../../../assets/partneri/arum.jpeg';
import img5 from '../../../assets/partneri/agrosava.png';
import img6 from '../../../assets/partneri/basf.png';
import img7 from '../../../assets/partneri/corteva.png';
import img8 from '../../../assets/partneri/elixir.png';
import img9 from '../../../assets/partneri/villager.png';

export default function Partners() {
  const logos = [
    { src: img1, href: 'https://www.agromarketsrbija.rs/srb', alt: 'Agromarket' },
    { src: img2, href: 'https://savacoop.rs/', alt: 'Savacoop' },
    { src: img3, href: 'https://www.gebi.rs/', alt: 'Gebi', style: { transform: 'scale(0.7)' } },
    { src: img4, href: 'https://www.arum.rs/', alt: 'Arum' },
    { src: img5, href: 'https://agrosava.com/', alt: 'Agrosava' },
    { src: img6, href: 'https://www.basf.com/rs/sr', alt: 'BASF' },
    { src: img7, href: 'https://www.corteva.rs/', alt: 'Corteva' },
    { src: img8, href: 'https://www.elixirgroup.rs/', alt: 'Elixir' },
    { src: img9, href: 'https://www.villager.rs/', alt: 'Villager' },
    { src: img1, href: 'https://www.agromarketsrbija.rs/srb', alt: 'Agromarket' },
    { src: img2, href: 'https://savacoop.rs/', alt: 'Savacoop' },
    { src: img3, href: 'https://www.gebi.rs/', alt: 'Gebi', style: { transform: 'scale(0.7)' } },
    { src: img4, href: 'https://www.arum.rs/', alt: 'Arum' },
    { src: img5, href: 'https://agrosava.com/', alt: 'Agrosava' },
    { src: img6, href: 'https://www.basf.com/rs/sr', alt: 'BASF' },
    { src: img7, href: 'https://www.corteva.rs/', alt: 'Corteva' },
    { src: img8, href: 'https://www.elixirgroup.rs/', alt: 'Elixir' },
    { src: img9, href: 'https://www.villager.rs/', alt: 'Villager' },
  ];

  return (
    <div className="partners-container">
      <div className="partners-heading">
        <h2>Naši partneri</h2>
      </div>
      <div className="heading-border"></div>
      <div className="partner-logo">
        <div className="partner-logo-track">
          {logos.map((logo, index) => (
            <a
              key={index}
              href={logo.href}
              className="partner-logo-item"
              style={logo.style}
            >
              <img src={logo.src} alt={logo.alt} />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
