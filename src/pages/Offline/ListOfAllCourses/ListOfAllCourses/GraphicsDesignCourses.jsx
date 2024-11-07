import { Link } from "react-router-dom";
import Navbar from "../../Home/Navbar/Navbar";
import Footer from "../../Home/Footer/Footer";
const GraphicsDesignCourses = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div
        className="hero mt-20"
        style={{
          backgroundImage: "url(https://i.ibb.co/SJLmqfb/Design-Tip.jpg)",
          width: "w-full",
          height: "320px",
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-white">
          <div className="max-w-xl md:max-w-2xl lg:max-w-2xl">
            <h2 className="text-xl md:text-3xl lg:text-5xl font-bold">
              Graphic Design
            </h2>
            <hr className="mx-4 md:mx-8 lg:mx-16 mt-4 border-t-8 font-bold border-[#FFA100]"></hr>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-8 lg:px-16 my-8">
        <div className="flex justify-between" >
          <div style={{ whiteSpace: "wrap" }}>
            <h2 className="font-bold md:text-2xl text-lg ">Graphic Design</h2>
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
          <span className="font-bold md:text-xl text-md mt-4">
            Educational Qualification:
          </span>{" "}
          Minimum SSC (Secondary School Certificate)
        </p>
        <p className="mt-4">
          <span className="font-bold md:text-xl text-md mt-4">Schedule</span>{" "}
          Saturday, Sunday, Monday, Tuesday, Wednesday, Thursday
        </p>
        <p className="mt-4 font-bold md:text-xl text-md">Course Contents:</p>
        <p className=" ">
          Adobe Illustrator: Students learn vector graphics creation, logo
          design, and illustration techniques. Key topics include using the Pen
          tool, mastering shapes, and creating complex illustrations. <br />
          Adobe Photoshop: The course covers photo editing, retouching, and
          manipulation. Students gain skills in working with layers, masks, and
          blending modes to create polished and professional designs. <br />
          Practical Projects: Throughout the course, students work on real-world
          projects such as posters, brochures, and digital art, allowing them to
          apply their skills and build a portfolio.
        </p>

        <h2 className="mt-4 font-bold md:text-xl text-md">
          Course Description:{" "}
        </h2>

        <p className="">
          The Graphic Design course at Brac Institute of Skills Development
          focuses on developing proficiency in Adobe Illustrator and Photoshop,
          two of the most widely used software in the field. Over the span of 3
          months, students are introduced to the fundamentals of design,
          including color theory, typography, and layout principles.
        </p>
        <h2 className="mt-4 font-bold md:text-xl text-md">Course Overview: </h2>

        <p className="">
          ILLUSTRATOR: Logo Design Brand Identity Design Vector Drawing
          Flyer/Brochure Design Poster Design Magazine/Newsletter Print Design
          Banner Design T-Shirt Design Print Output Setup <br />
          PHOTOSHOP: Photo Retouch Background Removing Hair Masking Image
          Manupulation Color Correction Portrait Drawing Image Resizing Banner
          Design Animation UI/UX Design
        </p>
        <p className="font-bold md:text-xl text-md mt-4">Teaching Approach:</p>
        <p>
          1. Hands-on Learning • Software Demos • Practical Exercises 2.
          Project-Based Learning • Real-World Projects • Portfolio Development
          3. Collaborative Learning • Peer Review Sessions • Group Projects 4.
          Interactive Lectures • Conceptual Understanding • Q&A Sessions 5.
          Tutorials and Supplemental Resources • Video Tutorials • Reading
          Materials 6. Assessment and Feedback • Continuous Assessment •
          Personalized Feedback.
        </p>
        <h2 className="mt-4 font-bold md:text-xl text-md">
          Who Should Enroll:
        </h2>

        <p className="">
          If you have a passion for creativity and want to excel in Graphics
          Design, this course is perfect for you. Whether you are a beginner or
          have some design experience, our programme will elevate your skills
          and broaden your horizons in the world of design.
        </p>
        <h2 className="mt-4 font-bold md:text-xl text-md">Certificate: </h2>

        <p className="">
          Upon successful completion of the course, you will receive a
          certificate from BRAC ASD, validating your proficiency in Graphics
          Design.
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
              <Link to="/offline/centers/rangpur">BRAC ISD Rangpur Centre</Link>
            </p>
            <p className="underline">
              <Link to="/offline/centers/rajshahi">BRAC ISD Rajshahi Centre</Link>
            </p>
            <p className="underline">
              <Link to="/offline/centers/cumilla">BRAC ISD Cumilla Centre</Link>
            </p>
            <p className="underline">
              <Link to="/offline/centers/chattogram">
                BRAC ISD Chattogram Centre
              </Link>
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
              <Link to="/offline/centers/mymensingh">
                BRAC ISD Mymensingh Centre
              </Link>
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

export default GraphicsDesignCourses;
