<<<<<<< HEAD
import { Outlet } from "react-router-dom"
import ScrollToTop from "../../src/pages/Offline/ScrollToTop"

const Main = () =>{
    return (
        <div>
            <Outlet></Outlet>
            <ScrollToTop></ScrollToTop>

        </div>
    )
}
=======
import { Outlet } from "react-router-dom";
import ScrollToTop from "../pages/Offline/ScrollToTop";


const Main = () => {
    return (
        <div>
            <Outlet></Outlet>
            <ScrollToTop></ScrollToTop>
        </div>
    );
};

>>>>>>> 8a932e4 (Added Retail and Sales course)
export default Main;