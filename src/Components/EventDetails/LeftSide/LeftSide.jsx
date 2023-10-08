import { useContext } from "react";
import { useParams } from "react-router-dom";
import { FetchContext } from "../../../MyContext/FetchDataContextProvider";
import EventInfo from "./EventInfo";

const LeftSide = () => {
   const events = useContext(FetchContext);
   const { eventId } = useParams();

   // Find events by id
   const event = events.find((event) => event.id === parseFloat(eventId));
   return (
      <div className="w-2/3">
         <EventInfo event={event} />
      </div>
   );
};

export default LeftSide;
