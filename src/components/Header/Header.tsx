import "./Header.css";
import FmdGoodIcon from "@mui/icons-material/FmdGood";
// import SearchIcon from '@mui/icons-material/Search';
import { useEffect, useState } from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";

export default function Header() {
    const [showMap, setShowMap] = useState<boolean>(false);

    useEffect(() => {
        if (showMap) {
            const attribution = document.querySelector(
                ".leaflet-control-attribution"
            ) as HTMLElement;
            attribution.style.display = "none";
        }
    }, [showMap]);

    return (
        <div className="header-container">
            <div className="header-wrapper">
                <p className="moto">
                    <b>Posvećenost uspehu</b>
                </p>
                <span className="address-wrapper">
                    <FmdGoodIcon
                        color="secondary"
                        className="icon"
                        onClick={() => setShowMap(true)}
                    ></FmdGoodIcon>
                    <p>Vojvode Janka Stojićevića 22, Šabac</p>
                </span>
                {/* <div className="search-wrapper">
                    <SearchIcon color='primary' className='icon'></SearchIcon>
                </div> */}
            </div>
            {showMap && (
                <>
                    <div className="map-container">
                        <MapContainer
                            center={[44.7464481, 19.7058977]}
                            zoom={14}
                            scrollWheelZoom={false}
                        >
                            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                            <Marker position={[44.7464481, 19.7058977]}>
                                <Popup>Plant-centar Vojvode Janka Stojićevića 22</Popup>
                            </Marker>
                        </MapContainer>
                        <p className="close-map" onClick={() => setShowMap(false)}>zatvori mapu</p>
                    </div>
                </>
            )}
        </div>
    );
}
