
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
                to="https://docs.google.com/forms/d/e/1FAIpQLSfUhIt6DCWApWz-7aIyKSt0ji5xGap0mBsP6rDcXji9RIfiyQ/viewform"
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
          <p className="mt-4 ">
            <span>1. Sun-Tue-Thu (9 am - 12 pm)</span>
            <br></br>
            <span>
              2. Saturday-Monday-Wednesday (9 am - 12 pm and 2 pm - 5 pm)
            </span>
            <br></br>
            <span>
              3. Sunday-Tuesday-Thursday (9 am - 12 pm and 2 pm - 5 pm)
            </span>
          </p>
          <p className="mt-4 font-bold md:text-xl text-md">Course Contents:</p>
          <p className="mt-4 ">
            <span>1. Introduction to Social Media Marketing</span>
            <br></br>
            <span>2. Digital Marketing Strategy Development</span>
            <br></br>
            <span>3. Digital Marketing Tools</span>
            <br></br>
            <span>4. Content Marketing</span>
            <br></br>
            <span>5. Email Marketing</span>
            <br></br>
            <span>6. Social Media Page/Channel Monetization</span>
            <br></br>
            <span>7. Search Engine Optimization (SEO)</span>
            <br></br>
            <span>8. Online Earning</span>
            <br></br>
            <span>9. Online Market Place</span>
          </p>
          <p className="mt-4 font-bold md:text-xl text-md">
            Course Description:{" "}
          </p>
          <p className="">
            Welcome to the dynamic world of Digital Marketing! This
            comprehensive 3-month training programme is designed to equip you
            with the essential knowledge and skills to thrive in the
            ever-evolving digital landscape.
          </p>
          <p className="mt-4 font-bold md:text-xl text-md">Course Overview: </p>
          <p className=""></p>
          Digital marketing is the component of marketing that uses the Internet
          and online-based digital technologies such as desktop computers,
          mobile phones and other digital media and platforms to promote
          products and services.
          <p className=" font-bold md:text-xl text-md mt-4">
            Course Objectives:
          </p>
          <p className="mt-2">
            1. Understand the impact of social media on business growth and
            create effective marketing campaigns on various platforms.
          </p>
          <p className="mt-2">
            2. Formulate data-driven digital marketing strategies aligned with
            business goals to achieve optimal results.
          </p>
          <p className="mt-2">
            3. Familiarise themselves with essential digital marketing tools to
            enhance productivity and streamline tasks.
          </p>
          <p className="mt-2">
            4. Master the creation of engaging content that captivates audiences
            and drives conversions.
          </p>
          <p className="mt-2">
            5. Utilise email marketing for reaching target audiences, nurturing
            leads, and strengthening customer relationships.
          </p>
          <p className="mt-2">
            6. Explore techniques for monetising social media pages and channels
            to generate revenue.
          </p>
          <p className="mt-2">
            7. Gain insights into SEO best practises, improving website
            visibility and search engine rankings.
          </p>
          <p className="mt-2">
            8. Discover diverse online earning avenues and explore potential
            income streams in the digital realm.
          </p>
          <p className="mt-2">
            9. Understand the dynamics of online marketplaces and learn to
            leverage them effectively for expanding business reach.
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
          <p>
            This training is suitable for students, professionals,
            entrepreneurs, and anyone interested in exploring the vast
            possibilities of digital marketing. Whether you aim to enhance your
            career or grow your business, this course will equip you with the
            skills to succeed.
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

export default DigitalMarketingCourses;
