import "./PetFood.css";
import logo1 from "../../../assets/partneri/premil.png";
import logo2 from "../../../assets/partneri/frendy.jfif";
import logo3 from "../../../assets/partneri/josera.png";
import logo4 from "../../../assets/partneri/happydog.png";
import logo5 from "../../../assets/partneri/whiskars.png";
import logo6 from "../../../assets/partneri/royalcanin.png";
import CategoryCard from "../CategoryCard/CategoryCard";
import petsLogo from '../../../assets/categories/pet/kucni-White.png'
import petsLogoHovered from '../../../assets/categories/pet/kucni-Green.png'
import equipmentLogo from '../../../assets/categories/pet/oprema-White.png'
import equipmentLogoHovered from '../../../assets/categories/pet/oprema-Green.png'
import livestockLogo from '../../../assets/categories/pet/domace-White.png'
import livestockLogoHovered from '../../../assets/categories/pet/domace-Green.png'


export default function PetFood() {

    return (
        <div className="category-container">
            <div className="description-wrapper">
                <h3>Hrana za kućne ljubimce</h3>
                <p>
                    Zbog značaja kućnih ljubimaca u našim životima i ljubavi prema njima,
                    iz tog razloga omogućili smo veliki izbor kvalitetne hrane vodećih
                    brendova kao i raznovrsnu opremu. Takodje usled uspedne saradnje sa
                    kompanijom Gebi i njenin distributerom, u nasem programu mozete
                    pronaci veliki izbor najkvalitetnije hrane za ishranu domacih
                    zivotinja.
                </p>
            </div>

            <div className="categories-wrapper">
                <CategoryCard
                    heading="Hrana za kućne ljubimce"
                    link="https://plant-centar.vercel.app/prodavnica"
                    iconUrl={petsLogo}
                    hoveredIconUrl={petsLogoHovered}
                />
                <CategoryCard
                    heading="Oprema za kućne ljubimce"
                    link="https://plant-centar.vercel.app/prodavnica"
                    iconUrl={equipmentLogo}
                    hoveredIconUrl={equipmentLogoHovered}
                />
                <CategoryCard
                    heading="Hrana za domaće životinje"
                    link="https://www.plantcentar.com/hrana-za-domace-zivotinje"
                    iconUrl={livestockLogo}
                    hoveredIconUrl={livestockLogoHovered}
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
