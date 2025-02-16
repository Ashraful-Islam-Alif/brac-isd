import { Link } from "react-router-dom";
import Navbar from "../../Home/Navbar/Navbar";
import Footer from "../../Home/Footer/Footer";
const ProgrammableLogicControllerCourses = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div
        className="hero mt-20"
        style={{
          backgroundImage:
            "url(https://i.ibb.co/KzDwQnd/programmableloiccontroller.jpg)",
          width: "w-full",
          height: "320px",
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-white">
          <div className="max-w-xl md:max-w-2xl lg:max-w-2xl">
            <h2 className="text-xl md:text-3xl lg:text-5xl font-bold">
              Programmable Logic Controller (PLC)
            </h2>
            <hr className="mx-4 md:mx-8 lg:mx-16 mt-4 border-t-8 font-bold border-[#FFA100]"></hr>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-8 lg:px-16 my-8">
        <div className="flex justify-between">
          <div style={{ whiteSpace: "wrap" }}>
            <h2 className="font-bold md:text-2xl text-lg ">
              Programmable Logic Controller (PLC)
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
        <p className="mt-4">
          <span className="font-bold md:text-xl text-md mt-4">
            Training Duration:
          </span>{" "}
          3 months
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
          <br />
          Minimum SSC (Secondary School Certificate)
        </p>
        <p className="mt-4 font-bold md:text-xl text-md">Schedule:</p>
        <p className="">
        Saturday, Sunday, Monday, Tuesday, Wednesday, Thursday
        </p>
        <h2 className="mt-4 font-bold md:text-xl text-md">Course Contents:</h2>
        <p>
          1. Apply Occupational Health and Safety (OHS) Procedure in The
          Workplace. <br />
          2. Execute Sequential Control Using Relay Logic <br />
          3. Perform PLC Installation, Wiring and Configuring <br />
          4. Apply PLC for Pneumatic and Hydraulic Control System Application <br /> 
          5. Apply PLC Based Basic Control System. <br />
          6. Perform Process Visualization (HMI) <br />
        </p>
        <h2 className="mt-4 font-bold md:text-xl text-md">
          Course Description:
        </h2>
        <p className="">
        The Programmable Logic Controller (PLC) course, designed in alignment with the standards set by the National Skills Development Authority (NSDA_ BNQF Level- 4) Bangladesh, equips learners with essential technical skills, knowledge, and professional attitude required for excellence in automation and control systems. This course focuses on the fundamental principles of PLC technology, safety protocols, and practical skills necessary for installing, configuring, and programming PLC systems in various industrial applications.
        </p>

        <h2 className="mt-4 font-bold md:text-xl text-md">Course Overview:</h2>
        <p className="">
        The Programmable Logic Controller course is a 3-month intensive training program designed for individuals with a minimum SSC qualification, providing a comprehensive foundation in PLC operations and automation techniques. Conducted six days a week, with 4-hour daily sessions, the course combines theoretical knowledge with extensive hands-on practice to prepare participants for professional roles in the automation sector. Key topics include applying Occupational Health and Safety (OHS) procedures, leading small teams, and developing basic IT skills. Participants will learn to interpret manuals, sketches, and drawings effectively while applying quality systems within their work processes. The program covers executing sequential control using relay logic, performing PLC installation, wiring, and configuration. Additionally, participants will gain expertise in creating ladder diagrams, structured programming, and data blocks, as well as applying PLC technology for pneumatic and hydraulic control system applications. The course also includes training on process visualization using Human-Machine Interface (HMI) systems. Upon completion, graduates will be well-equipped to pursue careers in automation and control systems, with the opportunity to appear for government certification assessments, enabling them to work in both local and international markets.
        </p>
        <p className=" font-bold md:text-xl text-md mt-4">Course Objectives:</p>
        <p className="">
        The primary objective of this course is to equip participants with comprehensive theoretical knowledge and practical skills in programmable logic controllers, enabling them to perform professional installation, programming, and maintenance of PLC systems. By the end of the training, participants will be prepared to interpret technical documentation, execute control logic using PLCs for various applications, and implement process visualization techniques according to industry standards. The course ensures graduates are ready to qualify for government certification and pursue rewarding careers in the automation field, both locally and internationally.
        </p>

        <p className="font-bold md:text-xl text-md mt-4">Training Approach:</p>
        <p>
        The course adopts a classroom-based training approach, combining theoretical instruction with practical hands-on exercises to ensure comprehensive learning. Multiple formative assessments are conducted throughout the program to track progress and reinforce skills.
        </p>
        <h2 className="mt-4 font-bold md:text-xl text-md">
          For Whom This Course Is:
        </h2>
        <p className="">
        Youth, Age limit-18-40 years, Men and Women, Persons with Disability, Transgender.
        </p>
        <h2 className="mt-4 font-bold md:text-xl text-md">Certificate:</h2>
        <p className="">
        Participants will receive a completion certificate from BRAC ISD at the end of the course, validating their expertise in Programmable Logic Control. Moreover, having the opportunities participants to appear the assessment for government certificate.
        </p>
        <div className="mt-4">
          <h1 className="font-bold md:text-xl text-md ">
            Course available in:
          </h1>
          <div className="">
            <p className="underline">
              <Link to="/offline/centers/dhaka">BRAC ISD Dhaka Centre</Link>
            </p>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default ProgrammableLogicControllerCourses;
