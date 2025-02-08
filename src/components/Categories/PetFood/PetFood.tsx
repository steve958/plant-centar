import "./PetFood.css";
import logo1 from "../../../assets/partneri/premil.png";
import logo2 from "../../../assets/partneri/frendy.jfif";
import logo3 from "../../../assets/partneri/josera.png";
import logo4 from "../../../assets/partneri/happydog.png";
import logo5 from "../../../assets/partneri/whiskars.png";
import logo6 from "../../../assets/partneri/royalcanin.png";
import petsIcon from "../../../assets/icons/white/Icons-V1.2.png";
import CategoryCard from "../CategoryCard/CategoryCard";

export default function PetFood() {
    return (
        <div className="category-container">
            <div className="description-wrapper">
                <h3>Hrana za kućne ljubimce</h3>
                <p>
                    Zbog značaja kućnih ljubimaca u našim životima i ljubavi prema njima,
                    iz tog razloga omogućili smo veliki izbor kvalitetne hrane vodećih
                    brendova kao i raznovrsnu opremu.
                </p>
            </div>

            <div className="categories-wrapper">
                <CategoryCard
                    heading="Hrana za kućne ljubimce"
                    link="https://plant-centar.vercel.app/#/prodavnica"
                    iconUrl={petsIcon}
                />
                <CategoryCard
                    heading="Oprema za kućne ljubimce"
                    link="https://plant-centar.vercel.app/#/prodavnica"
                    iconUrl={petsIcon}
                />
            </div>

            {/* Infinite Scrolling Carousel */}
            <div className="partners-wrapper">
                <div className="partners-track">
                    {/* First set of logos */}
                    <img src={logo1} alt="" />
                    <img src={logo2} alt="" />
                    <img src={logo3} alt="" />
                    <img src={logo4} alt="" />
                    <img src={logo5} alt="" />
                    <img src={logo6} alt="" />

                    {/* Second set of the same logos */}
                    <img src={logo1} alt="" />
                    <img src={logo2} alt="" />
                    <img src={logo3} alt="" />
                    <img src={logo4} alt="" />
                    <img src={logo5} alt="" />
                    <img src={logo6} alt="" />
                </div>
            </div>
        </div>
    );
}
