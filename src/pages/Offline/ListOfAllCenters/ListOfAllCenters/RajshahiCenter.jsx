

import { Link } from "react-router-dom";


import arrowIcon from "./arrowLogo.png";
import Navbar from "../../Home/Navbar/Navbar";
import Footer from "../../Home/Footer/Footer";
const RajshahiCenter = () => {
  const mapContainerStyle = {
    position: "relative",
    overflow: "hidden",
    paddingTop: "56.25%", // 16:9 aspect ratio (div height divided by width)
  };

  const mapIframeStyle = {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    border: 0,
  };
  return (
    <div>
      <Navbar></Navbar>
      <div
        className="hero mt-24"
        style={{
          backgroundImage: "url(https://i.ibb.co/LSDWMVC/Rajshahi.jpg)",
          width: "100%",
          height: "320px",
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-white">
          <div className="max-w-xl md:max-w-2xl lg:max-w-2xl">
            <h2 className="text-xl md:text-3xl lg:text-5xl font-bold">
              BISD Rajshahi
            </h2>
            <hr className="mx-4 md:mx-8 lg:mx-30 mt-4 border-t-8 font-bold border-[#FFA100]"></hr>
          </div>
        </div>
      </div>
      <div className="my-8 max-w-screen-xl mx-8">
        <h2 className="my-4 text-xl font-bold">
          Available Course of BISD Rajshahi Centre
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          <Link
            class="my-8 text-lg font-semibold underline flex items-center"
            to="/offline/courses/web-design"
          >
            <h2>Web Design</h2>
            <img className="h-[20px] " src={arrowIcon}></img>
          </Link>
          <Link
            class="my-8 text-lg font-semibold underline flex items-center"
            to="/offline/courses/electrical-installation"
          >
            <h2>Electrical Installation and Maintenance</h2>
            <img className="h-[20px] " src={arrowIcon}></img>
          </Link>
          <Link
            class="my-8 text-lg font-semibold underline flex items-center"
            to="/offline/courses/graphics-design"
          >
            <h2>Graphic Design</h2>
            <img className="h-[20px] " src={arrowIcon}></img>
          </Link>
         
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-8">
          <div className="mb-6 md:mb-0">
            <p className="text-xl font-bold">Contact</p>
            <p>Centre Lead of BISD Rajshahi</p>
            <p className="font-bold">01713052616</p>
            <p>
              <Link to="mailto:bisdrajshahi@brac.net" className="underline">
                bisdrajshahi@brac.net
              </Link>
            </p>
          </div>
          <div className="mb-6 md:mb-0">
            <p className="text-xl font-bold">Location</p>
            <p>
              BRAC Institute of Skills Development, 4th Floor, Jasim Uddin
              Tower, Bindur Mor, BRTC Counter, Greater Road, Gaurahanga,
              Rajshahi.
            </p>
          </div>
          <div className="col-span-1 md:col-span-2" style={mapContainerStyle}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d29072.965583855243!2d88.5978759!3d24.3771043!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39fbeffc1aa7719b%3A0x2f25afe2b57aee81!2sBRAC%20Institute%20of%20Skills%20Development%2C%20Rajshahi!5e0!3m2!1sen!2sbd!4v1692787419030!5m2!1sen!2sbd"
              title="Google Maps"
              style={mapIframeStyle}
              allowfullscreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default RajshahiCenter;
