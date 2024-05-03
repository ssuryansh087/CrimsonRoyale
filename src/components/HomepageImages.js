import Content1 from './/assets/Img1.jpeg';
import Content2 from './assets/Img2.jpeg';
import Content3 from './assets/Img3.jpeg';
import SimpleImageSlider from "react-simple-image-slider";

function HomepageImages() {

    const sliderImages = [
        {
            url:  Content1
        },
        {
            url:  Content2
        },
        {
            url:  Content3
        },
    ];

    return (
    <div className="HomepageImages">
        <div id='Slider'>
            <SimpleImageSlider
            width={1000}
            height={800}
            images={sliderImages}
            showNavs={false}
            autoPlay={true}
            autoPlayDelay={3}
            /> 
        </div>
    </div>
    )
}

export default HomepageImages