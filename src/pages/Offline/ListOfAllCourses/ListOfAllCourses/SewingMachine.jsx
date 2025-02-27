import { Link } from "react-router-dom";
import Navbar from "../../Home/Navbar/Navbar";
import Footer from "../../Home/Footer/Footer";

const SewingMachine = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div
        className="hero mt-20"
        style={{
          backgroundImage:
            "url(https://i.ibb.co/RpfpwCf/Sewing-Machine-Operation.jpg)",
          width: "w-full",
          height: "320px",
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-white">
          <div className="max-w-xl md:max-w-2xl lg:max-w-2xl">
            <h2 className="text-xl md:text-3xl lg:text-5xl font-bold">
              Knit Sewing Machine Operation
            </h2>
            <hr className="mx-4 md:mx-8 lg:mx-16 mt-4 border-t-8 font-bold border-[#FFA100]"></hr>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-8 lg:px-16 my-8">
        <div className="flex justify-between" >
          <div style={{ whiteSpace: "wrap" }}>
            <h2 className="font-bold md:text-2xl text-lg ">
              Knit Sewing Machine Operation
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
            <span className="font-bold md:text-xl text-md">
              Training Duration:
            </span>{" "}
            3 months
          </p>
          <p className="mt-4">
            <span className="font-bold mt-4 md:text-xl text-md">
              Class Duration:
            </span>{" "}
            5 hours
          </p>
          <p className="mt-4">
            <span className="font-bold mt-4 md:text-xl text-md">
              Educational Qualification:
            </span>{" "} <br />
            •	Class five Pass or evidence of equivalent achievement or <br />
•	Pass in a challenge test on language, literacy and numeracy skills considered necessary for successful completion of the qualification (Model challenge test to be developed based on units of competencies to be achieved) or <br />
•	6 months trade relevant work experience and pass in a challenge test on vocational skills considered necessary for successful completion of the qualification (Model challenge test to be developed). <br />


          </p>
          <p className="mt-4 font-bold md:text-xl text-md">Schedule:</p>
          <p className="">
            <span>Saturday, Sunday, Monday, Tuesday, Wednesday, Thursday</span>
          </p>
          <p className="mt-4 font-bold md:text-xl text-md">Course Contents:</p>
          <p className="">
          •	Identify knitted fabrics and garments <br />
•	Prepare for sewing operation <br />
•	Carry out machine performance <br />
•	Operate industrial sewing machine <br />
•	Make t-shirt and polo-shirt <br />

          </p>
          <p className="mt-4 font-bold md:text-xl text-md">
            Course Description:{" "}
          </p>
          <p className="">
          The Knit Sewing Machine Operation course, designed in alignment with the standards set by the National Skills Development Authority (NSDA_ BNQF Level-2) Bangladesh, equips learners with essential skills, knowledge, and professional attitudes required for excellence in the textile and garment manufacturing industry. This course focuses on the fundamental principles of knit sewing operations, safety protocols, and practical skills necessary for operating industrial sewing machines effectively. 
          </p>
          <p className=" font-bold md:text-xl text-md mt-4">Course Overview:</p>
          <p className="">
          The Knit Sewing Machine Operation course is a 3-month intensive training program designed for individuals with a minimum Class five Pass or evidence of equivalent achievement qualification, providing a comprehensive foundation in sewing machine operations within the knitwear sector. Conducted six days a week, with 5-hour daily sessions, the course combines theoretical knowledge with extensive hands-on practice to prepare participants for professional roles in garment manufacturing. Key topics include applying Occupational Safety and Health (OSH) practices in the workplace, performing computations using basic mathematical concepts, and carrying out effective workplace interactions. Participants will learn to work in self-directed teams, interpret drawings and manuals, perform measurements and calculations, and apply quality procedures. The program covers essential training in identifying knitted fabrics and garments, preparing for sewing operations, carrying out machine performance checks, and operating industrial sewing machines. Participants will also gain practical experience in making t-shirts and polo shirts. Upon completion, graduates will be well-equipped to pursue careers in knit sewing machine operation, with the opportunity to appear for government certification assessments, enabling them to work in both local and international textile industries.
          </p>
          <p className=" font-bold md:text-xl text-md mt-4">
            Course Objectives:
          </p>
          <p className="">
          The primary objective of this course is to equip participants with comprehensive theoretical knowledge and practical skills in knit sewing machine operation, enabling them to perform professional sewing tasks efficiently and safely. By the end of the training, participants will be prepared to interpret technical specifications accurately, operate industrial sewing machines proficiently, and produce high-quality knit garments according to industry standards. The course ensures graduates are ready to qualify for government certification and pursue rewarding careers in the garment manufacturing sector, both locally and internationally.
          </p>

          <p className="font-bold mt-4 md:text-xl text-md">
            Training Approach:
          </p>
          <p>
          The course adopts a classroom-based training approach, combining theoretical instruction with practical hands-on exercises to ensure comprehensive learning. Multiple formative assessments are conducted throughout the program to track progress and reinforce skills. 
          </p>
          <p className="font-bold mt-4 md:text-xl text-md">For Whom This Course Is:</p>
          <p>
          Youth, Age limit-18-40 years, Men and Women, Persons with Disability, Transgender.
          </p>
          <p className="font-bold mt-4 md:text-xl text-md">Certification:</p>
          <p>
          Participants will receive a completion certificate from BRAC ISD at the end of the course, validating their expertise in Knit Sewing Machine Operation. Moreover, having the opportunities participants to appear the assessment for government certificate.
          </p>
        </div>
        <div className="mt-4">
          <h1 className="font-bold md:text-xl text-md ">
            Course available in:
          </h1>
          <div className="">
            <p className="underline">
              <Link to="/offline/centers/narayanganjKanchan">
                BRAC ISD Narayanganj Centre
              </Link>
            </p>
            <p className="underline">
              <Link to="/offline/centers/nilphamari">
                BRAC ISD Nilphamari Centre
              </Link>
            </p>
            <p className="underline">
              <Link to="/offline/centers/manikganj">BRAC ISD Manikganj Centre (Inactive)</Link>
            </p>
            <p className="underline">
              <Link to="/offline/centers/manikganj">BRAC ISD Mirsharai Center (Inactive)</Link>
            </p>
            
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default SewingMachine;
