import './Partners.css';
import img1 from '../../../assets/partneri/agromarket.jpeg';
import img2 from '../../../assets/partneri/savacoop.png';
import img3 from '../../../assets/partneri/gebi.svg';
import img4 from '../../../assets/partneri/arum.jpeg';

export default function Partners() {
  return (
    <div className="partners-container">
      <div className="meet-our-team-heading">
        <h2>Naši partneri</h2>
      </div>
      <div className="heading-border"></div>
      <span>
        <a href="https://www.agromarket.rs/">
          <img src={img1} alt="logo partnera" />
        </a>
        <a href="https://savacoop.rs/">
          <img src={img2} alt="logo partnera" />
        </a>
        <a href="https://www.gebi.rs/">
          <img src={img3} alt="logo partnera" />
        </a>
        <a href="https://www.arum.rs/">
          <img src={img4} alt="logo partnera" />
        </a>
      </span>
    </div>
  );
}
