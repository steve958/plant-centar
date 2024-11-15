import { useNavigate } from "react-router-dom";
import "./WhatWeDo.css";
import science from "../../../assets/icons/science.png";
import garden from "../../../assets/icons/garden1.png";
import warehouse from "../../../assets/icons/warehouse1.png";
import farmAnimals from "../../../assets/icons/farmanimals.png";
import pets from "../../../assets/icons/pets1.png";
import protection from "../../../assets/icons/seed.png";
import { useState } from "react";

interface HoverIcons {
    science: boolean;
    protection: boolean;
    distribution: boolean;
    seed: boolean;
    farmAnimals: boolean;
    pets: boolean;
    garden: boolean;
}

export default function WhatWeDo() {
    const [hover, setHover] = useState<HoverIcons>({
        science: false,
        protection: false,
        distribution: false,
        seed: false,
        farmAnimals: false,
        pets: false,
        garden: false,
    } as HoverIcons);

    function handleAllHovers(hover: string) {
        setTimeout(
            () =>
                setHover({
                    science: hover === "science",
                    protection: hover === "protection",
                    distribution: hover === "distribution",
                    seed: hover === "seed",
                    farmAnimals: hover === "farmAnimals",
                    pets: hover === "pets",
                    garden: hover === "garden",
                }),
            200
        );
    }

    const navigate = useNavigate();

    return (
        <div className="what-we-do-container">
            <div className="what-we-do-wrapper">
                <div className="what-we-do-heading">
                    <h2>Čime se bavimo</h2>
                </div>
                <div className="heading-border"></div>
                <div className="what-we-do-content">
                    <div
                        className="what-we-do-card"
                        onClick={() => navigate("/sredstva-za-zastitu-bilja")}
                        onMouseEnter={() => handleAllHovers("science")}
                        onMouseLeave={() => handleAllHovers("")}
                    >
                        {hover.science ? (
                            <h3>Pružanje stručne podrške u ishrani i zaštiti bilja</h3>
                        ) : (
                            <img src={science} className="icon-img" />
                        )}
                    </div>
                    <div
                        className="what-we-do-card"
                        onMouseEnter={() => handleAllHovers("distribution")}
                        onMouseLeave={() => handleAllHovers("")}
                        onClick={() => navigate("/sredstva-za-ishranu-bilja")}
                    >
                        {hover.distribution ? (
                            <h3>Distribucija sredstava za zaštitu i ishranu bilja</h3>
                        ) : (
                            <img src={warehouse} className="icon-img" />
                        )}
                    </div>
                    <div
                        className="what-we-do-card"
                        onMouseEnter={() => handleAllHovers("seed")}
                        onMouseLeave={() => handleAllHovers("")}
                        onClick={() => navigate("/semenska-roba")}
                    >
                        {hover.seed ? (
                            <h3>Semenska roba, sadnice voća i ukrasnog bilja</h3>
                        ) : (
                            <img src={protection} className="icon-img" style={{ scale: '1.5' }} />
                        )}
                    </div>
                    <div
                        className="what-we-do-card"
                        onMouseEnter={() => handleAllHovers("farmAnimals")}
                        onMouseLeave={() => handleAllHovers("")}
                        onClick={() => navigate("/hrana-za-domaće-životinje")}
                    >
                        {hover.farmAnimals ? (
                            <h3>Hrana za domaće životinje</h3>
                        ) : (
                            <img src={farmAnimals} className="icon-img" />
                        )}
                    </div>
                    <div
                        className="what-we-do-card"
                        onMouseEnter={() => handleAllHovers("pets")}
                        onMouseLeave={() => handleAllHovers("")}
                        onClick={() => navigate("/hrana-za-kućne-ljubimce")}
                    >
                        {hover.pets ? (
                            <h3>Hrana za kućne ljubimce</h3>
                        ) : (
                            <img src={pets} className="icon-img" style={{ scale: '1.5' }} />
                        )}
                    </div>
                    <div
                        className="what-we-do-card"
                        onMouseEnter={() => handleAllHovers("garden")}
                        onMouseLeave={() => handleAllHovers("")}
                        onClick={() => navigate("/alati-i-oprema")}
                    >
                        {hover.garden ? (
                            <h3>Alati i oprema</h3>
                        ) : (
                            <img src={garden} className="icon-img" style={{ scale: '1.5' }} />
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
