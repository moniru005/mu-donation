import { NavLink } from "react-router-dom";
import Logo from "../../Logo/Logo";
import "../Navbar/Navbar.css"

const Navbar = () => {
    return (
        <div >
            <nav className="py-6 px-4 flex flex-col gap-6 md:flex-row  lg:flex-row justify-center md:justify-between lg:justify-between items-center shadow-slate-600 rounded relative z-10">
                <Logo></Logo>
                <ul className="flex justify-center items-center ">
                    <li>
                        <NavLink to="/">Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/donation">Donation</NavLink>
                    </li>
                    <li>
                        <NavLink to="/statistics">Statistics</NavLink>
                    </li>
                </ul>
            </nav>

        </div>
    );
};

export default Navbar;