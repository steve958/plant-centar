import './Company.css';
import img1 from '../../../assets/firma/firma1.jpg';
import img2 from '../../../assets/store.jpg';
import img3 from '../../../assets/firma/firma3.jfif';
import img4 from '../../../assets/firma/firma4.jfif';
import img5 from '../../../assets/firma/radnja1.jfif';
import img6 from '../../../assets/firma/radnja2.jfif';
import img7 from '../../../assets/firma/radnja3.jfif';
import img8 from '../../../assets/firma/radnja4.jfif';
import img9 from '../../../assets/firma/radnja5.jfif';

export default function Company() {
  return (
    <div className="company-container">
      <img src={img1} alt="" />
      <img src={img2} alt="" style={{ objectFit: 'contain' }} />
      <img src={img3} alt="" />
      <img src={img4} alt="" />
      <img src={img5} alt="" />
      <img src={img6} alt="" />
      <img src={img7} alt="" />
      <img src={img8} alt="" />
      <img src={img9} alt="" />
    </div>
  );
}
