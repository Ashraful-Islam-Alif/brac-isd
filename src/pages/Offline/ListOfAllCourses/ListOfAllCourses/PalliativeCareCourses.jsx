
import { Link } from "react-router-dom";
import Navbar from "../../Home/Navbar/Navbar";
import Footer from "../../Home/Footer/Footer";
const PalliativeCareCourses = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div
        className="hero mt-20"
        style={{
          backgroundImage:
            "url(https://i.ibb.co/N7RPVVk/old-young-man-holding-hands-close-up.jpg)",
          width: "w-full",
          height: "320px",
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-white">
          <div className="max-w-xl md:max-w-2xl lg:max-w-2xl">
            <h2 className="text-xl md:text-3xl lg:text-5xl font-bold">
              Palliative Care Assistant
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
              <h2 className="font-bold md:text-2xl text-lg">
                Palliative Care Assistant
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
            <span className="font-bold md:text-xl text-md">
              Training Duration:
            </span>{" "}
            3 months
          </p>
          <p className="mt-4">
            <span className="font-bold md:text-xl text-md mt-4">
              Class Duration:
            </span>{" "}
            4 Hour 30 Min
          </p>
          <p className="mt-4">
            <span className="font-bold md:text-xl text-md mt-4">
              Educational Qualification:
            </span>{" "}
            SSC (Secondary School Certificate)
          </p>
          <p className="mt-4 font-bold md:text-xl text-md">Schedule:</p>
          <p className=" ">
            <span>1. Sunday-Thursday (9 am to 1:30 pm)</span>
          </p>
          <p className="mt-4 font-bold md:text-xl text-md">Course Contents:</p>
          <p className=" ">
            <span>1.New Trends in Medical Care and Social Care</span>
            <br></br>
            <span>2. Responsibilities and Duties of Palliative Assistants</span>
            <br></br>
            <span>3. Development of Communication Skills</span>
            <br></br>
            <span>4. General Knowledge of the Human Body</span>
            <br></br>
            <span>5. Knowledge of Various Diseases</span>
            <br></br>
            <span>6. Care of Bedridden Patients</span>
            <br></br>
            <span>7. Personal Care and Dressing</span>
            <br></br>
            <span>8.Catheter, Intravenous Cannula, NG Tube Care</span>
            <br></br>
            <span>9. Hand-Held Blood Pressure Measurement</span>
            <span>
              10.Temperature, Pulse Rate, Blood Glucose, and Oxygen
              Determination
            </span>
          </p>
          <p className="mt-4 font-bold md:text-xl text-md">
            Course Description:{" "}
          </p>
          <p className="">
            Explore Palliative Care with our 3-month program! Learn to support
            patients with serious illnesses in a practical, compassionate way.
            Our friendly instructors and job placement assistance will prepare
            you for a meaningful role. Join us today and make a difference.
          </p>
          <p className="mt-4 font-bold md:text-xl text-md">Course Overview: </p>
          <p className=""></p>
          Embark on a fulfilling journey in Palliative Care with our
          comprehensive 3-month training program. This course is meticulously
          designed to equip participants with the essential skills and knowledge
          required to provide compassionate care and support to patients with
          life-limiting illnesses. <br></br>
          To provide practical exposure and enhance learning, participants will
          undergo a 1-month industrial attachment in reputable healthcare
          settings. <br></br>
          Our training programme features hands-on practical sessions led by
          certified trainers in palliative medicine. Participants will have
          access to state-of-the-art labs and facilities.
          <p className=" font-bold md:text-xl text-md mt-4">
            Course Objectives:
          </p>
          <p>Upon successful course completion, graduates will:</p>
          <p className="mt-2">
            1. Qualify for desirable employment opportunities in
            well-established hospitals and reputable home care agencies.
          </p>
          <p className="mt-2">
            2. Gain the skills and knowledge necessary to offer home care
            services, opening avenues for potential self-employment.
          </p>
          <p className="mt-2">
            3. Receive comprehensive support in locating fitting job placements,
            ensuring a smooth transition into the workforce.
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
            This training programme is ideal for compassionate individuals who
            wish to make a meaningful difference in the lives of patients facing
            serious illnesses. Whether you are a recent SSC graduate or seeking
            to switch to a fulfilling career path, this course will empower you
            to become a skilled palliative care assistant.
          </p>
          <p className="font-bold md:text-xl text-md mt-4">Certification:</p>
          <p>
            Participants will receive a well-recognised certificate from BRAC
            ISD, acknowledging their successful completion of the Palliative
            Care Training.
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

export default PalliativeCareCourses;
