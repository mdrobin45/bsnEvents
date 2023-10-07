import { Link } from "react-router-dom";

const Logo = () => {
   return (
      <Link to="/" className="flex items-center">
         <img
            src="https://flowbite.com/docs/images/logo.svg"
            className="h-8 mr-3"
            alt="Flowbite Logo"
         />
         <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            Flowbite
         </span>
      </Link>
   );
};

export default Logo;
