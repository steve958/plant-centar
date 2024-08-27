import "./PetFood.css";
// import logo1 from "../../../assets/partneri/basf.png";
// import logo2 from "../../../assets/partneri/bayer.png";
// import logo3 from "../../../assets/partneri/syngenta.svg";
// import logo4 from "../../../assets/partneri/galenika.png";
// import logo5 from "../../../assets/partneri/agromarket.jpeg";

export default function PetFood() {
    return (
        <div className="category-container">
            <div className="description-wrapper">
                <h3>Hrana za kućne ljubimce</h3>
                <p>
                    Zbog značaja kućnih ljubimaca u našim životima i ljubavi prema njima, iz tog
                    razloga omogućili semo veliki izbor kvalitetne hrane vodećih brendova kao i
                    raznovrsnu opremu.
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
