import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import Offline_Home from "../pages/Offline/Home/Offline_Home/Offline_Home";
import ListOfAllCenters from "../pages/Offline/ListOfAllCenters/ListOfAllCenters";
import ListOfAllCourses from "../pages/Offline/ListOfAllCourses/ListOfAllCourses";
import DhakaCenter from "../pages/Offline/ListOfAllCenters/ListOfAllCenters/DhakaCenter";
import RangpurCenter from "../pages/Offline/ListOfAllCenters/ListOfAllCenters/RangpurCenter";
import RajshahiCenter from "../pages/Offline/ListOfAllCenters/ListOfAllCenters/RajshahiCenter";
import CumillaCenter from "../pages/Offline/ListOfAllCenters/ListOfAllCenters/CumillaCenter";
import ChattogramCenter from "../pages/Offline/ListOfAllCenters/ListOfAllCenters/ChattogramCenter";
import SylhetCenter from "../pages/Offline/ListOfAllCenters/ListOfAllCenters/SylhetCenter";
import CoxBazar from "../pages/Offline/ListOfAllCenters/ListOfAllCenters/CoxBazar";
import HalishahrChattogram from "../pages/Offline/ListOfAllCenters/ListOfAllCenters/HalishahrChattogram";
import PatiaChattogram from "../pages/Offline/ListOfAllCenters/ListOfAllCenters/PatiaChattogram";
import NarayanganjBandar from "../pages/Offline/ListOfAllCenters/ListOfAllCenters/NarayanganjBandar";
import NarayanganjnKanchan from "../pages/Offline/ListOfAllCenters/ListOfAllCenters/NarayanganjnKanchan";
import Manikganj from "../pages/Offline/ListOfAllCenters/ListOfAllCenters/Manikganj";
import Mymensingh from "../pages/Offline/ListOfAllCenters/ListOfAllCenters/Mymensingh";
import Nilphamari from "../pages/Offline/ListOfAllCenters/ListOfAllCenters/Nilphamari";
import DigitalMarketingCourses from "../pages/Offline/ListOfAllCourses/ListOfAllCourses/DigitalMarketingCourses";
import WebDesignCourses from "../pages/Offline/ListOfAllCourses/ListOfAllCourses/WebDesignCourses";
import ComputerOperationCourses from "../pages/Offline/ListOfAllCourses/ListOfAllCourses/ComputerOperationCourses";
import ElectricalInstalAndMaintenanceCourses from "../pages/Offline/ListOfAllCourses/ListOfAllCourses/ElectricalInstalAndMaintenanceCourses";
import RefrigerationAndAirConditioningCourses from "../pages/Offline/ListOfAllCourses/ListOfAllCourses/RefrigerationAndAirConditioningCourses";
import ProgrammableLogicControllerCourses from "../pages/Offline/ListOfAllCourses/ListOfAllCourses/ProgrammableLogicControllerCourses";
import GraphicsDesignCourses from "../pages/Offline/ListOfAllCourses/ListOfAllCourses/GraphicsDesignCourses";
import ITSupportTechnicianCourses from "../pages/Offline/ListOfAllCourses/ListOfAllCourses/ITSupportTechnicianCourses";
import FoodAndBeverageServicesCourses from "../pages/Offline/ListOfAllCourses/ListOfAllCourses/FoodAndBeverageServicesCourses";
import HouseKeepingOccupationCourses from "../pages/Offline/ListOfAllCourses/ListOfAllCourses/HouseKeepingOccupationCourses";
import SewingMachine from "../pages/Offline/ListOfAllCourses/ListOfAllCourses/SewingMachine";
import PlumbingPipeFitting from "../pages/Offline/ListOfAllCourses/ListOfAllCourses/PlumbingPipeFitting";
import SteelBindingsFabrication from "../pages/Offline/ListOfAllCourses/ListOfAllCourses/SteelBindingsFabrication";
import TilesMarbelWork from "../pages/Offline/ListOfAllCourses/ListOfAllCourses/TilesMarbelWork";
import PalliativeCareCourses from "../pages/Offline/ListOfAllCourses/ListOfAllCourses/PalliativeCareCourses";
import CaregivingTraining from "../pages/Offline/ListOfAllCourses/ListOfAllCourses/CaregivingTraining";
import Masonry from "../pages/Offline/ListOfAllCourses/ListOfAllCourses/Masonry";
import Welding from "../pages/Offline/ListOfAllCourses/ListOfAllCourses/Welding";
import RetailSalesService from "../pages/Offline/ListOfAllCourses/ListOfAllCourses/RetailSalesService";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "offline",
        element: <Offline_Home></Offline_Home>,
      },
      {
        path: "list-of-center",
        element: <ListOfAllCenters></ListOfAllCenters>,
      },
      {
        path: "list-of-courses",
        element: <ListOfAllCourses></ListOfAllCourses>,
      },
      // Centers
      {
        path: "offline/centers/dhaka",
        element: <DhakaCenter></DhakaCenter>,
      },
      {
        path: "offline/centers/rangpur",
        element: <RangpurCenter></RangpurCenter>,
      },
      {
        path: "offline/centers/rajshahi",
        element: <RajshahiCenter></RajshahiCenter>,
      },
      {
        path: "offline/centers/cumilla",
        element: <CumillaCenter></CumillaCenter>,
      },
      {
        path: "offline/centers/chattogram",
        element: <ChattogramCenter></ChattogramCenter>,
      },
      {
        path: "offline/centers/sylhet",
        element: <SylhetCenter></SylhetCenter>,
      },
      {
        path: "offline/centers/coxbazar",
        element: <CoxBazar></CoxBazar>,
      },
      {
        path: "offline/centers/chattogram2",
        element: <HalishahrChattogram></HalishahrChattogram>  ,
      },
      {
        path: "offline/centers/chattogram3",
        element:   <PatiaChattogram></PatiaChattogram>,
      },
      {
        path: "offline/centers/narayanganjnBondor",
        element:  <NarayanganjBandar></NarayanganjBandar>,
      },
      {
        path: "offline/centers/narayanganjnKanchan",
        element: <NarayanganjnKanchan></NarayanganjnKanchan>
      },
      {
        path: "offline/centers/manikganj",
        element: <Manikganj></Manikganj>
      },
      {
        path: "offline/centers/mymensingh",
        element: <Mymensingh></Mymensingh>
      },
      {
        path: "offline/centers/nilphamari",
        element: <Nilphamari></Nilphamari>
      },
      // Courses
      {
        path: "offline/courses/digital-marketing",
        element: <DigitalMarketingCourses></DigitalMarketingCourses>
      },
      {
        path: "offline/courses/web-design",
        element: <WebDesignCourses></WebDesignCourses>
      },
      {
        path: "offline/courses/computer-operation",
        element: <ComputerOperationCourses></ComputerOperationCourses>
      },
      {
        path: "offline/courses/electrical-installation",
        element: <ElectricalInstalAndMaintenanceCourses></ElectricalInstalAndMaintenanceCourses>
      },
      {
        path: "offline/courses/refrigeration-ac",
        element: <RefrigerationAndAirConditioningCourses></RefrigerationAndAirConditioningCourses>
      },
      {
        path: "offline/courses/plc",
        element: <ProgrammableLogicControllerCourses></ProgrammableLogicControllerCourses>
      },
      {
        path: "offline/courses/graphics-design",
        element: <GraphicsDesignCourses></GraphicsDesignCourses>
      },
      {
        path: "offline/courses/it-support-technician",
        element: <ITSupportTechnicianCourses></ITSupportTechnicianCourses>
      },
      {
        path: "offline/courses/food-beverage-services",
        element: <FoodAndBeverageServicesCourses></FoodAndBeverageServicesCourses>
      },
      {
        path: "offline/courses/housekeeping-occupation",
        element: <HouseKeepingOccupationCourses></HouseKeepingOccupationCourses>
      },
      {
        path: "offline/courses/sewing-machine",
        element: <SewingMachine></SewingMachine>
      },
      {
        path: "offline/courses/plumbing-pipe-fitting",
        element: <PlumbingPipeFitting></PlumbingPipeFitting>
      },
      {
        path: "offline/courses/steel-bindings-fabrication",
        element: <SteelBindingsFabrication></SteelBindingsFabrication>
      },
      {
        path: "offline/courses/tiles-marbel-work",
        element: <TilesMarbelWork></TilesMarbelWork>
      },
      {
        path: "offline/courses/palliative-care",
        element: <PalliativeCareCourses></PalliativeCareCourses>
      },
      {
        path: "offline/courses/careGivingTraining",
        element: <CaregivingTraining></CaregivingTraining>
      },
      {
        path: "offline/courses/masonry",
        element: <Masonry></Masonry>
      },
      {
        path: "offline/courses/welding",
        element: <Welding></Welding>,
      },
      {
        path: "offline/courses/retail-Sales-Service",
        element: <RetailSalesService></RetailSalesService>,
      },
    ],
  },
]);

