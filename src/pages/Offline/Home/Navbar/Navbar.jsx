<<<<<<< HEAD
import { Link } from "react-router-dom";
const Navbar = () => {
  const ListOfCentersOptions = (
    <div
      className="course-options"
      style={{ maxHeight: "400px", overflowY: "auto" }}
    >
      <ul>
        <li>
          <Link to="/centers/dhaka">BISD Uttara (Dhaka)</Link>
        </li>
        <li>
          <Link to="/centers/rangpur">BISD Rangpur</Link>
        </li>
        <li>
          <Link to="/centers/rajshahi">BISD Rajshahi</Link>
        </li>
        <li>
          <Link to="/centers/cumilla">BISD Cumilla</Link>
        </li>
        <li>
          <Link to="/centers/chattogram">BISD Chattogram</Link>
        </li>
        <li>
          <Link to="/centers/sylhet">BISD Sylhet</Link>
        </li>
        <li>
          <Link to="/centers/coxbazar">BISD Cox's Bazar</Link>
        </li>
        <li>
          <Link to="/centers/chattogram2">BISD Halishahr (Chattogram)</Link>
        </li>
        <li>
          <Link to="/centers/chattogram3">BISD Patia (Chattogram)</Link>
        </li>
        <li>
          <Link to="/centers/narayanganjnKanchan">BISD Narayanganj </Link>
        </li>
        <li>
          <Link to="/centers/narayanganjnBondor">
            BISD Bandar (Narayanganj)
          </Link>
        </li>
        <li>
          <Link to="/centers/manikganj">BISD Manikganj</Link>
        </li>
        <li>
          <Link to="/centers/mymensingh">BISD Mymensingh</Link>
        </li>
        <li>
          <Link to="/centers/nilphamari">BISD Nilphamari</Link>
        </li>
      </ul>
    </div>
  );
  const ListOfCoursesOptions = (
    <div
      className="course-options"
      style={{ maxHeight: "400px", overflowY: "auto" }}
    >
      <ul>
        <li>
          <Link to="/courses/digital-marketing">Digital Marketing</Link>
        </li>
        <li>
          <Link to="/courses/palliative-care">Palliative Care Assistant</Link>
        </li>
        <li>
          <Link to="/courses/careGivingTraining">Caregiving Training</Link>
        </li>
        <li>
          <Link to="/courses/web-design">Web Design</Link>
        </li>
        <li>
          <Link to="/courses/electrical-installation">
            Electrical Installation and Maintenance
          </Link>
        </li>

        <li>
          <Link to="/courses/refrigeration-ac">
            Refrigeration and Air Conditioning
          </Link>
        </li>
        <li>
          <Link to="/courses/graphics-design">GraphicDesign</Link>
        </li>
        <li>
          <Link to="/courses/plc">Programmable Logic Controller</Link>
        </li>
        <li>
          <Link to="/courses/it-support-technician">IT Support Technician</Link>
        </li>
        <li>
          <Link to="/courses/food-beverage-services">
            Food and Beverage Services
          </Link>
        </li>
        <li>
          <Link to="/courses/housekeeping-occupation">
            Housekeeping Occupation
          </Link>
        </li>
        <li>
          <Link to="/courses/computer-operation">
            Computer Office Applications
          </Link>
        </li>
        <li>
          <Link to="/courses/sewing-machine">Sewing Machine Operation</Link>
        </li>
        <li>
          <Link to="/courses/plumbing-pipe-fitting">
            Plumbing & Pipe Fitting
          </Link>
        </li>
        <li>
          <Link to="/courses/steel-bindings-fabrication">
            Steel Bindings & Fabrication
          </Link>
        </li>
        <li>
          <Link to="/courses/tiles-marbel-work">Tiles & Marbel Work</Link>
        </li>
      </ul>
    </div>
  );

  return (
    <div className="navbar bg-base-200 fixed z-50 top-0 ">
      <div className="navbar-start">
        <div className="dropdown ">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>

          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content dropdown dropdown-hover mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-auto"
          >
            <li>
              <Link to="/offline">Home</Link>
            </li>
            <li tabIndex={0} className="">
              <details className="">
                <summary>List of Centres</summary>
                <ul className="p-2 ">{ListOfCentersOptions}</ul>
              </details>
            </li>
            <li tabIndex={0} className="">
              <details>
                <summary>List of Courses</summary>
                <ul className="">{ListOfCoursesOptions}</ul>
              </details>
            </li>
            <button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg btn-outline font-bold mt-2">
              <Link to="https://bisdonline.brac.net/" target="_blank">
                BISD Online
              </Link>
            </button>
          </ul>
        </div>
        <Link to="/offline">
          <img
            style={{ width: "120px", height: "auto" }}
            alt=""
            src="https://i.ibb.co/tJrzNvT/brac-ISD-PNG-logo.png"
          ></img>
        </Link>
      </div>
      <div className="navbar-end hidden lg:flex">
        <ul className="menu menu-horizontal  grid grid-flow-col auto-cols-max">
          <div>
            <label
              tabIndex={0}
              className="btn m-1 text-md md:text-lg font-semibold"
            >
              <Link to="/offline">Home</Link>
            </label>
          </div>

          <div className="dropdown dropdown-hover">
            <label
              tabIndex={0}
              className="btn m-1 text-md md:text-lg font-semibold"
            >
              List of Centres
            </label>
            <ul
              tabIndex={0}
              className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-auto"
            >
              {ListOfCentersOptions}
            </ul>
          </div>
          <div className="dropdown dropdown-hover">
            <label
              tabIndex={0}
              className="btn m-1 text-md md:text-lg font-semibold"
            >
              list of Courses
            </label>
            <ul
              tabIndex={0}
              className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-auto"
            >
              {ListOfCoursesOptions}
            </ul>
          </div>
        </ul>
        <div className="btn btn-xs sm:btn-sm md:btn-md btn-outline font-bold m-2">
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSfUhIt6DCWApWz-7aIyKSt0ji5xGap0mBsP6rDcXji9RIfiyQ/viewform"
            target="_blank"
          >
            Registration
          </a>
        </div>
        <button className="btn btn-xs sm:btn-sm md:btn-md  btn-outline font-bold ">
          <Link to="https://bisdonline.brac.net/" target="_blank">
            BISD Online
          </Link>
        </button>
      </div>
    </div>
  );
};

export default Navbar;
=======
import { Link } from "react-router-dom";
const Navbar = () => {
  const ListOfCentersOptions = (
    <div
      className="course-options"
      style={{ maxHeight: "400px", overflowY: "auto" }}
    >
      <ul>
        <li>
          <Link to="/offline/centers/dhaka">BISD Uttara (Dhaka)</Link>
        </li>
        <li>
          <Link to="/offline/centers/rangpur">BISD Rangpur</Link>
        </li>
        <li>
          <Link to="/offline/centers/rajshahi">BISD Rajshahi</Link>
        </li>
        <li>
          <Link to="/offline/centers/cumilla">BISD Cumilla</Link>
        </li>
        <li>
          <Link to="/offline/centers/chattogram">BISD Chattogram</Link>
        </li>
        <li>
          <Link to="/offline/centers/sylhet">BISD Sylhet</Link>
        </li>
        <li>
          <Link to="/offline/centers/coxbazar">BISD Cox's Bazar</Link>
        </li>
        <li>
          <Link to="/offline/centers/chattogram2">BISD Halishahr (Chattogram)</Link>
        </li>
        <li>
          <Link to="/offline/centers/chattogram3">BISD Patiya (Chattogram)</Link>
        </li>
        <li>
          <Link to="/offline/centers/narayanganjnKanchan">BISD Narayanganj </Link>
        </li>
        <li>
          <Link to="/offline/centers/narayanganjnBondor">
            BISD Bandar (Narayanganj)
          </Link>
        </li>
        <li>
          <Link to="/offline/centers/manikganj">BISD Manikganj</Link>
        </li>
        <li>
          <Link to="/offline/centers/mymensingh">BISD Mymensingh</Link>
        </li>
        <li>
          <Link to="/offline/centers/nilphamari">BISD Nilphamari</Link>
        </li>
      </ul>
    </div>
  );
  const ListOfCoursesOptions = (
    <div
      className="course-options"
      style={{ maxHeight: "400px", overflowY: "auto" }}
    >
      <ul>
        <li>
          <Link to="/offline/courses/digital-marketing">Digital Marketing</Link>
        </li>
        <li>
          <Link to="/offline/courses/palliative-care">Palliative Care Assistant</Link>
        </li>
        <li>
          <Link to="/offline/courses/careGivingTraining">Caregiving Training</Link>
        </li>
        <li>
          <Link to="/offline/courses/web-design">Web Design</Link>
        </li>
        <li>
          <Link to="/offline/courses/electrical-installation">
            Electrical Installation and Maintenance
          </Link>
        </li>

        <li>
          <Link to="/offline/courses/refrigeration-ac">
            Refrigeration and Air Conditioning
          </Link>
        </li>
        <li>
          <Link to="/offline/courses/graphics-design">GraphicDesign</Link>
        </li>
        <li>
          <Link to="/offline/courses/plc">Programmable Logic Controller</Link>
        </li>
        <li>
          <Link to="/offline/courses/it-support-technician">IT Support Technician</Link>
        </li>
        <li>
          <Link to="/offline/courses/food-beverage-services">
            Food and Beverage Services
          </Link>
        </li>
        <li>
          <Link to="/offline/courses/housekeeping-occupation">
            Housekeeping Occupation
          </Link>
        </li>
        <li>
          <Link to="/offline/courses/computer-operation">
            Computer Office Applications
          </Link>
        </li>
        <li>
          <Link to="/offline/courses/sewing-machine">Sewing Machine Operation</Link>
        </li>
        <li>
          <Link to="/offline/courses/plumbing-pipe-fitting">
            Plumbing & Pipe Fitting
          </Link>
        </li>
        <li>
          <Link to="/offline/courses/steel-bindings-fabrication">
            Steel Bindings & Fabrication
          </Link>
        </li>
        <li>
          <Link to="/offline/courses/tiles-marbel-work">Tiles & Marbel Work</Link>
        </li>
        <li>
          <Link to="/offline/courses/masonry">Masonry</Link>
        </li>
        <li>
          <Link to="/offline/courses/welding">Welding</Link>
        </li>
        <li>
          <Link to="/offline/courses/retail-Sales-Service">Retail Sales Service</Link>
        </li>
      </ul>
    </div>
  );

  return (
    <div className="navbar bg-base-200 fixed z-50 top-0 ">
      <div className="navbar-start">
        <div className="dropdown ">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>

          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content dropdown dropdown-hover mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-auto"
          >
            <li>
              <Link to="/">Home</Link>
            </li>
            <li tabIndex={0} className="">
              <details className="">
                <summary>List of Centres</summary>
                <ul className="p-2 ">{ListOfCentersOptions}</ul>
              </details>
            </li>
            <li tabIndex={0} className="">
              <details>
                <summary>List of Courses</summary>
                <ul className="">{ListOfCoursesOptions}</ul>
              </details>
            </li>
            <button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg btn-outline font-bold mt-2">
              <Link to="https://bracisd-staging.brac.net/" >
                BISD Online
              </Link>
            </button>
          </ul>
        </div>
        <Link to="/">
          <img
            style={{ width: "120px", height: "auto" }}
            alt=""
            src="https://i.ibb.co/tJrzNvT/brac-ISD-PNG-logo.png"
          ></img>
        </Link>
      </div>
      <div className="navbar-end hidden lg:flex">
        <ul className="menu menu-horizontal  grid grid-flow-col auto-cols-max">
          <div>
            <label
              tabIndex={0}
              className="btn m-1 text-md md:text-lg font-semibold"
            >
              <Link to="/">Home</Link>
            </label>
          </div>

          <div className="dropdown dropdown-hover">
            <label
              tabIndex={0}
              className="btn m-1 text-md md:text-lg font-semibold"
            >
              List of Centres
            </label>
            <ul
              tabIndex={0}
              className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-auto"
            >
              {ListOfCentersOptions}
            </ul>
          </div>
          <div className="dropdown dropdown-hover">
            <label
              tabIndex={0}
              className="btn m-1 text-md md:text-lg font-semibold"
            >
              list of Courses
            </label>
            <ul
              tabIndex={0}
              className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-auto"
            >
              {ListOfCoursesOptions}
            </ul>
          </div>
        </ul>
        <div className="btn btn-xs sm:btn-sm md:btn-md bg-[#FFA100] text-black hover:text-[#FFA100]  hover:outline hover:outline-2 hover:outline-[#FFA100] hover:bg-white mx-2">
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLScoauq-f2VJ6nHBH_X7qNMb7pwg-p2XA-tUzNI45HmaTbRbBw/viewform"
            
          >
            Registration
          </a>
        </div>
        <button className="btn btn-xs sm:btn-sm md:btn-md bg-[#FFA100] text-black hover:text-[#FFA100]  hover:outline hover:outline-2 hover:outline-[#FFA100] hover:bg-white">
          <Link to="https://bracisd-staging.brac.net/" >
            BISD Online
          </Link>
        </button>
      </div>
    </div>
  );
};

export default Navbar;
>>>>>>> 8a932e4 (Added Retail and Sales course)
