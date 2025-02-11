import React from 'react';
import Navbar from '../../Home/Navbar/Navbar';
import Footer from '../../Home/Footer/Footer';
import arrowIcon from "./arrowLogo.png";
import { Link } from 'react-router-dom';

const Mirsharai = () => {
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
            "url(https://i.ibb.co.com/VY8tKwwv/Mirsarai-Chattogram.jpg)",
          width: "w-full",
          height: "320px",
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-white">
          <div className="max-w-xl md:max-w-2xl lg:max-w-2xl">
            <h2 className="text-xl md:text-3xl lg:text-5xl font-bold">
              BRAC ISD Mirsharai
            </h2>
            <hr className="mx-4 md:mx-8 lg:mx-30 mt-4 border-t-8 font-bold border-[#FFA100]"></hr>
          </div>
        </div>
      </div>
      <div className=" my-8 max-w-screen-xl mx-8">
        <h2 className="my-4 text-xl font-bold">
          Available Courses of BRAC ISD Mirsharai Centre
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          
          
          
          
          <Link
            className="my-8 text-lg font-semibold underline flex items-center"
            to="/offline/courses/electrical-installation"
          >
            <h2>Electrical Installation and Maintenance</h2>
            <img className="h-[20px] " src={arrowIcon}></img>
          </Link>
          
          <Link
            className="my-8 text-lg font-semibold underline flex items-center"
            to="/offline/courses/food-beverage-services"
          >
            <h2>Food and Beverage Services</h2>
            <img className="h-[20px] " src={arrowIcon}></img>
          </Link>
          <Link
            className="my-8 text-lg font-semibold underline flex items-center"
            to="/offline/courses/housekeeping-occupation"
          >
            <h2>Housekeeping Occupation</h2>
            <img className="h-[20px] " src={arrowIcon}></img>
          </Link>
          
          <Link 
          className="my-8 text-lg font-semibold underline flex items-center"
          to="/offline/courses/sewing-machine">
            <h2>Knit Sewing Machine Operation</h2>
            <img className="h-[20px] " src={arrowIcon}></img>
          </Link>
          <Link 
          className="my-8 text-lg font-semibold underline flex items-center"
          to="/offline/courses/woven_sewing-machine">
           <h2>Woven Sewing Machine Operation</h2>
           <img className="h-[20px] " src={arrowIcon}></img>
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-8">
          <div className="mb-6 md:mb-0">
            <p className="text-xl font-bold">Contact</p>
            <p>Centre Coordinator of BRAC-ISD Mirsharai</p>
            <p className="font-bold">01718659448</p>
            <p>
              <Link to="bracisd.mirsharai@brac.net" className="underline">
              bracisd.mirsharai@brac.net
              </Link>
            </p>
          </div>
          <div className="mb-6 md:mb-0">
            <p className="text-xl font-bold">Location</p>
            <p>Uttar Ambaria, Mirsharai, Chattogram.</p>
          </div>
          <div className="col-span-1 md:col-span-2" style={mapContainerStyle}>
            
            <iframe 
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d9043.358441007169!2d91.5938869!3d22.7782079!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x37533737d7248d7d%3A0x3997bd1ffc6237ae!2sBRAC%20Poultry%20Farm!5e1!3m2!1sen!2sbd!4v1739161609784!5m2!1sen!2sbd" 
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

export default Mirsharai;