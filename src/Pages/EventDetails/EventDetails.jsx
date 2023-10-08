import EventDetailsInfo from "../../Components/EventDetails/LeftSide/EventDetailsInfo";
import PageHeader from "../../Components/PageHeader/PageHeader";
import bgImage from "../../assets/images/event-details-bg.png";

const EventDetails = () => {
   return (
      <>
         <PageHeader title="Event Details" bgImage={bgImage} />
         <div className="px-20">
            <EventDetailsInfo />
         </div>
      </>
   );
};

export default EventDetails;
