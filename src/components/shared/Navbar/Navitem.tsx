import { Link, NavLink } from "react-router-dom";
import logo from "../../../assets/images/logo.png";
import NavCart from "./NavCart";

const NavItem = () => {
  return (
    <div className="md:flex  justify-between items-center w-full hidden">
      {/* logo */}
      <Link to="/">
        <img src={logo} alt="logo" width="360" />
      </Link>
      {/* navItems */}
      <div className="flex justify-center items-center gap-6 px-2">
        {navItems.map((item, index) => (
          <div key={index}>
            <NavLink
              to={item.path}
              className={({ isActive }) => (isActive ? "active" : "default")}
            >
              {item.element}
            </NavLink>
          </div>
        ))}
      </div>
      {/* search functionality */}
      <>
        <NavCart />
      </>
    </div>
  );
};

export default NavItem;

const navItems = [
  {
    path: "/",
    element: "Home",
  },
  {
    path: "/all-products",
    element: "All Product",
  },
  {
    path: "/dashboard",
    element: "Dashboard",
  },
];
