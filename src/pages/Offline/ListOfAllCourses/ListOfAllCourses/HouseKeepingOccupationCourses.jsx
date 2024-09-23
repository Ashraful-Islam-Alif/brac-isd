<<<<<<< HEAD
import { Link } from "react-router-dom";
import Navbar from "../../Home/Navbar/Navbar";
import Footer from "../../Home/Footer/Footer";
const HouseKeepingOccupationCourses = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div
        className="hero mt-20"
        style={{
          backgroundImage: "url(https://i.ibb.co/JzVjWMv/5483297-2805558.jpg)",
          width: "w-full",
          height: "320px",
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-white">
          <div className="max-w-xl md:max-w-2xl lg:max-w-2xl">
            <h2 className="text-xl md:text-3xl lg:text-5xl font-bold">
              Housekeeping Occupation
            </h2>
            <hr className="mx-4 md:mx-8 lg:mx-16 mt-4 border-t-8 font-bold border-[#FFA100]"></hr>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-8 lg:px-16 my-8">
        <div className="flex justify-between" style={{ whiteSpace: "nowrap" }}>
          <div>
            <h2 className="font-bold md:text-2xl text-md ">
              Housekeeping Occupation
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
            Detailed Understanding of Proper Methods of Keeping Guest Rooms
            Clean and Tidy: Learn effective techniques to maintain guest rooms
            in a clean and orderly condition.
          </span>
          <br></br>
          <span>
            Bed Making: Master the art of making beds with precision and
            attention to detail.
          </span>
          <br></br>
          <span>
            Laundry Servicing: Acquire knowledge of laundry procedures and
            services in the hospitality industry.
          </span>
          <br></br>
          <span>
            Hygiene, Sanitation, and First Aid in Hotels, Motels, Guest Houses,
            and Other Service Establishments: Emphasise the importance of
            hygiene and sanitation in the hospitality sector, as well as basic
            first aid procedures.
          </span>
          <br></br>
          <span>
            Thorough Knowledge of Various Types of Machinery, Cleaning Agents,
            Beautifiers Used in the Hotel Industry: Understand the use of
            different machinery, cleaning agents, and beautifiers to maintain
            the highest standards of cleanliness and presentation.
          </span>
          <br></br>
          <span>
            Proficiency in English Language Used in Hotels and Motels: Enhance
            your communication skills in English to interact effectively with
            guests and colleagues.
          </span>
        </p>
        <p className="mt-4 font-bold md:text-xl text-md">Course Description:</p>
        <p>
          Our Housekeeping Occupation training programme provides a
          comprehensive learning experience that covers theoretical knowledge
          and practical training in real hotel and restaurant settings. Immerse
          yourself in the world of housekeeping and develop the skills needed to
          maintain a clean, comfortable, and welcoming environment for guests.
        </p>

        <p className="mt-4 font-bold md:text-xl text-md">Course Overview:</p>
        <p>
          This 4-month programme covers a wide range of topics essential for a
          successful career in housekeeping. From room cleaning methods and
          bed-making techniques to laundry servicing and sanitation, you will
          gain a thorough understanding of the responsibilities and tasks of a
          housekeeping professional. Learn to use various types of machinery,
          cleaning agents, and beautifiers to achieve high standards of
          cleanliness and presentation. Proficiency in the English language
          ensures effective communication with guests and colleagues.
        </p>
        <h2 className="mt-4 font-bold md:text-xl text-md">
          Course Objectives:
        </h2>

        <p className="">
          Upon completion of this course, you will have the opportunity to work
          in famous hotels and restaurants throughout the country. The skills
          and knowledge gained from the training will prepare you for a
          successful career in the housekeeping sector.
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
          This course is ideal for individuals who aspire to pursue a rewarding
          career in housekeeping. Whether you have prior experience or are just
          starting, this programme will equip you with the necessary skills and
          knowledge to thrive in the hospitality sector.
        </p>
        <h2 className="mt-4 font-bold md:text-xl text-md">Certificate: </h2>

        <p className="">
          At the end of the course, participants will receive a certificate from
          BRAC ISD, validating their expertise in Housekeeping Occupation.
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

export default HouseKeepingOccupationCourses;
=======
import { Link } from "react-router-dom";
import Navbar from "../../Home/Navbar/Navbar";
import Footer from "../../Home/Footer/Footer";
const HouseKeepingOccupationCourses = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div
        className="hero mt-20"
        style={{
          backgroundImage: "url(https://i.ibb.co/JzVjWMv/5483297-2805558.jpg)",
          width: "w-full",
          height: "320px",
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-white">
          <div className="max-w-xl md:max-w-2xl lg:max-w-2xl">
            <h2 className="text-xl md:text-3xl lg:text-5xl font-bold">
              Housekeeping Occupation
            </h2>
            <hr className="mx-4 md:mx-8 lg:mx-16 mt-4 border-t-8 font-bold border-[#FFA100]"></hr>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-8 lg:px-16 my-8">
        <div className="flex justify-between" style={{ whiteSpace: "nowrap" }}>
          <div>
            <h2 className="font-bold md:text-2xl text-md ">
              Housekeeping Occupation
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
          OSH, Work In the Team Environment, Participate In Workplace
          Communication, Carry Out Workplace Interaction in English, Maintain
          Professionalism in The Workplace, Work in the Tourism and Hospitality
          Areas, Practice Workplace Hygiene Procedures, Provide Effective Guest
          Service, Perform Workplace and Safety Practice, Provite Housekeeping
          Services to Guests, Clean and Prepare Rooms for Guests, Provide
          Valet/Butler Service, Laundry Linen and Guest Clothes, Clean Public
          Areas, Facilities and Equipment, Deal With/Handle Intoxicated Guests.
          Skills Covered : NTVQF Level-1 to 4 BNQF Level-2 &3.
        </p>
        <p className="mt-4 font-bold md:text-xl text-md">Course Description:</p>
        <p>
          Our course are Tourism & Hospitality sector, This courses are
          accredetation from BTEB& NSDA. Maintain competerncy Standard,
          Curriculum and Competency Based Learning Materials. Total Hours-500,
          Total Classes-45+50=95 (Including Industrial Attachment)
        </p>

        <p className="mt-4 font-bold md:text-xl text-md">Course Overview:</p>
        <p>
          1. OSH: <br />
          &nbsp;&nbsp;&nbsp;&nbsp;a. Identify OSH policies and procedures
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;b. Follow OSH procedures <br />
          &nbsp;&nbsp;&nbsp;&nbsp;c. Report Hazard and Risk <br />
          &nbsp;&nbsp;&nbsp;&nbsp;d. Report to emergencies e. Maintain personal
          well-being
          <br />
          2. Work in a team environment: <br />
          &nbsp;&nbsp;&nbsp;&nbsp;a. Define team role and scope <br />
          &nbsp;&nbsp;&nbsp;&nbsp;b. Identify individual role and responsibility{" "}
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;c. Participate Team discussions <br />
          &nbsp;&nbsp;&nbsp;&nbsp;d. Work as a team member
          <br />
          3. Participate in workplace Communication: <br />
          &nbsp;&nbsp;&nbsp;&nbsp;a. Obtain Convey workplace information <br />
          &nbsp;&nbsp;&nbsp;&nbsp;b. Speak english at a basic operational level{" "}
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;c. Participate in workplace meetings and
          discussions <br />
          &nbsp;&nbsp;&nbsp;&nbsp;d. Complete relevant work-related documents
          <br />
          4. Carry Out Workplace interaction in English: <br />
          &nbsp;&nbsp;&nbsp;&nbsp;a. Interpret workplace communication and
          etiquette <br />
          &nbsp;&nbsp;&nbsp;&nbsp;b. Interpret workplace documents <br />
          &nbsp;&nbsp;&nbsp;&nbsp;c. Participate in workplace meetings and
          discussions <br />
          &nbsp;&nbsp;&nbsp;&nbsp;d. Practice professional ethics at workplace
          <br />
          5. Maintain Professionalism in the workplace: <br />
          &nbsp;&nbsp;&nbsp;&nbsp;a. Respect work time frames <br />
          &nbsp;&nbsp;&nbsp;&nbsp;b. Maintain personal appearance and hygiene{" "}
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;c. Maintain adequate distance with colleagues
          and guests d. Work in an ethical manner.
          <br /> Sector Specific:
          <br /> 1. Work In the Tourism and Hospitality Sector: a. Describe the
          organization strucure within the sector <br />
          &nbsp;&nbsp;&nbsp;&nbsp;b. Identify processes and procedures <br />
          &nbsp;&nbsp;&nbsp;&nbsp;c. Identify workplace requirments <br />
          &nbsp;&nbsp;&nbsp;&nbsp;d. Organize own workload <br />
          2. Practice Workplace Hygiene Procedure: a. Follow hygiene procedure{" "}
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;b. Identify and prevent hygiene risks <br />
          3. Provide Effective guest service: a. Greet guest <br />
          &nbsp;&nbsp;&nbsp;&nbsp;b. Identify needs of guests <br />
          &nbsp;&nbsp;&nbsp;&nbsp;c. Provite service to guests <br />
          &nbsp;&nbsp;&nbsp;&nbsp;d. Handle queries of guests <br />
          &nbsp;&nbsp;&nbsp;&nbsp;e. Handle complaints/ conflict situations{" "}
          <br />
          4. Perform Workplace Safety and Security practices: a. Follow
          workplace procedures for health, safety and security practices b.
          Observe and monitor people c. Deal with emergency situationsworkplace
          d. Maintain safe and secure workplace
          <br />
          Occupational:
          <br />
          1. Provite Housekeeping service: <br />
          &nbsp;&nbsp;&nbsp;&nbsp;a. Receive housekeeping requests <br />
          &nbsp;&nbsp;&nbsp;&nbsp;b. Service housekeeping requests <br />
          &nbsp;&nbsp;&nbsp;&nbsp;c. Provide advice to guests <br />
          &nbsp;&nbsp;&nbsp;&nbsp;d. Liaise with other departments 2. Clean and
          prepare Room for guests: <br />
          &nbsp;&nbsp;&nbsp;&nbsp;a. Set up equipment and trolleys <br />
          &nbsp;&nbsp;&nbsp;&nbsp;b. Access rooms for servicing <br />
          &nbsp;&nbsp;&nbsp;&nbsp;c. Make up Beds <br />
          &nbsp;&nbsp;&nbsp;&nbsp;d. Clean and clear rooms 3. Provite
          Valet/Butler Service: <br />
          &nbsp;&nbsp;&nbsp;&nbsp;a. Perform valet service for guests <br />
          &nbsp;&nbsp;&nbsp;&nbsp;b. Display professional standards <br />
          &nbsp;&nbsp;&nbsp;&nbsp;c. Care for guest property 4. Laundru linen
          and guest cloths: <br />
          &nbsp;&nbsp;&nbsp;&nbsp;a. Collect laundry for laundering functions{" "}
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;b. Perform laundering function <br />
          &nbsp;&nbsp;&nbsp;&nbsp;c. Process laundered item <br />
          &nbsp;&nbsp;&nbsp;&nbsp;d. Return laundered item 5. Clean public
          Areas, Facilities and Equipment: <br />
          &nbsp;&nbsp;&nbsp;&nbsp;a. Select and setup equipment and materials{" "}
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;b. Apply Cleaning technique <br />
          &nbsp;&nbsp;&nbsp;&nbsp;c. Clean dry and wet areas <br />
          &nbsp;&nbsp;&nbsp;&nbsp;d. Maintain and store cleaning equipment and
          chemical 6. Deal with/handle Intoxicated guests: <br />
          &nbsp;&nbsp;&nbsp;&nbsp;a. Determine the level of intoxication <br />
          &nbsp;&nbsp;&nbsp;&nbsp;b. Apply appropriate procedures <br />
          &nbsp;&nbsp;&nbsp;&nbsp;c. Comply with legislation.
        </p>
        <h2 className="mt-4 font-bold md:text-xl text-md">
          Course Objectives:
        </h2>

        <p className="">
          Provide Skills Man power provide, Certification and Sustainable Job
          Placement.
        </p>
        <h2 className="mt-4 font-bold md:text-xl text-md">
          Training Approach:
        </h2>

        <p className="">
          Formal Training, Off line training . Workshop Base training ,
          Thuritical and Practical Based Training.
        </p>
        <h2 className="mt-4 font-bold md:text-xl text-md">
          For Whom This Course Is:
        </h2>

        <p className="">
        Youth, Age limit-18 Years  to 40 , Man and Women, Trangender.
        </p>
        <h2 className="mt-4 font-bold md:text-xl text-md">Certificate: </h2>

        <p className="">
          At the end of the course, participants will receive a certificate from
          BRAC ISD, validating their expertise in Housekeeping Occupation.
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

export default HouseKeepingOccupationCourses;
>>>>>>> 8a932e4 (Added Retail and Sales course)
