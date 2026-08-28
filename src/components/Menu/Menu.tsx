import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import "./Menu.css";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import logoMain from "../../assets/plant-centar-logo-horizontalni.svg";

const assortmentPaths = [
  "sredstva-za-zastitu-bilja",
  "sredstva-za-ishranu-bilja",
  "semenska-roba",
  "pet-program-i-hrana-za-životinje",
  "garden-program",
];

interface MenuProps {
  onNavigate: (path: string) => void; // Pass the handleNavigation function from App
}

export default function Menu({ onNavigate }: MenuProps) {
  const [selected, setSelected] = useState<string>("pocetna");
  const [menuClicked, setMenuClicked] = useState<boolean>(false);
  const [categoriesHover, setCategoriesHover] = useState<boolean>(false);

  // Grab the current location object from React Router
  const location = useLocation();
  const assortmentSelected = assortmentPaths.includes(selected);

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
          className="menu-item menu-item--assortment"
          id={assortmentSelected ? "selected" : ""}
          onMouseEnter={hoverIn}
          onMouseLeave={hoverOut}
          aria-haspopup="true"
          aria-expanded={categoriesHover}
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
          className="menu-item menu-item--shop"
          id={selected === "prodavnica" ? "selected" : ""}
          onClick={() => {
            if (selected !== "prodavnica") {
              onNavigate("/prodavnica");
              setSelected("prodavnica");
            }
          }}
        >
          Prodavnica
        </div>
        <div
          className="menu-item"
          id={selected === "partneri" ? "selected" : ""}
          onClick={() => {
            if (selected !== "partneri") {
              onNavigate("/partneri");
              setSelected("partneri");
            }
          }}
        >
          Partneri
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
      <div className="menu-icon">
        <button
          type="button"
          className="mobile-menu-toggle"
          onClick={toggleMenu}
          aria-label={menuClicked ? "Zatvori meni" : "Otvori meni"}
          aria-expanded={menuClicked}
        >
          {!menuClicked ? <MenuIcon /> : <CloseIcon />}
        </button>
        <button
          type="button"
          className="mobile-logo-button"
          aria-label="Plant centar početna"
          onClick={() => {
            if (selected !== "pocetna") {
              onNavigate("/pocetna");
              setSelected("pocetna");
            }
            setMenuClicked(false);
          }}
        >
          <img src={logoMain} alt="Plant centar" />
        </button>
        <span className="mobile-menu-balance" aria-hidden="true" />
      </div>

      {/* ---- Mobile Menu Drawer ---- */}
      {menuClicked && (
        <>
          <button
            type="button"
            className="menu-backdrop"
            aria-label="Zatvori meni"
            onClick={() => setMenuClicked(false)}
          />
          <nav className="small-screen-wrapper" aria-label="Mobilna navigacija">
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
            id={assortmentSelected ? "selected" : ""}
            onClick={() => setCategoriesHover((old) => !old)}
            aria-expanded={categoriesHover}
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
            Prodavnica
          </div>
          <div
            className="small-menu-item"
            id={selected === "partneri" ? "selected" : ""}
            onClick={() => {
              if (selected !== "partneri") {
                onNavigate("/partneri");
                setSelected("partneri");
              }
              setMenuClicked(false);
            }}
          >
            Partneri
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
          </nav>
        </>
      )}
    </div>
  );
}
