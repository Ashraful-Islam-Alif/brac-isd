import { Link } from "react-router-dom";
import Navbar from "../../Home/Navbar/Navbar";
import Footer from "../../Home/Footer/Footer";
const GraphicsDesignCourses = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div
        className="hero mt-20"
        style={{
          backgroundImage: "url(https://i.ibb.co/SJLmqfb/Design-Tip.jpg)",
          width: "w-full",
          height: "320px",
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-white">
          <div className="max-w-xl md:max-w-2xl lg:max-w-2xl">
            <h2 className="text-xl md:text-3xl lg:text-5xl font-bold">
              Graphic Design
            </h2>
            <hr className="mx-4 md:mx-8 lg:mx-16 mt-4 border-t-8 font-bold border-[#FFA100]"></hr>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-8 lg:px-16 my-8">
        <div className="flex justify-between" >
          <div style={{ whiteSpace: "wrap" }}>
            <h2 className="font-bold md:text-2xl text-lg ">Graphic Design</h2>
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
          3 Months
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
          </span>{" "}
          Bachelor's Degree or evidence of equivalent achievement.
        </p>
        <p className="mt-4">
          <span className="font-bold md:text-xl text-md mt-4">Schedule:</span>{" "}
          <br />
          Saturday, Sunday, Monday, Tuesday, Wednesday, Thursday
        </p>
        <p className="mt-4 font-bold md:text-xl text-md">Course Contents:</p>
        <p className=" ">
        •	Apply Graphic Design Concepts and Guidelines. <br />
•	Create Professional Designs using Illustration Software. <br />
•	Separate and Compose Images. <br /> 
•	Create Mock Up and Print. <br /> 
•	Develop Materials for Output. <br /> 
        </p>
        <h2 className="mt-4 font-bold md:text-xl text-md">
          Course Description:{" "}
        </h2>

        <p className="">
        The Graphic Design course, designed in alignment with the standards set by the National Skills Development Authority (NSDA_ BNQF Level-3) Bangladesh, equips learners with essential skills, knowledge, and professional attitude required for success in the graphic design industry. This course focuses on the fundamental principles of graphic design, software proficiency, and practical skills necessary for creating visually appealing designs across various media.
        </p>
        <h2 className="mt-4 font-bold md:text-xl text-md">Course Overview: </h2>

        <p className="">
        The Graphic Design course is a 3-month intensive training program designed for individuals with a minimum Bachelor's Degree or evidence of equivalent achievement qualification, providing a comprehensive foundation in graphic design techniques and software applications. Conducted six days a week, with 5-hour daily sessions, the course combines theoretical knowledge with extensive hands-on practice to prepare participants for professional roles in graphic design. Key topics include applying Occupational Safety and Health (OSH) procedures, effective workplace interaction, and operating personal computers and office application software. Participants will learn to access information using the internet and electronic mail while complying with ethical standards in the IT workplace. The program emphasizes graphic design concepts and guidelines, enabling participants to create professional designs using illustration software. Additional training includes separating and composing images, creating mock-ups for print, and developing materials for output. Upon completion, graduates will be well-equipped to pursue careers in graphic design, with the opportunity to appear for government certification assessments, enabling them to work in both local and international creative sectors.
        </p>
        <h2 className="mt-4 font-bold md:text-xl text-md">Course Objectives: </h2>

        <p className="">
        The primary objective of this course is to equip participants with comprehensive theoretical knowledge and practical skills in graphic design, enabling them to produce high-quality visual content that meets industry standards. By the end of the training, participants will be prepared to apply graphic design principles, operate relevant software effectively, create professional designs, and develop materials suitable for various outputs. The course ensures graduates are ready to qualify for government certification and pursue rewarding careers in the graphic design field, both locally and internationally.
        </p>
        <p className="font-bold md:text-xl text-md mt-4">Training Approach:</p>
        <p>
        The course adopts a classroom-based training approach, combining theoretical instruction with practical hands-on exercises to ensure comprehensive learning. Multiple formative assessments are conducted throughout the program to track progress and reinforce skills 
        </p>
        <h2 className="mt-4 font-bold md:text-xl text-md">
        For Whom This Course Is:
        </h2>

        <p className="">
        Youth, Age limit-18-40 years, Men and Women, Persons with Disability, Transgender.
        </p>
        <h2 className="mt-4 font-bold md:text-xl text-md">Certificate: </h2>

        <p className="">
        Participants will receive a completion certificate from BRAC ISD at the end of the course, validating their expertise in Graphic Design. Moreover, having the opportunities participants to appear the assessment for government certificate.
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
              <Link to="/offline/centers/chattogram">BRAC ISD Chattogram Centre</Link>
            </p>
            <p className="underline">
              <Link to="/offline/centers/sylhet">BRAC ISD Sylhet Centre</Link>
            </p>
            <p className="underline">
              <Link to="/offline/centers/mymensingh">
                BRAC ISD Mymensingh Centre
              </Link>
            </p>
            <p className="underline">
              <Link to="/offline/centers/chattogram2">BRAC ISD Halishahar Centre</Link>
            </p>
            <p className="underline">
              <Link to="/offline/centers/chattogram3">
                BRAC ISD Patiya(Chattogram) Centre
              </Link>
            </p>
            <p className="underline">
              <Link to="/offline/centers/narayanganjBandar">
                BRAC ISD Bandar(Narayanganj) Centre
              </Link>
            </p>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default GraphicsDesignCourses;
