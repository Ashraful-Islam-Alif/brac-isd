// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./Banner.css";

// import required modules
import { Pagination } from "swiper/modules";
import { useRef } from "react";
// import required modules
import { Autoplay, Navigation } from "swiper/modules";

import image1 from "./Banner/img1.webp";
import image2 from "./Banner/img2.webp";
import image3 from "./Banner/img3.webp";
import image4 from "./Banner/img4.webp";
import image5 from "./Banner/img5.webp";
import image6 from "./Banner/img6.webp";
import image7 from "./Banner/img7.webp";
import image8 from "./Banner/img8.webp";
import image9 from "./Banner/img9.webp";
const Banner = () => {
  const progressCircle = useRef(null);
  // const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty("--progress", 1 - progress);
    // progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };

  return (
    <div className="grid md:grid-cols-2 grid-cols-1 items-center gap-4 mt-24">
      <div className="px-8">
        <h2 className="font-bold text-xl md:text-2xl lg:text-5xl mb-4 mt-4">
          Better Learning Future Starts With BRAC ISD
        </h2>
        <p className="mt-4 md:text-lg text-sm">
          The BRAC Institute of Skills Development (BRAC ISD) is a registered
          training organisation that offers National Technical and Vocational
          Qualification Framework (NTVQF) training tailored specifically for
          young people. BRAC ISD delivers industry demand-driven,
          competency-based skills training in state-of-the-art workshops. The
          training is hands-on and individualised, provided by trainers
          certified in Competency-Based Training & Assessment (CBT&A), ensuring
          that learners gain practical expertise aligned with industry
          standards.
        </p>
      </div>
      <div>
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          onAutoplayTimeLeft={onAutoplayTimeLeft}
          className="mySwiper"
        >
          <SwiperSlide>
            <img src={image1} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={image2} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={image3} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={image4} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={image5} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={image6} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={image7} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={image8} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={image9} alt="" />
          </SwiperSlide>

          <div className="autoplay-progress" slot="container-end">
            <svg viewBox="0 0 48 48" ref={progressCircle}>
              {/* <circle cx="24" cy="24" r="20"></circle> */}
            </svg>
            {/* <span ref={progressContent}></span> */}
          </div>
        </Swiper>
      </div>
    </div>
  );
};

export default Banner;
