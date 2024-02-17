import { useState } from 'react';
import './Menu.css';
import MenuIcon from '@mui/icons-material/Menu';
import logoMain from '../../assets/PlantCLogo.jpg';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { useNavigate } from 'react-router-dom';

export default function Menu() {
  const navigate = useNavigate();

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
        <div className="menu-item" onClick={() => navigate('/početna')}>
          Početna
        </div>
        <div className="menu-item" onClick={() => navigate('/o-nama')}>
          O nama
        </div>
        <div
          className="menu-item"
          onMouseEnter={hoverIn}
          onMouseLeave={hoverOut}
        >
          Naš asortiman
          <KeyboardArrowDownIcon />
          {categoriesHover && (
            <div className="categories-container">
              <div className="category">bla</div>
              <div className="category">bla</div>
              <div className="category">bla</div>
              <div className="category">bla</div>
            </div>
          )}
        </div>
        <div className="menu-item" onClick={() => navigate('/galerija')}>
          Galerija
        </div>
        <div className="menu-item">Kontakt</div>
      </div>
      <span onClick={toggleMenu} className="menu-icon">
        {!menuClicked ? (
          <MenuIcon />
        ) : (
          <ArrowBackIcon id={menuClicked ? 'active' : 'inactive'} />
        )}
        <img src={logoMain} alt="" />
      </span>
      {menuClicked && (
        <div className="small-screen-wrapper">
          <div className="small-menu-item" onClick={() => navigate('/početna')}>
            Početna
          </div>
          <div className="small-menu-item" onClick={() => navigate('/o-nama')}>
            O nama
          </div>
          <div
            className="small-menu-item"
            onMouseEnter={hoverIn}
            onMouseLeave={hoverOut}
          >
            Naš asortiman
            <KeyboardArrowDownIcon />
            {categoriesHover && (
              <div className="small-categories-container">
                <div className="category">bla</div>
                <div className="category">bla</div>
                <div className="category">bla</div>
                <div className="category">bla</div>
              </div>
            )}
          </div>
          <div className="small-menu-item">Galerija</div>
          <div className="small-menu-item">Kontakt</div>
        </div>
      )}
    </div>
  );
}
