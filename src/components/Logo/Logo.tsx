import './Logo.css'
import logoMain from '../../assets/PlantCLogo.jpg'

function Logo() {
    return (
        <div className='logo-container'>
            <img src={logoMain} alt="" />
        </div>
    )
}

export default Logo