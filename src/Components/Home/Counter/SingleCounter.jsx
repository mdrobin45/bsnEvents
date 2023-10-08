import { useState } from "react";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";

const SingleCounter = ({ title, countStart, countEnd }) => {
   const [counterOn, setCounterOn] = useState(false);
   return (
      <div>
         <ScrollTrigger
            onEnter={() => {
               setCounterOn(true);
            }}>
            <h3 className="my-2">
               {counterOn && (
                  <CountUp
                     className="text-6xl text-white font-bold font-barlow"
                     start={countStart}
                     end={countEnd}
                     suffix=" +"
                     duration={1.5}
                  />
               )}
            </h3>
         </ScrollTrigger>
         <h3 className="text-2xl text-white">{title}</h3>
      </div>
   );
};

export default SingleCounter;
