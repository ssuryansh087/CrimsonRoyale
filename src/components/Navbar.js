import Logo from './/assets/Logo2.png'

function Navbar(){
    return(
    <div className="Navbar">
        <img src={Logo} id="MainLogo" alt="Logo"/>
        <a href="/" id="CrimsonRoyale">Crimson Royale</a>
        <a href="/" id="Home">Home</a>
        <a href="/" className="NavButtons">Browse Our Menu</a>
        <a href="/" className="NavButtons">Locations</a>
        <a href="/" className="NavButtons">Account</a>
    </div>
    )
}

export default Navbar