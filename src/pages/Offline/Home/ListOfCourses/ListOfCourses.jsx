import { Link } from "react-router-dom";

const ListOfCourses = () => {
  return (
    <div className=" my-8 max-w-screen-xl mx-auto">
      <Link to="/list-of-Courses" className="text-2xl font-semibold ">
        <h2 className="my-4 underline">List of Courses</h2>
      </Link>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="my-8 text-lg font-semibold underline">
          <Link to="/offline/courses/digital-marketing">Digital Marketing</Link>
        </div>
        <div className="my-8 text-lg font-semibold underline">
          <Link to="/offline/courses/palliative-care">
            Palliative Care Assistant
          </Link>
        </div>
        <div className="my-8 text-lg font-semibold underline">
          <Link to="/offline/courses/careGivingTraining">
            General Care Giving
          </Link>
        </div>
        <div className="my-8 text-lg font-semibold underline">
          <Link to="/offline/courses/web-design">Web Design</Link>
        </div>
        <div className="my-8 text-lg font-semibold underline">
          <Link to="/offline/courses/electrical-installation">
            Electrical Installation and Maintenance
          </Link>
        </div>
        <div className="my-8 text-lg font-semibold underline">
          <Link to="/offline/courses/graphics-design">Graphic Design</Link>
        </div>
        <div className="my-8 text-lg font-semibold underline">
          <Link to="/offline/courses/refrigeration-ac">
            Refrigeration and Air Conditioning
          </Link>
        </div>
        <div className="my-8 text-lg font-semibold underline">
          <Link to="/offline/courses/plc">Programmable Logic Controller</Link>
        </div>
        {/* <div className="my-8 text-lg font-semibold underline">
          <Link to="/offline/courses/it-support-technician">
            IT Support Technician
          </Link>
        </div> */}
        <div className="my-8 text-lg font-semibold underline">
          <Link to="/offline/courses/food-beverage-services">
            Food and Beverage Services
          </Link>
        </div>
        <div className="my-8 text-lg font-semibold underline">
          <Link to="/offline/courses/housekeeping-occupation">
            Housekeeping Occupation
          </Link>
        </div>
        <div className="my-8 text-lg font-semibold underline">
          <Link to="/offline/courses/computer-operation">
            Computer Office Applications
          </Link>
        </div>
        <div className="my-8 text-lg font-semibold underline">
          <Link to="/offline/courses/sewing-machine">
            Sewing Machine Operation
          </Link>
        </div>
        <div className="my-8 text-lg font-semibold underline">
          <Link to="/offline/courses/plumbing-pipe-fitting">
            Plumbing & Pipe Fitting
          </Link>
        </div>
        <div className="my-8 text-lg font-semibold underline">
          <Link to="/offline/courses/steel-bindings-fabrication">
            Steel Bindings & Fabrication
          </Link>
        </div>
        <div className="my-8 text-lg font-semibold underline">
          <Link to="/offline/courses/tiles-marbel-work">
            Tiles & Marbel Work
          </Link>
        </div>
        <div className="my-8 text-lg font-semibold underline">
          <Link to="/offline/courses/masonry">Masonry</Link>
        </div>
        <div className="my-8 text-lg font-semibold underline">
          <Link to="/offline/courses/welding">Welding</Link>
        </div>
        <div className="my-8 text-lg font-semibold underline">
          <Link to="/offline/courses/retail-Sales-Service">Retail Sales Service</Link>
        </div>
        <div className="my-8 text-lg font-semibold underline">
          <Link to="/offline/courses/rod-Binding">Rod Binding</Link>
        </div>
      </div>
    </div>
  );
};

export default ListOfCourses;
