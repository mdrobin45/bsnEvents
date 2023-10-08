import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../MyContext/AuthContextProvider";
import UserDropdown from "./UserDropdown";

const NavButtons = ({ expandBtnClick }) => {
   const [expandProfile, setExpandProfile] = useState(false);
   const { user } = useContext(AuthContext);

   // Toggle user profile dropdown
   const handleProfileExpand = () => {
      setExpandProfile(!expandProfile);
   };

   return (
      <div className="flex gap-4 md:gap-0 md:order-2">
         {user ? (
            <>
               <img
                  onClick={handleProfileExpand}
                  type="button"
                  className="w-10 h-10 rounded-full border cursor-pointer"
                  src={
                     user.photoURL
                        ? user.photoURL
                        : "https://i.ibb.co/238dYyx/user.png"
                  }
                  alt="User"
               />
               <UserDropdown expandProfile={expandProfile} />
            </>
         ) : (
            <Link
               className="middle none border-2 border-primary hover:bg-transparent uppercase hover:border-primary center mb-2 rounded-lg bg-primary hover:text-primary py-2 font-semibold px-6 font-barlow text-lg text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
               to="/login"
               data-ripple-light="true">
               <span>Login</span>
            </Link>
         )}

         <button
            onClick={expandBtnClick}
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-sticky"
            aria-expanded="false">
            <svg
               className="w-5 h-5"
               aria-hidden="true"
               xmlns="http://www.w3.org/2000/svg"
               fill="none"
               viewBox="0 0 17 14">
               <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 1h15M1 7h15M1 13h15"
               />
            </svg>
         </button>
      </div>
   );
};

export default NavButtons;
