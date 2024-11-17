import { useNavigate } from "react-router-dom";
import "./WhatWeDo.css";
import science from "../../../assets/icons/science.png";
import garden from "../../../assets/icons/garden1.png";
import warehouse from "../../../assets/icons/warehouse1.png";
import farmAnimals from "../../../assets/icons/farmanimals.png";
import pets from "../../../assets/icons/pets1.png";
import protection from "../../../assets/icons/seed.png";
import { useState } from "react";

export default function WhatWeDo() {
    const [hover, setHover] = useState<string>("");

    function clearHover() {
        setHover("");
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
                    >
                        <img src={science} className="icon-img" style={{ scale: "0.9" }} />
                        <h3
                            onMouseEnter={() => setHover("science")}
                            onMouseLeave={clearHover}
                        >
                            {hover === "science"
                                ? "Pružanje stručne podrške u ishrani i zaštiti bilja"
                                : "Stručna podrška"}
                        </h3>
                    </div>
                    <div
                        className="what-we-do-card"
                        onClick={() => navigate("/sredstva-za-ishranu-bilja")}
                    >
                        <img src={warehouse} className="icon-img" />
                        <h3
                            onMouseEnter={() => setHover("warehouse")}
                            onMouseLeave={clearHover}
                        >
                            {hover === "warehouse"
                                ? "Distribucija sredstava za zaštitu i ishranu bilja"
                                : "Distribucija"}
                        </h3>
                    </div>
                    <div
                        className="what-we-do-card"
                        onClick={() => navigate("/semenska-roba")}
                    >
                        <img
                            src={protection}
                            className="icon-img"
                            style={{ scale: "1.5" }}
                        />
                        <h3
                            onMouseEnter={() => setHover("seeds")}
                            onMouseLeave={clearHover}
                        >
                            {hover === "seeds"
                                ? "Semenska roba, sadnice voća i ukrasnog bilja"
                                : "Semenska roba i sadnice"}
                        </h3>
                    </div>
                    <div
                        className="what-we-do-card"
                        onClick={() => navigate("/hrana-za-domaće-životinje")}
                    >
                        <img src={farmAnimals} className="icon-img" />
                        <h3 onMouseEnter={() => setHover("farm")} onMouseLeave={clearHover}>
                            {hover === "farm"
                                ? "Hrana i oprema za domaće životinje"
                                : "Hrana za životinje"}
                        </h3>
                    </div>
                    <div
                        className="what-we-do-card"
                        onClick={() => navigate("/hrana-za-kućne-ljubimce")}
                    >
                        <img src={pets} className="icon-img" style={{ scale: "1.5" }} />
                        <h3 onMouseEnter={() => setHover("pets")} onMouseLeave={clearHover}>
                            {hover === "pets"
                                ? "Hrana i oprema za kućne ljubimce"
                                : "Pet program"}
                        </h3>
                    </div>
                    <div
                        className="what-we-do-card"
                        onClick={() => navigate("/alati-i-oprema")}
                    >
                        <img src={garden} className="icon-img" style={{ scale: "1.5" }} />
                        <h3
                            onMouseEnter={() => setHover("tools")}
                            onMouseLeave={clearHover}
                        >
                            {hover === "tools"
                                ? "Alati, mašine, folije i oprema za navodnjavanje"
                                : "Alati i oprema"}
                        </h3>
                    </div>
                </div>
            </div>
        </div>
    );
}
