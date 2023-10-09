import LeftSide from "../../Components/EventDetails/LeftSide/LeftSide";
import RightSide from "../../Components/EventDetails/RightSide/RightSide";
import PageHeader from "../../Components/PageHeader/PageHeader";
import SiteTitle from "../../Components/SiteTitle/SiteTitle";

const EventDetails = () => {
   return (
      <>
         <SiteTitle>Event Details</SiteTitle>
         <PageHeader title="Event Details" />
         <div className="px-7 md:px-10 lg:px-20 flex flex-col lg:flex-row py-20 justify-between">
            <LeftSide />
            <RightSide />
         </div>
      </>
   );
};

export default EventDetails;
