import './Header.css'
import FmdGoodIcon from '@mui/icons-material/FmdGood';
import SearchIcon from '@mui/icons-material/Search';
import { useEffect, useState } from 'react';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'

export default function Header() {

    const [showMap, setShowMap] = useState<boolean>(false)

    useEffect(() => {
        if (showMap) {
            const attribution = document.querySelector(
                ".leaflet-control-attribution"
            ) as HTMLElement;
            attribution.style.display = "none";
        }
    }, [showMap]);

    function toggleShowMap() {
        const old = showMap
        setShowMap(!old)
    }

    return (
        <div className="header-container">
            <div className="header-wrapper">
                <p className='moto'><b>Posvećenost uspehu</b></p>
                <span className='address-wrapper'>
                    <FmdGoodIcon color='secondary' className='icon' onClick={() => toggleShowMap()}></FmdGoodIcon>
                    <p>Vojvode Janka Stojićevića 22, Šabac</p>
                </span>
                <div className="search-wrapper">
                    <SearchIcon color='primary' className='icon'></SearchIcon>
                </div>
            </div>
            {showMap && <div className='map-container'>
                <MapContainer center={[44.746476, 19.7033064]} zoom={13} scrollWheelZoom={false}>
                    <TileLayer
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    <Marker position={[44.746476, 19.7033064]}>
                        <Popup>
                            A pretty CSS3 popup. <br /> Easily customizable.
                        </Popup>
                    </Marker>
                </MapContainer>
            </div>}
        </div>
    );
}
