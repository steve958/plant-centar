import './Header.css'
import FmdGoodIcon from '@mui/icons-material/FmdGood';
import SearchIcon from '@mui/icons-material/Search';

export default function Header() {

    return (
        <div className="header-container">
            <div className="header-wrapper">
                <p className='moto'><b>Posvećenost uspehu</b></p>
                <span className='address-wrapper'>
                    <FmdGoodIcon color='secondary' className='icon'></FmdGoodIcon>
                    <p>Vojvode Janka Stojićevića 22, Šabac</p>
                </span>
                <div className="search-wrapper">
                    <SearchIcon color='primary' className='icon'></SearchIcon>
                </div>
            </div>
        </div>
    );
}
