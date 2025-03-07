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
              Pipe Fitting
            </h2>
            <hr className="mx-4 md:mx-8 lg:mx-16 mt-4 border-t-8 font-bold border-[#FFA100]"></hr>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-8 lg:px-16 my-8">
        <div className="flex justify-between" >
          <div style={{ whiteSpace: "wrap" }}>
            <h2 className="font-bold md:text-2xl text-lg ">
              Pipe Fitting
            </h2>
          </div>
          <div>
            <Link
              to="https://docs.google.com/forms/d/e/1FAIpQLSfn_JpZI_pLhNBTBdjwQAPe9n22d9te7kYH7N44KkCTn1hDyg/viewform?usp=sf_link"
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
            <span className="font-bold  md:text-xl text-md">
              Training Duration:
            </span>{" "}
            3 months
          </p>
          <p className="mt-4">
            <span className="font-bold mt-4 md:text-xl text-md">
              Class Duration:
            </span>{" "}
            5 hours
          </p>
          <p className="mt-4">
            <span className="font-bold mt-4 md:text-xl text-md">
              Educational Qualification:
            </span>{" "} <br />
            •	Class eight or equivalent certificate or <br />
•	2-years occupation relevant work experience and pass in a challenge test on NSDA’s approved assessment. <br />

          </p>
          <p className="mt-4 font-bold md:text-xl text-md">Schedule:</p>
          <p className="">
            <span>Saturday, Sunday, Monday, Tuesday, Wednesday, Thursday</span>
          </p>
          <p className="mt-4 font-bold md:text-xl text-md">Course Contents:</p>
          <p className="">
            <span>
            •	Prepare Pipes for Fitting <br />
•	Perform Tack Welding and Gas Cutting <br />
•	Install Piping System on Ground Surface <br />
•	Install Overhead Piping System <br />
•	Install Underground Piping System <br />

            </span>
          </p>
          <p className="mt-4 font-bold md:text-xl text-md">
            Course Description:{" "}
          </p>
          <p className="">
          The Pipe Fitting course, designed in alignment with the standards set by the National Skills Development Authority (NSDA_BNQF Level- 2) Bangladesh, equips learners with comprehensive technical skills, knowledge, and professional attitude required for excellence in pipe installation and fitting work. This course focuses on essential piping system installations, safety protocols, and practical skills for ground surface, overhead, and underground piping systems in residential, commercial, and industrial settings. 
          </p>

          <p className="font-bold mt-4 md:text-xl text-md">Course Overview:</p>
          <p className="">
          The Pipe Fitting course is a 3-month intensive training program designed for individuals with a class eight or equivalent certificate, providing a strong foundation in pipe fitting and installation techniques. Conducted six days a week, with 5-hour daily sessions, the course combines theoretical understanding with hands-on practical training to prepare participants for professional pipe fitting roles. Key topics include Occupational Safety and Health Procedures, Workplace Communication in English, and Team Environment practices. Participants will develop expertise in interpreting technical drawings, performing measurements and calculations, pipe preparation, tack welding, and gas cutting. The program covers comprehensive training in installing piping systems across various environments - ground surface, overhead, and underground installations. Upon completion, graduates will be well-prepared to pursue careers in pipe fitting, with the opportunity to appear for government certification assessments, enabling them to work in both local and international markets.
          </p>
          <p className="font-bold mt-4 md:text-xl text-md">Course Objectives:</p>
          <p className="">
          The primary objective of this course is to equip participants with comprehensive theoretical knowledge and practical skills in pipe fitting, enabling them to perform professional pipe installation, implement safety protocols, and execute quality piping projects across different environments. By the end of the training, participants will be prepared to interpret technical drawings, perform accurate measurements, handle specialized tools and equipment, and install various piping systems according to industry standards. The course ensures graduates are ready to qualify for government certification and pursue rewarding careers in the industrial and construction sectors, both locally and internationally.
          </p>
          <p className="font-bold mt-4 md:text-xl text-md">
            Training Approach:
          </p>
          <p>
          The course adopts a classroom-based training approach, combining theoretical instruction with practical hands-on exercises to ensure comprehensive learning. Multiple formative assessments are conducted throughout the program to track progress and reinforce skills. 
          </p>
          <p className="font-bold mt-4 md:text-xl text-md">For Whom This Course Is:</p>
          <p>
          Youth, Age limit-18-40 years, Men and Women, Transgender.
          </p>
          <p className="font-bold mt-4 md:text-xl text-md">Certification:</p>
          <p>
          Participants will receive a completion certificate from BRAC ISD at the end of the course, validating their expertise in Pipe Fitting. Moreover, having the opportunities participants to appear the assessment for government certificate.
          </p>
        </div>
        <div className="mt-4">
          <h1 className="font-bold  md:text-xl text-md">
            Course available in:
          </h1>
          <div className="">
            <p className="underline">
              <Link to="/offline/centers/narayanganjKanchan">
                BRAC ISD Narayanganj Centre
              </Link>
            </p>
            <p className="underline">
              <Link to="/offline/centers/manikganj">BRAC ISD Manikganj Centre</Link>
            </p>
            <p className="underline">
              <Link to="/offline/centers/nilphamari">
                BRAC ISD Nilphamari Centre
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
