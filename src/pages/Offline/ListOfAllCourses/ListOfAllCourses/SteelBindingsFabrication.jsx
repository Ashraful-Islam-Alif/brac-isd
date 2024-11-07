import { Link } from "react-router-dom";
import Navbar from "../../Home/Navbar/Navbar";
import Footer from "../../Home/Footer/Footer";

const SteelBindingsFabrication = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div
        className="hero mt-20"
        style={{
          backgroundImage:
            "url(https://i.ibb.co/SvzrTxp/Steel-Bindings-Fabrication.jpg)",
          width: "w-full",
          height: "320px",
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-white">
          <div className="max-w-xl md:max-w-2xl lg:max-w-2xl">
            <h2 className="text-xl md:text-3xl lg:text-5xl font-bold">
              Steel Bindings & Fabrication
            </h2>
            <hr className="mx-4 md:mx-8 lg:mx-16 mt-4 border-t-8 font-bold border-[#FFA100]"></hr>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-8 lg:px-16 my-8">
        <div className="flex justify-between" >
          <div style={{ whiteSpace: "wrap" }}>
            <h2 className="font-bold md:text-2xl text-lg">
              Steel Bindings & Fabrication
            </h2>
          </div>
          <div>
            <Link
              to="https://docs.google.com/forms/d/e/1FAIpQLScoauq-f2VJ6nHBH_X7qNMb7pwg-p2XA-tUzNI45HmaTbRbBw/viewform"
              target="_blank"
               className="btn px-6 py-3 bg-gradient-to-r from-yellow-400 to-orange-500 text-white font-semibold rounded-lg hover:from-orange-500 hover:to-yellow-400 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg"
              style={{ whiteSpace: "nowrap" }}
            >
              Click for Registration
            </Link>
          </div>
        </div>
       
        <div>
          
          <p className="mt-4">
            <span className="font-bold md:text-xl text-md mt-4">Training Duration:</span> 3 months
          </p>
          <p className="mt-4">
            <span className="font-bold md:text-xl text-md mt-4">Class Duration:</span> 6 hours
          </p>
          <p className="mt-4">
            <span className="font-bold md:text-xl text-md mt-4">Educational Qualification:</span>{" "}
            Minimum SSC
          </p>
          <p className="mt-4 font-bold md:text-xl text-md">Schedule:</p>
          <p className="">
            <span>Saturday, Sunday, Monday, Tuesday, Wednesday, Thursday</span>
          </p>
          <p className="mt-4 font-bold md:text-xl text-md">Course Contents:</p>
          <p className="">
            <span>
              Perform Basic Mathics, OH&S in Workplace, Communicate in English
              in the work Environment.Translate Drawing ,plan and
              Speceification, Use Hand and Power Tools, Perform Preparation
              Works, Perform Fabrication Works, Perform Assembly of
              Prefabricated Steel Works, Perform Steel Re- Bar Installation
              Works, Perform Basic Construction Leveling Procedures,Perform
              Formworks Installation
            </span>
          </p>
          <p className="mt-4 font-bold md:text-xl text-md">Course Description: </p>
          <p className="">
            Use basic mathematical Formula, Identify OHS policies and
            Procedures, Perform Conversation in English with Others, Interprate
            store Manuals ,design and plans, Operate Hand And Power
            Tools,Prepare Hand Tools, Equipment and Materials, Bend main bars
            using manual benders and bending Machine, install
            scaffolding,install re bars for building elements, plan and prepare
            for work and set up level, install fformworks for building
            elements,repair and replace damaged formworks.
          </p>
          <p className="mt-4 font-bold md:text-xl text-md">Course Overview: </p>
          <p className="">
            Local And Global Market. All Kinds Of steel binding, scaffolding,
            installation Bar, Beem, operate manual bending and bending Machine,
            repeair and replace damage formwork, set up level Works.{" "}
          </p>
          <p className="mt-4 font-bold md:text-xl text-md">Course Objectives: </p>
          <p className="">
            Local and Global Market of steel binding and Fabrication and
            scaffolding Job.{" "}
          </p>
          <p className="font-bold mt-4 md:text-xl text-md">Teaching Approach:</p>
          <p>BNQF, CBT&A Methode, Residencial.</p>
          <p className="mt-4 font-bold">For Whom This Course is: </p>
          <p className="">18 Years To 40 Years age </p>
          <p className="font-bold mt-4 md:text-xl text-md">Certification:</p>
          <p>
            Participants will receive a well-recognised certificate from BRAC
            ISD, acknowledging their successful completion.
          </p>
        </div>
        <div className="mt-4">
          <h1 className="font-bold  md:text-xl text-md">Course available in:</h1>
          <div className="">
          <p className="underline">
              <Link to="/offline/centers/narayanganjnKanchan">
                BRAC ISD Narayanganj Centre
              </Link>
            </p>
            <p className="underline">
              <Link to="/offline/centers/manikganj">BRAC ISD Manikganj Centre</Link>
            </p>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default SteelBindingsFabrication;
