import { useLoaderData } from "react-router-dom";
import SpeakerCard from "../../Components/Home/Speakers/SpeakerCard";
import PageHeader from "../../Components/PageHeader/PageHeader";
import SiteTitle from "../../Components/SiteTitle/SiteTitle";

const Speakers = () => {
   const speakers = useLoaderData();
   return (
      <div>
         <SiteTitle>Speakers</SiteTitle>
         <PageHeader title="Speakers" />
         <div className="px-7 md:px-10 lg:px-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 my-20 ">
            {speakers.map((speaker) => (
               <SpeakerCard key={speaker.id} speaker={speaker} />
            ))}
         </div>
      </div>
   );
};

export default Speakers;
