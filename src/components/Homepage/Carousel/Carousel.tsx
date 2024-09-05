import { useEffect, useState } from 'react';
import crops from '../../../assets/crops.jpg';
import blueberry from '../../../assets/blueberry.jpg';
import './Carousel.css';
import Button from '@mui/material/Button';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import dogs from '../../../assets/psi.jpg';
import sustainable from '../../../assets/odrzivo.jpg';
import sustainable1 from '../../../assets/odrzivo2.jpg';

export default function Carousel() {
  const carousel = [
    { image: crops, heading: 'Priroda i zemljište' },
    { image: sustainable1, heading: 'Tehnologija gajenja' },
    { image: blueberry, heading: 'Intezivni uzgoj voća' },
    { image: sustainable, heading: 'Zaštita životne sredine' },
    { image: dogs, heading: 'Briga, ishrana i oprema za životinje' }
  ];

  const [selectedItem, setSelectedItem] = useState<number>(0);
  const [showText, setShowText] = useState<boolean>(false);

  useEffect(() => {
    const interval = startCarousel();
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowText(true);
    }, 2000);
    return () => clearTimeout(timeout);
  }, [selectedItem]);

  const startCarousel = () => {
    return setInterval(() => {
      changeSelectedItem(1); // Move to next item
      setShowText(false);
    }, 10000); // Change every 10 seconds
  };

  const changeSelectedItem = (direction: number) => {
    setSelectedItem((prevSelectedItem) =>
      (prevSelectedItem + direction + carousel.length) % carousel.length
    );
  };

  return (
    <div className="carousel-container">
      {carousel.map((item, index) => (
        <img
          key={index}
          src={item.image}
          alt={item.heading}
          className={index === selectedItem ? 'active' : ''}
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
      {showText && (
        <div className="carousel-item">
          <p className="carousel-heading">{carousel[selectedItem].heading}</p>
          <Button variant="contained" className="carousel-button">
            Više informacija
          </Button>
        </div>
      )}
    </div>
  );
}
