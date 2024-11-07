import Navbar from "../../Home/Navbar/Navbar";
import Footer from "../../Home/Footer/Footer";
import { Link } from "react-router-dom";

const RodBinding = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div
        className="hero mt-20 bg-no-repeat bg-center bg-contain w-full h-80 md:h-96 lg:h-[400px]"
        style={{
          backgroundImage: "url(https://i.ibb.co.com/tpWzzrt/rod-binding.png)",
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-white">
          <div className="max-w-xl md:max-w-2xl lg:max-w-2xl">
            <h2 className="text-xl md:text-3xl lg:text-5xl font-bold">
              Rod Binding
            </h2>
            <hr className="mx-4 md:mx-8 lg:mx-16 mt-4 border-t-8 font-bold border-[#FFA100]" />
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-8 lg:px-16 my-8">
        {/* course info */}
        <div>
          <div className="flex justify-between">
            <div style={{ whiteSpace: "wrap" }}>
              <h2 className="font-bold md:text-2xl text-lg ">Rod Binding</h2>
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
            4 Hours
          </p>
          <p className="mt-4">
            <span className="font-bold md:text-xl text-md mt-4">
              Educational Qualification:
            </span>{" "}
            Minimum Class 8 Pass
          </p>
          <p className="mt-4 font-bold md:text-xl text-md">Schedule:</p>
          <p className="">
            <span>Saturday, Sunday, Monday, Tuesday, Wednesday, Thursday</span>
          </p>
          <p className="mt-4 font-bold md:text-xl text-md">Course Contents:</p>
          <p className="">
            <span>
              1.Interpret Drawings and Specifications in Construction Manuals{" "}
              <br />
              2.Perform Fundamental Works of Rod Bindings
              <br />
              3.Use Tools for Rod Binding Works
              <br />
              4.Prepare Rod for works
              <br />
              5.Prepare Stirrups and Ties
              <br />
              6. Perform Rod Binding for Base/ Footing
              <br />
              7. Perform Rod Binding for Column
              <br />
            </span>
          </p>
          <p className="mt-4 font-bold md:text-xl text-md">
            Course Description:{" "}
          </p>
          <p className="">
            <span>
              Rod Binding course typically focus on providing skills training in
              the construction industry, specifically in reinforcing concrete
              structures. This course helps to create skilled workforce to serve
              the growing construction industry.
            </span>
          </p>
          <p className="mt-4 font-bold md:text-xl text-md">Course Overview: </p>
          <p className=""></p>
          <span>
            Rod Binding is a 360 hours course under NSDA which is designed to
            create skilled resources with practical facilities to entertain the
            construction sector's demand. Moreover, this course will help to get
            government certification for employment in country and abroad.
          </span>
          <p className=" font-bold md:text-xl text-md mt-4">
            Course Objectives:
          </p>
          <p className="">
            Provide Skills training to create skilled resources with government
            certification for Sustainable Job Placement.
          </p>
          <p className="font-bold md:text-xl text-md mt-4">
            Teaching Approach:
          </p>
          <p>Class room based Training with Theoretical and Practical.</p>
          <p className="font-bold md:text-xl text-md mt-4">
            For Whom This Course Is:
          </p>
          <p>
            Youth, Age limit-18 Years to 40 , Man and Women, PWD , Trangender.
          </p>
        </div>
        <div className="mt-4">
          <h1 className="font-bold md:text-xl text-md ">
            Course available in:
          </h1>
          <div className="">
          <p className="underline">
              <Link to="/offline/centers/narayanganjnKanchan">
                BRAC ISD Narayanganj Centre
              </Link>
            </p>
            <p className="underline">
              <Link to="/offline/centers/manikganj">BRAC ISD Manikganj Centre</Link>
            </p>
            <p className="underline">
              <Link to="/offline/centers/nilphamari">
                BRAC ISD Nilphamari Centre
              </Link>
            </p>
          </div>
        </div>
      </div>

      <Footer></Footer>
    </div>
  );
};

export default RodBinding;
