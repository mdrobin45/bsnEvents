import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../MyContext/AuthContextProvider";

const UserDropdown = ({ expandProfile }) => {
   const { user, logOut } = useContext(AuthContext);
   const { displayName, email } = user;

   // Logout
   const handleLogOut = () => {
      logOut().then(() => {
         // Do something after logout
      });
   };
   return (
      <div
         className={`z-10 ${
            !expandProfile ? "hidden" : ""
         } absolute top-16 right-0 bg-white divide-y divide-gray-100 rounded-lg shadow w-44`}>
         <div className="px-4 py-3 text-sm text-gray-900">
            <div>{displayName ? displayName : "No name"}</div>
            <div className="font-medium truncate">
               {email ? email : "email not found"}
            </div>
         </div>
         <ul
            className="py-2 text-sm text-gray-700"
            aria-labelledby="avatarButton">
            <li>
               <Link
                  to="/dashboard"
                  className="block font-barlow uppercase px-4 py-2 hover:bg-gray-100">
                  Dashboard
               </Link>
            </li>
            <li>
               <Link
                  to="/profile"
                  className="block font-barlow uppercase px-4 py-2 hover:bg-gray-100">
                  Profile
               </Link>
            </li>
         </ul>
         <div className="py-1">
            <button
               onClick={handleLogOut}
               className="block w-full font-barlow uppercase text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
               Sign out
            </button>
         </div>
      </div>
   );
};

export default UserDropdown;