import AboutUs from "../AboutUs/AboutUs";
import Banner from "../Banner/Banner";
import Footer from "../Footer/Footer";
import ListOfCenters from "../ListOfCenters/ListOfCenters"; 
import ListOfCourses from "../ListOfCourses/ListOfCourses";
import Navbar from "../Navbar/Navbar";
import RegistrationProcess from "../RegistrationProcess/RegistrationProcess";
import WhyWeAreVideo from "../WhyWeAreVideo/WhyWeAreVideo";


const Offline_Home = () => {
    return (
        <>
            <Navbar></Navbar>
            <Banner></Banner>
            <div className="mx-8">
                <AboutUs></AboutUs>
                <ListOfCenters></ListOfCenters>
               <ListOfCourses></ListOfCourses>
               <WhyWeAreVideo></WhyWeAreVideo>
               <RegistrationProcess></RegistrationProcess>
            </div>
            <Footer></Footer>
        </>
    );
};

export default Offline_Home;