import "./Header.css";
import FmdGoodIcon from "@mui/icons-material/FmdGood";
import CloseIcon from "@mui/icons-material/Close";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import { useEffect, useState } from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";

export default function Header() {
    const [showMap, setShowMap] = useState<boolean>(false);

    useEffect(() => {
        if (!showMap) {
            return;
        }

        const previousOverflow = document.body.style.overflow;
        const closeOnEscape = (event: KeyboardEvent) => {
            if (event.key === "Escape") {
                setShowMap(false);
            }
        };

        document.body.style.overflow = "hidden";
        document.addEventListener("keydown", closeOnEscape);

        return () => {
            document.body.style.overflow = previousOverflow;
            document.removeEventListener("keydown", closeOnEscape);
        };
    }, [showMap]);

    return (
        <div className="header-container">
            <div className="header-wrapper">
                <p className="moto">ZNANJE.POSVEĆENOST.USPEH</p>
                <button
                    type="button"
                    className="address-wrapper"
                    onClick={() => setShowMap(true)}
                    aria-haspopup="dialog"
                >
                    <FmdGoodIcon className="location-icon" aria-hidden="true" />
                    <span className="address-label">Vojvode Janka Stojićevića 22, Šabac</span>
                    <span className="map-label">Prikaži mapu</span>
                </button>
            </div>

            {showMap && (
                <div
                    className="map-modal-backdrop"
                    role="presentation"
                    onMouseDown={(event) => {
                        if (event.target === event.currentTarget) {
                            setShowMap(false);
                        }
                    }}
                >
                    <section
                        className="map-dialog"
                        role="dialog"
                        aria-modal="true"
                        aria-labelledby="map-dialog-title"
                    >
                        <div className="map-dialog-header">
                            <div>
                                <span className="map-dialog-kicker">Plant Centar lokacija</span>
                                <h2 id="map-dialog-title">Posetite nas u Šapcu</h2>
                                <p>Vojvode Janka Stojićevića 22, Šabac</p>
                            </div>
                            <button
                                type="button"
                                className="close-map"
                                onClick={() => setShowMap(false)}
                                aria-label="Zatvori mapu"
                            >
                                <CloseIcon aria-hidden="true" />
                            </button>
                        </div>

                        <div className="map-container">
                            <MapContainer
                                center={[44.7464481, 19.7058977]}
                                zoom={14}
                                scrollWheelZoom={false}
                            >
                                <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                                <Marker position={[44.7464481, 19.7058977]}>
                                    <Popup>Plant Centar, Vojvode Janka Stojićevića 22</Popup>
                                </Marker>
                            </MapContainer>
                        </div>

                        <div className="map-dialog-footer">
                            <span><FmdGoodIcon aria-hidden="true" /> Plant Centar, Šabac</span>
                            <a
                                href="https://www.google.com/maps/search/?api=1&query=44.7464481,19.7058977"
                                target="_blank"
                                rel="noreferrer"
                            >
                                Otvori navigaciju <OpenInNewIcon aria-hidden="true" />
                            </a>
                        </div>
                    </section>
                </div>
            )}
        </div>
    );
}
