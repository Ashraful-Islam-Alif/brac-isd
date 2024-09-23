
import Footer from "../Home/Footer/Footer";
import ListOfCourses from "../Home/ListOfCourses/ListOfCourses";
import Navbar from "../Home/Navbar/Navbar";
import Course_Banner from "./ListOfAllCourses/Course_Banner";

const ListOfAllCourses = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Course_Banner></Course_Banner>
            <ListOfCourses></ListOfCourses>
            <Footer></Footer>

        </div>
    );
};

export default ListOfAllCourses;
