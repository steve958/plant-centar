/* eslint-disable @typescript-eslint/no-unused-vars */
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

  const [showText, setShowText] = useState<boolean>(false);
  const [selectedItem, setSelectedItem] = useState<number>(0);

  useEffect(() => {
    const interval = startCarousel();
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowText(true);
      console.log(selectedItem);
    }, 2000);
    return () => clearTimeout(timeout);
  }, [selectedItem]);

  function startCarousel() {
    return setInterval(() => {
      setSelectedItem((prevSelectedItem) =>
        prevSelectedItem === carousel.length - 1 ? 0 : prevSelectedItem + 1
      );
      setShowText(false);
    }, 10000);
  }

  function changeSelectedItem() {
    setSelectedItem((prevSelectedItem) =>
      prevSelectedItem === carousel.length - 1 ? 0 : prevSelectedItem + 1
    );
  }

  return (
    <div className="carousel-container">
      <img src={carousel[selectedItem].image} alt="" />
      <ArrowBackIosNewIcon
        className="carousel-arrow-left"
        onClick={() => changeSelectedItem()}
      />
      <ArrowForwardIosIcon
        className="carousel-arrow-right"
        onClick={() => changeSelectedItem()}
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
