import { useState } from "react";
import "./Menu.css";
import MenuIcon from "@mui/icons-material/Menu";
import logoMain from "../../assets/PlantCLogo.jpg";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { useNavigate } from "react-router-dom";

export default function Menu() {
  const navigate = useNavigate();

  const [selected, setSelected] = useState<string>("pocetna");
  const [menuClicked, setMenuClicked] = useState<boolean>(false);
  const [categoriesHover, setCategoriesHover] = useState<boolean>(false);

  function toggleMenu() {
    const oldState = menuClicked;
    setMenuClicked(!oldState);
  }

  function hoverIn() {
    setCategoriesHover(true);
  }

  function hoverOut() {
    setCategoriesHover(false);
  }

  return (
    <div className="menu-container">
      <div className="menu-wrapper">
        <div
          className="menu-item"
          id={selected === "pocetna" ? "selected" : ""}
          onClick={() => {
            navigate("/početna");
            setSelected("pocetna");
          }}
        >
          Početna
        </div>
        <div
          className="menu-item"
          id={selected === "o-nama" ? "selected" : ""}
          onClick={() => {
            navigate("/o-nama");
            setSelected("o-nama");
          }}
        >
          O nama
        </div>
        <div
          className="menu-item"
          id={selected === "asortiman" ? "selected" : ""}
          onClick={() => {
            navigate("asortiman");
            setSelected("asortiman");
          }}
          onMouseEnter={hoverIn}
          onMouseLeave={hoverOut}
        >
          Asortiman
          <KeyboardArrowDownIcon />
          {categoriesHover && (
            <div className="categories-container">
              <div
                className="category"
                onClick={() => navigate("sredstva-za-zastitu-bilja")}
              >
                Sredstva za zaštitu bilja
              </div>
              <div
                className="category"
                onClick={() => navigate("sredstva-za-ishranu-bilja")}
              >
                Sredstva za ishranu bilja
              </div>
              <div
                className="category"
                onClick={() => navigate("semenska-roba")}
              >
                Semenska roba
              </div>
              <div
                className="category"
                onClick={() => navigate("hrana-za-domaće-životinje")}
              >
                Hrana za domaće životinje
              </div>
              <div
                className="category"
                onClick={() => navigate("hrana-za-kućne-ljubimce")}
              >
                Hrana i oprema za kućne ljubimce
              </div>
              <div
                className="category"
                onClick={() => navigate("alati-i-oprema")}
              >
                Alati i oprema
              </div>
            </div>
          )}
        </div>
        <div
          className="menu-item"
          id={selected === "galerija" ? "selected" : ""}
          onClick={() => {
            navigate("/galerija");
            setSelected("galerija");
          }}
        >
          Galerija
        </div>
        <div
          className="menu-item"
          id={selected === "kontakt" ? "selected" : ""}
          onClick={() => {
            navigate("/kontakt");
            setSelected("kontakt");
          }}
        >
          Kontakt
        </div>
        <div
          className="menu-item"
          id={selected === "prodavnica" ? "selected" : ""}
          onClick={() => {
            navigate("/prodavnica");
            setSelected("prodavnica");
          }}
        >
          Prodavnica
        </div>
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
          <div
            className="small-menu-item"
            id={selected === "pocetna" ? "selected" : ""}
            onClick={() => {
              navigate("/početna");
              setSelected("pocetna");
            }}
          >
            Početna
          </div>
          <div
            className="small-menu-item"
            id={selected === "o-nama" ? "selected" : ""}
            onClick={() => {
              navigate("/o-nama");
              setSelected("o-nama");
            }}
          >
            O nama
          </div>
          <div
            className="small-menu-item"
            id={selected === "asortiman" ? "selected" : ""}
            onClick={() => {
              navigate("asortiman");
              setSelected("asortiman");
              setCategoriesHover((oldState) => !oldState);
            }}
          >
            Asortiman
            <KeyboardArrowDownIcon />
            {categoriesHover && (
              <div className="small-categories-container">
                <div
                  className="category"
                  onClick={() => navigate("sredstva-za-zastitu-bilja")}
                >
                  Sredstva za zaštitu bilja
                </div>
                <div
                  className="category"
                  onClick={() => navigate("sredstva-za-ishranu-bilja")}
                >
                  Sredstva za ishranu bilja
                </div>
                <div
                  className="category"
                  onClick={() => navigate("semenska-roba")}
                >
                  Semenska roba
                </div>
                <div
                  className="category"
                  onClick={() => navigate("hrana-za-domaće-životinje")}
                >
                  Hrana za domaće životinje
                </div>
                <div
                  className="category"
                  onClick={() => navigate("hrana-za-kućne-ljubimce")}
                >
                  Hrana i oprema za kućne ljubimce
                </div>
                <div
                  className="category"
                  onClick={() => navigate("alati-i-oprema")}
                >
                  Alati i oprema
                </div>
              </div>
            )}
          </div>
          <div
            className="small-menu-item"
            id={selected === "galerija" ? "selected" : ""}
            onClick={() => {
              navigate("/galerija");
              setSelected("galerija");
            }}
          >
            Galerija
          </div>
          <div
            className="small-menu-item"
            id={selected === "kontakt" ? "selected" : ""}
            onClick={() => {
              navigate("/kontakt");
              setSelected("kontakt");
            }}
          >
            Kontakt
          </div>
          <div
            className="small-menu-item"
            id={selected === "prodavnica" ? "selected" : ""}
            onClick={() => {
              navigate("/prodavnica");
              setSelected("prodavnica");
            }}
          >
            Prodavnica
          </div>
        </div>
      )}
    </div>
  );
}
