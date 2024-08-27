import "./Seeds.css";
// import logo1 from "../../../assets/partneri/basf.png";
// import logo2 from "../../../assets/partneri/bayer.png";
// import logo3 from "../../../assets/partneri/syngenta.svg";
// import logo4 from "../../../assets/partneri/galenika.png";
// import logo5 from "../../../assets/partneri/agromarket.jpeg";

export default function Seeds() {
    return (
        <div className="category-container">
            <div className="description-wrapper">
                <h3>Semenska roba</h3>
                <p>
                    Semenska roba kao i sadni material predstavljaju osnovu uzgoja većine
                    poljoprivrednih kultura. Shodno tome, našim saradncima omogućili smo
                    širok izbor semena za ratarsku i povrtarsku proizvodnju, kao i sadnice
                    voćarskih kultura i ukrasnog bilja za uređenje pejzaža.
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
