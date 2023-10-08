import { createContext, useEffect, useState } from "react";

export const FetchContext = createContext(null);
const FetchDataContextProvider = ({ children }) => {
   const [events, setEvents] = useState([]);

   // Fetch Events
   useEffect(() => {
      fetch("https://mdrobin45.github.io/api/events.json")
         .then((res) => res.json())
         .then((data) => setEvents(data))
         .catch((err) => console.log(err));
   }, []);
   return (
      <FetchContext.Provider value={events}>{children}</FetchContext.Provider>
   );
};

export default FetchDataContextProvider;
