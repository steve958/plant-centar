import "./Tools.css";
import logo1 from "../../../assets/partneri/villager.png";
import logo2 from "../../../assets/partneri/dolomite.jpg";
import logo3 from "../../../assets/partneri/fiskars.png";
import logo4 from "../../../assets/partneri/gerovit.png";
import logo5 from "../../../assets/partneri/eurodrip.jpg";
import logo6 from "../../../assets/partneri/toro.jpg";
import CategoryCard from "../CategoryCard/CategoryCard";

export default function Tools() {
    return (
        <div className="category-container">
            <div className="description-wrapper">
                <h3>Alati i oprema za navodnjavanje</h3>
                <p>
                    Savremena poljoprivredna proizvodnja, zahteva i savremenu opremu i alate.
                    Kod nas možete pronaći vodeće brendove opreme, mašina i alata, kao i
                    opremu za navodnjavanje.
                </p>
            </div>
            <div className="categories-wrapper">
                <CategoryCard
                    heading="Mašine"
                    link="https://plant-centar.vercel.app/#/prodavnica"
                />
                <CategoryCard
                    heading="Alati"
                    link="https://plant-centar.vercel.app/#/prodavnica"
                />
                <CategoryCard
                    heading="Navodnjavanje"
                    link="https://plant-centar.vercel.app/#/prodavnica"
                />
                <CategoryCard
                    heading="Folije i veziva"
                    link="https://plant-centar.vercel.app/#/prodavnica"
                />
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
