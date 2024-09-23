
import { Link } from "react-router-dom";
import Navbar from "../../Home/Navbar/Navbar";
import Footer from "../../Home/Footer/Footer";

const CaregivingTraining = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div
        className="hero mt-20"
        style={{
          backgroundImage:
            "url(https://i.ibb.co/3CmmhYX/national-cancer-institute-Bx-Xg-TQEw1-M4-unsplash.jpg)",
          width: "100%",
          height: "320px",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-white">
          <div className="max-w-xl md:max-w-2xl lg:max-w-2xl">
            <h2 className="text-xl md:text-3xl lg:text-5xl font-bold">
              Caregiving Training
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
                Caregiving Training
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
            <span className="font-bold md:text-xl text-md">
              Training Duration:
            </span>{" "}
            3 months
          </p>
          <p className="mt-4">
            <span className="font-bold md:text-xl text-md mt-4">
              Class Duration:
            </span>{" "}
            6.5 hours
          </p>
          <p className="mt-4">
            <span className="font-bold md:text-xl text-md mt-4">
              Educational Qualification:
            </span>{" "}
            Minimum SSC (Secondary School Certificate)
          </p>
          <p className="mt-4 font-bold md:text-xl text-md">Schedule:</p>
          <p className="mt-4 ">
            <span> 6 days/week</span>
            <br></br>
          </p>
          <p className="mt-4 font-bold md:text-xl text-md">Course Contents:</p>
          <p className="mt-4 ">
            <span>1. Fundamental Skills of Caregiving</span>
            <br></br>
            <span>2. Working as a Team</span>
            <br></br>
            <span>3. Caregiving Ground Rules</span>
            <br></br>
            <span>4. Ethical Values</span>
            <br></br>
            <span>5. Emergency Care</span>
            <br></br>
            <span>6. First Aid Care</span>
            <br></br>
            <span>7. Physiotherapy</span>
            <br></br>
            <span>8. Basic Personal Care to the Client</span>
            <br></br>
            <br></br>
            <span>9. Food Safety and Nutrition.</span>
            <br></br>
            <span>10. Identifying Diseases and Care</span>
          </p>
          <p className="mt-4 font-bold md:text-xl text-md">
            Course Description:{" "}
          </p>
          <p className="">
            Are you compassionate and driven to provide essential care and
            support to those in need? Our comprehensive Caregiving Training, a
            fully residential program, is designed to equip you with the
            fundamental skills and knowledge required to become a competent and
            empathetic caregiver. Join us in this transformative journey and
            make a meaningful impact on the lives of individuals requiring care.
          </p>
          <p className="mt-4 font-bold md:text-xl text-md">Course Overview: </p>
          <p className=""></p>
          This 3-month residential programme offers an intensive and holistic
          curriculum that covers a wide range of caregiving essentials. From the
          foundational skills of caregiving to emergency care, first aid, and
          nutrition, we ensure you are well-prepared to excel in this rewarding
          field.
          <p className="mt-4 font-bold md:text-xl text-md">
            Course Objectives:{" "}
          </p>
          <p className="">
            1. Upon successful course completion, you will Pursue various
            caregiving positions in healthcare facilities, nursing homes,
            rehabilitation centres, and private residences.
            <br></br>
            2. Become a valued member of the caregiving community, contributing
            to the well-being of individuals in need.
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
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default CaregivingTraining;
