<<<<<<< HEAD

import { Link } from "react-router-dom";
import Navbar from "../../Home/Navbar/Navbar";
import Footer from "../../Home/Footer/Footer";
const ComputerOperationCourses = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div
        className="hero mt-20"
        style={{
          backgroundImage:
            "url(https://i.ibb.co/BN6XcdY/Computer-Operation.jpg)",
          width: "w-full",
          height: "320px",
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-white">
          <div className="max-w-xl md:max-w-2xl lg:max-w-2xl">
            <h2 className="text-xl md:text-3xl lg:text-5xl font-bold">
              Computer Office Applications
            </h2>
            <hr className="mx-12 md:mx-20 lg:mx-50 mt-4 border-t-8 font-bold border-[#FFA100]"></hr>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-8 lg:px-16 my-8">
        <div className="flex justify-between" style={{ whiteSpace: "nowrap" }}>
          <div>
            <h2 className="font-bold md:text-2xl text-md ">
              Computer Office Applications
            </h2>
          </div>
          <div>
            <Link
              to="https://docs.google.com/forms/d/e/1FAIpQLSfUhIt6DCWApWz-7aIyKSt0ji5xGap0mBsP6rDcXji9RIfiyQ/viewform"
              target="_blank"
              className="underline text-[#FFA100] font-medium md:text-lg text-xs"
            >
              Click for Registration
            </Link>
          </div>
        </div>
        <p className="mt-4">
          <span className="font-bold md:text-xl text-md mt-4">
            Training Duration:
          </span>{" "}
          1.5 months
        </p>
        <p className="mt-4">
          <span className="font-bold md:text-xl text-md mt-4">
            Class Duration:
          </span>{" "}
          3 hours
        </p>
        <p className="mt-4 font-bold md:text-xl text-md">Course Contents:</p>
        <p className=" ">
          <span>
            Basic Computer: Get acquainted with computer fundamentals and
            operations.
          </span>
          <br></br>
          <span>
            Hardware and Software Installation and Maintenance: Learn how to
            install and maintain computer hardware and software components.
          </span>
          <br></br>
          <span>
            Use and Introduction of Email and Job Portal: Explore the efficient
            use of emails and job portals in the professional world.
          </span>
          <br></br>
          <span>
            Introduction and Use of Google Apps: Familiarise yourself with
            various Google applications for productivity and collaboration.
          </span>
          <br></br>
          <span>
            Mail Merging: Discover the technique of mail merging for
            personalized communication.
          </span>
          <br></br>
          <span>
            Bangla and English Typing: Enhance your typing skills in both Bangla
            and English.
          </span>
          <br></br>
          <span>
            Professional CV Designing: Learn the art of designing a professional
            and appealing CV.
          </span>
          <br></br>
          <span>
            Microsoft Word: Master the features and functions of Microsoft Word
            for efficient document creation.
          </span>
          <br></br>
          <span>
            Microsoft Excel: Acquire proficiency in Microsoft Excel for data
            organization and analysis.
          </span>
          <br></br>
          <span>
            Microsoft PowerPoint: Develop captivating presentations using
            Microsoft PowerPoint.
          </span>
        </p>
        <p className="mt-4 font-bold md:text-xl text-md">Course Description:</p>
        <p>
          Join our Computer Office Applications training programme and gain
          essential skills to excel in the modern workplace. Whether you are a
          beginner or seeking to upgrade your computer knowledge, this course
          offers comprehensive training to meet your professional needs.
        </p>

        <p className="mt-4 font-bold md:text-xl text-md">Course Overview:</p>
        <p>
          This 1.5-month programme covers a diverse range of topics, including
          computer basics, hardware and software installation, email and job
          portal usage, and Google Apps. Learn the practical technique of mail
          merging and enhance your typing skills in both Bangla and English.
          Gain proficiency in Microsoft Word for efficient document creation,
          Microsoft Excel for data management, and Microsoft PowerPoint for
          impactful presentations. Additionally, learn the art of designing a
          professional CV to stand out in the job market.
        </p>
        <h2 className="mt-4 font-bold md:text-xl text-md">
          For Whom This Course Is:
        </h2>

        <p className="">
          This course is ideal for individuals seeking to enhance their computer
          skills and office application proficiency. Whether you are a student,
          job seeker, or working professional, this programme will equip you
          with the necessary knowledge to navigate computer-based tasks with
          confidence.
        </p>
        <h2 className="mt-4 font-bold md:text-xl text-md">Certificate: </h2>

        <p className="">
          Upon successful completion of the course, you will receive a
          certificate from BRAC ISD, validating your expertise in Computer
          Office Applications.
        </p>
        <div className="mt-4">
          <h1 className="font-bold md:text-xl text-md ">
            Course available in:
          </h1>
          <div className="mt-4">
            <p className="underline">
              <Link to="/centers/dhaka">BISD Dhaka Centre</Link>
            </p>
            <p className="underline">
              <Link to="/centers/rangpur">BISD Rangpur Centre</Link>
            </p>
            <p className="underline">
              <Link to="/centers/rajshahi">BISD Rajshahi Centre</Link>
            </p>
            <p className="underline">
              <Link to="/centers/cumilla">BISD Cumilla Centre</Link>
            </p>
            <p className="underline">
              <Link to="/centers/chattogram">BISD Chattogram Centre</Link>
            </p>
            <p className="underline">
              <Link to="/centers/sylhet">BISD Sylhet Centre</Link>
            </p>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default ComputerOperationCourses;
=======
import { Link } from "react-router-dom";
import Navbar from "../../Home/Navbar/Navbar";
import Footer from "../../Home/Footer/Footer";
const ComputerOperationCourses = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div
        className="hero mt-20"
        style={{
          backgroundImage:
            "url(https://i.ibb.co/BN6XcdY/Computer-Operation.jpg)",
          width: "w-full",
          height: "320px",
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-white">
          <div className="max-w-xl md:max-w-2xl lg:max-w-2xl">
            <h2 className="text-xl md:text-3xl lg:text-5xl font-bold">
              Computer Office Applications
            </h2>
            <hr className="mx-12 md:mx-20 lg:mx-50 mt-4 border-t-8 font-bold border-[#FFA100]"></hr>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-8 lg:px-16 my-8">
        <div className="flex justify-between" style={{ whiteSpace: "nowrap" }}>
          <div>
            <h2 className="font-bold md:text-2xl text-md ">
              Computer Office Applications
            </h2>
          </div>
          <div>
            <Link
              to="https://docs.google.com/forms/d/e/1FAIpQLScoauq-f2VJ6nHBH_X7qNMb7pwg-p2XA-tUzNI45HmaTbRbBw/viewform"
              target="_blank"
              className="btn btn-xs sm:btn-sm md:btn-md bg-[#FFA100] text-black hover:text-[#FFA100]  hover:outline hover:outline-2 hover:outline-[#FFA100] hover:bg-white"
            >
              Click for Registration
            </Link>
          </div>
        </div>
        <p className="mt-4">
          <span className="font-bold md:text-xl text-md mt-4">
            Training Duration:
          </span>{" "}
          1.5 months
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
          Minimum 8 Pass
        </p>
        <p className="mt-4 font-bold md:text-xl text-md">Schedule:</p>
        <p className="mt-4 ">
          Saturday, Monday, Wednesday Sunday, Tuesday, Thursday 3 days in a
          week.
        </p>
        <p className="mt-4 font-bold md:text-xl text-md">Course Contents:</p>
        <p className=" ">
          1. English and Bangla Typing: <br />
          2. Basic Internet Tools: <br />
          3. Computer Basic Operation: <br />
          4. Microsoft Word <br />
          5. Microsoft Excel <br />
          6. Microsoft PowerPoint: Skills Covered : BNQF Level-3
        </p>
        <p className="mt-4 font-bold md:text-xl text-md">Course Description:</p>
        <p>
          The Computer Office Application course at BRAC Institute of Skills
          Development is designed to equip students with essential computer
          skills needed in modern office environments. Over the course of 1.5
          months, students will gain proficiency in English and Bangla typing,
          basic internet tools, fundamental computer operations, and key
          Microsoft Office applications, including Word, Excel, and PowerPoint.
        </p>

        <p className="mt-4 font-bold md:text-xl text-md">Course Overview:</p>
        <p>
          1. English and Bangla Typing: Introduction to typing software (e.g.,
          TypingMaster, Avro Keyboard for Bangla), Touch typing techniques,
          Practice drills for increasing typing speed and accuracy, Typing tests
          to monitor progress
          <br />
          2. Basic Internet Tools: Introduction to web browsers (Chrome,
          Firefox), Effective web searching (using search engines like Google),
          Bookmarking and managing favorite websites, Understanding and using
          cloud storage (Google Drive, Dropbox), Setting up and managing email
          accounts (Gmail, Outlook), Composing, sending, and organizing emails,
          Attaching files and managing email attachments, Creating and using
          contact lists, Introduction to email etiquette and professional
          communication
          <br />
          3. Computer Basic Operation: Overview of computer hardware (CPU, RAM,
          hard drives, peripherals), Understanding operating systems (Windows),
          Basic troubleshooting and maintenance, File management: creating,
          saving, organizing, and retrieving files, Introduction to basic
          computer terminologies and concepts
          <br />
          4. Microsoft Word: Introduction to the Microsoft Word interface,
          Creating, saving, and opening documents, Basic text formatting (font
          styles, sizes, colors), Paragraph formatting (alignment, spacing,
          indentation)
          <br />
          5. Microsoft Excel: Introduction to the Excel interface, Creating and
          saving workbooks, Basic data entry and cell formatting, Introduction
          to formulas and functions (SUM, AVERAGE, etc.)
          <br />
          6. Microsoft PowerPoint: Introduction to the PowerPoint interface,
          Creating and saving presentations, Slide design basics (layouts,
          themes), Inserting and formatting text, images, and graphics
        </p>
        <p className="mt-4 font-bold md:text-xl text-md">Course Objective:</p>
        <p>
          The course is designed to equip students with the creative and
          technical skills needed to excel in the graphic design industry,
          whether for personal projects or professional endeavors.
        </p>
        <p className="mt-4 font-bold md:text-xl text-md">Course Objective:</p>
        <p>
          The course is designed to equip students with the creative and
          technical skills needed to excel in the graphic design industry,
          whether for personal projects or professional endeavors.
        </p>
        <p className="mt-4 font-bold md:text-xl text-md">Teaching Approach:</p>
        <p>
          1. Hands-on Learning <br />
          •&nbsp;&nbsp;&nbsp;&nbsp;Software Demos
          <br />
          •&nbsp;&nbsp;&nbsp;&nbsp;Practical Exercises <br />
          2. Project-Based Learning <br />
          •&nbsp;&nbsp;&nbsp;&nbsp;Real-World Projects <br />
          •&nbsp;&nbsp;&nbsp;&nbsp;Portfolio Development <br />
          3. Collaborative Learning <br />
          •&nbsp;&nbsp;&nbsp;&nbsp;Peer Review Sessions <br />
          •&nbsp;&nbsp;&nbsp;&nbsp;Group Projects <br />
          4. Interactive Lectures <br />
          •&nbsp;&nbsp;&nbsp;&nbsp;Conceptual Understanding <br />
          •&nbsp;&nbsp;&nbsp;&nbsp;Q&A Sessions <br />
          5. Tutorials and Supplemental Resources <br />
          •&nbsp;&nbsp;&nbsp;&nbsp;Video Tutorials <br />
          •&nbsp;&nbsp;&nbsp;&nbsp;Reading Materials <br />
          6. Assessment and Feedback <br />
          •&nbsp;&nbsp;&nbsp;&nbsp;Continuous Assessment <br />
          •&nbsp;&nbsp;&nbsp;&nbsp;Personalized Feedback <br />
        </p>

        <h2 className="mt-4 font-bold md:text-xl text-md">
          For Whom This Course Is:
        </h2>

        <p className="">
          Youth, Age limit-18 Years to 40 , Man and Women, PWD , Trangender
        </p>
        <h2 className="mt-4 font-bold md:text-xl text-md">Certificate: </h2>

        <p className="">
          Upon successful completion of the course, you will receive a
          certificate from BRAC ISD, validating your expertise in Computer
          Office Applications.
        </p>
        <div className="mt-4">
          <h1 className="font-bold md:text-xl text-md ">
            Course available in:
          </h1>
          <div className="mt-4">
            <p className="underline">
              <Link to="offline/centers/dhaka">BISD Dhaka Centre</Link>
            </p>
            <p className="underline">
              <Link to="offline/centers/rangpur">BISD Rangpur Centre</Link>
            </p>
            <p className="underline">
              <Link to="offline/centers/rajshahi">BISD Rajshahi Centre</Link>
            </p>
            <p className="underline">
              <Link to="offline/centers/cumilla">BISD Cumilla Centre</Link>
            </p>
            <p className="underline">
              <Link to="offline/centers/chattogram">
                BISD Chattogram Centre
              </Link>
            </p>
            <p className="underline">
              <Link to="offline/centers/sylhet">BISD Sylhet Centre</Link>
            </p>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default ComputerOperationCourses;
>>>>>>> 8a932e4 (Added Retail and Sales course)
