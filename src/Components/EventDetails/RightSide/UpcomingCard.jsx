import dateFormat from "dateformat";
import { BsCalendarWeek, BsDiagram3 } from "react-icons/bs";
import { Link } from "react-router-dom";

const UpcomingCard = ({ event }) => {
   const { id, image, title, event_date } = event;
   const formateEventDate = dateFormat(event_date, "longDate");
   return (
      <div className="relative my-6 flex w-full flex-row rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
         <div className="relative m-0 w-2/5 shrink-0 overflow-hidden rounded-xl rounded-r-none bg-white bg-clip-border text-gray-700">
            <img
               src={image}
               alt="image"
               className="h-full w-full object-cover"
            />
         </div>
         <div className="p-3">
            <h4 className="mb-2 block text-md font-barlow font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
               {title}
            </h4>
            <div>
               <div className="flex pb-3 items-center justify-between">
                  <div className="flex items-center gap-3">
                     <p>
                        <BsCalendarWeek className="text-primary text-[13px]" />
                     </p>
                     <p className="text-[13px] text-gray-700">
                        {formateEventDate}
                     </p>
                  </div>
                  <div className="flex items-center gap-3">
                     <p>
                        <BsDiagram3 className="text-primary text-[13px]" />
                     </p>
                     <p className="text-[13px] text-gray-700">500</p>
                  </div>
               </div>
            </div>
            <Link
               className="text-sm underline text-primary font-semibold"
               to={`/events/${id}`}>
               Book Now
            </Link>
         </div>
      </div>
   );
};

export default UpcomingCard;
