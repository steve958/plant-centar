import { useState } from "react";
import "./Menu.css";
import MenuIcon from "@mui/icons-material/Menu";
import logoMain from "../../assets/PlantCLogo.jpg";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

export default function Menu() {
    const [menuClicked, setMenuClicked] = useState<boolean>(false);

    function toggleMenu() {
        const oldState = menuClicked;
        setMenuClicked(!oldState);
    }

    return (
        <div className="menu-container">
            <div className="menu-wrapper">
                <div className="menu-item">Početna</div>
                <div className="menu-item">O nama</div>
                <div className="menu-item">Naš asortiman</div>
                <div className="menu-item">Galerija</div>
                <div className="menu-item">Kontakt</div>
            </div>
            <span onClick={toggleMenu} className="menu-icon">
                {!menuClicked ? (
                    <MenuIcon />
                ) : (
                    <ArrowBackIcon id={menuClicked ? "active" : "inactive"} />
                )}
                <img src={logoMain} alt="" />
            </span>
            {menuClicked && (
                <div className="small-screen-wrapper">
                    <div className="small-menu-item">Početna</div>
                    <div className="small-menu-item">O nama</div>
                    <div className="small-menu-item">Naš asortiman</div>
                    <div className="small-menu-item">Galerija</div>
                    <div className="small-menu-item">Kontakt</div>
                </div>
            )}
        </div>
    );
}
