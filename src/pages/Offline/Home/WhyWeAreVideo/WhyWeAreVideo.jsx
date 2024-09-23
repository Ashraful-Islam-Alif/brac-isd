import LazyLoad from "react-lazy-load";
import myVideo from "./BISD_OVC_2023_FINAL_HD.mp4";
const WhyWeAreVideo = () => {
  return (
    <div className="max-w-screen-xl mx-auto ">
      <div className="w-full h-[300px] md:h-[500px] lg:h-[700px]">
        <LazyLoad offset={100}  debounce={false} once>
          <video
            className="w-full h-full object-cover"
            controls
            src={myVideo}
            type="video/mp4"
          >
            Your browser does not support the video tag.
          </video>
        </LazyLoad>
      </div>
    </div>
  );
};

export default WhyWeAreVideo;
