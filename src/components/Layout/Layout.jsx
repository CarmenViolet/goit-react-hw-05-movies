import { Outlet, NavLink } from "react-router-dom";
import "../../index.css";

export const Layout = () => {
    return (
        <>
            <nav>
                <ul>
                    <li>
                        <NavLink to="/" end className={({ isActive }) => (isActive ? 'active' : 'inactive')} >Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="movies" className={({ isActive }) => (isActive ? 'active' : 'inactive')}>Movies</NavLink>
                    </li>
                </ul>
            </nav>
            <Outlet/>
        </>
    )
}