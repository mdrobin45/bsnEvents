import LeftSide from "../../Components/EventDetails/LeftSide/LeftSide";
import RightSide from "../../Components/EventDetails/RightSide/RightSide";
import PageHeader from "../../Components/PageHeader/PageHeader";
import bgImage from "../../assets/images/event-details-bg.png";

const EventDetails = () => {
   return (
      <>
         <PageHeader title="Event Details" bgImage={bgImage} />
         <div className="px-20 flex items-center justify-between">
            <LeftSide />
            <RightSide />
         </div>
      </>
   );
};

export default EventDetails;
