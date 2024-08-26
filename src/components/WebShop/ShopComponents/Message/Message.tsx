import { useNavigate } from "react-router-dom";
import "./Message.css"
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

export default function Message() {
  const navigate = useNavigate();

  const handleBackToHome = () => {
    localStorage.clear();
    navigate("/početna")
  }

  return (
    <div className="message-container">
      <div className="message-wrapper">
        <CheckCircleIcon sx = {{fontSize: 250,}}/>
        <p className="message-p">Vaša porudžbina je uspešno poslata. Hvala na poverenju!</p>
      </div>
      <div className="message-button-wrapper">
        <button className="back-to-home-button" onClick={handleBackToHome}>Povratak na početnu</button>
      </div>
    </div>
  )
}
