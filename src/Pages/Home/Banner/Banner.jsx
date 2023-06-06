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
                <SliderBanner img={img1} title='To have another language is to possess a second soul.'></SliderBanner>
            </div>
            <div>
                <SliderBanner img={img2} title='We Provide One OF The Best Outline for Every Students'></SliderBanner>
            </div>
            <div>
                <SliderBanner img={img3} title='To have another language is to possess a second soul.'></SliderBanner>
            </div>
        </Carousel>
    );
};

export default Banner;