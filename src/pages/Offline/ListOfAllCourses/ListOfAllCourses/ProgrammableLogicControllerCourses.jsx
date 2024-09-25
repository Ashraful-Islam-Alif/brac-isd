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
              Programmable Logic Controller
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
              to="https://docs.google.com/forms/d/e/1FAIpQLScoauq-f2VJ6nHBH_X7qNMb7pwg-p2XA-tUzNI45HmaTbRbBw/viewform"
              target="_blank"
              className="btn btn-xs sm:btn-sm md:btn-md bg-[#FFA100] text-black hover:text-[#FFA100]  hover:outline hover:outline-2 hover:outline-[#FFA100] hover:bg-white"
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
          Minimum SSC
        </p>
        <p className="mt-4 font-bold md:text-xl text-md">Schedule:</p>
        <p className="mt-4 ">
          Saturday, Monday, Wednesday Sunday, Tuesday, Thursday 3 days in a week
        </p>
        <h2 className="mt-4 font-bold md:text-xl text-md">Course Contents:</h2>
        <p>
          1. Apply Occupational Health and Safety (OHS) Procedure in The
          Workplace. 2. Execute Sequential Control Using Relay Logic 3. Perform
          PLC Installation, Wiring and Configuring 4. Apply PLC for Pneumatic
          and Hydraulic Control System Application 5. Apply PLC Based Basic
          Control System. 6. Perform Process Visualization (HMI)
        </p>
        <h2 className="mt-4 font-bold md:text-xl text-md">
          Course Description:
        </h2>
        <p className="">
          The Programmable Logic Controller (PLC) course at BRAC Institute of
          Skills Development focuses on Industry demand oriented . Over the span
          of 3 months, students are introduced to the Industrial Wiring. Our
          course are Light engineering sector, This courses are accredetation
          from BTEB& NSDA. Maintain competerncy Standard (CS) , Curriculum and
          Competency Based Learning Materials (CBLM)
        </p>

        <h2 className="mt-4 font-bold md:text-xl text-md">Course Overview:</h2>
        <p className="">
          1. Apply Occupational Health and Safety (OHS) Procedure in The
          Workplace. <br />
          2. Execute Sequential Control Using Relay Logic <br />
          3. Perform PLC Installation, Wiring and Configuring <br />
          4. Apply PLC for Pneumatic and Hydraulic Control System Application{" "}
          <br />
          5. Apply PLC Based Basic Control System. <br />
          6. Perform Process Visualization (HMI) <br />
          7. Advance Training Program on AC drive/Inverter By - 7.1. Holip
          Inverter 7.2. Delta Inverter 7.3. Mitsubishi Inverter 7.4. Siemens
          Inverter 7.5. Frecon Inverter <br />
          8. Advance Training Program on AC drive/Inverter By- 8.1. LS Inverter
          8.2. Siemens LOGO PLC 8.3. Siemens S7 200 PLC 8.4. Siemens S7 1200 PLC
          8.5. Delta PLC 8.6. Ls PLC 8.7. Mitsubishi LOGO PLC <br />
          9. Carry Out Ladder Diagram, Structured Programming and Data Block
          <br />
          10. Apply PLC for Pneumatic and Hydraulic Control System Application
          Skills Covered : BNQF Level-4
        </p>
        <p className=" font-bold md:text-xl text-md mt-4">Course Objectives:</p>
        <p className="">
          Provide Skills Man power provide, Certification and Sustainable Job
          Placement.
        </p>

        <p className="font-bold md:text-xl text-md mt-4">Teaching Approach:</p>
        <p>
          Formal Training, Off line training.Workshop Base training, Thuritical
          and Practical Based Training.Hands-on Learning, Assessment and
          Feedback, Continuous Assessment, Personalized Feedback, Induvisual and
          Group work training. Maintain Competency Based Training and Assessment
          (CBT&A) mathodology.
        </p>
        <h2 className="mt-4 font-bold md:text-xl text-md">
          For Whom This Course Is:
        </h2>
        <p className="">
          This course is ideal for engineers, technicians, and individuals
          aspiring to work in the automation and industrial control field.
          Whether you are a beginner or have some experience, this programme
          will expand your knowledge and proficiency in PLC technologies.
        </p>
        <h2 className="mt-4 font-bold md:text-xl text-md">Certificate:</h2>
        <p className="">
          Upon successful completion of the course, you will receive a
          certificate from BRAC ISD, recognising your expertise in Programmable
          Logic Controllers.
        </p>
        <div className="mt-4">
          <h1 className="font-bold md:text-xl text-md ">
            Course available in:
          </h1>
          <div className="mt-4">
            <p className="underline">
              <Link to="/offline/centers/dhaka">BISD Dhaka Centre</Link>
            </p>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default ProgrammableLogicControllerCourses;
