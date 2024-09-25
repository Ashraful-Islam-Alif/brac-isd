import { Link } from "react-router-dom";
import Navbar from "../../Home/Navbar/Navbar";
import Footer from "../../Home/Footer/Footer";

const DigitalMarketingCourses = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div
        className="hero mt-20"
        style={{
          backgroundImage:
            "url(https://i.ibb.co/WV68tYb/young-craftsman-building-house.jpg)",
          width: "100%",
          height: "320px",
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-white">
          <div className="max-w-xl md:max-w-2xl lg:max-w-2xl">
            <h2 className="text-xl md:text-3xl lg:text-5xl font-bold ">
              Masonry
            </h2>
            <hr className="mx-4 md:mx-8 lg:mx-16 mt-4 border-t-8 font-bold border-[#FFA100]"></hr>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-8 lg:px-16 my-8">
        {/* course info */}
        <div>
          <div
            className="flex justify-between"
            style={{ whiteSpace: "nowrap" }}
          >
            <div>
              <h2 className="font-bold md:text-2xl text-lg ">Masonry</h2>
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
          <p className="mt-4">
            <span className="font-bold md:text-xl text-md ">
              Training Duration:
            </span>{" "}
            3 months
          </p>
          <p className="mt-4">
            <span className="font-bold md:text-xl text-md mt-4">
              Class Duration:
            </span>{" "}
            7 hours
          </p>
          <p className="mt-4">
            <span className="font-bold md:text-xl text-md mt-4">
              Educational Qualification:
            </span>{" "}
            Minimum SSC
          </p>
          <p className="mt-4 font-bold md:text-xl text-md">Schedule:</p>
          <p className="mt-4 ">
            <span>8:30 AM To 4:30 PM</span>
          </p>
          <p className="mt-4 font-bold md:text-xl text-md">Course Contents:</p>
          <p className="mt-4 ">
            <span>
              OHS in Workplace, First Aid, Communication in English in the work
              Environment, Perform Basic Mathics, Translate Drawing, Plan and
              Speceification, Use Hand and Power Tools, Break and Block preper
              location to fix ,build a concreat , Finish brick or block laying
              work and curing ,mix plaster materils ,apply plaster to corner ,
              apply plaster on plain surface
            </span>
          </p>
          <p className="mt-4 font-bold md:text-xl text-md">
            Course Description:{" "}
          </p>
          <p className="">
            Identify OHS policies and Procedures, Perform Conversation in
            English with Others, Use basic mathematical Formula, design and
            plans, Operate Hand And Power Tools, Break and Block preper location
            to fix ,build a concreat , Finish brick or block laying work and
            curing ,mix plaster materils ,apply plaster to corner , apply
            plaster on plain surface
          </p>
          <p className="mt-4 font-bold md:text-xl text-md">Course Overview: </p>
          <p className=""></p>
          Local And Global Market. All Kinds Of Plaster And Brick or block
          Fittings Works, Repair And Maintenance Works, Constructional Works.
          <p className=" font-bold md:text-xl text-md mt-4">
            Course Objectives:
          </p>
          <p className="">Local and Global Market of Job.</p>
          <p className="font-bold md:text-xl text-md mt-4">
            Teaching Approach:
          </p>
          <p>BNQF, CBT&A Methode, Residencial.</p>
          <p className="font-bold md:text-xl text-md mt-4">
            For Whom This Course Is:
          </p>
          <p>18 Years To 40 Years age</p>
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

export default DigitalMarketingCourses;
