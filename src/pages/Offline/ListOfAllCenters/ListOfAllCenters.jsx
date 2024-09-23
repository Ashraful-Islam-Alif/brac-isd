import Footer from "../Home/Footer/Footer";
import ListOfCenters from "../Home/ListOfCenters/ListOfCenters";
import Navbar from "../Home/Navbar/Navbar";
import Center_Banner from "./ListOfAllCenters/Center_Banner";


const ListOfAllCenters = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Center_Banner></Center_Banner>
            <ListOfCenters></ListOfCenters>
            <Footer></Footer>
        </div>
    );
};

export default ListOfAllCenters;