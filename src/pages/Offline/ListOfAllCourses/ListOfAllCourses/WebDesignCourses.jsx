<<<<<<< HEAD

import { Link } from "react-router-dom";
import Navbar from "../../Home/Navbar/Navbar";
import Footer from "../../Home/Footer/Footer";

const WebDesignCourses = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div
        className="hero mt-20"
        style={{
          backgroundImage:
            "url(https://i.ibb.co/MV1gXnn/Web-Designing-Course-Syllabus.jpg)",
          width: "w-full",
          height: "320px",
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-white">
          <div className="max-w-xl md:max-w-2xl lg:max-w-2xl">
            <h2 className="text-xl md:text-3xl lg:text-5xl font-bold">
              Web Design
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
            style={{ whiteSpace: "nowrap" }}
          >
            <div>
              <h2 className="font-bold md:text-2xl text-md ">
                Web Design Course
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
            <span className="font-bold md:text-xl text-md ">
              Training Duration:
            </span>{" "}
            3 months
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
            Minimum HSC
          </p>
          <p className="mt-4 font-bold md:text-xl text-md">Schedule:</p>
          <p className="mt-4 ">
            <span>1. Sun-Tue-Thu (9 am - 12 pm)</span>
            <br></br>
            <span>
              2. Saturday - Monday - Wednesday (9 am - 12 pm and 2 pm - 5 pm)
            </span>
            <br></br>
            <span>
              3. Sunday-Tuesday-Thursday (9 am - 12 pm and 2 pm - 5 pm)
            </span>
          </p>
          <p className="mt-4 font-bold md:text-xl text-md">Course Contents:</p>
          <p className="mt-4 ">
            <span>1. HTML5</span>
            <br></br>
            <span>2. CSS3 with Advanced Animation and Effects</span>
            <br></br>
            <span>3. JavaScript and jQuery</span>
            <br></br>
            <span>4. SASS and SCSS</span>
            <br></br>
            <span>5. Bootstrap Latest Version</span>
            <br></br>
            <span>6. Responsive Website Design</span>
            <br></br>
            <span>7. Freelancing Guideline</span>
            <br></br>
            <span>
              8. Software (Notepad, Brackets, Visual Studio code, Photoshop)
            </span>
            <br></br>
            <span>
              9. Freelancing Marketplace (Fiverr, Freelancer, Upwork,
              Themeforest)
            </span>
          </p>
          <p className="mt-4 font-bold md:text-xl text-md">
            Course Description:{" "}
          </p>
          <p className="">
            Unleash your creativity in our Web Design Course. With a discounted
            fee of 4000, you get to explore a comprehensive curriculum that
            covers HTML5, CSS3 with advanced animation and effects, JavaScript,
            jQuery, SASS, SCSS, Bootstrap Latest Version, Responsive Website
            Design, freelancing guidance, and essential software like Notepad,
            Brackets, Visual Studio code, and Photoshop. Discover the world of
            freelancing marketplaces like Fiverr, Freelancer, Upwork, and
            Themeforest and kickstart your web design journey.
          </p>

          <p className="font-bold md:text-xl text-md mt-4">
            Teaching Approach:
          </p>
          <p>
            Our training approach combines theoretical knowledge with hands-on
            practical exercises and real-world case studies. Experienced
            industry professionals will guide you through each module, ensuring
            a holistic learning experience.
          </p>
          <p className="font-bold md:text-xl text-md mt-4">Certification:</p>
          <p>
            Participants will receive a well-recognised certificate from BRAC
            ISD, acknowledging their successful completion.
          </p>
        </div>
        <div className="mt-4">
          <h1 className="font-bold md:text-xl text-md ">
            Course available in:
          </h1>
          <div className="mt-4">
            <p className="underline">
              <Link to="/centers/dhaka">BISD Dhaka Centre</Link>
            </p>
            <p className="underline">
              <Link to="/centers/rajshahi">BISD Rajshahi Centre</Link>
            </p>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default WebDesignCourses;
=======
import { Link } from "react-router-dom";
import Navbar from "../../Home/Navbar/Navbar";
import Footer from "../../Home/Footer/Footer";

const WebDesignCourses = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div
        className="hero mt-20"
        style={{
          backgroundImage:
            "url(https://i.ibb.co/MV1gXnn/Web-Designing-Course-Syllabus.jpg)",
          width: "w-full",
          height: "320px",
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-white">
          <div className="max-w-xl md:max-w-2xl lg:max-w-2xl">
            <h2 className="text-xl md:text-3xl lg:text-5xl font-bold">
              Web Design
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
            style={{ whiteSpace: "nowrap" }}
          >
            <div>
              <h2 className="font-bold md:text-2xl text-md ">
                Web Design Course
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
            <span className="font-bold md:text-xl text-md ">
              Training Duration:
            </span>{" "}
            3 months
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
            Minimum HSC
          </p>
          <p className="mt-4 font-bold md:text-xl text-md">Schedule:</p>
          <p className="mt-4 ">
            Saturday, Monday, Wednesday Sunday, Tuesday, Thursday (3 days in a
            week)
          </p>
          <p className="mt-4 font-bold md:text-xl text-md">Course Contents:</p>
          <p className="mt-4 ">
            BRAC ISD Courses Information 100% G5 PHP,MySQL,OOP,CRUD Operation
            Front-end Integration: Integrate Laravel with front-end libraries.
            MVC Architecture: Understand Laravel's MVC design pattern. Blade
            Templating: Use Laravel's Blade for managing views. Database
            Seeding: Learn migrations and seeding in Laravel. MVC Framework:
            LARAVEL Skills Covered : BNQF Level-3 PHP,MySQL,OOP,CRUD Operation
            Front-end Integration: Integrate Laravel with front-end libraries.
            MVC Architecture: Understand Laravel's MVC design pattern. Blade
            Templating: Use Laravel's Blade for managing views. Database
            Seeding: Learn migrations and seeding in Laravel. MVC Framework:
            LARAVEL Skills Covered : BNQF Level-3 Turn on screen reader support
            To enable screen reader support, press Ctrl+Alt+Z To learn about
            keyboard shortcuts, press Ctrl+slashAshraful Islam Alif/SDP/BRAC has
            left the document.
          </p>
          <p className="mt-4 font-bold md:text-xl text-md">
            Course Description:{" "}
          </p>
          <p className="">
            Unleash your creativity in our Web Design Course. With a discounted
            fee of 4000, you get to explore a comprehensive curriculum that
            covers HTML5, CSS3 with advanced animation and effects, JavaScript,
            jQuery, SASS, SCSS, Bootstrap Latest Version, Responsive Website
            Design, freelancing guidance, and essential software like Notepad,
            Brackets, Visual Studio code, and Photoshop. Discover the world of
            freelancing marketplaces like Fiverr, Freelancer, Upwork, and
            Themeforest and kickstart your web design journey.
          </p>
          <p className="mt-4 font-bold md:text-xl text-md">Course Overview: </p>
          <p className="">
            The Web Development course with a focus on PHP and the Laravel
            framework is designed to equip participants with comprehensive
            skills and knowledge essential for building sophisticated web
            applications. Throughout the course, participants will master the
            fundamentals of PHP programming, delving into variables, control
            structures, functions, and object-oriented programming concepts.
            Authentication and authorization mechanisms are explored in-depth,
            enabling participants to implement robust user security features.
          </p>

          <p className="font-bold md:text-xl text-md mt-4">
            Teaching Approach:
          </p>
          <p>
            Our training approach combines theoretical knowledge with hands-on
            practical exercises and real-world case studies. Experienced
            industry professionals will guide you through each module, ensuring
            a holistic learning experience.
          </p>
          <p className="font-bold md:text-xl text-md mt-4">
            For Whom This Course Is:
          </p>
          <p>Youth , Man and Women, PWD , Trangender</p>
          <p className="font-bold md:text-xl text-md mt-4">Certification:</p>
          <p>
            Participants will receive a well-recognised certificate from BRAC
            ISD, acknowledging their successful completion.
          </p>
        </div>
        <div className="mt-4">
          <h1 className="font-bold md:text-xl text-md ">
            Course available in:
          </h1>
          <div className="mt-4">
            <p className="underline">
              <Link to="/offline/centers/dhaka">BISD Dhaka Centre</Link>
            </p>
            <p className="underline">
              <Link to="/offline/centers/rajshahi">BISD Rajshahi Centre</Link>
            </p>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default WebDesignCourses;
>>>>>>> 8a932e4 (Added Retail and Sales course)
