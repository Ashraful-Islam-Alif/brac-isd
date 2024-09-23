import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="">
      <footer className="footer p-10 bg-base-200 text-base-content grid justify-items-center">
        <div>
          <span className="font-bold uppercase text-lg text-[#FFA100]">
            Menu
          </span>
          <Link to="/home" className="link link-hover">
            Home
          </Link>
          <Link to="/list-of-center" className="link link-hover">
            List of Centres
          </Link>
          <Link to="/list-of-Courses" className="link link-hover">
            List of Courses
          </Link>
        </div>
        <div>
          <span className="font-bold uppercase text-lg text-[#FFA100]">
            Quick Links
          </span>
          <Link
            className="link link-hover"
            to="https://bracisd-staging.brac.net/"
            target="_blank"
          >
            BISD Online
          </Link>
          <Link
            className="link link-hover"
            target="_blank"
            to="https://careerhub.brac.net/"
          >
            Career Hub Online
          </Link>
          <Link
            className="link link-hover"
            to="https://www.brac.net/"
            target="_blank"
          >
            BRAC
          </Link>
        </div>
        <div>
          <span className="font-bold uppercase text-lg text-[#FFA100]">
            Contact Us
          </span>
          <p className="text-gray-500 ">info.bisdonline@brac.net</p>
          <p>+880177143483</p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
