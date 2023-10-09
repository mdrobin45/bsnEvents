import { BsCalendar2Event } from "react-icons/bs";
import { useLoaderData } from "react-router-dom";
import UpcomingCard from "./UpcomingCard";

const UpcomingEvent = () => {
   const events = useLoaderData();

   // Filter upcoming events with date
   const upcomingEvents = events.filter((event) => {
      const today = new Date().getTime();
      const eventDate = new Date(event.event_date).getTime();
      return eventDate > today;
   });

   return (
      <div>
         <div className="flex mt-10 lg:mt-10 items-center justify-center lg:justify-start mx-auto lg:mx-0 gap-3 bg-transparent lg:bg-primary w-full lg:w-4/5 rounded-md lg:rounded-r-md p-2 mb-6">
            <BsCalendar2Event className="text-primary lg:text-white text-2xl" />
            <h2 className="text-2xl font-bold font-barlow text-gray-700 lg:text-white">
               Upcoming Event
            </h2>
         </div>
         {upcomingEvents.slice(0, 4).map((event) => (
            <UpcomingCard key={event.id} event={event} />
         ))}
      </div>
   );
};

export default UpcomingEvent;
