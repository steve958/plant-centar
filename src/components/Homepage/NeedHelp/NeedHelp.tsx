import { useNavigate } from 'react-router-dom';
import './NeedHelp.css';
import Button from "@mui/material/Button";
import help from "../../../assets/needhelp.jpeg"


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
                    <h2>Imate pitanja u vezi proizvodnje?</h2>
                </div>
                <Button onClick={navigateToContactPage} className="learn-more-btn">Kontaktirajte nas</Button>
            </div>
            <img src={help} alt="" className='help-img' />
            <div className='img-cover'></div>
        </div>
    );
}
