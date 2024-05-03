import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

const HomeLayout = () => {
    return (
        <>
         <Navbar />
         <Outlet />
         {/* <Landing /> */}
        </>
    );
};

export default HomeLayout;