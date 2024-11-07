
import { Link } from "react-router-dom";
import Navbar from "../../Home/Navbar/Navbar";
import Footer from "../../Home/Footer/Footer";
const ITSupportTechnicianCourses = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div
        className="hero mt-20"
        style={{
          backgroundImage:
            "url(https://i.ibb.co/0qY9fvq/5d4c3bf28f0c00479d14de09-pc-support-technician.jpg)",
          width: "w-full",
          height: "320px",
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-white">
          <div className="max-w-xl md:max-w-2xl lg:max-w-2xl">
            <h2 className="text-xl md:text-3xl lg:text-5xl font-bold">
              IT Support Technician
            </h2>
            <hr className="mx-4 md:mx-8 lg:mx-16 mt-4 border-t-8 font-bold border-[#FFA100]"></hr>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-8 lg:px-16 my-8">
        <div className="flex justify-between" >
          <div style={{ whiteSpace: "wrap" }}>
            <h2 className="font-bold md:text-2xl text-lg ">
              IT Support Technician
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
          3 Months
        </p>
        <p className="mt-4">
          <span className="font-bold md:text-xl text-md mt-4">
            Class Duration:
          </span>{" "}
          3 hours
        </p>
        <p className="mt-4">
          <span className="font-bold md:text-xl text-md mt-4">Schedule: </span>{" "}
          3 days/week
        </p>
        <p className="mt-4 font-bold md:text-xl text-md">Course Contents:</p>
        <p className=" ">
          <p className="">
            Discover the world of IT Support Technician in our comprehensive
            3-month training program. This course is designed to equip you with
            essential skills in computer management, troubleshooting,
            networking, and more.
          </p>
          <span>- Basics of Computer Management</span>
          <br></br>
          <span>- Computer Arithmetic Logic Unit:</span>
          <br></br>
          <span>- Microsoft Office</span>
          <br></br>
          <span>- Troubleshooting and Support:</span>
          <br></br>
          <span>- Internet Usage, Security, and Copyright Issues</span>
          <br></br>
          <span>
            - Introduction to Computer Networking Hardware and Software
          </span>
          <br></br>
          <span>- CCTV Set Up and Maintenance</span>
          <br></br>
          <span>- Motherboard Operation</span>
        </p>

        <h2 className="mt-4 font-bold md:text-xl text-md">
          Course Description:{" "}
        </h2>

        <p className="">
          Join our IT Support Technician training programme and equip yourself
          with the skills needed to excel in the world of information
          technology. This course offers a blend of theoretical knowledge and
          practical experience to ensure you are job-ready in the IT support
          industry.
        </p>
        <h2 className="mt-4 font-bold md:text-xl text-md">Course Overview: </h2>

        <p className="">
          This 3-month programme covers a wide range of topics essential for an
          IT Support Technician. From computer management basics to Microsoft
          Office proficiency, you will acquire the necessary skills to
          troubleshoot and provide technical support. Explore internet usage,
          security, and copyright issues to ensure ethical and safe practices.
          Learn about computer networking hardware and software, and get
          hands-on experience with CCTV setup and maintenance. Understand the
          functioning of computer motherboards for a comprehensive understanding
          of IT infrastructure.
        </p>
        <h2 className="mt-4 font-bold md:text-xl text-md">
          Who Should Enroll:
        </h2>

        <p className="">
          This course is ideal for individuals interested in pursuing a career
          in IT support, technical assistance, and computer networking. Whether
          you are a beginner or have some IT background, this programme will
          enhance your knowledge and boost your employability in the IT
          industry.
        </p>
        <h2 className="mt-4 font-bold md:text-xl text-md">
          For Whom This Course Is:
        </h2>

        <p className="">
          This course is ideal for individuals interested in pursuing a career
          in IT support, technical assistance, and computer networking. Whether
          you are a beginner or have some IT background, this programme will
          enhance your knowledge and boost your employability in the IT
          industry.
        </p>
        <h2 className="mt-4 font-bold md:text-xl text-md">Certificate: </h2>

        <p className="">
          Upon successful completion of the course, you will receive a
          certificate from BRAC ISD, validating your proficiency as an IT
          Support Technician.
        </p>
        <div className="mt-4">
          <h1 className="font-bold md:text-xl text-md ">
            Course available in:
          </h1>
          <div className="mt-4">
            <p className="underline">
              <Link to="/offline/centers/rajshahi">BRAC ISD Rajshahi Centre</Link>
            </p>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default ITSupportTechnicianCourses;
