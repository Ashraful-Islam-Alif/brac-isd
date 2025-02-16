import { Link } from "react-router-dom";
import Navbar from "../../Home/Navbar/Navbar";
import Footer from "../../Home/Footer/Footer";
const FoodAndBeverageServicesCourses = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div
        className="hero mt-20"
        style={{
          backgroundImage:
            "url(https://i.ibb.co/2NHFJVq/food-and-beverage-services.gif)",
          width: "w-full",
          height: "320px",
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-white">
          <div className="max-w-xl md:max-w-2xl lg:max-w-2xl">
            <h2 className="text-xl md:text-3xl lg:text-5xl font-bold">
              Food and Beverage Services
            </h2>
            <hr className="mx-4 md:mx-8 lg:mx-16 mt-4 border-t-8 font-bold border-[#FFA100]"></hr>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-8 lg:px-16 my-8">
        <div className="flex justify-between" >
          <div style={{ whiteSpace: "wrap" }}>
            <h2 className="font-bold md:text-2xl text-lg ">
              Food and Beverage Services
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
          4 Months
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
          •	Minimum SSC (Secondary School Certificate) or equivalent certificate or <br />
•	Minimum 2 years working experience in related field/occupation and pass in challenge test developed by NSDA.

        </p>
        <p className="mt-4 font-bold md:text-xl text-md">Schedule:</p>
        <p className="">Saturday, Sunday, Monday, Tuesday, Wednesday, Thursday</p>
        <p className="mt-4 font-bold md:text-xl text-md">Course Contents:</p>
        <p className=" ">
        •	Apply Food Safety Procedures  <br />
•	Perform Opening-Closing Activities for Restaurants <br />
•	Apply Product Knowledge on Food and Beverage Service <br />
•	Prepare Table for Service <br />
•	Provide in-Room Dining <br />
•	Provide Food and Beverage Service <br />
        </p>
        <p className="mt-4 font-bold md:text-xl text-md">Course Description:</p>
        <p>
        The Food and Beverage Service course, designed in alignment with the standards set by the National Skills Development Authority (NSDA_ BNQF Level-2) Bangladesh, equips learners with essential hospitality skills, knowledge, and professional attitude required for excellence in food and beverage service. This course focuses on guest service excellence, hygiene protocols, and practical skills for providing high-quality dining experiences in hotels, restaurants, and hospitality establishments.
        </p>

        <p className="mt-4 font-bold md:text-xl text-md">Course Overview:</p>
        <p>
        The Food and Beverage Service course is a 4-month intensive training program designed for individuals with a minimum SSC qualification, offering comprehensive training in hospitality service operations. Conducted six days a week, with 4-hour daily sessions, the course combines theoretical knowledge with hands-on practical training to prepare participants for professional food service roles. Key topics include Occupational Safety and Health Procedures, English communication skills, and Team Environment practices. Participants will master workplace hygiene procedures, guest service excellence, and food safety protocols. The program covers comprehensive training in restaurant operations, product knowledge, table service techniques, in-room dining procedures, and professional food and beverage service standards. Upon completion, graduates will be well-equipped to pursue careers in the hospitality industry, with the opportunity to appear for government certification assessments, enabling them to work in both local and international hospitality sectors.
        </p>
        <h2 className="mt-4 font-bold md:text-xl text-md">
          Course Objectives:
        </h2>

        <p className="">
        The primary objective of this course is to equip participants with comprehensive theoretical knowledge and practical skills in food and beverage service, enabling them to deliver professional hospitality services and maintain high standards of guest satisfaction. By the end of the training, participants will be prepared to communicate effectively in English, maintain hygiene standards, demonstrate product knowledge, and provide excellent food and beverage service according to international hospitality standards. The course ensures graduates are ready to qualify for government certification and pursue rewarding careers in the growing hospitality sector, both locally and internationally.
        </p>
        <h2 className="mt-4 font-bold md:text-xl text-md">
          Training Approach:
        </h2>

        <p className="">
        The course adopts a classroom-based training approach, combining theoretical instruction with practical hands-on exercises to ensure comprehensive learning. Multiple formative assessments are conducted throughout the program to track progress and reinforce skills  
        </p>
        <h2 className="mt-4 font-bold md:text-xl text-md">
          For Whom This Course Is:
        </h2>

        <p className="">
        Youth, Age limit-18 Years  to 40 , Male and Female, Transgender.
        </p>
        <h2 className="mt-4 font-bold md:text-xl text-md">Certificate: </h2>

        <p className="">
        Participants will receive a completion certificate from BRAC ISD at the end of the course, validating their expertise in Food and Beverage Services. Moreover, having the opportunities participants to appear the assessment for government certificate.
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
              <Link to="/offline/centers/coxbazar">
                BRAC ISD Cox's Bazar Centre
              </Link>
            </p>
            <p className="underline">
              <Link to="/offline/centers/coxbazar">
              BRAC Mirsharai Centre (Inactive)
              </Link>
            </p>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default FoodAndBeverageServicesCourses;
