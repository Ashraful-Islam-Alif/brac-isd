import { Link } from "react-router-dom";

const Footer = () => {
  return (
      <footer className="footer bg-base-200 text-base-content p-10">
        <nav>
          <h6 className="font-bold uppercase text-lg text-[#FFA100]">
            Menu
          </h6>
          <Link to="/home" className="link link-hover">
            Home
          </Link>
          <Link to="/list-of-center" className="link link-hover">
            List of Centres
          </Link>
          <Link to="/list-of-Courses" className="link link-hover">
            List of Courses
          </Link>
        </nav>
        <nav>
          <h6 className="font-bold uppercase text-lg text-[#FFA100]">
            Quick Links
          </h6>
          <Link
            className="link link-hover"
            to="https://bisdonline.brac.net/"
            target="_blank"
          >
            BRAC ISD Online
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
        </nav>
        <nav>
          <h6 className="font-bold uppercase text-lg text-[#FFA100]">
            Contact Us
          </h6>
          <p className="text-gray-500 ">info.bisdonline@brac.net</p>
          <p>09614400800</p>
        </nav>
      </footer>

  );
};

export default Footer;
