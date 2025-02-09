import { Link } from "react-router-dom";
import Navbar from "../../Home/Navbar/Navbar";
import Footer from "../../Home/Footer/Footer";
const HouseKeepingOccupationCourses = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div
        className="hero mt-20"
        style={{
          backgroundImage: "url(https://i.ibb.co/JzVjWMv/5483297-2805558.jpg)",
          width: "w-full",
          height: "320px",
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-white">
          <div className="max-w-xl md:max-w-2xl lg:max-w-2xl">
            <h2 className="text-xl md:text-3xl lg:text-5xl font-bold">
              Housekeeping Occupation
            </h2>
            <hr className="mx-4 md:mx-8 lg:mx-16 mt-4 border-t-8 font-bold border-[#FFA100]"></hr>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-8 lg:px-16 my-8">
        <div className="flex justify-between" >
          <div style={{ whiteSpace: "wrap" }}>
            <h2 className="font-bold md:text-2xl text-lg ">
              Housekeeping Occupation
            </h2>
          </div>
          <div>
            <Link
              to="https://docs.google.com/forms/d/e/1FAIpQLScoauq-f2VJ6nHBH_X7qNMb7pwg-p2XA-tUzNI45HmaTbRbBw/viewform"
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
            Educational Qualification: <br />
          </span>{" "}
          SSC or equivalent certificate or <br />
          Class eight or equivalent certificate with 2-years occupation relevant work experience and pass in a challenge test on NSDA’s approved assessment.

        </p>
        <p className="mt-4 font-bold md:text-xl text-md">Schedule:</p>
        <p className="">Saturday, Sunday, Monday, Tuesday, Wednesday, Thursday</p>
        <p className="mt-4 font-bold md:text-xl text-md">Course Contents:</p>
        <p className=" ">
        •	Provide Housekeeping Services to Guests <br />
•	Clean and Prepare Rooms for Guests <br />
•	Provide Valet/Butler Service <br />
•	Laundry Linen And Guest Clothes <br />
•	Clean Public Areas, Facilities and Equipment <br />
•	Deal With/Handle Intoxicated Guests <br />

        </p>
        <p className="mt-4 font-bold md:text-xl text-md">Course Description:</p>
        <p>
        The Housekeeping course, designed in alignment with the standards set by the National Skills Development Authority (NSDA_ BNQF Level-2) Bangladesh, equips learners with essential skills, knowledge, and professional attitude required for excellence in housekeeping services within the tourism and hospitality sectors. This course focuses on the fundamental principles of housekeeping, safety protocols, and practical skills necessary for providing high-quality service to guests. 
        </p>

        <p className="mt-4 font-bold md:text-xl text-md">Course Overview:</p>
        <p>
        The Housekeeping course is a 4-month intensive training program designed for individuals with a minimum SSC or equivalent certificate qualification, offering a comprehensive foundation in housekeeping practices. Conducted six days a week, with 4-hour daily sessions, the course combines theoretical knowledge with extensive hands-on practice to prepare participants for professional roles in hospitality. Key topics include applying Occupational Safety and Health (OSH) procedures, working effectively in team environments, and participating in workplace communication. Participants will learn to carry out workplace interactions in English while maintaining professionalism in various settings. The program covers essential practices for working in tourism and hospitality areas, including workplace hygiene procedures and effective guest service. Participants will gain skills in providing housekeeping services to guests, cleaning and preparing rooms, performing valet/butler services, and handling laundry for linens and guest clothes. Additional training includes cleaning public areas, facilities, and equipment, as well as managing interactions with intoxicated guests. Upon completion, graduates will be well-equipped to pursue careers in housekeeping, with the opportunity to appear for government certification assessments, enabling them to work in both local and international hospitality environments.
        </p>
        <h2 className="mt-4 font-bold md:text-xl text-md">
          Course Objectives:
        </h2>

        <p className="">
        The primary objective of this course is to equip participants with comprehensive theoretical knowledge and practical skills in housekeeping services, enabling them to deliver high-quality care and support to guests. By the end of the training, participants will be prepared to maintain cleanliness and hygiene standards, provide effective guest service, handle various housekeeping tasks professionally, and ensure guest satisfaction according to industry standards. The course ensures graduates are ready to qualify for government certification and pursue rewarding careers in the hospitality sector, both locally and internationally.
        </p>
        <h2 className="mt-4 font-bold md:text-xl text-md">
          Training Approach:
        </h2>

        <p className="">
        The course adopts a classroom-based training approach, combining theoretical instruction with practical hands-on exercises to ensure comprehensive learning. Multiple formative assessments are conducted throughout the program to track progress and reinforce skills. 
        </p>
        <h2 className="mt-4 font-bold md:text-xl text-md">
          For Whom This Course Is:
        </h2>

        <p className="">
        Youth, Age limit-18 Years  to 40 , Man and Women, Trangender.
        </p>
        <h2 className="mt-4 font-bold md:text-xl text-md">Certificate: </h2>

        <p className="">
        Participants will receive a completion certificate from BRAC ISD at the end of the course, validating their expertise in House Keeping. Moreover, having the opportunities participants to appear the assessment for government certificate.
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
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default HouseKeepingOccupationCourses;
