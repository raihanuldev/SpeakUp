import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper";
import Cart from "./Cart";

const Testimonial = () => {
  return (
    <div className="my-7">
      <div>
        <h2 className="text-3xl text-center font-semibold mt-3">
          Our Students says,
        </h2>
        <p className="text-center">Some Testimonial from our Students</p>
      </div>
      <div className="card w-96 bg-base-200 shadow-xl flex flex-col  p-5 transform transition-all duration-1000 hover:scale-105 my-3">
        <div>
          <p>
            The ‘Programming Hero’ has a specialized team that assists students
            in obtaining job placements. This is a special reward incentive for
            dedicated l................
          </p>
        </div>
        <div className="py-2">
          <p className=" font-semibold">Raihan Sharif</p>
          <p>Learned Japanes Language </p>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
