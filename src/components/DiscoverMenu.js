import SimpleImageSlider from "react-simple-image-slider";
import Menu1 from './assets/Menu1.jpeg';
import Menu2 from './assets/Menu2.jpeg';
import Menu3 from './assets/Menu3.jpeg';
import Menu4 from './assets/Menu4.jpeg';
import CrimsonRoyaleMenu from './assets/Menu/CrimsonRoyaleMenu.pdf';

function DiscoverMenu(){

    const sliderImages = [
        {
            url:  Menu1
        },
        {
            url:  Menu2
        },
        {
            url:  Menu3
        },
        {
            url: Menu4
        },
      ];

    return(
        <div className='DiscoverMenu'>
        <h2 id='MenuTitle'>Discover our menu</h2>
        <p id='MenuDescription'>Venture beyond the borders of India with 
        our International Specials menu. Savor the delicate dance of spices in 
        our Thai Green Curry, or delight in the rustic charm of our Italian 
        Spaghetti Carbonara. We offer a taste of international culinary hotspots, 
        ensuring that every palate finds its perfect match.</p>
        <a href={CrimsonRoyaleMenu} download="CrimsonRoyaleMenu" target="_blank" rel="noreferrer"><button id='MenuButton'>Restaurant Menu</button></a>
        <div id='Slider2'>
            <SimpleImageSlider
            width={400}
            height={400}
            images={sliderImages}
            showNavs={false}
            autoPlay={true}
            autoPlayDelay={3}
            /> 
        </div>
      </div>
    )
}

export default DiscoverMenu;