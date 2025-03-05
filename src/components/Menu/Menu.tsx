import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import "./Menu.css";
import MenuIcon from "@mui/icons-material/Menu";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import logoMain from "../../assets/PlantCLogo.jpg";

interface MenuProps {
  onNavigate: (path: string) => void; // Pass the handleNavigation function from App
}

export default function Menu({ onNavigate }: MenuProps) {
  const [selected, setSelected] = useState<string>("pocetna");
  const [menuClicked, setMenuClicked] = useState<boolean>(false);
  const [categoriesHover, setCategoriesHover] = useState<boolean>(false);

  // Grab the current location object from React Router
  const location = useLocation();

  useEffect(() => {
    // Whenever the pathname changes, parse it and update 'selected'
    const newPath = location.pathname.replace(/^\/+/, ""); // remove leading slash(es)
    setSelected(newPath || "pocetna"); // if it's empty (i.e. just "/"), default to "pocetna"
  }, [location.pathname]);

  function toggleMenu() {
    setMenuClicked((oldState) => !oldState);
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
        {/* ---- Desktop Menu Items ---- */}
        <div
          className="menu-item"
          id={selected === "pocetna" ? "selected" : ""}
          onClick={() => {
            if (selected !== "pocetna") {
              onNavigate("/pocetna");
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
              onNavigate("/o-nama");
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
                onClick={() => {
                  if (selected !== "sredstva-za-zastitu-bilja") {
                    onNavigate("/sredstva-za-zastitu-bilja");
                    setSelected("sredstva-za-zastitu-bilja");
                  }
                }}
              >
                Sredstva za zaštitu bilja
              </div>
              <div
                className="category"
                onClick={() => {
                  if (selected !== "sredstva-za-ishranu-bilja") {
                    onNavigate("/sredstva-za-ishranu-bilja");
                    setSelected("sredstva-za-ishranu-bilja");
                  }
                }}
              >
                Sredstva za ishranu bilja
              </div>
              <div
                className="category"
                onClick={() => {
                  if (selected !== "semenska-roba") {
                    onNavigate("/semenska-roba");
                    setSelected("semenska-roba");
                  }
                }}
              >
                Semenska roba
              </div>
              <div
                className="category"
                onClick={() => {
                  if (selected !== "pet-program-i-hrana-za-životinje") {
                    onNavigate("/pet-program-i-hrana-za-životinje");
                    setSelected("pet-program-i-hrana-za-životinje");
                  }
                }}
              >
                Pet program i hrana za životinje
              </div>
              <div
                className="category"
                onClick={() => {
                  if (selected !== "garden-program") {
                    onNavigate("/garden-program");
                    setSelected("garden-program");
                  }
                }}
              >
                Garden program
              </div>
            </div>
          )}
        </div>
        <div
          className="menu-item"
          id={selected === "prodavnica" ? "selected" : ""}
          onClick={() => {
            if (selected !== "prodavnica") {
              onNavigate("/prodavnica");
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
            if (selected !== "galerija") {
              onNavigate("/galerija");
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
            if (selected !== "kontakt") {
              onNavigate("/kontakt");
              setSelected("kontakt");
            }
          }}
        >
          Kontakt
        </div>
      </div>

      {/* ---- Mobile Menu Icon ---- */}
      <span onClick={toggleMenu} className="menu-icon">
        {!menuClicked ? (
          <MenuIcon />
        ) : (
          <ArrowBackIcon id={menuClicked ? "active" : "inactive"} />
        )}
        <img src={logoMain} alt="Logo" />
      </span>

      {/* ---- Mobile Menu Drawer ---- */}
      {menuClicked && (
        <div className="small-screen-wrapper">
          <div
            className="small-menu-item"
            id={selected === "pocetna" ? "selected" : ""}
            onClick={() => {
              if (selected !== "pocetna") {
                onNavigate("/pocetna");
                setSelected("pocetna");
              }
              setMenuClicked(false);
            }}
          >
            Početna
          </div>
          <div
            className="small-menu-item"
            id={selected === "o-nama" ? "selected" : ""}
            onClick={() => {
              if (selected !== "o-nama") {
                onNavigate("/o-nama");
                setSelected("o-nama");
              }
              setMenuClicked(false);
            }}
          >
            O nama
          </div>
          <div
            className="small-menu-item"
            onClick={() => setCategoriesHover((old) => !old)}
          >
            Asortiman
            <KeyboardArrowDownIcon />
            {categoriesHover && (
              <div className="small-categories-container">
                <div
                  className="category"
                  onClick={() => {
                    if (selected !== "sredstva-za-zastitu-bilja") {
                      onNavigate("/sredstva-za-zastitu-bilja");
                      setSelected("sredstva-za-zastitu-bilja");
                    }
                    setMenuClicked(false);
                  }}
                >
                  Sredstva za zaštitu bilja
                </div>
                <div
                  className="category"
                  onClick={() => {
                    if (selected !== "sredstva-za-ishranu-bilja") {
                      onNavigate("/sredstva-za-ishranu-bilja");
                      setSelected("sredstva-za-ishranu-bilja");
                    }
                    setMenuClicked(false);
                  }}
                >
                  Sredstva za ishranu bilja
                </div>
                <div
                  className="category"
                  onClick={() => {
                    if (selected !== "semenska-roba") {
                      onNavigate("/semenska-roba");
                      setSelected("semenska-roba");
                    }
                    setMenuClicked(false);
                  }}
                >
                  Semenska roba
                </div>
                <div
                  className="category"
                  onClick={() => {
                    if (selected !== "pet-program-i-hrana-za-životinje") {
                      onNavigate("/pet-program-i-hrana-za-životinje");
                      setSelected("pet-program-i-hrana-za-životinje");
                    }
                    setMenuClicked(false);
                  }}
                >
                  Pet program i hrana za životinje
                </div>
                <div
                  className="category"
                  onClick={() => {
                    if (selected !== "garden-program") {
                      onNavigate("/garden-program");
                      setSelected("garden-program");
                    }
                    setMenuClicked(false);
                  }}
                >
                  Garden program
                </div>
              </div>
            )}
          </div>
          <div
            className="small-menu-item"
            id={selected === "prodavnica" ? "selected" : ""}
            onClick={() => {
              if (selected !== "prodavnica") {
                onNavigate("/prodavnica");
                setSelected("prodavnica");
              }
              setMenuClicked(false);
            }}
          >
            Plant shop
          </div>
          <div
            className="small-menu-item"
            id={selected === "galerija" ? "selected" : ""}
            onClick={() => {
              if (selected !== "galerija") {
                onNavigate("/galerija");
                setSelected("galerija");
              }
              setMenuClicked(false);
            }}
          >
            Galerija
          </div>
          <div
            className="small-menu-item"
            id={selected === "kontakt" ? "selected" : ""}
            onClick={() => {
              if (selected !== "kontakt") {
                onNavigate("/kontakt");
                setSelected("kontakt");
              }
              setMenuClicked(false);
            }}
          >
            Kontakt
          </div>
        </div>
      )}
    </div>
  );
}
