import Navbar from "../../Home/Navbar/Navbar";
import Footer from "../../Home/Footer/Footer";
import { Link } from "react-router-dom";

const RetailSalesService = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div
        className="hero mt-20 bg-no-repeat bg-center bg-contain w-full h-80 md:h-96 lg:h-[400px]"
        style={{
          backgroundImage: "url(https://i.ibb.co/Jxy0900/24493637-6963167.jpg)",
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-white">
          <div className="max-w-xl md:max-w-2xl lg:max-w-2xl">
            <h2 className="text-xl md:text-3xl lg:text-5xl font-bold">
              Retail Sales Service
            </h2>
            <hr className="mx-4 md:mx-8 lg:mx-16 mt-4 border-t-8 font-bold border-[#FFA100]" />
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
                Retail Sales Service
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
            5 Month (520 Hours)
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
            Minimum SSC
          </p>
          <p className="mt-4 font-bold md:text-xl text-md">Schedule:</p>
          <p className="mt-4 ">
            <span>Morning Shift: 8:30 AM - 12:30 PM</span>
            <span>Afternoon Shift: 1:30 PM- 5:30 PM</span>
          </p>
          <p className="mt-4 font-bold md:text-xl text-md">Course Contents:</p>
          <p className="mt-4 ">
            <span>
              1.Practice Occupational Safety and Health <br />
              2.Work in Team Environment <br />
              3.Perform Effective Workplace Interaction <br />
              4. Prepare Labels and Price Tag for Display <br />
              5.Display Products for Mercndaizing <br />
              6.Perform Sales and Services <br />
              7.Perform Payment Transactions <br />
              8.Prepare Mercendise for Delivery <br />
              9.Maintain Relationship with Customer <br />
              10.Operate Machine and Software for Customer Services <br />
              11.Practice 5S in Workplace
            </span>
          </p>
          <p className="mt-4 font-bold md:text-xl text-md">
            Course Description:{" "}
          </p>
          <p className="">
            <span>
              1.Practice Occupational Safety and Health <br />
              2.Work in Team Environment <br />
              3.Perform Effective Workplace Interaction <br />
              4. Prepare Labels and Price Tag for Display <br />
              5.Display Products for Mercndaizing <br />
              6.Perform Sales and Services <br />
              7.Perform Payment Transactions <br />
              8.Prepare Mercendise for Delivery <br />
              9.Maintain Relationship with Customer <br />
              10.Operate Machine and Software for Customer Services <br />
              11.Practice 5S in Workplace
            </span>
          </p>
          <p className="mt-4 font-bold md:text-xl text-md">Course Overview: </p>
          <p className=""></p>
          <span>
            Level-3 Retail Sales Serviceis is designed to build on fundamental
            retail skills and offer advanced training for those looking to excel
            in retail sales and customer service. <br />
            1.Advanced Customer Service Skills <br />
            2.Understanding Customer Needs <br />
            3.Building Rapport <br />
            4.Handling Complaints <br />
            5. Product Knowledge and Sales Techniques <br />
            6.In-Depth Product Knowledge <br />
            7.Cross-Selling and Upselling <br />
            8.Sales Techniques
            <br />
            9.Visual Merchandising <br />
            10.Retail Operations and Management <br />
            11.Store Operations <br />
            12.Staff Management <br />
            13.Health and Safety <br />
            14.Marketing and Promotions <br />
            15. Technology and Digital Retail including POS System
            <br />
            16.Customer Experience and Feedback <br />
            17.Review and Practical Application <br />
            18.Assessment and Certification
          </span>
          <p className=" font-bold md:text-xl text-md mt-4">
            Course Objectives:
          </p>
          <p className="">
            The objectives of the course are as follows: <br />• to create a
            host of skilled professionals to meet domestic demand and export
            abroad. <br />• to create opportunities for the employers of the
            country to choose appropriate trained manpower for employment in
            their respective industries. <br />• to help to alleviate poverty
            and to get rid of unemployment crisis of the country. <br />• to
            help elevate standard of services of hospitality industry of the
            country. <br />• to earn foreign currency by exporting trained
            manpower for economic growth of the country
          </p>
          <p className="font-bold md:text-xl text-md mt-4">
            Teaching Approach:
          </p>
          <p>
            Demonstration: 80% <br />
            Theoritical: 20% <br />
            Oral Formative Assessment: 4
            <br />
            Summetive Assessment: 1
          </p>
          <p className="font-bold md:text-xl text-md mt-4">
            For Whom This Course Is:
          </p>
          <p>18 Years To 30 Years age.</p>
        </div>
        <div className="mt-4">
          <h1 className="font-bold md:text-xl text-md ">
            Course available in:
          </h1>
          <div className="mt-4">
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

export default RetailSalesService;
