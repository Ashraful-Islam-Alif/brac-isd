import { Link } from "react-router-dom";
import Navbar from "../../Home/Navbar/Navbar";
import Footer from "../../Home/Footer/Footer";
const RefrigerationAndAirConditioningCourses = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div
        className="hero mt-20"
        style={{
          backgroundImage:
            "url(https://i.ibb.co/Fxv75Ph/refrigeration-and-air-conditioning-1280x420.jpg)",
          width: "w-full",
          height: "320px",
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-white">
          <div className="max-w-xl md:max-w-2xl lg:max-w-2xl">
            <h2 className="text-xl md:text-3xl lg:text-5xl font-bold">
              Refrigeration and Air Conditioning
            </h2>
            <hr className="mx-4 md:mx-8 lg:mx-16 mt-4 border-t-8 font-bold border-[#FFA100]"></hr>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-8 lg:px-16 my-8">
        <div className="flex justify-between">
          <div>
            <h2 className="font-bold md:text-2xl text-lg ">
              Refrigeration and Air Conditioning
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
        <p className="mt-4">
          <span className="font-bold md:text-xl text-md mt-4">
            Training Duration:
          </span>{" "}
          3 Months
        </p>
        <p className="mt-4">
          <span className="font-bold md:text-xl text-md mt-4">
            Class Duration:
          </span>{" "}
          4 hours
        </p>
        <p className="mt-4">
          <span className="font-bold md:text-xl text-md mt-4">
            Educational Qualification:
          </span>{" "}
          Minimum Class 8 Pass.
        </p>
        <p className="mt-4 font-bold md:text-xl text-md">Schedule:</p>
        <p className="">Saturday, Sunday, Monday, Tuesday, Wednesday, Thursday</p>
        <p className="mt-4 font-bold md:text-xl text-md">Course Contents:</p>
        <p className=" ">
        •	Apply OSH Practices in the workplace <br />
•	Interpret Technical Drawing <br />
•	Use Hand tools and Power Tools <br />
•	Use measuring instruments <br />
•	Basic Electrical Works <br />
•	Perform gas welding and brazing <br />
•	Repair and maintain compressor <br />
•	Service and Repair Refrigerators and Deep Freezers <br />
•	Service window and split-type air-conditioners <br />
•	Service window and split-type air-conditioners <br />
•	Central Air- Conditioning. <br />

        </p>
        <p className="mt-4 font-bold md:text-xl text-md">Course Description:</p>
        <p>
        The Refrigeration and Air Conditioning course, designed in alignment with the standards set by the National Skills Development Authority (NSDA_ BNQF Level-1 & 2) Bangladesh, equips learners with essential technical skills, knowledge, and professional attitude required for excellence in refrigeration and air conditioning systems. This course focuses on the fundamental principles of refrigeration technology, safety protocols, and practical skills necessary for servicing and maintaining various cooling systems in residential and commercial settings.
        </p>

        <p className="mt-4 font-bold md:text-xl text-md">Course Overview:</p>
        <p>
        The Refrigeration and Air Conditioning course is a 3-month intensive training program designed for individuals with a minimum class 8 pass qualification, providing a comprehensive foundation in refrigeration and air conditioning practices. Conducted six days a week, with 4-hour daily sessions, the course combines theoretical knowledge with extensive hands-on practice to prepare participants for professional roles in the refrigeration and air conditioning sector. Key topics include applying Occupational Safety and Health (OSH) practices, interpreting technical drawings, and safely using hand and power tools. Participants will learn to use measuring instruments effectively while acquiring basic electrical skills relevant to refrigeration systems. The program covers essential training in gas welding and brazing techniques, repairing and maintaining compressors, servicing and repairing refrigerators and deep freezers, as well as servicing window and split-type air conditioners. Additionally, participants will gain skills in central air-conditioning systems. Upon completion, graduates will be well-equipped to pursue careers in refrigeration and air conditioning, with the opportunity to appear for government certification assessments, enabling them to work in both local and international markets.
        </p>
        <h2 className="mt-4 font-bold md:text-xl text-md">
          Course Objectives:
        </h2>

        <p className="">
        The primary objective of this course is to equip participants with comprehensive theoretical knowledge and practical skills in refrigeration and air conditioning systems, enabling them to perform professional service and maintenance tasks efficiently. By the end of the training, participants will be prepared to interpret technical drawings, execute repairs on various cooling systems, maintain compressors, and apply safety standards in their work. The course ensures graduates are ready to qualify for government certification and pursue rewarding careers in the refrigeration and air conditioning sector, both locally and internationally.
        </p>
        <h2 className="mt-4 font-bold md:text-xl text-md">
          Training Approach:
        </h2>

        <p className="">
        The course adopts a classroom-based training approach, combining theoretical instruction with practical hands-on exercises to ensure comprehensive learning. Multiple formative assessments are conducted throughout the program to track progress and reinforce skills.
        </p>
        <h2 className="mt-4 font-bold md:text-xl text-md">
          For Whom This Course Is:
        </h2>

        <p className="">
        Youth, Age limit-18-40 years, Men and Women, Persons with Disability, Transgender.
        </p>
        <h2 className="mt-4 font-bold md:text-xl text-md">Certificate: </h2>

        <p className="">
        Participants will receive a completion certificate from BRAC ISD at the end of the course, validating their expertise in Refrigeration and Air Conditioning. Moreover, participants will have the opportunity to appear for the government certificate assessment.
        </p>
        <div className="mt-4">
          <h1 className="font-bold md:text-xl text-md ">
            Course available in:
          </h1>
          <div className="">
            <p className="underline">
              <Link to="/offline/centers/dhaka">BRAC ISD Dhaka Centre</Link>
            </p>
            <p className="underline">
              <Link to="/offline/centers/rajshahi">BRAC ISD Rajshahi Centre</Link>
            </p>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default RefrigerationAndAirConditioningCourses;
