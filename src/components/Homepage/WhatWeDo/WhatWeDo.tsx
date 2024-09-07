import { useNavigate } from "react-router-dom";
import "./WhatWeDo.css";

export default function WhatWeDo() {
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
                        <h3>Pružanje stručne podrške u ishrani i zaštiti bilja</h3>
                    </div>
                    <div
                        className="what-we-do-card"
                        onClick={() => navigate("/sredstva-za-ishranu-bilja")}
                    >
                        <h3>Distribucija sredstava za zaštitu i ishranu bilja</h3>
                    </div>
                    <div
                        className="what-we-do-card"
                        onClick={() => navigate("/semenska-roba")}
                    >
                        <h3>Semenska roba, sadnice voća i ukrasnog bilja</h3>
                    </div>
                    <div
                        className="what-we-do-card"
                        onClick={() => navigate("/hrana-za-domaće-životinje")}
                    >
                        <h3>Hrana za domaće životinje</h3>
                    </div>
                    <div
                        className="what-we-do-card"
                        onClick={() => navigate("/hrana-za-kućne-ljubimce")}
                    >
                        <h3>Hrana za kućne ljubimce</h3>
                    </div>
                    <div
                        className="what-we-do-card"
                        onClick={() => navigate("/alati-i-oprema")}
                    >
                        <h3>Alati i oprema</h3>
                    </div>
                </div>
            </div>
        </div>
    );
}
