import { Link } from "react-router-dom";
import "./Navbar.css";
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
      <div className="navbar-end gap-2 md:gap-4">
        <Link to="https://bisdonline.brac.net/">
          <button className="btn btn-xs sm:btn-sm md:btn-md whitespace-nowrap bg-gradient-to-r from-yellow-400 to-orange-500 text-white font-semibold rounded-lg hover:from-orange-500 hover:to-yellow-400 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg">
            Online Courses
          </button>
        </Link>

        <Link to="offline">
          <button className="btn btn-xs sm:btn-sm md:btn-md whitespace-nowrap bg-gradient-to-r from-yellow-400 to-orange-500 text-white font-semibold rounded-lg hover:from-orange-500 hover:to-yellow-400 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg">
            Offline Courses
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
