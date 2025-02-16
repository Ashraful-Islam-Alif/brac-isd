import { Link } from "react-router-dom";
import Navbar from "../../Home/Navbar/Navbar";
import Footer from "../../Home/Footer/Footer";
const ElectricalInstalAndMaintenanceCourses = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div
        className="hero mt-20"
        style={{
          backgroundImage:
            "url(https://i.ibb.co/0tG91Bh/electricalinstallationmaintenance.jpg)",
          width: "w-full",
          height: "320px",
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-white">
          <div className="max-w-xl md:max-w-2xl lg:max-w-2xl">
            <h2 className="text-xl md:text-3xl lg:text-5xl font-bold">
              Electrical Installation and Maintenance
            </h2>
            <hr className="mx-4 md:mx-8 lg:mx-16 mt-4 border-t-8 font-bold border-[#FFA100]"></hr>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-8 lg:px-16 my-8">
        {/* course info */}
        <div>
          <div className="flex justify-between">
            <div>
              <h2 className="font-bold md:text-2xl text-lg ">
                Electrical Installation and Maintenance
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
            <span className="font-bold md:text-xl text-md  ">
              Training Duration:
            </span>{" "}
            3 Months
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
            <br />
            •	Class VIII Pass or evidence of equivalent achievement or <br />
            •	Pass in a challenge test on language, literacy and numeracy skills considered necessary for successful completion of the qualification (Model challenge test to be developed based on units of competencies to be achieved) or <br />
            •	2-year trade relevant work experience and pass in a challenge test on vocational skills considered necessary for successful completion of the qualification (Model challenge test to be developed). 

          </p>
          <p className="mt-4 font-bold md:text-xl text-md">Schedule:</p>
          <span className="">Saturday, Sunday, Monday, Tuesday, Wednesday, Thursday</span>
          <p className="mt-4 font-bold md:text-xl text-md">Course Contents:</p>
          <p className="">
          • Use Hand Tools and Power Tools <br />
	• Apply Fundamentals Skills for Electrical Works <br />
	• Perform Wire and Cable Joints <br />
	• Perform Installation of Electrical Circuit <br />
	• Perform Channel Wiring <br />
	• Perform Conduit Wiring <br />

          </p>
          <p className="mt-4 font-bold md:text-xl text-md">
            Course Description:{" "}
          </p>
          <p className="">
          The Electrical Installation & Maintenance course, designed in alignment with the standards set by the National Skills Development Authority (NSDA_ BNQF Level-2) Bangladesh, aims to equip learners with the technical skills, knowledge, and attitude required to excel in electrical work. This course focuses on the fundamentals of electrical systems, safety protocols, and practical skills for installing, maintaining, and troubleshooting residential, commercial, and industrial electrical setups. 
          </p>
          <p className="mt-4 font-bold md:text-xl text-md">Course Overview: </p>
          <p className="">
          The Electrical Installation and Maintenance course is a 3-month intensive training program designed for individuals with a minimum Class VIII Pass or evidence of equivalent achievement qualification, offering a comprehensive foundation in electrical installation techniques. Conducted six days a week, with 5-hour daily sessions, the course combines theoretical knowledge with extensive hands-on practice to prepare participants for professional roles in the electrical field. Key topics include Occupational Safety and Health Procedures, effective workplace communication, and teamwork in the construction sector. Participants will develop skills in interpreting construction drawings and specifications, using hand tools and power tools safely, and applying fundamental skills for electrical works. The program covers practical training in performing wire and cable joints, installing electrical circuits, channel wiring, and conduit wiring. Upon completion, graduates will be well-equipped to pursue careers in electrical installation and maintenance, with the opportunity to appear for government certification assessments, enabling them to work in both local and international markets.
          </p>
          <p className="mt-4 font-bold md:text-xl text-md">
            Course Objectives:{" "}
          </p>
          <p className="">
          The primary objective of this course is to equip participants with comprehensive theoretical knowledge and practical skills in electrical installation and maintenance, enabling them to perform professional electrical tasks safely and efficiently. By the end of the training, participants will be prepared to interpret technical drawings, execute proper wiring techniques, install various electrical circuits, and adhere to industry safety standards. The course ensures graduates are ready to qualify for government certification and pursue rewarding careers in the electrical sector, both locally and internationally.
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
          Youth, Age limit-18 Years  to 40 , Man and Women, PWD , Trangender.
          </p>
          <p className="font-bold md:text-xl text-md mt-4">Certification:</p>
          <p>
          Participants will receive a completion certificate from BRAC ISD at the end of the course, validating their expertise in Electrical Installation and Maintenance. Moreover, participants will have the opportunity to appear for the government certificate assessment.
          </p>
        </div>
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
            <p className="underline">
              <Link to="/offline/centers/narayanganjnKanchan">
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
            <p className="underline">
              <Link to="/offline/centers/nilphamari">
              BRAC ISD Mirsharai Center (Inactive)
              </Link>
            </p>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default ElectricalInstalAndMaintenanceCourses;
