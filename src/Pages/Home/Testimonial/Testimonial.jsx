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
                <h2 className="text-3xl text-center font-semibold mt-3">Our Students  says,</h2>
                <p className="text-center">Some Testimonial from our Students</p>
            </div>
            <div className="items-center">
                <Swiper
                    cssMode={true}
                    navigation={true}
                    pagination={true}
                    mousewheel={true}
                    keyboard={true}
                    modules={[Navigation, Pagination, Mousewheel, Keyboard]}
                    className="mySwiper">
                    <SwiperSlide>
                        <Cart img="https://scontent.fdac2-1.fna.fbcdn.net/v/t39.30808-6/314334617_1867452343587154_716205749463897386_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=174925&_nc_eui2=AeGI6eB3BMJWY0miEJ-tsdfCgJUKLs4_qqiAlQouzj-qqC7KHIClTFPWvI1V1j7DSJOuEMFKvxmwvz0iJkyL2wrz&_nc_ohc=wbwO7lycgIoAX_Sf8JI&_nc_zt=23&_nc_ht=scontent.fdac2-1.fna&oh=00_AfCqKYpR6Zi86XJZ2Hj9mOz01qMkGwBVk0sxLCVqEjc-9A&oe=646D4E33" ></Cart>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Cart img='https://scontent.fdac2-1.fna.fbcdn.net/v/t39.30808-6/285270547_1748865732112483_131887826714952621_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=174925&_nc_eui2=AeHb-LnqiNR5W8ekZVraqDGWu2zD_VvTRfa7bMP9W9NF9p7u0-csDPGSEGqhLPAi-X0Tf7uMXVdlvAtoaCpY9SHc&_nc_ohc=rwQcC-5JRo0AX-5SlnP&_nc_zt=23&_nc_ht=scontent.fdac2-1.fna&oh=00_AfBAyzIm71laHJq0exNKnHKnbsfXoYowxjRa-XRNQ4WN_A&oe=646ED5D0'></Cart>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Cart img="https://scontent.fdac2-1.fna.fbcdn.net/v/t39.30808-6/314334617_1867452343587154_716205749463897386_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=174925&_nc_eui2=AeGI6eB3BMJWY0miEJ-tsdfCgJUKLs4_qqiAlQouzj-qqC7KHIClTFPWvI1V1j7DSJOuEMFKvxmwvz0iJkyL2wrz&_nc_ohc=wbwO7lycgIoAX_Sf8JI&_nc_zt=23&_nc_ht=scontent.fdac2-1.fna&oh=00_AfCqKYpR6Zi86XJZ2Hj9mOz01qMkGwBVk0sxLCVqEjc-9A&oe=646D4E33"></Cart>
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    );
};

export default Testimonial;