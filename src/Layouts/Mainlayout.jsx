import { Outlet } from "react-router-dom";
import Home from "../Pages/Home/Home";


const Mainlayout = () => {
    return (
        <div>
            <Outlet></Outlet>
            <Home></Home>
        </div>
    );
};

export default Mainlayout;