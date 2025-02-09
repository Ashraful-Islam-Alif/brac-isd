import { Link } from "react-router-dom";
import Navbar from "../../Home/Navbar/Navbar";
import Footer from "../../Home/Footer/Footer";

const CaregivingTraining = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div
        className="hero mt-20"
        style={{
          backgroundImage:
            "url(https://i.ibb.co/3CmmhYX/national-cancer-institute-Bx-Xg-TQEw1-M4-unsplash.jpg)",
          width: "100%",
          height: "320px",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-white">
          <div className="max-w-xl md:max-w-2xl lg:max-w-2xl">
            <h2 className="text-xl md:text-3xl lg:text-5xl font-bold">
              General Care Giving
            </h2>
            <hr className="mx-4 md:mx-8 lg:mx-16 mt-4 border-t-8 font-bold border-[#FFA100]"></hr>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-8 lg:px-16 my-8">
        {/* course info */}
        <div>
          <div className="flex justify-between">
            <div style={{ whiteSpace: "wrap" }}>
              <h2 className="font-bold md:text-2xl text-lg ">
                General Care Giving
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
            <span className="font-bold md:text-xl text-md">
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
            </span>{" "}
            <p>Class 8 or equivalent certificate or </p>
            <p>2 years occupational relevant work experience and pass in a challenge test on NSDA’s approved assessment. </p>
          </p>
          <p className="mt-4">
            
            <span className="font-bold md:text-xl text-md mt-4">Schedule: </span>
            <br />
            Saturday, Sunday, Monday, Tuesday, Wednesday, Thursday
          </p>
          <p className="mt-4 font-bold md:text-xl text-md">Course Contents:</p>
          <p className="">
            <span>1. Perform Health Screening</span>
            <br></br>
            <span>2. Assist In Activities of Daily Living (ADLS)</span>
            <br></br>
            <span>3. Perform Clinical Care Giving</span>
            <br></br>
            <span>4. Maintain Nutrition, Food Safety and Diet Plan</span>
            <br></br>
            <span>5. Maintain Basic Housekeeping in Care Giving</span>
            <br></br>
            <span>6. Apply Basic Physiotherapy in Care Giving </span>
            <br></br>
          </p>
          <p className="mt-4 font-bold md:text-xl text-md">
            Course Description:{" "}
          </p>
          <p className="">
          The Care Giving course, designed in alignment with the standards set by the National Skills Development Authority (NSDA_ BNQF Level-2) Bangladesh, equips learners with essential skills, knowledge, and professional attitudes required for providing high-quality care to individuals in various settings. This course focuses on the fundamental principles of caregiving, including safety protocols, ethical considerations, and practical skills necessary for supporting clients in their daily activities and health management.
          </p>
          <p className="mt-4 font-bold md:text-xl text-md">Course Overview: </p>
          <p className=""></p>
          The Care Giving course is a 3-month intensive training program designed for individuals with a minimum class 8 or equivalent or 2 years occupational relevant work experience qualification, offering a comprehensive foundation in caregiving practices. Conducted six days a week, with 5-hour daily sessions, the course combines theoretical knowledge with extensive hands-on practice to prepare participants for professional roles in caregiving. Key topics include applying Occupational Safety and Health (OSH) procedures, effective workplace interaction, and developing basic IT skills. Participants will learn to work effectively in a team environment while interpreting the ground rules of caregiving and understanding legal and ethical issues related to the field. The program covers essential skills such as basic first aid, health screening, assisting in Activities of Daily Living (ADLs), and performing clinical caregiving tasks. Additionally, participants will gain knowledge in maintaining nutrition, food safety, diet planning, basic housekeeping in caregiving environments, and applying basic physiotherapy techniques. Upon completion, graduates will be well-equipped to pursue careers in caregiving, with the opportunity to appear for government certification assessments, enabling them to work in both local and international healthcare settings.
          <p className="mt-4 font-bold md:text-xl text-md">
            Course Objectives:{" "}
          </p>
          <p className="">
          The main goal of this course is to provide participants with a thorough understanding of caregiving theory and hands-on skills, so they can offer empathetic and efficient assistance to those who require it. Upon completion of the program, participants will be capable of understanding caregiving protocols, conducting health assessments and providing initial medical assistance, aiding individuals with their daily tasks, upholding appropriate nutrition and safety measures, and utilizing fundamental physiotherapy methods in line with established practices. This course guarantees that graduates are fully prepared to meet the requirements for official certification and embark on fulfilling caregiving careers both domestically and globally.
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
          Youth, Age limit-18-40 years, Men and Women, Transgender.
          </p>
          <p className="font-bold md:text-xl text-md mt-4">Certification:</p>
          <p>
          Participants will receive a completion certificate from BRAC ISD at the end of the course, validating their expertise in caregiving. Moreover, participants will have the opportunity to appear for the government certificate assessment.
          </p>
        </div>
        <div className="mt-4">
          <h1 className="font-bold md:text-xl text-md">
            Course available in:
          </h1>
          <div className="">
            <p className="underline">
              <Link to="/offline/centers/dhaka">BRAC ISD Dhaka Centre</Link>
            </p>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default CaregivingTraining;
