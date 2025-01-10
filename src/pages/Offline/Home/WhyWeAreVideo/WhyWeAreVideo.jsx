import React from "react";
import LazyLoad from "react-lazy-load";
import myVideo from "./BISD_OVC_2023_FINAL_HD.mp4";

const WhyWeAreVideo = () => {
  const videoHeight = 400; // Set desired video height here

  return (
    <div className="max-w-screen-xl mx-auto">
      {/* Video container */}
      <div className="">
        <LazyLoad offset={100} debounce={false} once>
          <video
            className="w-full"
            style={{ height: `${videoHeight}px` }}
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