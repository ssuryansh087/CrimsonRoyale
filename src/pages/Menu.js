import '../styles/Menu.css';
import Page1 from '../components/assets/Menu/1.png';
import Page2 from '../components/assets/Menu/2.png';
import Page3 from '../components/assets/Menu/3.png';

function Menu(){
    return(
    <div className='ImageContainer'>
        <i class="gg-arrow-left"></i>
        <a href='/' id='BackToHome'> Home</a>
        <img src={Page1} alt="Menu Page Number 1" className='MenuPages'/>
        <img src={Page2} alt="Menu Page Number 2" className='MenuPages'/>
        <img src={Page3} alt="Menu Page Number 3" className='MenuPages'/>
    </div>
    )
}

export default Menu;