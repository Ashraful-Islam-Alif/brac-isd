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
          3.5 hours
        </p>
        <p className="mt-4">
          <span className="font-bold md:text-xl text-md mt-4">
            Educational Qualification:
          </span>{" "}
          Minimum SSC
        </p>
        <p className="mt-4 font-bold md:text-xl text-md">Schedule:</p>
        <p className="">Saturday, Sunday, Monday, Tuesday, Wednesday, Thursday</p>
        <p className="mt-4 font-bold md:text-xl text-md">Course Contents:</p>
        <p className=" ">
          OSH procedure in the workplace, Use english in the workplace, Received
          and respond to workplace instructions, work in a team environment,
          Work in the Tourism and Hospitality Sector, Practice workplace hygiene
          procedure, Provide effective guest service, Apply food safety
          procedures, Perform opening closing activities for restaurants, Apply
          product knowledge on Food and Beverage service, Prepare for table
          service, Provide in room dining, Provide Food and Beverage Service.
          Skills Covered : NTVQF Level-1 BNQF Level-2.
        </p>
        <p className="mt-4 font-bold md:text-xl text-md">Course Description:</p>
        <p>
          Our course are Tourism and Hospitality sector, This courses are
          accredetation from BTEB & NSDA. Maintain competency Standard,
          Curriculum and Competency Based Learning Materials.
        </p>

        <p className="mt-4 font-bold md:text-xl text-md">Course Overview:</p>
        <p>
          1. Identify OSH policies and procedures, <br />2. Follow OSH procedures, <br />3.
          Report hazards and risks, <br />4. Respond to emergencies <br />5. Maintain
          personal wellbeing <br />6 . Listen to conversation in english, <br />7. Perform
          conversation in English, <br />8. Interpet and follow verbal instructions,
          <br />9. Read and interpret workplace documents, <br />10. Prepare tools,
          equipment and premises, <br />11. Prepare restaurant for seervice <br />12. Carry
          out closing tasks <br />13. Greet guest <br />14. Identify needs of guests <br />15.
          Provide service to guest <br />16. Handle queries of guests <br />17. Handle
          complaints/conflict situations, evaluation and recommendations <br />18.
          Identify the product <br />19. Collect information on food and beverage <br />20.
          Share information with guests <br />21. Interpret types of service.
        </p>
        <h2 className="mt-4 font-bold md:text-xl text-md">
          Course Objectives:
        </h2>

        <p className="">
        Provide Skills Man power, Certification and Sustainable Job Placement.
        </p>
        <h2 className="mt-4 font-bold md:text-xl text-md">
          Training Approach:
        </h2>

        <p className="">
        Formal Training, Off line training, Theoritical and Practical Based Training. 
        </p>
        <h2 className="mt-4 font-bold md:text-xl text-md">
          For Whom This Course Is:
        </h2>

        <p className="">
        Youth, Age limit-18 Years  to 40 , Male and Female, Transgender.
        </p>
        <h2 className="mt-4 font-bold md:text-xl text-md">Certificate: </h2>

        <p className="">
          At the end of the course, participants will receive a certificate from
          BRAC ISD, validating their expertise in Food and Beverage Services.
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

export default FoodAndBeverageServicesCourses;
