import "./DomesticAnimals.css";
// import logo1 from "../../../assets/partneri/basf.png";
// import logo2 from "../../../assets/partneri/bayer.png";
// import logo3 from "../../../assets/partneri/syngenta.svg";
// import logo4 from "../../../assets/partneri/galenika.png";
// import logo5 from "../../../assets/partneri/agromarket.jpeg";

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
                {/* <img src={logo1} alt="" />
                <img src={logo2} alt="" />
                <img src={logo3} alt="" />
                <img src={logo4} alt="" />
                <img src={logo5} alt="" /> */}
            </div>
            <div></div>
        </div>
    );
}
