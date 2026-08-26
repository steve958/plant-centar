import './Loader.css';
import logo from '../../assets/plant-centar-znak.svg';

const Loader = () => {
    return (
        <div className="loader">
            <div className="loader-circle">
                <img src={logo} alt="" className="loader-img" />
            </div>
        </div>
    );
};

export default Loader;
