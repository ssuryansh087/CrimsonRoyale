import Logo from './assets/Logo2.png'

function Privileges(){
    return (
        <div className='Privileges'>
        <button id='GetPremium'>Become A Premium Member</button>
        <h2 id='BenefitsTitle'>Become a Privileged Guest:</h2>
        <p id='BenefitsDescription'>Unlock exclusive benefits with our Premium 
        Membership program. Enjoy priority reservations, discounted dining experiences, 
        and access to special events, all designed to elevate your dining experience 
        to new heights. Download our App to Explore our Premium Memberships.</p>
        <img src={Logo} alt='Crimson Royale Logo' id='PremiumLogo'/>
      </div>
    )
}

export default Privileges;