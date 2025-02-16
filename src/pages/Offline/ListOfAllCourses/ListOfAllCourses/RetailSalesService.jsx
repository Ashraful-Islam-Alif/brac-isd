import Navbar from "../../Home/Navbar/Navbar";
import Footer from "../../Home/Footer/Footer";
import { Link } from "react-router-dom";

const RetailSalesService = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div
        className="hero mt-20 bg-no-repeat bg-center bg-contain w-full h-80 md:h-96 lg:h-[400px]"
        style={{
          backgroundImage: "url(https://i.ibb.co/Jxy0900/24493637-6963167.jpg)",
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-white">
          <div className="max-w-xl md:max-w-2xl lg:max-w-2xl">
            <h2 className="text-xl md:text-3xl lg:text-5xl font-bold">
            Retail Sales Service/Operations
            </h2>
            <hr className="mx-4 md:mx-8 lg:mx-16 mt-4 border-t-8 font-bold border-[#FFA100]" />
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-8 lg:px-16 my-8">
        {/* course info */}
        <div>
          <div
            className="flex justify-between"
            
          >
            <div style={{ whiteSpace: "wrap" }}>
              <h2 className="font-bold md:text-2xl text-lg ">
              Retail Sales Service/Operations
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
            <span className="font-bold md:text-xl text-md ">
              Training Duration:
            </span>{" "}
            5 Month
          </p>
          <p className="mt-4">
            <span className="font-bold md:text-xl text-md mt-4">
              Class Duration:
            </span>{" "}
            2.30 hours
          </p>
          <p className="mt-4">
            <span className="font-bold md:text-xl text-md mt-4">
              Educational Qualification:
            </span>{" "} <br />
            Minimum SSC (Secondary School Certificate) or equivalent certificate
          </p>
          <p className="mt-4 font-bold md:text-xl text-md">Schedule:</p>
          <p className="">
            <span>Saturday, Sunday, Monday, Tuesday, Wednesday, Thursday</span>
           
          </p>
          <p className="mt-4 font-bold md:text-xl text-md">Course Contents:</p>
          <p className="">
            <span>
            •	Interpret sales operations in retail business <br />
•	Operate machinery and software <br />
•	Identify and perform store room activities <br />
•	Perform Visual merchandising <br />
•	Carryout sales operations <br />
•	Perform payment and transaction activities <br />

            </span>
          </p>
          <p className="mt-4 font-bold md:text-xl text-md">
            Course Description:{" "}
          </p>
          <p className="">
            <span>
            The Retail Sales Operations course, designed in alignment with the standards set by the National Skills Development Authority (NSDA_ BNQF Level-3) Bangladesh, equips learners with essential retail skills, knowledge, and professional attitude required for excellence in retail business operations. This course focuses on sales techniques, customer service, merchandising, and practical skills for managing retail operations in various commercial settings.
            </span>
          </p>
          <p className="mt-4 font-bold md:text-xl text-md">Course Overview: </p>
          <p className=""></p>
          <span>
          The Retail Sales Operations course is a 5-month intensive training program designed for individuals with a minimum SSC qualification, providing a strong foundation in retail business operations. Conducted six days a week, with 2.30-hour daily sessions, the course combines theoretical knowledge with hands-on practical training to prepare participants for professional retail roles. Key topics include Occupational Safety and Health Procedures, Team Environment practices, and housekeeping procedures. Participants will develop expertise in client relations, sales operations interpretation, and machinery and software operation. The program covers comprehensive training in store room management, visual merchandising techniques, sales operations, and payment transaction procedures. Upon completion, graduates will be well-equipped to pursue careers in retail operations, with the opportunity to appear for government certification assessments, enabling them to work in both local and international retail sectors.
          </span>
          <p className=" font-bold md:text-xl text-md mt-4">
            Course Objectives:
          </p>
          <p className="">
          The primary objective of this course is to equip participants with comprehensive theoretical knowledge and practical skills in retail sales operations, enabling them to perform professional retail functions and deliver excellent customer service. By the end of the training, participants will be prepared to manage store operations, handle visual merchandising, conduct sales activities, and process transactions according to industry standards. The course ensures graduates are ready to qualify for government certification and pursue rewarding careers in the retail sector, both locally and internationally.
          </p>
          <p className="font-bold md:text-xl text-md mt-4">
            Training Approach:
          </p>
          <p>
          The course adopts a classroom-based training approach, combining theoretical instruction with practical hands-on exercises to ensure comprehensive learning. Multiple formative assessments are conducted throughout the program to track progress and reinforce skills 
          </p>
          <p className="font-bold md:text-xl text-md mt-4">
            For Whom This Course Is:
          </p>
          <p>18 Years To 30 Years age.</p>
          <p className="font-bold md:text-xl text-md mt-4">
          Certification:
          </p>
          <p>
          Participants will receive a completion certificate from BRAC ISD at the end of the course, validating their expertise in Retail Sales Operations. Moreover, having the opportunities participants to appear the assessment for government certificate.
          </p>
        </div>
        <div className="mt-4">
          <h1 className="font-bold md:text-xl text-md ">
            Course available in:
          </h1>
          <div className="">
            <p className="underline">
              <Link to="/offline/centers/coxbazar">
                BRAC ISD Cox's Bazar Centre
              </Link>
            </p>
          </div>
        </div>
      </div>

      <Footer></Footer>
    </div>
  );
};

export default RetailSalesService;
