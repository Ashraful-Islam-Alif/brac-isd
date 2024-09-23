<<<<<<< HEAD

import { Link } from "react-router-dom";

const ListOfCenters = () => {
  return (
    <div className=" my-8 max-w-screen-xl mx-auto">
      <Link to="/list-of-center" className="text-2xl font-semibold">
        <h2 className="my-4 underline">List of Centres</h2>
      </Link>
      <div className="grid justify-items-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div >
          <img
            src="https://i.ibb.co/6YyVJjJ/skyscrapers-sunset.jpg"
            alt=""
            style={{ width: "400px", height: "220px" }}
          ></img>
          <h2 className="text-center underline font-bold text-[#FFA100] text-xl">
            <Link to="/centers/dhaka">BISD Uttara (Dhaka)</Link>
          </h2>
        </div>
        <div >
          <img
            src="https://i.ibb.co/xCJXNcK/Rangpur.jpg"
            alt=""
            style={{ width: "400px", height: "220px" }}
          ></img>
          <h2 className="text-center underline font-bold text-[#FFA100] text-xl">
            <Link to="/centers/rangpur">BISD Rangpur</Link>
          </h2>
        </div>
        <div >
          <img
            src="https://i.ibb.co/LSDWMVC/Rajshahi.jpg"
            alt=""
            style={{ width: "400px", height: "220px" }}
          ></img>
          <h2 className="text-center underline font-bold text-[#FFA100] text-xl">
            <Link to="/centers/rajshahi">BISD Rajshahi</Link>
          </h2>
        </div>
        <div >
          <img
            src="https://i.ibb.co/XVtNDVJ/Cumilla.jpg"
            alt=""
            style={{ width: "400px", height: "220px" }}
          ></img>
          <h2 className="text-center underline font-bold text-[#FFA100] text-xl">
            <Link to="/centers/cumilla">BISD Cumilla</Link>
          </h2>
        </div>
        <div >
          <img
            src="https://i.ibb.co/YWdhvmt/Chattogram.webp"
            alt=""
            style={{ width: "400px", height: "220px" }}
          ></img>
          <h2 className="text-center underline font-bold text-[#FFA100] text-xl">
            <Link to="/centers/chattogram">BISD Chattogram</Link>
          </h2>
        </div>
        <div >
          <img
            src="https://i.ibb.co/nD9s92R/Sylhet.jpg"
            alt=""
            style={{ width: "400px", height: "220px" }}
          ></img>
          <h2 className="text-center underline font-bold text-[#FFA100] text-xl">
            <Link to="/centers/sylhet">BISD Sylhet</Link>
          </h2>
        </div>
        <div >
          <img
            src="https://i.ibb.co/DwhwsVx/coxs-Bazar.jpg"
            alt=""
            style={{ width: "400px", height: "220px" }}
          ></img>
          <h2 className="text-center underline font-bold text-[#FFA100] text-xl">
            <Link to="/centers/coxbazar">BISD Cox's Bazar</Link>
          </h2>
        </div>
        <div >
          <img
            src="https://i.ibb.co/Q8FpKh4/Chattogram2.jpg"
            alt=""
            style={{ width: "400px", height: "220px" }}
          ></img>
          <h2 className="text-center underline font-bold text-[#FFA100] text-xl">
            <Link to="/centers/chattogram2">BISD Halishahr (Chattogram)</Link>
          </h2>
        </div>

        <div >
          <img
            src="https://i.ibb.co/S6RYBKx/Chattogram3.jpg"
            alt=""
            style={{ width: "400px", height: "220px" }}
          ></img>
          <h2 className="text-center underline font-bold text-[#FFA100] text-xl">
            <Link to="/centers/chattogram3">BISD Patia (Chattogram)</Link>
          </h2>
        </div>
        <div >
          <img
            src="https://i.ibb.co/74Jhy9r/narayanganj-Bondor.jpg"
            alt=""
            style={{ width: "400px", height: "220px" }}
          ></img>
          <h2 className="text-center underline font-bold text-[#FFA100] text-xl">
            <Link to="/centers/narayanganjnBondor">
              BISD Bandar (Narayanganj)
            </Link>
          </h2>
        </div>
        <div >
          <img
            src="https://i.ibb.co/w78d8FL/narayangan-Kanchan.jpg"
            alt=""
            style={{ width: "400px", height: "220px" }}
          ></img>
          <h2 className="text-center underline font-bold text-[#FFA100] text-xl">
            <Link to="/centers/narayanganjnKanchan">BISD Narayanganj</Link>
          </h2>
        </div>
        <div >
          <img
            src="https://i.ibb.co/9VZfP2Y/manikganj.jpg"
            alt=""
            style={{ width: "400px", height: "220px" }}
          ></img>
          <h2 className="text-center underline font-bold text-[#FFA100] text-xl">
            <Link to="/centers/manikganj">BISD Manikganj</Link>
          </h2>
        </div>
        <div >
          <img
            src="https://i.ibb.co/PjJpHtZ/mymensingh.jpg"
            alt=""
            style={{ width: "400px", height: "220px" }}
          ></img>
          <h2 className="text-center underline font-bold text-[#FFA100] text-xl">
            <Link to="/centers/mymensingh">BISD Mymensingh</Link>
          </h2>
        </div>
        <div >
          <img
            src="https://i.ibb.co/fMMRN2k/nilphamari.jpg"
            alt=""
            style={{ width: "400px", height: "220px" }}
          ></img>
          <h2 className="text-center underline font-bold text-[#FFA100] text-xl">
            <Link to="/centers/nilphamari">BISD Nilphamari</Link>
          </h2>
        </div>
      </div>
    </div>
  );
};

export default ListOfCenters;
=======
import { Link } from "react-router-dom";

const ListOfCenters = () => {
  return (
    <div className=" my-8 max-w-screen-xl mx-auto">
      <Link to="/list-of-center" className="text-2xl font-semibold">
        <h2 className="my-4 underline">List of Centres</h2>
      </Link>
      <div className="grid justify-items-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div>
          <a href="/offline/centers/dhaka">
            <img
              src="https://i.ibb.co/6YyVJjJ/skyscrapers-sunset.jpg"
              alt=""
              style={{ width: "400px", height: "220px" }}
            ></img>
            <h2 className="text-center underline font-bold text-[#FFA100] text-xl">
              <Link to="/offline/centers/dhaka">BISD Uttara (Dhaka)</Link>
            </h2>
          </a>
        </div>
        <div>
          <a href="/offline/centers/rangpur">
            <img
              src="https://i.ibb.co/xCJXNcK/Rangpur.jpg"
              alt=""
              style={{ width: "400px", height: "220px" }}
            ></img>
            <h2 className="text-center underline font-bold text-[#FFA100] text-xl">
              <Link to="/offline/centers/rangpur">BISD Rangpur</Link>
            </h2>
          </a>
        </div>
        <div>
          <a href="/offline/centers/rajshahi">
            <img
              src="https://i.ibb.co/LSDWMVC/Rajshahi.jpg"
              alt=""
              style={{ width: "400px", height: "220px" }}
            ></img>
            <h2 className="text-center underline font-bold text-[#FFA100] text-xl">
              <Link to="/offline/centers/rajshahi">BISD Rajshahi</Link>
            </h2>
          </a>
        </div>
        <div>
          <a href="/offline/centers/cumilla">
            <img
              src="https://i.ibb.co/XVtNDVJ/Cumilla.jpg"
              alt=""
              style={{ width: "400px", height: "220px" }}
            ></img>
            <h2 className="text-center underline font-bold text-[#FFA100] text-xl">
              <Link to="/offline/centers/cumilla">BISD Cumilla</Link>
            </h2>
          </a>
        </div>
        <div>
          <a href="/offline/centers/chattogram">
            <img
              src="https://i.ibb.co/YWdhvmt/Chattogram.webp"
              alt=""
              style={{ width: "400px", height: "220px" }}
            ></img>
            <h2 className="text-center underline font-bold text-[#FFA100] text-xl">
              <Link to="/offline/centers/chattogram">BISD Chattogram</Link>
            </h2>
          </a>
        </div>
        <div>
          <a href="/offline/centers/sylhet">
            <img
              src="https://i.ibb.co/nD9s92R/Sylhet.jpg"
              alt=""
              style={{ width: "400px", height: "220px" }}
            ></img>
            <h2 className="text-center underline font-bold text-[#FFA100] text-xl">
              <Link to="/offline/centers/sylhet">BISD Sylhet</Link>
            </h2>
          </a>
        </div>
        <div>
          <a href="/offline/centers/coxbazar">
            <img
              src="https://i.ibb.co/DwhwsVx/coxs-Bazar.jpg"
              alt=""
              style={{ width: "400px", height: "220px" }}
            ></img>
            <h2 className="text-center underline font-bold text-[#FFA100] text-xl">
              <Link to="/offline/centers/coxbazar">BISD Cox's Bazar</Link>
            </h2>
          </a>
        </div>
        <div>
          <a href="/offline/centers/chattogram2">
            <img
              src="https://i.ibb.co/Q8FpKh4/Chattogram2.jpg"
              alt=""
              style={{ width: "400px", height: "220px" }}
            ></img>
            <h2 className="text-center underline font-bold text-[#FFA100] text-xl">
              <Link to="/offline/centers/chattogram2">
                BISD Halishahar (Chattogram)
              </Link>
            </h2>
          </a>
        </div>
        <div>
          <a href="/offline/centers/chattogram3">
            <img
              src="https://i.ibb.co/S6RYBKx/Chattogram3.jpg"
              alt=""
              style={{ width: "400px", height: "220px" }}
            ></img>
            <h2 className="text-center underline font-bold text-[#FFA100] text-xl">
              <Link to="/offline/centers/chattogram3">
                BISD Patiya (Chattogram)
              </Link>
            </h2>
          </a>
        </div>
        <div>
          <a href="/offline/centers/narayanganjnBondor">
            <img
              src="https://i.ibb.co/74Jhy9r/narayanganj-Bondor.jpg"
              alt=""
              style={{ width: "400px", height: "220px" }}
            ></img>
            <h2 className="text-center underline font-bold text-[#FFA100] text-xl">
              <Link to="/offline/centers/narayanganjnBondor">
                BISD Bandar (Narayanganj)
              </Link>
            </h2>
          </a>
        </div>
        <div>
          <a href="/offline/centers/narayanganjnKanchan">
            <img
              src="https://i.ibb.co/w78d8FL/narayangan-Kanchan.jpg"
              alt=""
              style={{ width: "400px", height: "220px" }}
            ></img>
            <h2 className="text-center underline font-bold text-[#FFA100] text-xl">
              <Link to="/offline/centers/narayanganjnKanchan">
                BISD Narayanganj
              </Link>
            </h2>
          </a>
        </div>
        <div>
          <a href="/offline/centers/manikganj">
            <img
              src="https://i.ibb.co/9VZfP2Y/manikganj.jpg"
              alt=""
              style={{ width: "400px", height: "220px" }}
            ></img>
            <h2 className="text-center underline font-bold text-[#FFA100] text-xl">
              <Link to="/offline/centers/manikganj">BISD Manikganj</Link>
            </h2>
          </a>
        </div>
        <div>
          <a href="/offline/centers/mymensingh">
            <img
              src="https://i.ibb.co/PjJpHtZ/mymensingh.jpg"
              alt=""
              style={{ width: "400px", height: "220px" }}
            ></img>
            <h2 className="text-center underline font-bold text-[#FFA100] text-xl">
              <Link to="/offline/centers/mymensingh">BISD Mymensingh</Link>
            </h2>
          </a>
        </div>
        <div>
          <a href="/offline/centers/nilphamari">
            <img
              src="https://i.ibb.co/fMMRN2k/nilphamari.jpg"
              alt=""
              style={{ width: "400px", height: "220px" }}
            ></img>
            <h2 className="text-center underline font-bold text-[#FFA100] text-xl">
              <Link to="/offline/centers/nilphamari">BISD Nilphamari</Link>
            </h2>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ListOfCenters;
>>>>>>> 8a932e4 (Added Retail and Sales course)
