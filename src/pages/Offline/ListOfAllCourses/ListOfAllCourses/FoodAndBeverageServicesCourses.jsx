<<<<<<< HEAD

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
        <div className="flex justify-between" style={{ whiteSpace: "nowrap" }}>
          <div>
            <h2 className="font-bold md:text-2xl text-md ">
              Food and Beverage Services
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
          4 Months
        </p>
        <p className="mt-4">
          <span className="font-bold md:text-xl text-md mt-4">
            Educational Qualification:
          </span>{" "}
          Minimum SSC Pass
        </p>
        <p className="mt-4 font-bold md:text-xl text-md">Course Contents:</p>
        <p className=" ">
          <span>
            Master the art of arranging tables for different occasions and
            settings.
          </span>
          <br></br>
          <span>
            Develop expertise in serving food and beverages to guests with
            finesse.{" "}
          </span>
          <br></br>
          <span>
            Understand the importance of water service and menu design concepts.
          </span>
          <br></br>
          <span>
            Learn the nuances of providing exceptional service in banquet and
            restaurant settings.
          </span>
          <br></br>
          <span>
            Acquire knowledge of bar operations and equipment used in the
            industry.
          </span>
          <br></br>
          <span>
            Emphasise cleanliness and hygiene in food and beverage services.
          </span>
          <br></br>
          <span>
            Enhance your communication skills in English to interact effectively
            with guests.
          </span>
        </p>
        <p className="mt-4 font-bold md:text-xl text-md">Course Description:</p>
        <p>
          Our Food and Beverage Services training programme provides a holistic
          learning experience that combines theoretical knowledge with practical
          hands-on training in real hotel and restaurant settings. Immerse
          yourself in the world of hospitality and develop the skills needed to
          provide top-notch service to guests.
        </p>

        <p className="mt-4 font-bold md:text-xl text-md">Course Overview:</p>
        <p>
          This 4-month programme covers a wide range of topics essential for a
          successful career in the food and beverage industry. From table
          setting and serving techniques to menu concepts and bar operations,
          you will gain a comprehensive understanding of various aspects of
          hospitality services. Detailed hygiene concepts ensure you prioritise
          cleanliness and guest safety. Additionally, proficiency in the English
          language enhances your ability to communicate effectively with guests
          from diverse backgrounds.
        </p>
        <h2 className="mt-4 font-bold md:text-xl text-md">
          Course Objectives:
        </h2>

        <p className="">
          Upon completion of this course, you will have the opportunity to work
          in famous hotels and restaurants throughout the country. The skills
          and knowledge gained from the training will prepare you for a
          successful career in the thriving hospitality sector.
        </p>
        <h2 className="mt-4 font-bold md:text-xl text-md">
          Training Approach:
        </h2>

        <p className="">
          Gain hands-on experience through direct working in hotels and
          restaurants.
        </p>
        <h2 className="mt-4 font-bold md:text-xl text-md">
          For Whom This Course Is:
        </h2>

        <p className="">
          This course is perfect for individuals who aspire to pursue a
          rewarding career in the food and beverage industry. Whether you have
          prior experience or are just starting, this programme will equip you
          with the necessary skills and knowledge to thrive in the hospitality
          sector.
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
          <div className="mt-4">
            <p className="underline">
              <Link to="/centers/dhaka">BISD Dhaka Centre</Link>
            </p>
            <p className="underline">
              <Link to="/centers/coxbazar">BISD Cox's Bazar Centre</Link>
            </p>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default FoodAndBeverageServicesCourses;
=======
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
        <div className="flex justify-between" style={{ whiteSpace: "nowrap" }}>
          <div>
            <h2 className="font-bold md:text-2xl text-md ">
              Food and Beverage Services
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
        <p className="mt-4 ">Saturday to Thusday / 6 day</p>
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
          <div className="mt-4">
            <p className="underline">
              <Link to="/offline/centers/dhaka">BISD Dhaka Centre</Link>
            </p>
            <p className="underline">
              <Link to="/offline/centers/coxbazar">
                BISD Cox's Bazar Centre
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
>>>>>>> 8a932e4 (Added Retail and Sales course)
