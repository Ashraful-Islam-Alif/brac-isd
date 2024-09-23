<<<<<<< HEAD

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
        <div className="flex justify-between" style={{ whiteSpace: "nowrap" }}>
          <div>
            <h2 className="font-bold md:text-2xl text-md ">Graphic Design</h2>
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
          3 Months
        </p>
        <p className="mt-4">
          <span className="font-bold md:text-xl text-md mt-4">
            Class Duration:
          </span>{" "}
          4 hours
        </p>
        <p className="mt-4">
          <span className="font-bold md:text-xl text-md mt-4">
            Weekly Class
          </span>{" "}
          3 days
        </p>
        <p className="mt-4 font-bold md:text-xl text-md">Course Contents:</p>
        <p className=" ">
          <span>
            Discover the art of Graphic Design in our comprehensive 3-month
            training program. Unleash your creativity as you learn the following
            skills:
          </span>
          <br></br>
          <p className="font-bold md:text-xl text-md">Illustrator:</p>
          <span>- Logo Design</span>
          <br></br>
          <span>- Brand Identity Design</span>
          <br></br>
          <span>- Vector Design</span>
          <br></br>
          <span>- Flyer/Brochure Design</span>
          <br></br>
          <span>- Poster Design</span>
          <br></br>
          <span>- Magazine Design</span>
          <br></br>
          <span>- Print Design</span>
          <br></br>
          <span>- Banner Design</span>
          <br></br>
          <span>- T-Shirt Design</span>
          <br></br>
          <span>- Printout Set Up</span>
          <br></br>
          <p className="font-bold md:text-xl text-md">Photoshop:</p>
          <span>- Photo Retouch</span>
          <br></br>
          <span>- Hair Masking</span>
          <br></br>
          <span>- Image Manipulation</span>
          <br></br>
          <span>- Color Correction</span>
          <br></br>
          <span>- Portrait Drawing</span>
          <br></br>
          <span>- Image Resizing</span>
          <br></br>
          <span>- Banner Design</span>
          <br></br>
          <span>- Animation</span>
          <br></br>
          <span>- UI Design</span>
          <br></br>
          <span>- UX Design</span>
          <br></br>
        </p>

        <h2 className="mt-4 font-bold md:text-xl text-md">
          Course Description:{" "}
        </h2>

        <p className="">
          Embark on a journey to become a skilled Graphic Designer with our
          3-month training program. Delve into the world of creative design and
          master the use of industry-standard software like Adobe Illustrator
          and Photoshop.
        </p>
        <h2 className="mt-4 font-bold md:text-xl text-md">Course Overview: </h2>

        <p className="">
          This training programme is designed to equip you with essential skills
          in both Illustrator and Photoshop. Learn to create captivating logos,
          brand identities, and vector designs. Dive into the realm of print and
          digital media with brochure, flyer, poster, and magazine design.
          Develop expertise in image retouching, hair masking, and image
          manipulation using Photoshop. Understand the intricacies of color
          correction and portrait drawing. Acquire skills in UI and UX design to
          enhance user experiences. Unleash your creativity and become
          proficient in Animation, Banner Design, and T-Shirt Design.
          <p>
            Educational Qualification: Minimum 8th Class/ J.Sc (Junior School
            Certificate)
          </p>
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
            <p className="underline">
              <Link to="/centers/chattogram3">
                BISD Patiya(Chattogram) Centre
              </Link>
            </p>
            <p className="underline">
              <Link to="/centers/maymanshing">BISD Mymensingh Centre</Link>
            </p>
            <p className="underline">
              <Link to="/centers/narayanganjnBondor">
                BISD Bandar(Narayanganj) Centre
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
=======
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
        <div className="flex justify-between" style={{ whiteSpace: "nowrap" }}>
          <div>
            <h2 className="font-bold md:text-2xl text-md ">Graphic Design</h2>
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
          Saturday, Monday, Wednesday Sunday, Tuesday, Thursday (3 days in a
          week)
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
          <div className="mt-4">
            <p className="underline">
              <Link to="/offline/centers/dhaka">BISD Dhaka Centre</Link>
            </p>
            <p className="underline">
              <Link to="/offline/centers/rangpur">BISD Rangpur Centre</Link>
            </p>
            <p className="underline">
              <Link to="/offline/centers/rajshahi">BISD Rajshahi Centre</Link>
            </p>
            <p className="underline">
              <Link to="/offline/centers/cumilla">BISD Cumilla Centre</Link>
            </p>
            <p className="underline">
              <Link to="/offline/centers/chattogram">
                BISD Chattogram Centre
              </Link>
            </p>
            <p className="underline">
              <Link to="/offline/centers/sylhet">BISD Sylhet Centre</Link>
            </p>
            <p className="underline">
              <Link to="/offline/centers/chattogram3">
                BISD Patiya(Chattogram) Centre
              </Link>
            </p>
            <p className="underline">
              <Link to="/offline/centers/maymanshing">
                BISD Mymensingh Centre
              </Link>
            </p>
            <p className="underline">
              <Link to="/offline/centers/narayanganjnBondor">
                BISD Bandar(Narayanganj) Centre
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
>>>>>>> 8a932e4 (Added Retail and Sales course)
