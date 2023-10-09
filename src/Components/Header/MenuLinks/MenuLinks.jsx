import { NavLink, useLocation } from "react-router-dom";
import "./style.css";

const MenuLinks = ({ mobileExpand }) => {
   const { pathname } = useLocation();
   return (
      <div
         className={`items-center justify-between ${
            !mobileExpand ? "hidden" : ""
         } w-full md:flex md:w-auto md:order-1`}>
         <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-white md:bg-transparent md:flex-row md:space-x-8 md:mt-0 md:border-0">
            <li>
               <NavLink
                  to="/"
                  className={`block py-2 pl-3 pr-4 ${
                     pathname === "/" ? "text-gray-700" : "text-white"
                  } font-barlow uppercase hover:text-primary rounded md:bg-transparent md:p-0`}
                  aria-current="page">
                  Home
               </NavLink>
            </li>
            <li>
               <NavLink
                  to="/speakers"
                  className={`block py-2 pl-3 pr-4 ${
                     pathname === "/" ? "text-gray-700" : "text-white"
                  } font-barlow uppercase hover:text-primary rounded md:bg-transparent md:p-0`}>
                  Speakers
               </NavLink>
            </li>
            <li>
               <NavLink
                  to="/profile"
                  className={`block py-2 pl-3 pr-4 ${
                     pathname === "/" ? "text-gray-700" : "text-white"
                  } font-barlow uppercase hover:text-primary rounded md:bg-transparent md:p-0`}>
                  Profile
               </NavLink>
            </li>
            <li>
               <NavLink
                  to="/contact"
                  className={`block py-2 pl-3 pr-4 ${
                     pathname === "/" ? "text-gray-700" : "text-white"
                  } font-barlow uppercase hover:text-primary rounded md:bg-transparent md:p-0`}>
                  Contact
               </NavLink>
            </li>
         </ul>
      </div>
   );
};

export default MenuLinks;
