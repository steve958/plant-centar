import "./CropNutrition.css";
import logo1 from "../../../assets/partneri/yara.png";
import logo2 from "../../../assets/partneri/timac.png";
import logo3 from "../../../assets/partneri/sea-energy.png";
import logo4 from "../../../assets/partneri/elixir.png";
import logo5 from "../../../assets/partneri/agriitalia.jfif";
import logo6 from "../../../assets/partneri/fitofert.png";

export default function CropNutrition() {
    return (
        <div className="category-container">
            <div className="description-wrapper">
                <h3>Sredstva za ishranu bilja</h3>
                <p>
                    Naš tim stručnjaka svakodnevnim obilascima terena I komunikacijom,
                    izlazi u susret poljoprivrednim proizvođačima u prevazilaženju
                    nedaća u svim oblastima poljorpivredne proizvodnje u cilju
                    postizanja maksimalnih rezultata. Kvalitetni program ishrane I
                    zaštite bilja, kao i dobro poznavanje hidroponskog uzgoja biljaka,
                    predstavljaju jedan od naših aduta u saradnji sa klijentima.
                </p>
            </div>
            <div className="partners-wrapper">
                <img src={logo1} alt="" />
                <img src={logo2} alt="" />
                <img src={logo3} alt="" />
                <img src={logo4} alt="" />
                <img src={logo5} alt="" />
                <img src={logo6} alt="" />
            </div>
            <div></div>
        </div>
    );
}
