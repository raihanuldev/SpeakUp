import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import SliderBanner from "./SliderBanner";

import img1 from '../../../assets/Banner/img1.jpg'
import img2 from '../../../assets/Banner/img2.jpg'
import img3 from '../../../assets/Banner/img3.jpg'

const Banner = () => {
    return (
        <Carousel>
            <div>
                <img src={img1} alt="" />
            </div>
            <div><img src={img2} alt="" /></div>
            <div><img src={img3} alt="" /></div>
            <div><img src={img1} alt="" /></div>
            <div><img src={img2} alt="" /></div>
            <div><img src={img3} alt="" /></div>
        </Carousel>
    );
};

export default Banner;