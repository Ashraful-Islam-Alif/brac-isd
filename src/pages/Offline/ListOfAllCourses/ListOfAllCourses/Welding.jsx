import { Link } from "react-router-dom";
import Navbar from "../../Home/Navbar/Navbar";
import Footer from "../../Home/Footer/Footer";

const Welding = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div
        className="hero mt-20"
        style={{
          backgroundImage: "url(https://i.ibb.co/Rc4pnD6/welding.jpg)",
          width: "100%",
          height: "320px",
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-white">
          <div className="max-w-xl md:max-w-2xl lg:max-w-2xl">
            <h2 className="text-xl md:text-3xl lg:text-5xl font-bold ">
              Welding
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
              <h2 className="font-bold md:text-2xl text-lg ">
              Welding
              </h2>
            </div>
            <div>
              <Link
                to="https://docs.google.com/forms/d/e/1FAIpQLSfn_JpZI_pLhNBTBdjwQAPe9n22d9te7kYH7N44KkCTn1hDyg/viewform?usp=sf_link"
                target="_blank"
                 className="btn px-6 py-3 bg-gradient-to-r from-yellow-400 to-orange-500 text-white font-semibold rounded-lg hover:from-orange-500 hover:to-yellow-400 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg"
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
            5 hours
          </p>
          <p className="mt-4">
            <span className="font-bold md:text-xl text-md mt-4">
              Educational Qualification:
            </span>{" "} <br />
            •	Class eight or equivalent certificate, or <br />
•	2-years occupation relevant work experience and pass in a challenge test on NSDA’s approved assessment.

          </p>
          <p className="mt-4 font-bold md:text-xl text-md">Schedule:</p>
          <p className="">
            <span>Saturday, Sunday, Monday, Tuesday, Wednesday, Thursday</span>
          </p>
          <p className="mt-4 font-bold md:text-xl text-md">Course Contents:</p>
          <p className="">
            <span>
            •	Use Hand and Power Tools <br />
•	Use Measuring Instruments <br />
•	Perform Oxy-acetylene Cutting <br />
•	Perform Gas Welding and Brazing<br />
•	Perform Weld Beads and Padding using SMAW <br />
•	Perform Shielded Metal Arc Welding (SMAW)– 1F and 2F Positions <br />
•	Perform Shielded Metal Arc Welding (SMAW)– 1G and 2G Positions <br />

            </span>
          </p>
          <p className="mt-4 font-bold md:text-xl text-md">
            Course Description:{" "}
          </p>
          <p className="">
          The Welding course, designed in alignment with the standards set by the National Skills Development Authority (NSDA_ BNQF Level-1) Bangladesh, provides learners with comprehensive technical skills, knowledge, and professional attitude required for excellence in welding operations. This course focuses on various welding techniques, safety protocols, and practical skills for performing quality welding work in industrial, manufacturing, and construction settings.
          </p>
          <p className="mt-4 font-bold md:text-xl text-md">Course Overview: </p>
          <p className=""></p>
          The Welding course is a 3-month intensive training program designed for individuals with a minimum Class eight or equivalent certificate qualification, offering a strong foundation in welding techniques and operations. Conducted six days a week, with 5-hour daily sessions, the course combines theoretical knowledge with extensive hands-on practice to prepare participants for professional welding roles. Key topics include Occupational Safety and Health practices, basic mathematical computations, and housekeeping procedures. Participants will master technical drawing interpretation, proper use of hand and power tools, and measuring instruments. The program provides comprehensive training in various welding techniques including Oxy-acetylene cutting, Gas welding and brazing, and Shielded Metal Arc Welding (SMAW) in multiple positions (1F, 2F, 1G, and 2G). Upon completion, graduates will be well-equipped to pursue careers in welding, with the opportunity to appear for government certification assessments, enabling them to work in both local and international industrial sectors. 
          <p className=" font-bold md:text-xl text-md mt-4">
            Course Objectives:
          </p>
          <p className="">
          The primary objective of this course is to equip participants with comprehensive theoretical knowledge and practical skills in welding, enabling them to perform professional welding operations across various positions and techniques. By the end of the training, participants will be prepared to interpret technical drawings, operate welding equipment safely, perform different types of welds, and execute quality welding work according to industry standards. The course ensures graduates are ready to qualify for government certification and pursue rewarding careers in the manufacturing, construction, and industrial sectors, both locally and internationally.
          </p>
          <p className="font-bold md:text-xl text-md mt-4">
            Training Approach:
          </p>
          <p>
          The course adopts a classroom-based training approach, combining theoretical instruction with practical hands-on exercises to ensure comprehensive learning. Multiple formative assessments are conducted throughout the program to track progress and reinforce skills. 
          </p>
          <p className="font-bold md:text-xl text-md mt-4">
            For Whom This Course Is:
          </p>
          <p>18 Years To 40 Years age.</p>
          <p className="font-bold md:text-xl text-md mt-4">
          Certification:
          </p>
          <p>
          Participants will receive a completion certificate from BRAC ISD, validating their expertise in welding. Additionally, graduates will have the opportunity to appear for government certification exams, further enhancing their qualifications and career prospects.
          </p>
        </div>
        <div className="mt-4">
          <h1 className="font-bold md:text-xl text-md ">
            Course available in:
          </h1>
          <div className="">
            <p className="underline">
              <Link to="/offline/centers/narayanganjnKanchan">
                BRAC ISD Narayanganj Centre
              </Link>
            </p>
          </div>
        </div>
      </div>

      <Footer></Footer>
    </div>
  );
};

export default Welding;
