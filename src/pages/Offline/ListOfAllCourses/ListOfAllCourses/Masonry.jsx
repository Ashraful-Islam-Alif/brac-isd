import { Link } from "react-router-dom";
import Navbar from "../../Home/Navbar/Navbar";
import Footer from "../../Home/Footer/Footer";

const DigitalMarketingCourses = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div
        className="hero mt-20"
        style={{
          backgroundImage:
            "url(https://i.ibb.co/WV68tYb/young-craftsman-building-house.jpg)",
          width: "100%",
          height: "320px",
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-white">
          <div className="max-w-xl md:max-w-2xl lg:max-w-2xl">
            <h2 className="text-xl md:text-3xl lg:text-5xl font-bold ">
              Masonry
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
              <h2 className="font-bold md:text-2xl text-lg ">Masonry</h2>
            </div>
            <div>
              <Link
                to="https://docs.google.com/forms/d/e/1FAIpQLScoauq-f2VJ6nHBH_X7qNMb7pwg-p2XA-tUzNI45HmaTbRbBw/viewform"
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
            •	Class VIII Pass or evidence of equivalent achievement or  <br />
•	Pass in a challenge test on language, literacy and numeracy skills considered necessary for successful completion of the qualification (Model challenge test to be developed based on units of competencies to be achieved) or <br />
•	2-years trade relevant work experience and pass in a challenge test on vocational skills considered necessary for successful completion of the qualification (Model challenge test to be developed).  <br />

          </p>
          <p className="mt-4 font-bold md:text-xl text-md">Schedule:</p>
          <p className="">
            <span>Saturday, Sunday, Monday, Tuesday, Wednesday, Thursday</span>
          </p>
          <p className="mt-4 font-bold md:text-xl text-md">Course Contents:</p>
          <p className="">
            <span>
            •	Use Tools for Masonry Works  <br />
•	Perform Fundamental Works of Masonry <br />
•	Construct Brick Wall and Foundation. <br />
•	Perform Brick Soling <br />
•	Perform Plaster Works on Masonry Surface <br />

            </span>
          </p>
          <p className="mt-4 font-bold md:text-xl text-md">
            Course Description:{" "}
          </p>
          <p className="">
          The Masonry course, designed in alignment with the standards set by the National Skills Development Authority (NSDA_BNQF Level- 2) Bangladesh, prepares learners with essential technical skills, knowledge, and professional attitude required for excellence in construction and masonry work. This course emphasizes fundamental masonry techniques, workplace safety, team collaboration, and practical skills for constructing and finishing various masonry structures in residential and commercial settings.
          </p>
          <p className="mt-4 font-bold md:text-xl text-md">Course Overview: </p>
          <p className=""></p>
          The Masonry course is a 3-month intensive training program designed for individuals with a class VIII Pass or evidence of equivalent achievement, offering comprehensive training in masonry and construction fundamentals. Conducted six days a week, with 5-hour daily sessions, the course blends theoretical knowledge with extensive hands-on practice to prepare participants for professional masonry work. Key topics include Occupational Safety and Health Procedures, Workplace Communications, and Team Environment practices. Participants will gain expertise in interpreting construction drawings, using masonry tools, performing fundamental masonry works, and mastering specialized skills such as brick wall construction, foundation work, brick soling, and plastering techniques. Upon completion, graduates will be well-equipped to pursue careers in the construction industry, with the opportunity to appear for government certification assessments, enabling them to work in both local and international construction sectors.
          <p className=" font-bold md:text-xl text-md mt-4">
            Course Objectives:
          </p>
          <p className="">
          The primary objective of this course is to equip participants with comprehensive theoretical knowledge and practical skills in masonry work, enabling them to perform professional construction tasks, implement safety protocols, and execute quality masonry projects. By the end of the training, participants will be prepared to work effectively in construction teams, interpret technical drawings, construct various masonry structures, and apply finishing techniques to meet industry standards. The course ensures graduates are ready to qualify for government certification and pursue rewarding careers in the growing construction sector, both locally and internationally.
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
          <p>Youth, Age limit-18-40 years, Men and Women, Transgender.</p>
        </div>
        <div className="mt-4">
          <h1 className="font-bold md:text-xl text-md ">
            Course available in:
          </h1>
          <div className="">
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

export default DigitalMarketingCourses;
