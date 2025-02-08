import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./WhatWeDo.css";

// Green icons
import scienceGreen from "../../../assets/icons/green/Icons-V1.1.png";
import warehouseGreen from "../../../assets/icons/green/Icons-V1.3.png";
import protectionGreen from "../../../assets/icons/green/Icons-PSD-V2.15.png";
import farmAnimalsGreen from "../../../assets/icons/green/Icons-V1.2.png";
import toolsGreen from "../../../assets/icons/green/Icons-V1.4.png";
import fertilizersGreen from "../../../assets/icons/green/Icons-PSD-V2.16.png";

// White icons
import scienceWhite from "../../../assets/icons/white/Icons-V1.1.png";
import warehouseWhite from "../../../assets/icons/white/Icons-V1.3.png";
import protectionWhite from "../../../assets/icons/white/Icons-PSD-V2.17.png";
import farmAnimalsWhite from "../../../assets/icons/white/Icons-V1.2.png";
import toolsWhite from "../../../assets/icons/white/Icons-V1.4.png";
import fertilizersWhite from "../../../assets/icons/white/Icons-PSD-V2.18.png";

export default function WhatWeDo() {
    const navigate = useNavigate();

    // State for each card's current icon. Each starts with the green icon.
    const [scienceIcon, setScienceIcon] = useState(scienceGreen);
    const [warehouseIcon, setWarehouseIcon] = useState(warehouseGreen);
    const [protectionIcon, setProtectionIcon] = useState(protectionGreen);
    const [farmAnimalsIcon, setFarmAnimalsIcon] = useState(farmAnimalsGreen);
    const [toolsIcon, setToolsIcon] = useState(toolsGreen);
    const [fertilizersIcon, setFertilizersIcon] = useState(fertilizersGreen);

    return (
        <div className="what-we-do-container">
            <div className="what-we-do-wrapper">
                <div className="what-we-do-heading">
                    <h2>Čime se bavimo</h2>
                </div>
                <div className="heading-border"></div>

                {/* Card row container */}
                <div className="wwd-card-row">
                    {/* Card 1 */}
                    <div
                        className="wwd-card"
                        onClick={() => navigate("/kontakt")}
                        onMouseEnter={() => setScienceIcon(scienceWhite)}
                        onMouseLeave={() => setScienceIcon(scienceGreen)}
                    >
                        <div className="wwd-icon-circle">
                            <img src={scienceIcon} alt="Stručna podrška" />
                        </div>
                        <h3>Stručna podrška</h3>
                        <p>Pružanje stručne podrške u ishrani i zaštiti bilja</p>
                        <div className="wwd-arrow-circle">&rarr;</div>
                    </div>

                    {/* Card 2 */}
                    <div
                        className="wwd-card"
                        onClick={() => navigate("/sredstva-za-zastitu-bilja")}
                        onMouseEnter={() => setWarehouseIcon(warehouseWhite)}
                        onMouseLeave={() => setWarehouseIcon(warehouseGreen)}
                    >
                        <div className="wwd-icon-circle">
                            <img src={warehouseIcon} alt="Prodaja" />
                        </div>
                        <h3>Zaštita biljaka</h3>
                        <p>Distribucija sredstava za zaštitu bilja</p>
                        <div className="wwd-arrow-circle">&rarr;</div>
                    </div>
                    {/* Card 3 */}
                    <div
                        className="wwd-card"
                        onClick={() => navigate("/sredstva-za-ishranu-bilja")}
                        onMouseEnter={() => setFertilizersIcon(fertilizersWhite)}
                        onMouseLeave={() => setFertilizersIcon(fertilizersGreen)}
                    >
                        <div className="wwd-icon-circle">
                            <img src={fertilizersIcon} alt="Prodaja" />
                        </div>
                        <h3>Ishrana biljaka</h3>
                        <p>Distribucija sredstava za ishranu bilja</p>
                        <div className="wwd-arrow-circle">&rarr;</div>
                    </div>

                    {/* Card 4 */}
                    <div
                        className="wwd-card"
                        onClick={() => navigate("/semenska-roba")}
                        onMouseEnter={() => setProtectionIcon(protectionWhite)}
                        onMouseLeave={() => setProtectionIcon(protectionGreen)}
                    >
                        <div className="wwd-icon-circle">
                            <img src={protectionIcon} alt="Semenska roba i sadnice" />
                        </div>
                        <h3>Semenska roba i sadnice</h3>
                        <p>Semenska roba, sadnice voća i ukrasnog bilja</p>
                        <div className="wwd-arrow-circle">&rarr;</div>
                    </div>

                    {/* Card 5 */}
                    <div
                        className="wwd-card"
                        onClick={() => navigate("/hrana-za-kucne-ljubimce")}
                        onMouseEnter={() => setFarmAnimalsIcon(farmAnimalsWhite)}
                        onMouseLeave={() => setFarmAnimalsIcon(farmAnimalsGreen)}
                    >
                        <div className="wwd-icon-circle">
                            <img src={farmAnimalsIcon} alt="hrana-za-kucne-ljubimce" />
                        </div>
                        <h3>Pet Program</h3>
                        <p>Pet program, hrana i oprema za domaće životinje</p>
                        <div className="wwd-arrow-circle">&rarr;</div>
                    </div>

                    {/* Card 6 */}
                    <div
                        className="wwd-card"
                        onClick={() => navigate("/garden-program")}
                        onMouseEnter={() => setToolsIcon(toolsWhite)}
                        onMouseLeave={() => setToolsIcon(toolsGreen)}
                    >
                        <div className="wwd-icon-circle">
                            <img src={toolsIcon} alt="Alati i oprema" />
                        </div>
                        <h3>Garden oprema, alati i repromaterijal</h3>
                        <p>Garden oprema, alati i repromaterijal</p>
                        <div className="wwd-arrow-circle">&rarr;</div>
                    </div>
                </div>
            </div>
        </div>
    );
}
