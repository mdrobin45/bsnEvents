import dateFormat from "dateformat";
import {
   BsBlockquoteLeft,
   BsCalendarWeek,
   BsDiagram3,
   BsLightning,
   BsMegaphone,
} from "react-icons/bs";
import { FiMapPin } from "react-icons/fi";
import { useLoaderData, useParams } from "react-router-dom";
import FacilityList from "./FacilityList";
import Speaker from "./Speaker";

const EventInfo = () => {
   const events = useLoaderData();
   const { eventId } = useParams();

   // Find events by id
   const singleEvent = events.find((event) => event.id === parseFloat(eventId));

   const {
      image,
      title,
      event_date,
      price,
      address,
      long_description,
      facilities,
      speakers,
   } = singleEvent;

   const formateEventDate = dateFormat(event_date, "longDate");
   const eventAddress = address.split(",").slice(-2).toString();

   return (
      <div className="relative flex w-full flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
         <div className="relative m-0 h-96 overflow-hidden rounded-none bg-transparent bg-clip-border text-gray-700 shadow-none">
            <img className="w-full" src={image} alt="ui/ux review check" />
            <div
               className="middle absolute bottom-0 left-0 none border-2 border-primary center bg-primary py-2 font-semibold px-6 font-barlow text-lg rounded-tr-md text-white shadow-md transition-all"
               to="/login"
               data-ripple-light="true">
               <span>$ {price}</span>
            </div>
         </div>
         <div className="p-3 mt-3">
            <div className="flex pb-3 items-center justify-between">
               <div className="flex items-center gap-3">
                  <p>
                     <BsCalendarWeek className="text-primary" />
                  </p>
                  <p className="text-sm text-gray-700">{formateEventDate}</p>
               </div>
               <div className="flex items-center gap-3">
                  <p>
                     <BsDiagram3 className="text-primary text-2xl" />
                  </p>
                  <p className="text-xl font-barlow font-bold text-primary">
                     500 Seat
                  </p>
               </div>
               <div className="flex items-center gap-3">
                  <p>
                     <FiMapPin className="text-primary" />
                  </p>
                  <p className="text-sm text-gray-700">{eventAddress}</p>
               </div>
            </div>
         </div>
         <div className="flex p-3 items-center justify-between border-t border-b border-gray-300">
            <div className="flex gap-2">
               <div>
                  <BsBlockquoteLeft className="text-primary text-lg mt-1" />
               </div>
               <div>
                  <p className="text-md font-barlow font-semibold text-black">
                     Event Type
                  </p>
                  <p className="text-sm">Leadership Growth</p>
               </div>
            </div>
            <div className="flex gap-2">
               <div>
                  <BsMegaphone className="text-primary text-lg mt-1" />
               </div>
               <div>
                  <p className="text-md font-barlow font-semibold text-black">
                     Speakers
                  </p>
                  <p className="text-sm">2 Best Speaker</p>
               </div>
            </div>
            <div className="flex gap-2">
               <div>
                  <BsLightning className="text-primary text-lg mt-1" />
               </div>
               <div>
                  <p className="text-md font-barlow font-semibold text-black">
                     Sponsor
                  </p>
                  <p className="text-sm">Guru Inc</p>
               </div>
            </div>
            <div className="text-center">
               <div className="flex items-center space-x-1">
                  <svg
                     className="w-4 h-4 text-yellow-300"
                     aria-hidden="true"
                     xmlns="http://www.w3.org/2000/svg"
                     fill="currentColor"
                     viewBox="0 0 22 20">
                     <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                  </svg>
                  <svg
                     className="w-4 h-4 text-yellow-300"
                     aria-hidden="true"
                     xmlns="http://www.w3.org/2000/svg"
                     fill="currentColor"
                     viewBox="0 0 22 20">
                     <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                  </svg>
                  <svg
                     className="w-4 h-4 text-yellow-300"
                     aria-hidden="true"
                     xmlns="http://www.w3.org/2000/svg"
                     fill="currentColor"
                     viewBox="0 0 22 20">
                     <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                  </svg>
                  <svg
                     className="w-4 h-4 text-yellow-300"
                     aria-hidden="true"
                     xmlns="http://www.w3.org/2000/svg"
                     fill="currentColor"
                     viewBox="0 0 22 20">
                     <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                  </svg>
                  <svg
                     className="w-4 h-4 text-gray-300 dark:text-gray-500"
                     aria-hidden="true"
                     xmlns="http://www.w3.org/2000/svg"
                     fill="currentColor"
                     viewBox="0 0 22 20">
                     <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                  </svg>
               </div>
               <p className="text-sm">(500)</p>
            </div>
         </div>
         <div className="p-3">
            <h2 className="text-4xl py-3 font-barlow font-bold ">{title}</h2>
            <p>{long_description}</p>
            <h3 className="text-xl mb-2 font-bold font-barlow mt-4">
               Facilities:{" "}
            </h3>

            <ul className="space-y-4 text-left text-gray-500 dark:text-gray-400">
               {facilities.map((item, id) => (
                  <FacilityList key={id} listItem={item} />
               ))}
            </ul>
            <h3 className="text-xl mb-4 font-bold font-barlow mt-4">
               Main Speaker:
            </h3>
            <div className="grid grid-cols-2">
               {speakers.map((speaker, id) => (
                  <Speaker key={id} speaker={speaker} />
               ))}
            </div>
         </div>
      </div>
   );
};

export default EventInfo;
