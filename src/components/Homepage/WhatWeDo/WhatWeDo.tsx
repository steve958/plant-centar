import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./WhatWeDo.css";

// Green icons
import scienceGreen from "../../../assets/icons/green/Icons-V1.1.png";
import warehouseGreen from "../../../assets/icons/green/Icons-V1.3.png";
import protectionGreen from "../../../assets/icons/green/Icons-V1.5.png";
import farmAnimalsGreen from "../../../assets/icons/green/Icons-V1.2.png";
import toolsGreen from "../../../assets/icons/green/Icons-V1.4.png";
import gardenGreen from "../../../assets/icons/green/Icons-V1.6.png";

// White icons
import scienceWhite from "../../../assets/icons/white/Icons-V1.1.png";
import warehouseWhite from "../../../assets/icons/white/Icons-V1.3.png";
import protectionWhite from "../../../assets/icons/white/Icons-V1.5.png";
import farmAnimalsWhite from "../../../assets/icons/white/Icons-V1.2.png";
import toolsWhite from "../../../assets/icons/white/Icons-V1.4.png";
import gardenWhite from "../../../assets/icons/white/Icons-V1.6.png";

export default function WhatWeDo() {
    const navigate = useNavigate();

    // State for each card's current icon. Each starts with the green icon.
    const [scienceIcon, setScienceIcon] = useState(scienceGreen);
    const [warehouseIcon, setWarehouseIcon] = useState(warehouseGreen);
    const [protectionIcon, setProtectionIcon] = useState(protectionGreen);
    const [farmAnimalsIcon, setFarmAnimalsIcon] = useState(farmAnimalsGreen);
    const [toolsIcon, setToolsIcon] = useState(toolsGreen);
    const [gardenIcon, setGardenIcon] = useState(gardenGreen);

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
                        <h3>Zaštita i ishrana biljaka</h3>
                        <p>Distribucija sredstava za zaštitu i ishranu bilja</p>
                        <div className="wwd-arrow-circle">&rarr;</div>
                    </div>

                    {/* Card 3 */}
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

                    {/* Card 4 */}
                    <div
                        className="wwd-card"
                        onClick={() => navigate("/hrana-za-domace-zivotinje")}
                        onMouseEnter={() => setFarmAnimalsIcon(farmAnimalsWhite)}
                        onMouseLeave={() => setFarmAnimalsIcon(farmAnimalsGreen)}
                    >
                        <div className="wwd-icon-circle">
                            <img src={farmAnimalsIcon} alt="Hrana za životinje" />
                        </div>
                        <h3>Pet Program</h3>
                        <p>Pet program, hrana i oprema za domaće životinje</p>
                        <div className="wwd-arrow-circle">&rarr;</div>
                    </div>

                    {/* Card 5 */}
                    <div
                        className="wwd-card"
                        onClick={() => navigate("/alati-i-oprema")}
                        onMouseEnter={() => setToolsIcon(toolsWhite)}
                        onMouseLeave={() => setToolsIcon(toolsGreen)}
                    >
                        <div className="wwd-icon-circle">
                            <img src={toolsIcon} alt="Alati i oprema" />
                        </div>
                        <h3>Mašine, Alati i repromaterijal</h3>
                        <p>Mašine, Alati i repromaterijal</p>
                        <div className="wwd-arrow-circle">&rarr;</div>
                    </div>

                    {/* Card 6 */}
                    <div
                        className="wwd-card"
                        onClick={() => navigate("/alati-i-oprema")}
                        onMouseEnter={() => setGardenIcon(gardenWhite)}
                        onMouseLeave={() => setGardenIcon(gardenGreen)}
                    >
                        <div className="wwd-icon-circle">
                            <img src={gardenIcon} alt="Alati i oprema" />
                        </div>
                        <h3>Garden oprema i uređenje</h3>
                        <p>Garden oprema i uređenje</p>
                        <div className="wwd-arrow-circle">&rarr;</div>
                    </div>
                </div>
            </div>
        </div>
    );
}
