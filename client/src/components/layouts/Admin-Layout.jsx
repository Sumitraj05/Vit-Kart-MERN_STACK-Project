import { NavLink, Outlet } from "react-router-dom";
import { FaUserShield } from "react-icons/fa";
import { RiContactsBook2Fill } from "react-icons/ri";
import { MdMiscellaneousServices } from "react-icons/md";
import { FaHome } from "react-icons/fa";


export const AdminLayout = () => {
    return (
        <>
            <header>
                <div className="container">
                    <ul>
                        <li> <NavLink to="/admin/users">
                        <FaUserShield /> users </NavLink>
                        </li>
                        <li> <NavLink to="/admin/contacts">
                        <RiContactsBook2Fill /> contacts </NavLink>
                        </li>
                        <li> <NavLink to="/service">
                        <MdMiscellaneousServices /> services </NavLink> </li>
                        <li> <NavLink to="/"> <FaHome /> Home </NavLink> </li>
                    </ul>
                </div>
            </header>
            <Outlet />
        </>
    )
};