<<<<<<< HEAD
import { Link } from "react-router-dom";
import Navbar from "../../Home/Navbar/Navbar";
import Footer from "../../Home/Footer/Footer";

const SewingMachine = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div
        className="hero mt-20"
        style={{
          backgroundImage:
            "url(https://i.ibb.co/RpfpwCf/Sewing-Machine-Operation.jpg)",
          width: "w-full",
          height: "320px",
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-white">
          <div className="max-w-xl md:max-w-2xl lg:max-w-2xl">
            <h2 className="text-xl md:text-3xl lg:text-5xl font-bold">
              Sewing Machine Operation
            </h2>
            <hr className="mx-4 md:mx-8 lg:mx-16 mt-4 border-t-8 font-bold border-[#FFA100]"></hr>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-8 lg:px-16 my-8">
        <div className="flex justify-between" style={{ whiteSpace: "nowrap" }}>
          <div>
            <h2 className="font-bold md:text-2xl text-md ">
              Sewing Machine Operation
            </h2>
          </div>
          <div>
            <Link
              to="https://docs.google.com/forms/d/e/1FAIpQLSfUhIt6DCWApWz-7aIyKSt0ji5xGap0mBsP6rDcXji9RIfiyQ/viewform"
              target="_blank"
              className="underline text-[#FFA100] font-medium md:text-lg text-xs"
            >
              Click for Registration
            </Link>
          </div>
        </div>
        {/* course info */}
        {/* <div>
          <h2 className="font-bold text-2xl">Web Design Course</h2>
          <p className="mt-4">
            <span className="font-bold ">Training Duration:</span> 3 months
          </p>
          <p className="mt-4">
            <span className="font-bold mt-4">Class Duration:</span> 3 hours
          </p>
          <p className="mt-4">
            <span className="font-bold mt-4">Educational Qualification:</span>{" "}
            Minimum HSC
          </p>
          <p className="mt-4 font-bold">Schedule:</p>
          <p className="mt-4 ">
            <span>1. Sun-Tue-Thu (9 am - 12 pm)</span>
            <br></br>
            <span>
              2. Saturday - Monday - Wednesday (9 am - 12 pm and 2 pm - 5 pm)
            </span>
            <br></br>
            <span>
              3. Sunday-Tuesday-Thursday (9 am - 12 pm and 2 pm - 5 pm)
            </span>
          </p>
          <p className="mt-4 font-bold">Course Contents:</p>
          <p className="mt-4 ">
            <span>1. HTML5</span>
            <br></br>
            <span>2. CSS3 with Advanced Animation and Effects</span>
            <br></br>
            <span>3. JavaScript and jQuery</span>
            <br></br>
            <span>4. SASS and SCSS</span>
            <br></br>
            <span>5. Bootstrap Latest Version</span>
            <br></br>
            <span>6. Responsive Website Design</span>
            <br></br>
            <span>7. Freelancing Guideline</span>
            <br></br>
            <span>
              8. Software (Notepad, Brackets, Visual Studio code, Photoshop)
            </span>
            <br></br>
            <span>
              9. Freelancing Marketplace (Fiverr, Freelancer, Upwork,
              Themeforest)
            </span>
          </p>
          <p className="mt-4 font-bold">Course Description: </p>
          <p className="">
            Unleash your creativity in our Web Design Course. With a discounted
            fee of 4000, you get to explore a comprehensive curriculum that
            covers HTML5, CSS3 with advanced animation and effects, JavaScript,
            jQuery, SASS, SCSS, Bootstrap Latest Version, Responsive Website
            Design, freelancing guidance, and essential software like Notepad,
            Brackets, Visual Studio code, and Photoshop. Discover the world of
            freelancing marketplaces like Fiverr, Freelancer, Upwork, and
            Themeforest and kickstart your web design journey.
          </p>

          <p className="font-bold mt-4">Teaching Approach:</p>
          <p>
            Our training approach combines theoretical knowledge with hands-on
            practical exercises and real-world case studies. Experienced
            industry professionals will guide you through each module, ensuring
            a holistic learning experience.
          </p>
          <p className="font-bold mt-4">Certification:</p>
          <p>
            Participants will receive a well-recognised certificate from BRAC
            ISD, acknowledging their successful completion.
          </p>
        </div> */}
        <div className="mt-4">
          <h1 className="font-bold ">Course available in:</h1>
          <div className="mt-4">
            <p className="underline">
              <Link to="/centers/narayanganjnKanchan">
                BISD Narayanganj Centre
              </Link>
            </p>
            <p className="underline">
              <Link to="/centers/manikganj">BISD Manikganj Centre</Link>
            </p>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default SewingMachine;
=======
import { Link } from "react-router-dom";
import Navbar from "../../Home/Navbar/Navbar";
import Footer from "../../Home/Footer/Footer";

const SewingMachine = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div
        className="hero mt-20"
        style={{
          backgroundImage:
            "url(https://i.ibb.co/RpfpwCf/Sewing-Machine-Operation.jpg)",
          width: "w-full",
          height: "320px",
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-white">
          <div className="max-w-xl md:max-w-2xl lg:max-w-2xl">
            <h2 className="text-xl md:text-3xl lg:text-5xl font-bold">
              Sewing Machine Operation
            </h2>
            <hr className="mx-4 md:mx-8 lg:mx-16 mt-4 border-t-8 font-bold border-[#FFA100]"></hr>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-8 lg:px-16 my-8">
        <div className="flex justify-between" style={{ whiteSpace: "nowrap" }}>
          <div>
            <h2 className="font-bold md:text-2xl text-md ">
              Sewing Machine Operation
            </h2>
          </div>
          <div>
            <Link
              to="https://docs.google.com/forms/d/e/1FAIpQLScoauq-f2VJ6nHBH_X7qNMb7pwg-p2XA-tUzNI45HmaTbRbBw/viewform"
              target="_blank"
              className="btn btn-xs sm:btn-sm md:btn-md bg-[#FFA100] text-black hover:text-[#FFA100]  hover:outline hover:outline-2 hover:outline-[#FFA100] hover:bg-white"
            >
              Click for Registration
            </Link>
          </div>
        </div>

        <div>
          <p className="mt-4">
            <span className="font-bold md:text-xl text-md">
              Training Duration:
            </span>{" "}
            3 months
          </p>
          <p className="mt-4">
            <span className="font-bold mt-4 md:text-xl text-md">
              Class Duration:
            </span>{" "}
            3 hours
          </p>
          <p className="mt-4">
            <span className="font-bold mt-4 md:text-xl text-md">
              Educational Qualification:
            </span>{" "}
            Minimum class 5
          </p>
          <p className="mt-4 font-bold md:text-xl text-md">Schedule:</p>
          <p className="mt-4 ">
            <span>Sat, Mon & Wed Sun, Tue & Thu</span>
          </p>
          <p className="mt-4 font-bold md:text-xl text-md">Course Contents:</p>
          <p className="mt-4 ">
            <span>
              1. Generic : Communicate in the Workplace, Work in a team
              Invironment.
            </span>
            <br></br>
            <span>
              2. Sector specific: Work in the RMG sector, Perform measurment and
              calculation.
            </span>
            <br></br>
            <span>
              3. Occupation Specific: Operate Single needle lock stitch Machine,
              Operate Dubble needle lock stitch Machine, Operate Single needle
              chain stitch Machine Operate dubble needle chain stitch Machine,
              Operate Four thread over lock Machine
            </span>
          </p>
          <p className="mt-4 font-bold md:text-xl text-md">
            Course Description:{" "}
          </p>
          <p className="">
            <span>* Operate Single needle lock stitch Machine</span>
            <br></br>
            <span>* Operate Dubble needle lock stitch Machine</span>
            <br></br>
            <span>* Operate Single needle chain stitch Machine</span>
            <br></br>
            <span>* Operate dubble needle chain stitch Machine</span>
            <br></br>
            <span>* Operate Four thread over lock Machine</span>
            <br></br>
            <span>
              &nbsp;&nbsp;1. Woven febrics Item: kind of pocket,
              kind of cuffs, kind of collar, and Box plate.
            </span>
            <br></br>
            <span>
              &nbsp;&nbsp;2. Knite Fabric Item: Arm hole joint, side
              seam, heam and moon.
            </span>
            <br></br>
          </p>
          <p className=" font-bold md:text-xl text-md mt-4">Course Overview:</p>
          <p className="mt-2">
            Occupation Specific: Operate Single needle lock stitch Machine,<br />
            Operate Dubble needle lock stitch Machine, <br />Operate Single needle
            chain stitch Machine <br />Operate dubble needle chain stitch Machine,
           <br /> Operate Four thread over lock Machine.
          </p>
          <p className=" font-bold md:text-xl text-md mt-4">
            Course Objectives:
          </p>
          <p className="mt-2">Professional Competency</p>

          <p className="font-bold mt-4 md:text-xl text-md">
            Teaching Approach:
          </p>
          <p>Theoritical & Practical</p>
          <p className="font-bold mt-4 md:text-xl text-md">Certification:</p>
          <p>
            Participants will receive a well-recognised certificate from BRAC
            ISD, acknowledging their successful completion.
          </p>
        </div>
        <div className="mt-4">
          <h1 className="font-bold md:text-xl text-md ">
            Course available in:
          </h1>
          <div className="mt-4">
            <p className="underline">
              <Link to="/offline/centers/narayanganjnKanchan">
                BISD Narayanganj Centre
              </Link>
            </p>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default SewingMachine;
>>>>>>> 8a932e4 (Added Retail and Sales course)
