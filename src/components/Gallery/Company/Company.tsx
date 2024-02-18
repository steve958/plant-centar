import './Company.css';
import img1 from '../../../assets/firma/firma1.jpg';
import img2 from '../../../assets/firma/firma2.jpg';
import img3 from '../../../assets/firma/firma3.jpg';
import img4 from '../../../assets/firma/firma4.jpg';
import img5 from '../../../assets/firma/firma5.jpg';
import img6 from '../../../assets/firma/firma6.jpg';

export default function Company() {
  return (
    <div className="company-container">
      <img src={img1} alt="" />
      <img src={img2} alt="" />
      <img src={img3} alt="" />
      <img src={img4} alt="" />
      <img src={img5} alt="" />
      <img src={img6} alt="" />
    </div>
  );
}
