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

export default Main;