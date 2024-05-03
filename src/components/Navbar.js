import { Link } from 'react-router-dom'
import Logo from './/assets/Logo2.png'

function Navbar(){
    return(
    <div className="Navbar">
        <img src={Logo} id="MainLogo" alt="Logo"/>
        <Link to="/" id="CrimsonRoyale">Crimson Royale</Link>
        <Link to="/" id="Home">Home</Link>
        <Link to="/Menu" className="NavButtons">Browse Our Menu</Link>
        <Link to="/DownloadApp" className="NavButtons">Download Our App</Link>
        <Link to="/LoginPage" className="NavButtons">Account</Link>
    </div>
    )
}

export default Navbar;