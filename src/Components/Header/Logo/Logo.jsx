import { Link, useLocation } from "react-router-dom";

const Logo = () => {
   const { pathname } = useLocation();
   return (
      <Link to="/" className="flex items-center">
         <h2
            className={`text-4xl ${
               pathname === "/" ? "text-gray-800" : "text-white"
            } font-bold font-barlow`}>
            LIC <span className="text-primary">2.0</span>
         </h2>
      </Link>
   );
};

export default Logo;
