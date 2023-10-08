import { useLoaderData } from "react-router-dom";
import SectionHeader from "../../SectionHeader/SectionHeader";
import EventCard from "./EventCard";

const Events = () => {
   const events = useLoaderData();
   return (
      <>
         <div className="px-20">
            <SectionHeader title="Popular Event" subTitle="Event" />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
               {events.map((event) => (
                  <EventCard key={event.id} event={event} />
               ))}
            </div>
         </div>
      </>
   );
};

export default Events;
