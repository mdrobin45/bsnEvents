import LeftContact from "../../Components/Contact/LeftContact/LeftContact";
import RightContact from "../../Components/Contact/RightContact/RightContact";
import PageHeader from "../../Components/PageHeader/PageHeader";
import SiteTitle from "../../Components/SiteTitle/SiteTitle";

const Contact = () => {
   return (
      <div>
         <SiteTitle>Contact</SiteTitle>
         <PageHeader title="Contact" />
         <div className="flex px-7 md:px-10 lg:px-20 flex-col md:flex-row my-10 md:my-16 lg:my-20 justify-between gap-10">
            <LeftContact />
            <RightContact />
         </div>
      </div>
   );
};

export default Contact;
