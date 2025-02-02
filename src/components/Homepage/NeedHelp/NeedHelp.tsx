import { useNavigate } from 'react-router-dom';
import './NeedHelp.css';
import Button from "@mui/material/Button";
import help from "../../../assets/protect.jpg"


export default function NeedHelp() {

    const navigate = useNavigate()

    function navigateToContactPage() {
        navigate("/kontakt")
    }

    return (
        <div className="need-help-section">
            {/* Bottom section - Promo Banner */}
            <div className="promo-banner">
                <div className="promo-text">
                    <h2>Potrebna vam je stručna podrška?</h2>
                </div>
                <p style={{ marginBottom: '15px', textAlign: 'center' }}>Naš tim čine iskusni agronomi, spremni da odgovore na sve izazove.</p>
                <Button onClick={navigateToContactPage} className="learn-more-btn">Kontaktirajte nas</Button>
            </div>
            <img src={help} alt="" className='help-img' />
            <div className='img-cover'></div>
        </div>
    );
}
