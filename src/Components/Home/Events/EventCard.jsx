import dateFormat from "dateformat";
import {
   BiLogoFacebook,
   BiLogoInstagram,
   BiLogoLinkedin,
   BiLogoTwitter,
} from "react-icons/bi";
import { BsCalendarWeek, BsShare } from "react-icons/bs";
import { FiMapPin } from "react-icons/fi";
import { Link } from "react-router-dom";

const EventCard = ({ event }) => {
   const { title, image, event_date, price, address, long_description } = event;
   const formateEventDate = dateFormat(event_date, "longDate");
   const eventAddress = address.split(",").slice(-2).toString();
   return (
      <div>
         <div className="relative flex max-w-[24rem] flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
            <div className="relative m-0 overflow-hidden rounded-none bg-transparent bg-clip-border text-gray-700 shadow-none">
               <img
                  className=" hover:scale-[1.1] transition-all"
                  src={image}
                  alt="ui/ux review check"
               />
               <div
                  className="middle absolute bottom-0 left-0 none border-2 border-primary center bg-primary py-2 font-semibold px-6 font-barlow text-lg rounded-tr-md text-white shadow-md transition-all"
                  to="/login"
                  data-ripple-light="true">
                  <span>$ {price}</span>
               </div>
            </div>
            <div className="p-3">
               <div className="flex pb-3 items-center justify-between">
                  <div className="flex items-center gap-3">
                     <p>
                        <BsCalendarWeek className="text-primary" />
                     </p>
                     <p className="text-sm text-gray-700">{formateEventDate}</p>
                  </div>
                  <div className="flex items-center gap-3">
                     <p>
                        <FiMapPin className="text-primary" />
                     </p>
                     <p className="text-sm text-gray-700">{eventAddress}</p>
                  </div>
               </div>
               <h4 className="block font-barlow text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                  {title}
               </h4>
               <p className="mt-3 block text-sm font-normal leading-relaxed text-gray-500 antialiased">
                  {long_description}
               </p>
            </div>
            <div className="flex items-center justify-between pb-6 px-3">
               <Link
                  className="text-sm underline text-primary font-semibold"
                  to="/booking/">
                  Book Now
               </Link>
               <div className="flex items-center justify-between gap-3">
                  <p className="flex items-center justify-between gap-1">
                     <a href="#">
                        <BiLogoFacebook className="text-md transition-all text-gray-400 hover:text-primary" />
                     </a>
                     <a href="#">
                        <BiLogoInstagram className="text-md transition-all text-gray-400 hover:text-primary" />
                     </a>
                     <a href="#">
                        <BiLogoLinkedin className="text-md transition-all text-gray-400 hover:text-primary" />
                     </a>
                     <a href="#">
                        <BiLogoTwitter className="text-md transition-all text-gray-400 hover:text-primary" />
                     </a>
                  </p>
                  <BsShare className="text-lg text-primary" />
               </div>
            </div>
         </div>
      </div>
   );
};

export default EventCard;
