import './Logo.css'
import logoMain from '../../assets/plant-centar-logo-horizontalni.svg'

function Logo() {
    return (
        <div className='logo-container'>
            <img src={logoMain} alt="Plant centar" />
        </div>
    )
}

export default Logo
