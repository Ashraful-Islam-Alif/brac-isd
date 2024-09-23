<<<<<<< HEAD
import { Link } from "react-router-dom";
import Footer from "../../Home/Footer/Footer";
import Navbar from "../../Home/Navbar/Navbar";
import arrowIcon from "./arrowLogo.png";

const NarayanganjBandar = () => {
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
            "url(https://i.ibb.co/74Jhy9r/narayanganj-Bondor.jpg)",
          width: "100%",
          height: "320px",
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-white">
          <div className="max-w-xl md:max-w-2xl lg:max-w-2xl">
            <h2 className="text-xl md:text-3xl lg:text-5xl font-bold">
              BISD BISD Bandar (Narayanganj)
            </h2>
            <hr className="mx-8 md:mx-10 lg:mx-10 mt-4 border-t-8 font-bold border-[#FFA100]"></hr>
          </div>
        </div>
      </div>
      <div className="my-8 max-w-screen-xl mx-8">
        <h2 className="my-4 text-xl font-bold">
          Available Course of BISD Bandar (Narayanganj) Centre
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          <Link
            class="my-8 text-lg font-semibold underline flex items-center"
            to="/courses/digital-marketing"
          >
            <h2>Digital Marketing</h2>
            <img className="h-[20px] " src={arrowIcon}></img>
          </Link>
          <Link
            class="my-8 text-lg font-semibold underline flex items-center"
            to="/courses/graphics-design"
          >
            <h2>Graphic Design</h2>
            <img className="h-[20px] " src={arrowIcon}></img>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-8">
          <div className="mb-6 md:mb-0">
            <p className="text-xl font-bold">Contact</p>
            <p>Center Lead of BISD Bandar (Naryanganj)</p>
            <p className="font-bold"> 01612300396</p>
            <p>
              <Link to="mailto:officebracisd@gmail.com" className="underline">
                officebracisd@gmail.com
              </Link>
            </p>
          </div>
          <div className="mb-6 md:mb-0">
            <p className="text-xl font-bold">Location</p>
            <p>
              Amir Hossen Plaza, 1/1 T Hossen Road Nabiganj, Bandar, Naryanganj
            </p>
          </div>
          <div className="col-span-1 md:col-span-2" style={mapContainerStyle}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d116966.49604530956!2d90.4422666!3d23.6329!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b1af636fe069%3A0x1263a48796ce60b0!2sBISD%20Bandar!5e0!3m2!1sbn!2sbd!4v1696920522595!5m2!1sbn!2sbd"
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

export default NarayanganjBandar;
=======
import { Link } from "react-router-dom";
import Footer from "../../Home/Footer/Footer";
import Navbar from "../../Home/Navbar/Navbar";
import arrowIcon from "./arrowLogo.png";

const NarayanganjBandar = () => {
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
            "url(https://i.ibb.co/74Jhy9r/narayanganj-Bondor.jpg)",
          width: "100%",
          height: "320px",
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-white">
          <div className="max-w-xl md:max-w-2xl lg:max-w-2xl">
            <h2 className="text-xl md:text-3xl lg:text-5xl font-bold">
              BISD BISD Bandar (Narayanganj)
            </h2>
            <hr className="mx-8 md:mx-10 lg:mx-10 mt-4 border-t-8 font-bold border-[#FFA100]"></hr>
          </div>
        </div>
      </div>
      <div className="my-8 max-w-screen-xl mx-8">
        <h2 className="my-4 text-xl font-bold">
          Available Course of BISD Bandar (Narayanganj) Centre
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
            to="/offline/courses/graphics-design"
          >
            <h2>Graphic Design</h2>
            <img className="h-[20px] " src={arrowIcon}></img>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-8">
          <div className="mb-6 md:mb-0">
            <p className="text-xl font-bold">Contact</p>
            <p>Center Lead of BISD Bandar (Naryanganj)</p>
            <p className="font-bold"> 01612300396</p>
            <p>
              <Link to="mailto:officebracisd@gmail.com" className="underline">
                officebracisd@gmail.com
              </Link>
            </p>
          </div>
          <div className="mb-6 md:mb-0">
            <p className="text-xl font-bold">Location</p>
            <p>
              Amir Hossen Plaza, 1/1 T Hossen Road Nabiganj, Bandar, Naryanganj
            </p>
          </div>
          <div className="col-span-1 md:col-span-2" style={mapContainerStyle}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d116966.49604530956!2d90.4422666!3d23.6329!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b1af636fe069%3A0x1263a48796ce60b0!2sBISD%20Bandar!5e0!3m2!1sbn!2sbd!4v1696920522595!5m2!1sbn!2sbd"
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

export default NarayanganjBandar;
>>>>>>> 8a932e4 (Added Retail and Sales course)
