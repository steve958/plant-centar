import './Gallery.css';
import fruits from '../../assets/jagode/zasad1.jpg';
import company from '../../assets/firma/firma1.jpg';
import vegetables from '../../assets/povrce/zasad1.jpg';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Gallery() {
  const [categoryHover, setCategoryHover] = useState<string>('');

  const navigate = useNavigate();

  function categoryHovered(category: string) {
    setCategoryHover(category);
  }

  function hoverEnd() {
    setCategoryHover('');
  }

  return (
    <div className="gallery-container">
      <div className="gallery-description-wrapper">
        <h2>Pogledajte naše slike sa terena</h2>
      </div>
      <div className="gallery-categories-wrapper">
        <div
          className="gallery-category"
          onMouseEnter={() => categoryHovered('company')}
          onMouseLeave={hoverEnd}
          onClick={() => navigate('/galerija/kompanija')}
        >
          <img src={company} alt="" />
          {categoryHover === 'company' && <p>naša kompanija</p>}
        </div>
        <div
          className="gallery-category"
          onMouseEnter={() => categoryHovered('fruits')}
          onMouseLeave={hoverEnd}
        >
          <img src={fruits} alt="" />
          {categoryHover === 'fruits' && <p>voće</p>}
        </div>
        <div
          className="gallery-category"
          onMouseEnter={() => categoryHovered('vegetables')}
          onMouseLeave={hoverEnd}
        >
          <img src={vegetables} alt="" />
          {categoryHover === 'vegetables' && <p>povrće</p>}
        </div>
      </div>
    </div>
  );
}
