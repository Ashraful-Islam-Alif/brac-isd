import { Link } from "react-router-dom";
import Navbar from "../../Home/Navbar/Navbar";
import Footer from "../../Home/Footer/Footer";

const TilesMarbelWork = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div
        className="hero mt-20"
        style={{
          backgroundImage:
            "url(https://i.ibb.co/KwM1Ztt/Tiles-Marbel-Work.jpg)",
          width: "w-full",
          height: "320px",
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-white">
          <div className="max-w-xl md:max-w-2xl lg:max-w-2xl">
            <h2 className="text-xl md:text-3xl lg:text-5xl font-bold">
              Tiles & Marbel Works
            </h2>
            <hr className="mx-4 md:mx-8 lg:mx-16 mt-4 border-t-8 font-bold border-[#FFA100]"></hr>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-8 lg:px-16 my-8">
        <div className="flex justify-between" >
          <div style={{ whiteSpace: "wrap" }}>
            <h2 className="font-bold md:text-2xl text-lg ">
              Tiles & Marbel Works
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
            <span className="font-bold  md:text-xl text-md">Training Duration:</span> 3 months
          </p>
          <p className="mt-4">
            <span className="font-bold mt-4 md:text-xl text-md">Class Duration:</span> 5 hours
          </p>
          <p className="mt-4">
            <span className="font-bold mt-4 md:text-xl text-md">Educational Qualification:</span>{" "} <br />
            •	Class VIII Pass or evidence of equivalent achievement or <br />
•	Pass in a challenge test on language, literacy and numeracy skills considered necessary for successful completion of the qualification (Model challenge test to be developed based on units of competencies to be achieved) or <br />
•	2-year trade relevant work experience and pass in a challenge test on vocational skills considered necessary for successful completion of the qualification (Model challenge test to be developed). 

          </p>
          <p className="mt-4 font-bold md:text-xl text-md">Schedule:</p>
          <p className="">
            <span>Saturday, Sunday, Monday, Tuesday, Wednesday, Thursday</span>
            <br></br>
          </p>
          <p className="mt-4 font-bold md:text-xl text-md">Course Contents:</p>
          <p className="">
            <span>
            •	Perform Fundamental Works of Tiles and Marble Fittings <br />
•	Use Tools for Tiles and Marble Works <br />
•	Prepare Surface for Tiles and marbles Work <br />
•	Fix Floor Tiles <br />
•	Fix Wall Tiles <br />
•	Perform Marble Works <br />
•	Repair Tiles and marble Works <br />

            </span>
          </p>
          <p className="mt-4 font-bold md:text-xl text-md">Course Description: </p>
          <p className="">
          The Tiles and Marble Works course, designed in alignment with the standards set by the National Skills Development Authority (NSDA_BNQF Level-2) Bangladesh, equips learners with specialized technical skills, knowledge, and professional attitude required for excellence in tile and marble installation. This course focuses on surface preparation, installation techniques, and maintenance skills for both floor and wall applications in residential, commercial, and decorative settings.
          </p>
          <p className="mt-4 font-bold md:text-xl text-md  text-md">Course Overview: </p>
          <p className=""></p>
          The Tiles and Marble Works course is a 3-month intensive training program designed for individuals with a minimum class VIII Pass or evidence of equivalent achievement, offering comprehensive training in tile and marble installation techniques. Conducted six days a week, with 5-hour daily sessions, the course combines theoretical knowledge with extensive hands-on practice to prepare participants for professional installation work. Key topics include Occupational Safety and Health Procedures, Team Environment practices, and Workplace Communications. Participants will gain expertise in interpreting construction drawings, using specialized tools, and mastering surface preparation techniques. The program covers comprehensive training in floor tile installation, wall tile fitting, marble works, and repair techniques for both tiles and marble surfaces. Upon completion, graduates will be well-equipped to pursue careers in the construction finishing sector, with the opportunity to appear for government certification assessments, enabling them to work in both local and international markets.
          <p className="font-bold mt-4 md:text-xl text-md">Course Objectives:</p>
          <p>
          The primary objective of this course is to equip participants with comprehensive theoretical knowledge and practical skills in tiles and marble installation, enabling them to perform professional installation, finishing, and repair work. By the end of the training, participants will be prepared to interpret technical drawings, prepare surfaces properly, install various types of tiles and marble, and provide quality repair services according to industry standards. The course ensures graduates are ready to qualify for government certification and pursue rewarding careers in the construction finishing sector, both locally and internationally.
          </p>
          <p className="font-bold mt-4 md:text-xl text-md">Training Approach:</p>
          <p>
          The course adopts a classroom-based training approach, combining theoretical instruction with practical hands-on exercises to ensure comprehensive learning. Multiple formative assessments are conducted throughout the program to track progress and reinforce skills. 
          </p>
          <p className="font-bold md:text-xl text-md mt-4">
            For Whom This Course Is:
          </p>
          <p>
          Youth, Age limit-18-40 years, Men and Women, Transgender.
          </p>
          <p className="font-bold mt-4 md:text-xl text-md">Certification:</p>
          <p>
          Participants will receive a completion certificate from BRAC ISD at the end of the course, validating their expertise in Tiles and Marble Works. Moreover, having the opportunities participants to appear the assessment for government certificate.
          </p>
        </div>
        <div className="mt-4">
          <h1 className="font-bold  md:text-xl text-md">Course available in:</h1>
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

export default TilesMarbelWork;
