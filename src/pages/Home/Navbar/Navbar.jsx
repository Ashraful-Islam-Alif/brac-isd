<<<<<<< HEAD
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar bg-base-300">
      <div className="navbar-start">
      
        <a >
          <img
            style={{ width: "120px", height: "auto" }}
            alt=""
            src="https://i.ibb.co/tJrzNvT/brac-ISD-PNG-logo.png"
          ></img>
        </a>
        
      </div>
      <div className="navbar-end gap-4">
        <button className="btn btn-xs sm:btn-sm md:btn-md  btn-outline font-bold ">
          <Link to="https://bisdonline.brac.net/" target="_blank">
            BISD Online
          </Link>
        </button>
        <button className="btn btn-xs sm:btn-sm md:btn-md  btn-outline font-bold ">
          <Link to="offline" target="_blank">
            BISD Offline
          </Link>
        </button>
      </div>
    </div>
  );
};

export default Navbar;
=======
import { Link } from "react-router-dom";
import "./Navbar.css"
const Navbar = () => {
  return (
    <div className="navbar bg-base-200 fixed z-50 top-0">
      <div className="navbar-start">
        <Link to="/">
          <img
            className="logo"
            style={{ width: "120px", height: "auto" }}
            alt="BRAC ISD Logo"
            src="https://i.ibb.co/tJrzNvT/brac-ISD-PNG-logo.png"
          />
        </Link>
      </div>
      <div className="navbar-end gap-4">
      <button className="btn btn-xs sm:btn-sm md:btn-md bg-[#FFA100] text-black hover:text-[#FFA100]  hover:outline hover:outline-2 hover:outline-[#FFA100] hover:bg-white">
 

          <Link to="https://bracisd-staging.brac.net/">BISD Online</Link>
        
        </button>
        <button className="btn btn-xs sm:btn-sm md:btn-md bg-[#FFA100] text-black hover:text-[#FFA100]  hover:outline hover:outline-2 hover:outline-[#FFA100] hover:bg-white"
         >
          <Link to="offline">BISD Offline</Link>
        </button>
      </div>
    </div>
  );
};

export default Navbar;
>>>>>>> 8a932e4 (Added Retail and Sales course)
