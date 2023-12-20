import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";

const Root = () => {
    const location = useLocation();
    const isHeaderFooter = location.pathname.includes("login") || location.pathname.includes("signup");
    return (
        <div>
            {isHeaderFooter || <Navbar></Navbar>}
            <Outlet></Outlet>
        </div>
    );
};

export default Root;