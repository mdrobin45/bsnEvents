const ContactInfoCard = ({ icon, title, subtitle }) => {
   return (
      <div className="flex items-center shadow-md p-8 rounded-md gap-7">
         <div>
            <img src={icon} alt="Location" />
         </div>
         <div>
            <h2
               style={{
                  WebkitTextStroke: "1px #2d373c",
                  WebkitTextFillColor: "transparent",
               }}
               className="text-4xl uppercase mb-1 font-bold font-barlow text-gray-800">
               {title}
            </h2>
            <p>{subtitle}</p>
         </div>
      </div>
   );
};

export default ContactInfoCard;
