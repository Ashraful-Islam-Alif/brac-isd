<<<<<<< HEAD
const Footer = () => {
  return (
    <footer className="footer footer-center bg-base-300 text-base-content p-4">
      <aside>
        <p>
          Copyright © ${new Date().getFullYear()} - All right reserved by Brac Skills Development Programme
        </p>
      </aside>
    </footer>
  );
};

export default Footer;
=======
import { Link } from "react-router-dom";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import "./Footer.css"
const Footer = () => {
  return (
    <footer className="footer footer-center bg-base-200 text-base-content rounded p-10">
      <nav>
        <div className="grid grid-flow-col gap-4">
          <Link
            to="https://www.facebook.com/BRACISD/"
            rel="noopener noreferrer"
          >
            <FaFacebookSquare className="size-8 text-blue-700" />
          </Link>

          <Link
            to="https://www.instagram.com/bracisd/"
            rel="noopener noreferrer"
            className="instagram-icon"
          >
            <FaInstagramSquare className="size-6" />
          </Link>
        </div>
      </nav>
      <aside>
        <p>
          Copyright © ${new Date().getFullYear()} - All right reserved by BRAC
          Skills Development Programme
        </p>
      </aside>
    </footer>
  );
};

export default Footer;
>>>>>>> 8a932e4 (Added Retail and Sales course)
