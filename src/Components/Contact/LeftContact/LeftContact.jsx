import locationIcon from "../../../assets/images/c-location.png";
import emailIcon from "../../../assets/images/c-massege.png";
import phoneIcon from "../../../assets/images/c-phone.png";
import ContactInfoCard from "./ContactInfoCard";

const LeftContact = () => {
   return (
      <div className="flex flex-col gap-16 w-full md:w-2/4">
         <ContactInfoCard
            icon={locationIcon}
            title="Location"
            subtitle="Digital Agency Network 20 Eastbourne Terrace,London"
         />
         <ContactInfoCard
            icon={phoneIcon}
            title="Phone"
            subtitle="012 3456 789102"
         />
         <ContactInfoCard
            icon={emailIcon}
            title="Email"
            subtitle="support@example.com"
         />
      </div>
   );
};

export default LeftContact;
