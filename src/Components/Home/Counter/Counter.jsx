import bgImage from "../../../assets/images/achievement-bg.png";
import idealEventImg from "../../../assets/images/calander.png";
import peopleImg from "../../../assets/images/people.png";
import scheduleImg from "../../../assets/images/schedule.png";
import speakerImg from "../../../assets/images/speaker.png";
import SingleCounter from "./SingleCounter";

const Counter = () => {
   return (
      <div
         style={{
            background: `linear-gradient(rgba(45,55,60,0.9) 100%,rgba(45,55,60,0.9) 100%),url(${bgImage})`,
         }}
         className="py-32 my-32">
         <div className="flex px-20 items-center justify-between">
            <div className="text-center">
               <img className="mx-auto" src={speakerImg} alt="Speaker" />
               <SingleCounter
                  title="Best Speakers"
                  countStart={0}
                  countEnd={150}
               />
            </div>
            <div className="text-center">
               <img className="mx-auto" src={idealEventImg} alt="Speaker" />
               <SingleCounter
                  title="Ideal Event"
                  countStart={0}
                  countEnd={600}
               />
            </div>
            <div className="text-center">
               <img className="mx-auto" src={scheduleImg} alt="Speaker" />
               <SingleCounter
                  title="New Schedule"
                  countStart={0}
                  countEnd={300}
               />
            </div>
            <div className="text-center">
               <img className="mx-auto" src={peopleImg} alt="Speaker" />
               <SingleCounter
                  title="Participants"
                  countStart={0}
                  countEnd={700}
               />
            </div>
         </div>
      </div>
   );
};

export default Counter;
