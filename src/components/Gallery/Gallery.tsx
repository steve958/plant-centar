import './Gallery.css';
import fruits from '../../assets/fruits/borovnica7.jfif';
import company from '../../assets/firma/firma2.jpeg';
import vegetables from '../../assets/vegetables/zasad1.jpg';
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
          <img src={company} alt="ups" />
          {categoryHover === 'company' && <p>prodajni objekti</p>}
        </div>
        <div
          className="gallery-category"
          onMouseEnter={() => categoryHovered('fruits')}
          onMouseLeave={hoverEnd}
          onClick={() => navigate('/galerija/voće')}
        >
          <img src={fruits} alt="ups" />
          {categoryHover === 'fruits' && <p>voće</p>}
        </div>
        <div
          className="gallery-category"
          onMouseEnter={() => categoryHovered('vegetables')}
          onMouseLeave={hoverEnd}
          onClick={() => navigate('/galerija/povrće')}
        >
          <img src={vegetables} alt="ups" />
          {categoryHover === 'vegetables' && <p>povrće</p>}
        </div>
      </div>
    </div>
  );
}
