import "./DomesticAnimals.css";
import logo1 from "../../../assets/partneri/gebi.svg";

export default function DomesticAnimals() {
    return (
        <div className="category-container">
            <div className="description-wrapper">
                <h3>Hrana za domaće životinje</h3>
                <p>
                    U saradnji sa kompanijom Gebi u našoj ponudi možete naći visokokvalitetnu
                    hranu za uzgoj svih vrsta domaćih životinja. Uz našu podršku i iskustvo u
                    ishrani životinja i raspoloživu pomoć naših distributera, bavimo se i izradom
                    programa ishrane životinja.
                </p>
            </div>
            <div className="partners-wrapper">
                <img src={logo1} alt="" />
            </div>
            <div></div>
        </div>
    );
}
