import { useNavigate } from "react-router-dom";
import "./WhatWeDo.css";

import scienceActive from "../../../assets/icons/green/Icons-V1.1.png";
import warehouseActive from "../../../assets/icons/green/Icons-V1.3.png";
import protectionActive from "../../../assets/icons/green/Icons-PSD-V2.15.png";
import farmAnimalsActive from "../../../assets/icons/green/Icons-V1.2.png";
import toolsActive from "../../../assets/icons/green/Icons-V1.4.png";
import fertilizersActive from "../../../assets/icons/green/Icons-PSD-V2.16.png";

import scienceDefault from "../../../assets/icons/white/Icons-V1.1.png";
import warehouseDefault from "../../../assets/icons/white/Icons-V1.3.png";
import protectionDefault from "../../../assets/icons/white/Icons-PSD-V2.17.png";
import farmAnimalsDefault from "../../../assets/icons/white/Icons-V1.2.png";
import toolsDefault from "../../../assets/icons/white/Icons-V1.4.png";
import fertilizersDefault from "../../../assets/icons/white/Icons-PSD-V2.18.png";

const services = [
    {
        title: "Stručna podrška",
        description: "Stručni saveti prilagođeni ishrani i zaštiti vaših biljaka.",
        path: "/kontakt",
        iconDefault: scienceDefault,
        iconActive: scienceActive,
    },
    {
        title: "Zaštita bilja",
        description: "Pouzdana sredstva i rešenja za efikasnu zaštitu useva.",
        path: "/sredstva-za-zastitu-bilja",
        iconDefault: warehouseDefault,
        iconActive: warehouseActive,
    },
    {
        title: "Ishrana bilja",
        description: "Programi ishrane koji podržavaju zdrav razvoj i bolji prinos.",
        path: "/sredstva-za-ishranu-bilja",
        iconDefault: fertilizersDefault,
        iconActive: fertilizersActive,
    },
    {
        title: "Semenska roba i sadnice",
        description: "Odabrano seme, sadnice voća i ukrasnog bilja.",
        path: "/semenska-roba",
        iconDefault: protectionDefault,
        iconActive: protectionActive,
    },
    {
        title: "Pet program i hrana za životinje",
        description: "Hrana, oprema i proizvodi za kućne ljubimce i domaće životinje.",
        path: "/pet-program-i-hrana-za-životinje",
        iconDefault: farmAnimalsDefault,
        iconActive: farmAnimalsActive,
    },
    {
        title: "Garden oprema i alati",
        description: "Oprema, alati i repromaterijal za uređen i negovan vrt.",
        path: "/garden-program",
        iconDefault: toolsDefault,
        iconActive: toolsActive,
    },
];

export default function WhatWeDo() {
    const navigate = useNavigate();

    return (
        <section className="what-we-do-container" aria-labelledby="what-we-do-title">
            <div className="what-we-do-wrapper">
                <div className="what-we-do-heading">
                    <span>Naša ponuda</span>
                    <h2 id="what-we-do-title">Čime se bavimo</h2>
                    <p>
                        Proizvodi, znanje i podrška za sigurniju i uspešniju poljoprivrednu proizvodnju.
                    </p>
                </div>

                <div className="wwd-card-grid">
                    {services.map((service, index) => (
                        <button
                            type="button"
                            className="wwd-card"
                            key={service.title}
                            onClick={() => navigate(service.path)}
                            aria-label={`${service.title}: ${service.description}`}
                        >
                            <div className="wwd-card-topline">
                                <span className="wwd-icon-frame" aria-hidden="true">
                                    <img
                                        src={service.iconDefault}
                                        alt=""
                                        className="wwd-icon-default"
                                    />
                                    <img
                                        src={service.iconActive}
                                        alt=""
                                        className="wwd-icon-active"
                                    />
                                </span>
                                <span className="wwd-card-number">
                                    {String(index + 1).padStart(2, "0")}
                                </span>
                            </div>

                            <div className="wwd-card-copy">
                                <h3>{service.title}</h3>
                                <p>{service.description}</p>
                            </div>

                            <span className="wwd-card-action">
                                Saznajte više <span aria-hidden="true">→</span>
                            </span>
                        </button>
                    ))}
                </div>
            </div>
        </section>
    );
}
