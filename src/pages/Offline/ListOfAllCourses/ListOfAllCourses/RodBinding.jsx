import Navbar from "../../Home/Navbar/Navbar";
import Footer from "../../Home/Footer/Footer";
import { Link } from "react-router-dom";

const RodBinding = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div
        className="hero mt-20 bg-no-repeat bg-center bg-contain w-full h-80 md:h-96 lg:h-[400px]"
        style={{
          backgroundImage: "url(https://i.ibb.co.com/tpWzzrt/rod-binding.png)",
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-white">
          <div className="max-w-xl md:max-w-2xl lg:max-w-2xl">
            <h2 className="text-xl md:text-3xl lg:text-5xl font-bold">
              Rod Binding
            </h2>
            <hr className="mx-4 md:mx-8 lg:mx-16 mt-4 border-t-8 font-bold border-[#FFA100]" />
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-8 lg:px-16 my-8">
        {/* course info */}
        <div>
          <div className="flex justify-between">
            <div style={{ whiteSpace: "wrap" }}>
              <h2 className="font-bold md:text-2xl text-lg ">Rod Binding</h2>
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
            5 Hours
          </p>
          <p className="mt-4">
            <span className="font-bold md:text-xl text-md mt-4">
              Educational Qualification:
            </span>{" "} <br />
            •	Class VIII Pass or evidence of equivalent achievement or <br />
•	Pass in a challenge test on language, literacy and numeracy skills considered necessary for successful completion of the qualification (Model challenge test to be developed based on units of competencies to be achieved) or <br />
•	2-year trade relevant work experience and pass in a challenge test on vocational skills considered necessary for successful completion of the qualification (Model challenge test to be developed).  <br />

          </p>
          <p className="mt-4 font-bold md:text-xl text-md">Schedule:</p>
          <p className="">
            <span>Saturday, Sunday, Monday, Tuesday, Wednesday, Thursday</span>
          </p>
          <p className="mt-4 font-bold md:text-xl text-md">Course Contents:</p>
          <p className="">
            <span>
            •	Perform Fundamental Works of Rod Binding <br />
•	Use Tools for Rod Binding Works <br />
•	Prepare Rod for Work <br />
•	Prepare Stirrups and Ties <br />
•	Perform Rod Binding for Base/ Footing <br />
•	Perform Rod Binding for Column <br />
            </span>
          </p>
          <p className="mt-4 font-bold md:text-xl text-md">
            Course Description:{" "}
          </p>
          <p className="">
            <span>
            The Rod Binding course, designed in alignment with the standards set by the National Skills Development Authority (NSDA_ BNQF Level- 2) Bangladesh, equips learners with essential technical skills, knowledge, and professional attitude required for excellence in reinforcement steel work. This course focuses on fundamental rod binding techniques, safety protocols, and practical skills for preparing and installing reinforcement structures in various construction projects, ensuring structural integrity and durability. 
            </span>
          </p>
          <p className="mt-4 font-bold md:text-xl text-md">Course Overview: </p>
          <p className=""></p>
          <span>
          The Rod Binding course is a 3-month intensive training program designed for individuals with a Class VIII Pass or evidence of equivalent achievement, providing a strong foundation in reinforcement steel work. Conducted six days a week, with 5-hour daily sessions, the course combines theoretical knowledge with extensive hands-on practice to prepare participants for professional rod binding work. Key topics include Occupational Safety and Health Procedures, Team Environment practices, and Workplace Communications. Participants will master the interpretation of construction drawings, fundamental rod binding techniques, and proper use of specialized tools. The program provides comprehensive training in rod preparation, creating stirrups and ties, and performing rod binding for critical structural elements such as bases, footings, and columns. Upon completion, graduates will be well-equipped to pursue careers in construction, with the opportunity to appear for government certification assessments, enabling them to work in both local and international construction sectors.
          </span>
          <p className=" font-bold md:text-xl text-md mt-4">
            Course Objectives:
          </p>
          <p className="">
          The primary objective of this course is to equip participants with comprehensive theoretical knowledge and practical skills in rod binding, enabling them to perform professional reinforcement work for various structural elements in construction projects. By the end of the training, participants will be prepared to interpret technical drawings, prepare and handle reinforcement materials, and execute quality rod binding work according to industry specifications. The course ensures graduates are ready to qualify for government certification and pursue rewarding careers in the construction sector, both locally and internationally.
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
          <p>
            Youth, Age limit-18 Years to 40 , Man and Women, PWD , Trangender.
          </p>
          <p className="font-bold md:text-xl text-md mt-4">
          Certification:
          </p>
          <p>
          Participants will receive a completion certificate from BRAC ISD at the end of the course, validating their expertise in Rod Binding. Moreover, having the opportunities participants to appear the assessment for government certificate.
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

export default RodBinding;
