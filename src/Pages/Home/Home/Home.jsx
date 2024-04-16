import { Helmet } from "react-helmet-async";
// import Banner from "../Banner/Banner";
import Coures from "../Coures/Coures";
import Instructors from "../Instructors/Instructors";
import Testimonial from "../Testimonial/Testimonial.jsx";
import Hero from "../Hero/Hero";
import Mission from "../Mission/Mission.jsx";

const Home = () => {
  return (
    <div>
      <div>
        <Helmet>
          <title>Home || SpeakUp</title>
        </Helmet>
      </div>
      <Hero />
      {/* <Banner></Banner> */}
      <div className="mx-20">
        <Coures />
        <Instructors />
        <Testimonial />
        <Mission />
      </div>
    </div>
  );
};

export default Home;
