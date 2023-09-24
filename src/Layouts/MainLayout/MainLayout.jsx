import { Outlet } from "react-router-dom";
import Navbar from "../../components/Header/Navbar/Navbar";

const MainLayout = () => {
    return (
        <div className="max-w-full">
            <div className="max-w-7xl mx-auto">
                <Navbar></Navbar>
            </div>
            <div className="py-6">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default MainLayout;