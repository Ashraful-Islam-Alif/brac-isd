import { Link } from "react-router-dom";
import Navbar from "../../Home/Navbar/Navbar";
import Footer from "../../Home/Footer/Footer";

const PlumbingPipeFitting = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div
        className="hero mt-20"
        style={{
          backgroundImage:
            "url(https://i.ibb.co/N165F5v/Plumbing-Pipe-Fitting.jpg)",
          width: "w-full",
          height: "320px",
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-white">
          <div className="max-w-xl md:max-w-2xl lg:max-w-2xl">
            <h2 className="text-xl md:text-3xl lg:text-5xl font-bold">
              Plumbing & Pipe Fitting
            </h2>
            <hr className="mx-4 md:mx-8 lg:mx-16 mt-4 border-t-8 font-bold border-[#FFA100]"></hr>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-8 lg:px-16 my-8">
        <div className="flex justify-between" >
          <div style={{ whiteSpace: "wrap" }}>
            <h2 className="font-bold md:text-2xl text-lg ">
              Plumbing & Pipe Fitting
            </h2>
          </div>
          <div>
            <Link
              to="https://docs.google.com/forms/d/e/1FAIpQLScoauq-f2VJ6nHBH_X7qNMb7pwg-p2XA-tUzNI45HmaTbRbBw/viewform"
              target="_blank"
              className="btn btn-xs sm:btn-sm md:btn-md bg-[#FFA100] text-black hover:text-[#FFA100]  hover:outline hover:outline-2 hover:outline-[#FFA100] hover:bg-white"
              style={{ whiteSpace: "nowrap" }}
            >
              Click for Registration
            </Link>
          </div>
        </div>

        <div>
          <p className="mt-4">
            <span className="font-bold  md:text-xl text-md">
              Training Duration:
            </span>{" "}
            3 months
          </p>
          <p className="mt-4">
            <span className="font-bold mt-4 md:text-xl text-md">
              Class Duration:
            </span>{" "}
            7 Hours
          </p>
          <p className="mt-4">
            <span className="font-bold mt-4 md:text-xl text-md">
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
              Speceification, Use Hand and Power Tools, Pipe Cutting And
              Threading, Water Supply Line Installation Using G.I,PPR,PVC & uPVC
              Pipe, Sewer Pipe Line Installation, Plumbing Fixtures
              Installation, Pressure Testing of Piping System.
            </span>
          </p>
          <p className="mt-4 font-bold md:text-xl text-md">
            Course Description:{" "}
          </p>
          <p className="">
            Identify OHS policies and Procedures, Perform Conversation in
            English with Others, Use basic mathematical Formula, design and
            plans, Operate Hand And Power Tools, Prepare Hand Tools, Equipment
            and Materials, Perform Pipe Cutting & Threading Operation, Water
            Supply Line Installation Using G.I,PPR,PVC & uPVC Pipe, Sewer Pipe
            Line Installation, Plumbing Fixtures Installation, Pressure Testing
            of Piping System.
          </p>

          <p className="font-bold mt-4 md:text-xl text-md">Course Overview:</p>
          <p className="">
            Local and Global Market of Plumbing And Pipe Fittings Job.
          </p>
          <p className="font-bold mt-4 md:text-xl text-md">
            Teaching Approach:
          </p>
          <p>BNQF, CBT&A Methode, Residencial.</p>
          <p className="font-bold mt-4 md:text-xl text-md">Certification:</p>
          <p>
            Participants will receive a well-recognised certificate from BRAC
            ISD, acknowledging their successful completion.
          </p>
        </div>
        <div className="mt-4">
          <h1 className="font-bold  md:text-xl text-md">
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

export default PlumbingPipeFitting;
