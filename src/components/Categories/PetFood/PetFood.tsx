import "./PetFood.css";
import logo1 from "../../../assets/partneri/premil.png";
import logo2 from "../../../assets/partneri/frendy.jfif";
import CategoryCard from "../CategoryCard/CategoryCard";

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
            <div className="categories-wrapper">
                <CategoryCard
                    heading="Hrana za kuce"
                    link="https://a1.rs/mobilni-telefoni"
                />
                <CategoryCard
                    heading="Hrana za mace"
                    link="https://a1.rs/mobilni-telefoni"
                />
                <CategoryCard
                    heading="Hrana za zečeve"
                    link="https://a1.rs/mobilni-telefoni"
                />
                <CategoryCard
                    heading="Hrana za ptice"
                    link="https://a1.rs/mobilni-telefoni"
                />
                <CategoryCard
                    heading="Hrana za ribice"
                    link="https://a1.rs/mobilni-telefoni"
                />
                <CategoryCard
                    heading="Oprema za ljubimce (kavezi, povodci, pojilice)"
                    link="https://a1.rs/mobilni-telefoni"
                />
            </div>
            <div className="partners-wrapper">
                <img src={logo1} alt="" />
                <img src={logo2} alt="" />
            </div>
            <div></div>
        </div>
    );
}
