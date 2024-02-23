import Content1 from './/assets/Img1.jpeg';
//import Content2 from './assets/Img2.jpeg';

function HomepageImages() {
    return (
    <div className="HomepageImages">
        <a href='/' className="prev" >&#10094;</a>
        <img src={Content1} className='ContentImages' alt='Content1'/>
        <div className='ImageCaption'>
         <p className='ImageCaptions'>Royal Dining Experience</p>
        </div>
        <a href='/' className="next" >&#10095;</a>
    </div>
    )
}

export default HomepageImages