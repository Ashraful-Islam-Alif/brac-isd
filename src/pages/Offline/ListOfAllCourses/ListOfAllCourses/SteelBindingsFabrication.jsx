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
            Minimum SSC (Secondary School Certificate).
          </p>
          <p className="mt-4 font-bold md:text-xl text-md">Schedule:</p>
          <p className="">
            <span>Saturday, Sunday, Monday, Tuesday, Wednesday, Thursday</span>
          </p>
          <p className="mt-4 font-bold md:text-xl text-md">Course Contents:</p>
          <p className="">
            <span>
            •	Occupation Safety and Health (OSH) <br />
•	Workplace Communications  <br />
•	Interpretation of Drawings, Plans, and Specifications <br />
•	Use of Hand and Power Tools <br />
•	Perform Basic Mathematics <br />
•	Perform Preparation Works <br />
•	Fabrication Works <br />
•	Assembly of Prefabricated Steel Works <br />
•	Steel Re-Bar Installation Works <br />
•	Basic Construction Leveling Procedures <br />
•	Formworks Installation <br />

            </span>
          </p>
          <p className="mt-4 font-bold md:text-xl text-md">Course Description: </p>
          <p className="">
          The Steel Binding and Fabrication course equips learners with comprehensive technical skills, knowledge, and professional attitude required for excellence in steel fabrication and construction work. This course focuses on fundamental fabrication techniques, safety protocols, and practical skills for preparing, assembling, and installing steel structures in construction projects.
          </p>
          <p className="mt-4 font-bold md:text-xl text-md">Course Overview: </p>
          <p className="">
          The Steel Binding and Fabrication course is a 3-month intensive training program designed for individuals with a minimum SSC qualification, offering a strong foundation in steel fabrication and installation techniques. Conducted six days a week, with 6-hour daily sessions, the course combines theoretical knowledge with extensive hands-on practice to prepare participants for professional steel fabrication roles. Key topics include Occupational Safety and Health procedures, Workplace Communications, and technical drawing interpretation. Participants will master basic mathematics, proper use of hand and power tools, and preparation techniques. The program provides comprehensive training in fabrication works, assembly of prefabricated steel structures, steel re-bar installation, construction leveling procedures, and formworks installation. Upon completion, graduates will be well-equipped to pursue careers in steel fabrication and construction, with the opportunity to appear for government certification assessments, enabling them to work in both local and international construction sectors.
          </p>
          <p className="mt-4 font-bold md:text-xl text-md">Course Objectives: </p>
          <p className="">
          The primary objective of this course is to equip participants with comprehensive theoretical knowledge and practical skills in steel binding and fabrication, enabling them to perform professional fabrication work, steel installation, and construction-related tasks. By the end of the training, participants will be prepared to interpret technical drawings, perform accurate measurements, fabricate steel components, and execute quality installation work according to industry standards. The course ensures graduates are ready to qualify for government. 
          </p>
          <p className="font-bold mt-4 md:text-xl text-md">Training Approach:</p>
          <p>
          The course adopts a classroom-based training approach, combining theoretical instruction with practical hands-on exercises to ensure comprehensive learning. Multiple formative assessments are conducted throughout the program to track progress and reinforce skills. 
          </p>
          <p className="mt-4 font-bold">For Whom This Course is: </p>
          <p className="">18 Years To 40 Years age </p>
          <p className="font-bold mt-4 md:text-xl text-md">Certification:</p>
          <p>
          Participants will receive a completion certificate from BRAC ISD at the end of the course, validating their expertise in Steel Binding and Fabrication. Moreover, having the opportunities participants to appear the assessment for government certificate.
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
