import { Link } from "react-router-dom";
import Navbar from "../../Home/Navbar/Navbar";
import Footer from "../../Home/Footer/Footer";
const ComputerOperationCourses = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div
        className="hero mt-20"
        style={{
          backgroundImage:
            "url(https://i.ibb.co/BN6XcdY/Computer-Operation.jpg)",
          width: "w-full",
          height: "320px",
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-white">
          <div className="max-w-xl md:max-w-2xl lg:max-w-2xl">
            <h2 className="text-xl md:text-3xl lg:text-5xl font-bold">
              Computer Office Applications
            </h2>
            <hr className="mx-12 md:mx-20 lg:mx-50 mt-4 border-t-8 font-bold border-[#FFA100]"></hr>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-8 lg:px-16 my-8">
        <div className="flex justify-between">
          <div style={{ whiteSpace: "wrap" }}>
            <h2 className="font-bold md:text-2xl text-lg ">
              Computer Office Applications
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
          1.5 months
        </p>
        <p className="mt-4">
          <span className="font-bold md:text-xl text-md mt-4">
            Class Duration:
          </span>{" "}
          3 hours
        </p>
        <p className="mt-4">
          <span className="font-bold md:text-xl text-md mt-4">
            Educational Qualification:
          </span>{" "}
          Minimum Class eight Pass
        </p>
        <p className="mt-4 font-bold md:text-xl text-md">Schedule:</p>
        <p className="">
        Saturday, Sunday, Monday, Tuesday, Wednesday, Thursday
        </p>
        <p className="mt-4 font-bold md:text-xl text-md">Course Contents:</p>
        <p className=" ">
          1. English and Bangla Typing: <br />
          2. Basic Internet Tools: <br />
          3. Computer Basic Operation: <br />
          4. Microsoft Word <br />
          5. Microsoft Excel <br />
          6. Microsoft PowerPoint: Skills Covered : BNQF Level-3
        </p>
        <p className="mt-4 font-bold md:text-xl text-md">Course Description:</p>
        <p>
        The Computer Office Application course, designed in alignment with the standards set by the National Skills Development Authority (NSDA_ BNQF Level-3) Bangladesh, equips learners with essential computer skills and knowledge necessary for effective office administration. This course focuses on practical applications of computer software, typing proficiency, and basic internet tools to enhance productivity in various professional environments. 
        </p>

        <p className="mt-4 font-bold md:text-xl text-md">Course Overview:</p>
        <p>
        The Computer Office Application course is a 1.5-month intensive training program designed for individuals with a minimum Class eight Pass qualification. Conducted six days a week, with 3-hour daily sessions, the course combines theoretical knowledge with hands-on practice to prepare participants for professional roles in office settings. Key topics include English and Bangla typing skills to improve communication efficiency, basic internet tools for online research and communication, and foundational computer operations. Participants will gain proficiency in Microsoft Word for document creation and formatting, Microsoft Excel for data management and analysis, and Microsoft PowerPoint for effective presentation design. Throughout the course, learners will engage in practical exercises that simulate real-world office tasks, ensuring they are well-prepared for the demands of modern workplaces. Upon completion, graduates will be equipped to pursue careers in administrative roles, with the opportunity to appear for government certification assessments, enabling them to work in both local and international office environments.
        </p>
        <p className="mt-4 font-bold md:text-xl text-md">Course Objective:</p>
        <p>
          The course is designed to equip students with the creative and
          technical skills needed to excel in the graphic design industry,
          whether for personal projects or professional endeavors.
        </p>
        <p className="mt-4 font-bold md:text-xl text-md">Course Objective:</p>
        <p>
        The primary objective of this course is to equip participants with comprehensive theoretical knowledge and practical skills in computer office applications, enabling them to perform various administrative tasks efficiently. By the end of the training, participants will be prepared to create professional documents, manage data effectively, design impactful presentations, and utilize internet tools for enhanced productivity. The course ensures graduates are ready to qualify for government certification and pursue rewarding careers in office administration, both locally and internationally.
        </p>
        <p className="mt-4 font-bold md:text-xl text-md">Training Approach:</p>
        <p>
        The course adopts a classroom-based training approach, combining theoretical instruction with practical hands-on exercises to ensure comprehensive learning. Multiple formative assessments are conducted throughout the program to track progress and reinforce skills. 
        </p>

        <h2 className="mt-4 font-bold md:text-xl text-md">
          For Whom This Course Is:
        </h2>

        <p className="">
          Youth, Age limit-18 Years to 40 , Man and Women, PWD , Trangender.
        </p>
        <h2 className="mt-4 font-bold md:text-xl text-md">Certificate: </h2>

        <p className="">
        Participants will receive a completion certificate from BRAC ISD at the end of the course, validating their expertise in Computer Office Applications. Moreover, having the opportunities participants to appear the assessment for government certificate.
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
              <Link to="/offline/centers/rangpur">BRAC ISD Rangpur Centre</Link>
            </p>
            <p className="underline">
              <Link to="/offline/centers/rajshahi">BRAC ISD Rajshahi Centre</Link>
            </p>
            <p className="underline">
              <Link to="/offline/centers/cumilla">BRAC ISD Cumilla Centre</Link>
            </p>
            <p className="underline">
              <Link to="/offline/centers/chattogram">
                BRAC ISD Chattogram Centre
              </Link>
            </p>
            <p className="underline">
              <Link to="/offline/centers/sylhet">BRAC ISD Sylhet Centre</Link>
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

export default ComputerOperationCourses;
