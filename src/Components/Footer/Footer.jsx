import {
   BiLogoFacebook,
   BiLogoInstagram,
   BiLogoLinkedin,
   BiLogoTwitter,
   BiMap,
} from "react-icons/bi";
import { BsTelephonePlus } from "react-icons/bs";
import { HiOutlineMail } from "react-icons/hi";
import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/images/leadership.png";

const Footer = () => {
   return (
      <footer className="bg-gray-900 overflow-hidden pt-10 md:pt-20 lg:pt-36 px-7 md:px-10 lg:px-20 ">
         <div className="flex text-center md:text-left flex-col md:flex-row justify-between items-start">
            <div
               data-aos="fade-up"
               data-aos-duration="800"
               className="w-full md:w-1/5">
               <h2 className="text-white font-barlow text-2xl font-semibold">
                  Quick Links
               </h2>
               <ul className="flex flex-row justify-center md:flex-col gap-1">
                  <li>
                     <NavLink
                        to="/"
                        className="block py-2 pl-3 pr-4 text-gray-300 font-barlow uppercase hover:text-primary rounded md:bg-transparent md:p-0"
                        aria-current="page">
                        Home
                     </NavLink>
                  </li>
                  <li>
                     <NavLink
                        to="/pricing"
                        className="block py-2 pl-3 pr-4 text-gray-300 font-barlow uppercase hover:text-primary rounded md:bg-transparent md:p-0">
                        Pricing
                     </NavLink>
                  </li>
                  <li>
                     <NavLink
                        to="/contact"
                        className="block py-2 pl-3 pr-4 text-gray-300 font-barlow uppercase hover:text-primary rounded md:bg-transparent md:p-0">
                        Contact
                     </NavLink>
                  </li>
               </ul>
            </div>
            <div
               data-aos="fade-up"
               data-aos-duration="800"
               className="flex w-full py-4 md:py-0 md:w-3/5 flex-col items-center justify-center">
               <h2 className="text-xl md:text-2xl text-white font-barlow uppercase font-semibold">
                  SUBSCRIBE OUR NEWSLETTER
               </h2>
               <h2 className="text-md font-bold lg:text-xl my-1 font-barlow text-primary">
                  DON’T MISS OUR FEATURE UPDATE
               </h2>
               <div className="flex w-2/3 items-center mt-6">
                  <input
                     placeholder="Enter Your Email"
                     className="py-3 w-full text-md font-barlow px-2 border-gray-100 focus:ring-0 focus:border-none focus:outline-none rounded-l-md"
                     type="text"
                  />
                  <button className="py-3 bg-primary text-white font-barlow uppercase px-2 rounded-r-md">
                     Subscribe
                  </button>
               </div>
            </div>
            <div
               data-aos="fade-up"
               data-aos-duration="800"
               className="w-full md:w-1/5">
               <h2 className="text-white font-barlow text-2xl font-semibold">
                  Contact
               </h2>
               <div className="flex mt-4 items-center justify-center gap-8 md:hidden">
                  <BsTelephonePlus className="text-white text-2xl" />
                  <HiOutlineMail className="text-white text-2xl" />
                  <BiMap className="text-white text-3xl" />
               </div>
               <div className="md:flex hidden justify-center md:justify-start items-center gap-3 my-3">
                  <div>
                     <BsTelephonePlus className="text-white text-2xl" />
                  </div>
                  <div className="text-white font-barlow">
                     <p>+1 763-227-5032</p>
                  </div>
               </div>
               <div className="md:flex hidden justify-center md:justify-start items-center gap-3 my-3">
                  <div>
                     <HiOutlineMail className="text-white text-2xl" />
                  </div>

                  <div className="text-white font-barlow">
                     <p>info@example.com</p>
                  </div>
               </div>
               <div className="md:flex hidden justify-center md:justify-start items-center gap-3 my-3">
                  <div>
                     <BiMap className="text-white text-3xl" />
                  </div>
                  <div className="text-white font-barlow">
                     <p>2752 Willison Street Eagan, United State</p>
                  </div>
               </div>
            </div>
         </div>
         <hr className="w-full border-gray-500 mt-7" />
         <div
            data-aos="fade-up"
            data-aos-duration="800"
            className="flex flex-col-reverse md:flex-row items-center md:justify-between pt-7 pb-16">
            <div className="w-full text-center md:text-left md:w-1/3">
               <p className="text-white font-barlow">
                  Copyright 2023 Business Event| Design By{" "}
                  <a
                     className="text-primary font-barlow"
                     href="https://github.com/mdrobin45"
                     target="_blank"
                     rel="noreferrer">
                     Robin
                  </a>
               </p>
            </div>
            <div className="flex justify-between items-center md:w-3/5">
               <div className="w-full mt-4 md:mt-0 justify-between flex items-center text-center">
                  <div className="w-44">
                     <Link
                        to="/"
                        className="flex items-center justify-center gap-3">
                        <img className="w-9" src={logo} alt="Logo" />
                        <h2 className="text-2xl md:text-4xl text-white font-bold font-barlow">
                           LIC <span className="text-primary">2.0</span>
                        </h2>
                     </Link>
                  </div>
               </div>
               <div
                  className="flex mt-4 md:mt-0 w-full md:w-1/3 items-center justify-center
             md:justify-end">
                  <p className="flex items-center justify-between gap-3">
                     <a href="#">
                        <BiLogoFacebook className="text-3xl transition-all text-gray-400 hover:text-primary" />
                     </a>
                     <a href="#">
                        <BiLogoInstagram className="text-3xl transition-all text-gray-400 hover:text-primary" />
                     </a>
                     <a href="#">
                        <BiLogoLinkedin className="text-3xl transition-all text-gray-400 hover:text-primary" />
                     </a>
                     <a href="#">
                        <BiLogoTwitter className="text-3xl transition-all text-gray-400 hover:text-primary" />
                     </a>
                  </p>
               </div>
            </div>
         </div>
      </footer>
   );
};

export default Footer;
