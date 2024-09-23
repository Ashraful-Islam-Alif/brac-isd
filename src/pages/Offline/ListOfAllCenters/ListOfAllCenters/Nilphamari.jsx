<<<<<<< HEAD

import { Link } from "react-router-dom";
import arrowIcon from "./arrowLogo.png";
import Navbar from "../../Home/Navbar/Navbar";
import Footer from "../../Home/Footer/Footer";
const Nilphamari = () => {
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
          backgroundImage: "url(https://i.ibb.co/fMMRN2k/nilphamari.jpg)",
          width: "100%",
          height: "320px",
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-white">
          <div className="max-w-xl md:max-w-2xl lg:max-w-2xl">
            <h2 className="text-xl md:text-3xl lg:text-5xl font-bold">
              BISD Nilphamari
            </h2>
            <hr className="mx-8 md:mx-10 lg:mx-10 mt-4 border-t-8 font-bold border-[#FFA100]"></hr>
          </div>
        </div>
      </div>
      <div className="my-8 max-w-screen-xl mx-8">
        <h2 className="my-4 text-xl font-bold">
          Available Course of BISD Nilphamari Centre
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          <Link
            class="my-8 text-lg font-semibold underline flex items-center"
            to="/courses/electrical-installation"
          >
            <h2>Electrical Installation & Maintenance</h2>
            <img className="h-[20px] " src={arrowIcon}></img>
          </Link>
          <Link
            class="my-8 text-lg font-semibold underline flex items-center"
            to="/courses/tiles-marbel-work"
          >
            <h2>Tiles & Marble Fittings</h2>
            <img className="h-[20px] " src={arrowIcon}></img>
          </Link>
          <Link
            class="my-8 text-lg font-semibold underline flex items-center"
            to="/courses/steel-bindings-fabrication"
          >
            <h2>Steel Binding & Fabrication</h2>
            <img className="h-[20px] " src={arrowIcon}></img>
          </Link>
          <Link
            class="my-8 text-lg font-semibold underline flex items-center"
            to="/courses/plumbing-pipe-fitting"
          >
            <h2>Plumbing & Pipe Fittings</h2>
            <img className="h-[20px] " src={arrowIcon}></img>
          </Link>
          <Link
            class="my-8 text-lg font-semibold underline flex items-center"
            to="#"
          >
            <h2>Masonry</h2>
            <img className="h-[20px] " src={arrowIcon}></img>
          </Link>
          <Link
            class="my-8 text-lg font-semibold underline flex items-center"
            to="#"
          >
            <h2>Showing Machine Operation</h2>
            <img className="h-[20px] " src={arrowIcon}></img>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-8">
          <div className="mb-6 md:mb-0">
            <p className="text-xl font-bold">Contact</p>
            <p>Center Lead of BISD Nilphamari</p>
            <p className="font-bold">01786809157</p>
            <p>
              <Link
                to="mailto:bracisd.nilphamary@brac.net"
                className="underline"
              >
                bracisd.nilphamary@brac.net
              </Link>
            </p>
          </div>
          <div className="mb-6 md:mb-0">
            <p className="text-xl font-bold">Location</p>
            <p>
              BRAC Institute of Skills Development, Nilphamari Ayesha Abed
              Foundation, Fultola, Nilphamari
            </p>
          </div>
          <div className="col-span-1 md:col-span-2" style={mapContainerStyle}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d229697.0879102411!2d88.6070323!3d25.9018117!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39e35bd168031fa3%3A0xd507b8621a0e77d!2sAyesha%20Abed%20Foundation%2C%20Nilphamari!5e0!3m2!1sen!2sbd!4v1696051575337!5m2!1sen!2sbd"
              title="Google Maps"
              style={mapIframeStyle}
              allowFullScreen=""
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

export default Nilphamari;
=======

import { Link } from "react-router-dom";
import arrowIcon from "./arrowLogo.png";
import Navbar from "../../Home/Navbar/Navbar";
import Footer from "../../Home/Footer/Footer";
const Nilphamari = () => {
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
          backgroundImage: "url(https://i.ibb.co/fMMRN2k/nilphamari.jpg)",
          width: "100%",
          height: "320px",
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-white">
          <div className="max-w-xl md:max-w-2xl lg:max-w-2xl">
            <h2 className="text-xl md:text-3xl lg:text-5xl font-bold">
              BISD Nilphamari
            </h2>
            <hr className="mx-8 md:mx-10 lg:mx-10 mt-4 border-t-8 font-bold border-[#FFA100]"></hr>
          </div>
        </div>
      </div>
      <div className="my-8 max-w-screen-xl mx-8">
        <h2 className="my-4 text-xl font-bold">
          Available Course of BISD Nilphamari Centre
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          <Link
            class="my-8 text-lg font-semibold underline flex items-center"
            to="/offline/courses/electrical-installation"
          >
            <h2>Electrical Installation & Maintenance</h2>
            <img className="h-[20px] " src={arrowIcon}></img>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-8">
          <div className="mb-6 md:mb-0">
            <p className="text-xl font-bold">Contact</p>
            <p>Center Lead of BISD Nilphamari</p>
            <p className="font-bold">01786809157</p>
            <p>
              <Link
                to="mailto:bracisd.nilphamary@brac.net"
                className="underline"
              >
                bracisd.nilphamary@brac.net
              </Link>
            </p>
          </div>
          <div className="mb-6 md:mb-0">
            <p className="text-xl font-bold">Location</p>
            <p>
              BRAC Institute of Skills Development, Nilphamari Ayesha Abed
              Foundation, Fultola, Nilphamari
            </p>
          </div>
          <div className="col-span-1 md:col-span-2" style={mapContainerStyle}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d229697.0879102411!2d88.6070323!3d25.9018117!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39e35bd168031fa3%3A0xd507b8621a0e77d!2sAyesha%20Abed%20Foundation%2C%20Nilphamari!5e0!3m2!1sen!2sbd!4v1696051575337!5m2!1sen!2sbd"
              title="Google Maps"
              style={mapIframeStyle}
              allowFullScreen=""
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

export default Nilphamari;
>>>>>>> 8a932e4 (Added Retail and Sales course)
