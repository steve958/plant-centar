import { useEffect, useState } from "react";
import "./Menu.css";
import MenuIcon from "@mui/icons-material/Menu";
import logoMain from "../../assets/PlantCLogo.jpg";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

interface MenuProps {
  onNavigate: (path: string) => void;  // Pass the handleNavigation function from App
}

export default function Menu({ onNavigate }: MenuProps) {
  const [selected, setSelected] = useState<string>("pocetna");
  const [menuClicked, setMenuClicked] = useState<boolean>(false);
  const [categoriesHover, setCategoriesHover] = useState<boolean>(false);

  useEffect(() => {
    const href = window.location.href.slice(window.location.href.indexOf("#"));
    if (href.length > 20) {
      setSelected("");
    }
  }, [window.location.href]);

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
            if (selected !== "pocetna") {
              onNavigate("/početna");  // Invoke navigation with loader
              setSelected("pocetna");
            }
          }}
        >
          Početna
        </div>
        <div
          className="menu-item"
          id={selected === "o-nama" ? "selected" : ""}
          onClick={() => {
            if (selected !== "o-nama") {
              onNavigate("/o-nama");  // Invoke navigation with loader
              setSelected("o-nama");
            }
          }}
        >
          O nama
        </div>
        <div
          className="menu-item"
          onMouseEnter={hoverIn}
          onMouseLeave={hoverOut}
        >
          Asortiman
          <KeyboardArrowDownIcon />
          {categoriesHover && (
            <div className="categories-container">
              <div
                className="category"
                onClick={() => onNavigate("sredstva-za-zastitu-bilja")}  // Invoke navigation with loader
              >
                Sredstva za zaštitu bilja
              </div>
              <div
                className="category"
                onClick={() => onNavigate("sredstva-za-ishranu-bilja")}  // Invoke navigation with loader
              >
                Sredstva za ishranu bilja
              </div>
              <div
                className="category"
                onClick={() => onNavigate("semenska-roba")}  // Invoke navigation with loader
              >
                Semenska roba
              </div>
              <div
                className="category"
                onClick={() => onNavigate("hrana-za-domaće-životinje")}  // Invoke navigation with loader
              >
                Hrana za domaće životinje
              </div>
              <div
                className="category"
                onClick={() => onNavigate("hrana-za-kućne-ljubimce")}  // Invoke navigation with loader
              >
                Hrana i oprema za kućne ljubimce
              </div>
              <div
                className="category"
                onClick={() => onNavigate("alati-i-oprema")}  // Invoke navigation with loader
              >
                Alati i oprema
              </div>
            </div>
          )}
        </div>
        <div
          className="menu-item"
          id={selected === "prodavnica" ? "selected" : ""}
          onClick={() => {
            if (selected !== 'prodavnica') {
              onNavigate("/prodavnica");  // Invoke navigation with loader
              setSelected("prodavnica");
            }
          }}
        >
          Plant shop
        </div>
        <div
          className="menu-item"
          id={selected === "galerija" ? "selected" : ""}
          onClick={() => {
            if (selected !== 'galerija') {
              onNavigate("/galerija");  // Invoke navigation with loader
              setSelected("galerija");
            }
          }}
        >
          Galerija
        </div>
        <div
          className="menu-item"
          id={selected === "kontakt" ? "selected" : ""}
          onClick={() => {
            if (selected !== 'kontakt') {
              onNavigate("/kontakt");  // Invoke navigation with loader
              setSelected("kontakt");
            }
          }}
        >
          Kontakt
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
              if (selected !== 'pocetna') {
                onNavigate("/početna");  // Invoke navigation with loader
                setSelected("pocetna");
              }
              setMenuClicked(false)
            }}
          >
            Početna
          </div>
          <div
            className="small-menu-item"
            id={selected === "o-nama" ? "selected" : ""}
            onClick={() => {
              if (selected !== 'o-nama') {
                onNavigate("/o-nama");  // Invoke navigation with loader
                setSelected("o-nama");
              }
              setMenuClicked(false)
            }}
          >
            O nama
          </div>
          <div
            className="small-menu-item"
            onClick={() => setCategoriesHover((oldState) => !oldState)}
          >
            Asortiman
            <KeyboardArrowDownIcon />
            {categoriesHover && (
              <div className="small-categories-container">
                <div
                  className="category"
                  onClick={() => {
                    onNavigate("sredstva-za-zastitu-bilja")
                    setMenuClicked(false)
                  }}  // Invoke navigation with loader
                >
                  Sredstva za zaštitu bilja
                </div>
                <div
                  className="category"
                  onClick={() => {
                    onNavigate("sredstva-za-ishranu-bilja")
                    setMenuClicked(false)
                  }}  // Invoke navigation with loader
                >
                  Sredstva za ishranu bilja
                </div>
                <div
                  className="category"
                  onClick={() => {
                    onNavigate("semenska-roba")
                    setMenuClicked(false)
                  }}  // Invoke navigation with loader
                >
                  Semenska roba
                </div>
                <div
                  className="category"
                  onClick={() => {
                    onNavigate("hrana-za-domaće-životinje")
                    setMenuClicked(false)
                  }}  // Invoke navigation with loader
                >
                  Hrana za domaće životinje
                </div>
                <div
                  className="category"
                  onClick={() => {
                    onNavigate("hrana-za-kućne-ljubimce")
                    setMenuClicked(false)
                  }}  // Invoke navigation with loader
                >
                  Hrana i oprema za kućne ljubimce
                </div>
                <div
                  className="category"
                  onClick={() => {
                    onNavigate("alati-i-oprema")
                    setMenuClicked(false)
                  }}  // Invoke navigation with loader
                >
                  Alati i oprema
                </div>
              </div>
            )}
          </div>
          <div
            className="small-menu-item"
            id={selected === "prodavnica" ? "selected" : ""}
            onClick={() => {
              if (selected !== 'prodavnica') {
                onNavigate("/prodavnica");  // Invoke navigation with loader
                setSelected("prodavnica");
              }
              setMenuClicked(false)
            }}
          >
            Plant shop
          </div>
          <div
            className="small-menu-item"
            id={selected === "galerija" ? "selected" : ""}
            onClick={() => {
              if (selected !== 'galerija') {
                onNavigate("/galerija");  // Invoke navigation with loader
                setSelected("galerija");
              }
              setMenuClicked(false)
            }}
          >
            Galerija
          </div>
          <div
            className="small-menu-item"
            id={selected === "kontakt" ? "selected" : ""}
            onClick={() => {
              if (selected !== 'kontakt') {
                onNavigate("/kontakt");  // Invoke navigation with loader
                setSelected("kontakt");
              }
              setMenuClicked(false)
            }}
          >
            Kontakt
          </div>
        </div>
      )}
    </div>
  );
}
