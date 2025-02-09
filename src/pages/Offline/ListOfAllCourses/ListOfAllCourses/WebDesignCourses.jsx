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
            
          >
            <div style={{ whiteSpace: "wrap" }}>
              <h2 className="font-bold md:text-2xl text-lg ">
                Web Design Course
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
          <p className="">
            Saturday, Sunday, Monday, Tuesday, Wednesday, Thursday 
          </p>
          <p className="mt-4 font-bold md:text-xl text-md">Course Contents:</p>
          <p className="">
          1. PHP, MySQL, OOP, CRUD <br />
2. Operation Front-end Integration: Integrate Laravel with front-end libraries. <br />
3. MVC Architecture: Understand Laravel's MVC design pattern. <br />
4. Blade Templating: Use Laravel's Blade for managing views. <br />
5. Database Seeding: Learn migrations and seeding in Laravel. <br />
6. MVC Framework: LARAVEL Skills Covered BNQF Level-3

          </p>
          <p className="mt-4 font-bold md:text-xl text-md">
            Course Description:{" "}
          </p>
          <p className="">
          This Web Design course, focusing on HTML5, CSS3 with advanced animation and effects, JavaScript, jQuery, SASS, SCSS, Bootstrap Latest Version, Responsive Website Design, freelancing guidance, and essential software like Notepad, Brackets, Visual Studio code, and Photoshop. Discover the world of freelancing marketplaces like Fiverr, Freelancer, Upwork, and Themeforest and kickstart your web design journey. 
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
            Training Approach:
          </p>
          <p>
          The course adopts a classroom-based training approach, combining theoretical instruction with practical hands-on exercises to ensure comprehensive learning. Multiple formative assessments are conducted throughout the program to track progress and reinforce skills.
          </p>
          <p className="font-bold md:text-xl text-md mt-4">
          Course Objectives:
          </p>
          <p>
          The primary objective of this course is to equip participants with comprehensive theoretical knowledge and practical skills in web design and development using Laravel. By the end of the training, participants will be prepared to develop dynamic web applications, implement MVC architecture effectively, manage databases using MySQL, and utilize Laravel's features for efficient web application development. The course ensures graduates are ready to qualify for government certification and pursue rewarding careers in the web development sector, both locally and internationally.
          </p>
          <p className="font-bold md:text-xl text-md mt-4">
            For Whom This Course Is:
          </p>
          <p>Youth, Age limit-18-40 years, Men and Women, Persons with Disability, Transgender.</p>
          <p className="font-bold md:text-xl text-md mt-4">Certification:</p>
          <p>
          Participants will receive a completion certificate from BRAC ISD at the end of the course, validating their expertise in Web Design. Moreover, having the opportunities participants to appear the assessment for government certificate.
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
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default WebDesignCourses;
