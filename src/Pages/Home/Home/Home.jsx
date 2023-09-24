import { Helmet } from "react-helmet-async";
import Banner from "../Banner/Banner";
import Coures from "../Coures/Coures";
import Instructors from "../Instructors/Instructors";
import Testimonial from '../Testimonial/Testimonial.jsx'
import Hero from "../Hero/Hero";

const Home = () => {

    return (
        <div>
            <div>
                <Helmet>
                    <title>Home || SpeakUp</title>
                </Helmet>
            </div>
            <Hero/>
            {/* <Banner></Banner> */}
            {/* <Coures></Coures>
            <Instructors></Instructors>
            <Testimonial></Testimonial> */}
        </div>
    );
};

export default Home;