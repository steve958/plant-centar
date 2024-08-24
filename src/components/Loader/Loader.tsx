import './Loader.css';
import logo from '../../assets/loader.png'; // Ensure the correct path

const Loader = () => {
    return (
        <div className="loader">
            <div className="loader-circle">
                <img src={logo} alt="Loading..." className="loader-img" />
            </div>
        </div>
    );
};

export default Loader;