import { Link } from "react-router-dom";
import Navbar from "../../Home/Navbar/Navbar";
import Footer from "../../Home/Footer/Footer";
const ElectricalInstalAndMaintenanceCourses = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div
        className="hero mt-20"
        style={{
          backgroundImage:
            "url(https://i.ibb.co/0tG91Bh/electricalinstallationmaintenance.jpg)",
          width: "w-full",
          height: "320px",
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-white">
          <div className="max-w-xl md:max-w-2xl lg:max-w-2xl">
            <h2 className="text-xl md:text-3xl lg:text-5xl font-bold">
              Electrical Installation and Maintenance
            </h2>
            <hr className="mx-4 md:mx-8 lg:mx-16 mt-4 border-t-8 font-bold border-[#FFA100]"></hr>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-8 lg:px-16 my-8">
        {/* course info */}
        <div>
          <div className="flex justify-between">
            <div>
              <h2 className="font-bold md:text-2xl text-lg ">
                Electrical Installation and Maintenance
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
            <span className="font-bold md:text-xl text-md  ">
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
              Educational Qualification:
            </span>{" "}
            Minimum SSC (Secondary School Certificate)
          </p>
          <p className="mt-4 font-bold md:text-xl text-md">Schedule:</p>
          <p className="mt-4 ">Saturday to Thusday / 6 day</p>
          <p className="mt-4 font-bold md:text-xl text-md">Course Contents:</p>
          <p className="mt-4 ">
            OSH, Cummunication, Drawing, Handtools and Power Tools, Basic
            Electrical Circuit, PVC Chennel Wiring, Surface conduit wiring,
            Conduit wiring, Motor Controlling, Motor Rewinding, Sub Station,
            Basic Electronics, CCTV, Solar Sysytem, Fire prevention and
            Detection Skills Covered : NTVQF Level-1 to 4 BNQF Level-2 &3
          </p>
          <p className="mt-4 font-bold md:text-xl text-md">
            Course Description:{" "}
          </p>
          <p className="">
            The Electyrical Installation & Maintenence course at BRAC Institute
            of Skills Development focuses on Industry demand oriented . Over the
            span of 3 months, students are introduced to the House wiring and
            Industrial Wiring. Our course are Construction sector and Light
            engineering sector, This courses are accredetation from BTEB& NSDA.
            Maintain competerncy Standard, Curriculum and Competency Based
            Learning Materials
          </p>
          <p className="mt-4 font-bold md:text-xl text-md">Course Overview: </p>
          <p className="">
            1. OSH,PPE, Drawing,Circuit diagram and Lay out diagram,
            <br /> 2. Identify and its use Hand tools and Power Tools, <br />
            3. Basic Electrical Circuit (Series circuit, Parallel ckt, Switch
            board, MDB, DB, FDB, SDB, BDB,MCCB,MCB,CB, Main Switch, Energy
            Meter, Estimating &Costing Etc.) <br /> 4. Measurement and
            Calculations (Deferent types of Meter Analog and Digital such as
            Ammeter, voltmeter, frequency meter, AVO Meter, P.F Meter, Watt
            Meter, Techo meter, Earth tester, Magger, Lux Meter ,Micro Meter,
            Vernier Calipers, Phase Sequence Meter Etc.) <br />
            5. House Wiring (PVC Chennel Wiring, Surface conduit wiring, Conduit
            wiring) <br />6 . Motor Controlling ( DOL, Timmer connection, Relay
            Connection,Forwad reverse starter, Automatic Star Delta Starter
            Circuit, Autu Transfer Swith, Power factor Imrovement Pannel, Motor
            Controll Pannel Board) . <br />
            7. Motor Rewinding (Fan Rewinding and Single phase and Three Phase
            Motor Rewinding) , <br />
            8. Sub Station(HT,LT,PFI, Generator MDB, ATS), <br />
            9. Basic Electronics Circuit, <br />
            10. CCTV, Solar Sysytem, <br />
            11. Fire prevention and Detection
            <br />
            12. VFD
          </p>
          <p className="mt-4 font-bold md:text-xl text-md">
            Course Objectives:{" "}
          </p>
          <p className="">
            Provide Skills Man power provide, Certification and Sustainable Job
            Placement
          </p>

          <p className="font-bold md:text-xl text-md mt-4">
            Training Approach:
          </p>
          <p>
            Formal Training, Off line training . Workshop Base training ,
            Thuritical and Practical Based Training.
          </p>
          <p className="font-bold md:text-xl text-md mt-4">
            For Whom This Course Is:
          </p>
          <p>
          Youth, Age limit-18 Years  to 40 , Man and Women, PWD , Trangender.
          </p>
          <p className="font-bold md:text-xl text-md mt-4">Certification:</p>
          <p>
            Participants will receive a certificate from BRAC ISD at the end of
            the course, validating their expertise in Electrical Installation
            and Maintenance.
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
            <p className="underline">
              <Link to="/offline/centers/narayanganjnKanchan">
                BISD Narayanganj Centre
              </Link>
            </p>
            <p className="underline">
              <Link to="/offline/centers/manikganj">BISD Manikganj Centre</Link>
            </p>
            <p className="underline">
              <Link to="/offline/centers/nilphamari">
                BISD Nilphamari Centre
              </Link>
            </p>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default ElectricalInstalAndMaintenanceCourses;
