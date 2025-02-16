
import { Link } from "react-router-dom";
import Navbar from "../../Home/Navbar/Navbar";
import Footer from "../../Home/Footer/Footer";

const DigitalMarketingCourses = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div
        className="hero mt-20 "
        style={{
          backgroundImage:
            "url(https://i.ibb.co/LpP7WtX/Digital-marketing-png-background-2023-v3-1.png)",
          width: "100%",
          height: "320px",
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-white">
          <div className="max-w-xl md:max-w-2xl lg:max-w-2xl">
            <h2 className="text-xl md:text-3xl lg:text-5xl font-bold ">
              Digital Marketing
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
            
          >
            <div style={{ whiteSpace: "wrap" }}>
              <h2 className="font-bold md:text-2xl text-lg ">
                Digital Marketing Training
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
            3 months
          </p>
          <p className="mt-4">
            <span className="font-bold md:text-xl text-md mt-4">
              Class Duration:
            </span>{" "}
            5 hours
          </p>
          <ul className="mt-4">
            <span className="font-bold md:text-xl text-md mt-4">
              Educational Qualification:
            </span>{" "}
           
               <li><span>Minimum SSC (Secondary School Certificate.) or equivalent certificate or  </span></li>
               <li><span>2-years occupation relevant work experience and pass in a challenge test on NSDA’s approved assessment</span></li>
          </ul>
          <p className="mt-4 font-bold md:text-xl text-md">Schedule:</p>
          <p className=" ">
            <span>Saturday, Sunday, Monday, Tuesday, Wednesday, Thursday
            </span>
          </p>
          <p className="mt-4 font-bold md:text-xl text-md">Course Contents:</p>
          <p className=" ">
            <span>1. Interpret Concepts of Digital Marketing</span>
            <br></br>
            <span>2. Apply Social Media Marketing</span>
            <br></br>
            <span>3. Interpret Search Engine Marketing (SEM)</span>
            <br></br>
            <span>4. Practice Basic Search Engine Optimization (SEO)</span>
          </p>
          <p className="mt-4 font-bold md:text-xl text-md">
            Course Description:{" "}
          </p>
          <p className="">
          The Digital Marketing course, designed in alignment with the standards set by the National Skills Development Authority (NSDA_ BNQF Level-3) Bangladesh, equips learners with essential digital marketing skills, knowledge, and professional attitude required for success in the modern digital landscape. This course focuses on social media marketing, search engine optimization, and practical skills for implementing effective digital marketing strategies in various business environments.
          </p>
          <p className="mt-4 font-bold md:text-xl text-md">Course Overview: </p>
          <p className=""></p>
          The Digital Marketing course is a 3-month intensive training program designed for individuals with a minimum SSC qualification, offering comprehensive training in digital marketing fundamentals. Conducted six days a week, with 5-hour daily sessions, the course combines theoretical knowledge with hands-on practical experience to prepare participants for professional digital marketing roles. Key topics include negotiation skills, office application software proficiency, and ethical standards in ICT workplace. Participants will master digital marketing concepts, social media marketing techniques, Search Engine Marketing (SEM), and basic Search Engine Optimization (SEO) practices. The program emphasizes practical application of digital marketing tools and strategies to achieve business objectives. Upon completion, graduates will be well-equipped to pursue careers in digital marketing, with the opportunity to appear for government certification assessments, enabling them to work in both local and international digital marketing sectors.
          <p className=" font-bold md:text-xl text-md mt-4">
            Course Objectives:
          </p>
          <p className="">
          The primary objective of this course is to equip participants with comprehensive theoretical knowledge and practical skills in digital marketing, enabling them to develop and implement effective digital marketing strategies. By the end of the training, participants will be prepared to execute social media campaigns, optimize online content, manage search engine marketing initiatives, and implement SEO strategies according to industry standards. The course ensures graduates are ready to qualify for government certification and pursue rewarding careers in the rapidly evolving digital marketing landscape, both locally and internationally.
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
          <p>
            This training is suitable for students, professionals,
            entrepreneurs, and anyone interested in exploring the vast
            possibilities of digital marketing. Whether you aim to enhance your
            career or grow your business, this course will equip you with the
            skills to succeed.
          </p>
          <p className="font-bold md:text-xl text-md mt-4">
          Certification:
          </p>
          <p>
          Participants will receive a completion certificate from BRAC ISD at the end of the course, validating their expertise in Digital Marketing. Moreover, having the opportunities participants to appear the assessment for government certificate.
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
              <Link to="/offline/centers/cumilla">BRAC ISD Cumilla Centre</Link>
            </p>
            <p className="underline">
              <Link to="/offline/centers/chattogram">BRAC ISD Chattogram Centre</Link>
            </p>
            <p className="underline">
              <Link to="/offline/centers/sylhet">BRAC ISD Sylhet Centre</Link>
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
              <Link to="/offline/centers/mymensingh">BRAC ISD Mymensingh Centre</Link>
            </p>
            <p className="underline">
              <Link to="/offline/centers/narayanganjnBondor">
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

export default DigitalMarketingCourses;
