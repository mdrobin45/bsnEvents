import { NavLink, useLocation } from "react-router-dom";

const LinkItem = ({ to, linkText }) => {
   const { pathname } = useLocation();
   return (
      <li>
         <NavLink
            to={`${to}`}
            className={`block py-2 pl-3 pr-4 ${
               pathname === "/"
                  ? "text-gray-700"
                  : "text-gray-700 md:text-white"
            } font-barlow uppercase hover:text-primary rounded md:bg-transparent md:p-0`}>
            {linkText}
         </NavLink>
      </li>
   );
};

export default LinkItem;
