import { useContext } from "react";
import { useParams } from "react-router-dom";
import { FetchContext } from "../../../MyContext/FetchDataContextProvider";

const EventDetailsInfo = () => {
   const events = useContext(FetchContext);
   const { id } = useParams();

   // Find events by id
   const filteredEvent = events.find((event) => event.id === parseFloat(id));
   console.log(filteredEvent);
   return (
      <div>
         <h2>Event Details component</h2>
      </div>
   );
};

export default EventDetailsInfo;
