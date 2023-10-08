import { Link, useLocation } from "react-router-dom";
import logo from "../../../assets/images/leadership.png";

const Logo = () => {
   const { pathname } = useLocation();
   return (
      <div className="w-44">
         <Link to="/" className="flex items-center gap-3">
            <img className="w-10" src={logo} alt="Logo" />
            <h2
               className={`text-4xl ${
                  pathname === "/" ? "text-gray-800" : "text-white"
               } font-bold font-barlow`}>
               LIC <span className="text-primary">2.0</span>
            </h2>
         </Link>
      </div>
   );
};

export default Logo;
