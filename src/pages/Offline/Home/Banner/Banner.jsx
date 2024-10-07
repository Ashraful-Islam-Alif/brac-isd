import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Pagination, Autoplay } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "./Banner.css"; // Include your custom styles for Swiper

import image1 from "./Trade Based Offline Photos/EIM1.webp";
import image2 from "./Trade Based Offline Photos/EIM2.webp";
import image3 from "./Trade Based Offline Photos/F&B1.webp";
import image4 from "./Trade Based Offline Photos/F&B2.webp";
import image5 from "./Trade Based Offline Photos/GW1.webp";
import image6 from "./Trade Based Offline Photos/GW2.webp";
import image7 from "./Trade Based Offline Photos/GW3.webp";
import image8 from "./Trade Based Offline Photos/HK1.webp";
import image9 from "./Trade Based Offline Photos/HK2.webp";
import image10 from "./Trade Based Offline Photos/HK3.webp";
import image11 from "./Trade Based Offline Photos/IT1.webp";
import image12 from "./Trade Based Offline Photos/IT2.webp";
import image13 from "./Trade Based Offline Photos/IT3.webp";
import image14 from "./Trade Based Offline Photos/PLC1.webp";
import image15 from "./Trade Based Offline Photos/PLC2.webp";
import image16 from "./Trade Based Offline Photos/PLC3.webp";
import image17 from "./Trade Based Offline Photos/RAC1.webp";
import image18 from "./Trade Based Offline Photos/RAC2.webp";
import image19 from "./Trade Based Offline Photos/Retail_Sales1.webp";
import image20 from "./Trade Based Offline Photos/Retail_Sales2.webp";
const Banner = () => {
  return (
    <div className="bg-gray-200">
      <div
        className="hero mt-24 relative"
        style={{ width: "100%", height: "60vh" }}
      >
        {/* <div className="hero-overlay bg-opacity-60"></div> */}
        {/* Swiper Component */}
        <Swiper
          slidesPerView={3}
          spaceBetween={20}
          lazy={true}
          freeMode={true}
          pagination={{
            clickable: true,
          }}
          autoplay={{
            delay: 3000, // Slide every 3 seconds
            disableOnInteraction: false, // Keeps autoplay running even after user interaction
          }}
          modules={[FreeMode, Pagination, Autoplay]} // Add Autoplay module
          className="mySwiper"
        >
          <SwiperSlide>
            <img
              src={image1}
              
              alt="Slide 1"
              className="w-full h-full object-cover "
            />
             <div className="swiper-lazy-preloader"></div>
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={image2}
              
              alt="Slide 2"
              className="w-full h-full object-cover "
            />
             <div className="swiper-lazy-preloader"></div>
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={image3}
              
              alt="Slide 3"
              className="w-full h-full object-cover "
            />
             <div className="swiper-lazy-preloader"></div>
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={image4}
              
              alt="Slide 4"
              className="w-full h-full object-cover "
            />
             <div className="swiper-lazy-preloader"></div>
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={image5}
              
              alt=""
              className="w-full h-full object-cover "
            />
             <div className="swiper-lazy-preloader"></div>
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={image6}
              
              alt=""
              className="w-full h-full object-cover "
            />
             <div className="swiper-lazy-preloader"></div>
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={image7}
              
              alt=""
              className="w-full h-full object-cover "
            />
             <div className="swiper-lazy-preloader"></div>
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={image8}
              
              alt=""
              className="w-full h-full object-cover "
            />
             <div className="swiper-lazy-preloader"></div>
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={image9}
              
              alt=""
              className="w-full h-full object-cover "
            />
             <div className="swiper-lazy-preloader"></div>
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={image10}
              
              alt=""
              className="w-full h-full object-cover "
            />
             <div className="swiper-lazy-preloader"></div>
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={image11}
              
              alt=""
              className="w-full h-full object-cover "
            />
             <div className="swiper-lazy-preloader"></div>
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={image12}
              
              alt=""
              className="w-full h-full object-cover "
            />
             <div className="swiper-lazy-preloader"></div>
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={image13}
              
              alt=""
              className="w-full h-full object-cover "
            />
             <div className="swiper-lazy-preloader"></div>
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={image14}
              
              alt=""
              className="w-full h-full object-cover "
            />
             <div className="swiper-lazy-preloader"></div>
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={image15}
              
              alt=""
              className="w-full h-full object-cover "
            />
             <div className="swiper-lazy-preloader"></div>
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={image16}
              
              alt=""
              className="w-full h-full object-cover "
            />
             <div className="swiper-lazy-preloader"></div>
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={image17}
              
              alt=""
              className="w-full h-full object-cover "
            />
             <div className="swiper-lazy-preloader"></div>
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={image18}
              
              alt=""
              className="w-full h-full object-cover "
            />
             <div className="swiper-lazy-preloader"></div>
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={image19}
              
              alt=""
              className="w-full h-full object-cover "
            />
             <div className="swiper-lazy-preloader"></div>
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={image20}
              
              alt=""
              className="w-full h-full object-cover "
            />
             <div className="swiper-lazy-preloader"></div>
          </SwiperSlide>
        </Swiper>

        <div className="absolute inset-0 flex flex-col items-center justify-center text-center  z-10">
          {/* bg-black bg-opacity-10 p-6 */}
          <div className="max-w-xl md:max-w-2xl lg:max-w-2xl">
            <h2 className="text-xl md:text-3xl lg:text-5xl font-bold text-white ">
              BRAC Institute of Skills Development
            </h2>
            <hr className="mx-12 md:mx-20 lg:mx-60 mt-4 border-t-8 font-bold border-[#FFA100]" />
          </div>
        </div>
      </div>
      <h2 className="text-center text-black text-lg md:text-2xl lg:text-5xl p-8 font-bold">
        About Us
      </h2>
    </div>
  );
};

export default Banner;
