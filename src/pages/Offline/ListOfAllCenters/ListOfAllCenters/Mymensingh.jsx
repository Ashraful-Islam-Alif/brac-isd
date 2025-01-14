
import Footer from '../../Home/Footer/Footer';
import { Link } from 'react-router-dom';
import Navbar from '../../Home/Navbar/Navbar';
import arrowIcon from "./arrowLogo.png";

const Mymensingh = () => {
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
              backgroundImage: "url(https://i.ibb.co/PjJpHtZ/mymensingh.jpg)",
              width: "100%",
              height: "320px",
            }}
          >
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-white">
              <div className="max-w-xl md:max-w-2xl lg:max-w-2xl">
                <h2 className="text-xl md:text-3xl lg:text-5xl font-bold">
                  BRAC ISD Mymensingh
                </h2>
                <hr className="mx-8 md:mx-10 lg:mx-10 mt-4 border-t-8 font-bold border-[#FFA100]"></hr>
              </div>
            </div>
          </div>
          <div className="my-8 max-w-screen-xl mx-8">
            <h2 className="my-4 text-xl font-bold">
              Available Course of BRAC ISD Mymensingh Centre
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
                <p>Center Lead of BRAC ISD Mymensingh</p>
                <p className="font-bold">01991342454</p>
                <p>
                  <Link to="mailto:hasanrakib78@yahoo.com" className="underline">
                    hasanrakib78@yahoo.com
                  </Link>
                </p>
              </div>
              <div className="mb-6 md:mb-0">
                <p className="text-xl font-bold">Location</p>
                <p>
                  Holding No: 113/2, Habun Bepari Mor RK Mission Road, Akua,
                  Mymensingh.
                </p>
              </div>
              <div className="col-span-1 md:col-span-2" style={mapContainerStyle}>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d226.46159950320236!2d90.39761009192482!3d24.747965191829845!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjTCsDQ0JzUyLjciTiA5MMKwMjMnNTIuMiJF!5e0!3m2!1sen!2sbd!4v1697000647209!5m2!1sen!2sbd"
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

export default Mymensingh;