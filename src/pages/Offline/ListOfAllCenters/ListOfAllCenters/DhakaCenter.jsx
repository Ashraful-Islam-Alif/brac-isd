

import { Link } from "react-router-dom";

import arrowIcon from "./arrowLogo.png";
import Navbar from "../../Home/Navbar/Navbar";
import Footer from "../../Home/Footer/Footer";
const DhakaCenter = () => {
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
          backgroundImage:
            "url(https://i.ibb.co/6YyVJjJ/skyscrapers-sunset.jpg)",
          width: "w-full",
          height: "320px",
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-white">
          <div className="max-w-xl md:max-w-2xl lg:max-w-2xl">
            <h2 className="text-xl md:text-3xl lg:text-5xl font-bold">
              BISD Uttara (Dhaka)
            </h2>
            <hr className="mx-4 md:mx-8 lg:mx-30 mt-4 border-t-8 font-bold border-[#FFA100]"></hr>
          </div>
        </div>
      </div>
      <div className=" my-8 max-w-screen-xl mx-8">
        <h2 className="my-4 text-xl font-bold">
          Available Courses of BISD Uttara (Dhaka) Centre
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          <Link
            class="my-8 text-lg font-semibold underline flex items-center"
            to="/offline/courses/digital-marketing"
          >
            <h2>Digital Marketing</h2>
            <img className="h-[20px] " src={arrowIcon}></img>
          </Link>
          <Link
            class="my-8 text-lg font-semibold underline flex items-center"
            to="/offline/courses/palliative-care"
          >
            <h2>Palliative Care Assistant</h2>
            <img className="h-[20px] " src={arrowIcon}></img>
          </Link>
          <Link
            class="my-8 text-lg font-semibold underline flex items-center"
            to="/offline/courses/careGivingTraining"
          >
            <h2>Caregiving Training</h2>
            <img className="h-[20px] " src={arrowIcon}></img>
          </Link>
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
          <Link
            class="my-8 text-lg font-semibold underline flex items-center"
            to="/offline/courses/refrigeration-ac"
          >
            <h2>Refrigeration and Air Conditioning</h2>
            <img className="h-[20px] " src={arrowIcon}></img>
          </Link>
          <Link
            class="my-8 text-lg font-semibold underline flex items-center"
            to="/offline/courses/plc"
          >
            <h2>Programmable Logic Controller</h2>
            <img className="h-[20px] " src={arrowIcon}></img>
          </Link>
          <Link
            class="my-8 text-lg font-semibold underline flex items-center"
            to="/offline/courses/food-beverage-services"
          >
            <h2>Food and Beverage Services</h2>
            <img className="h-[20px] " src={arrowIcon}></img>
          </Link>
          <Link
            class="my-8 text-lg font-semibold underline flex items-center"
            to="/offline/courses/housekeeping-occupation"
          >
            <h2>Housekeeping Occupation</h2>
            <img className="h-[20px] " src={arrowIcon}></img>
          </Link>
          <Link
            class="my-8 text-lg font-semibold underline flex items-center"
            to="/offline/courses/computer-operation"
          >
            <h2>Computer Office Applications</h2>
            <img className="h-[20px] " src={arrowIcon}></img>
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-8">
          <div className="mb-6 md:mb-0">
            <p className="text-xl font-bold">Contact</p>
            <p>Centre Lead of BISD Dhaka</p>
            <p className="font-bold">01729070571</p>
            <p>
              <Link to="mailto:bisddhaka@brac.net" className="underline">
                bracisd.uttara@brac.net
              </Link>
            </p>
          </div>
          <div className="mb-6 md:mb-0">
            <p className="text-xl font-bold">Location</p>
            <p>Ashkona (Opposite Hajj Camp), Near Airport, Dhaka.</p>
          </div>
          <div className="col-span-1 md:col-span-2" style={mapContainerStyle}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3649.071910363626!2d90.4124954!3d23.8515801!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c68755c6f6a5%3A0xbf53217ccdd4f760!2sBRAC%20Institute%20of%20Skills%20Development!5e0!3m2!1sen!2sbd!4v1692787297252!5m2!1sen!2sbd"
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

export default DhakaCenter;
