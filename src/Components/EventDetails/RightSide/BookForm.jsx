import { BsBookmarkCheck } from "react-icons/bs";
import Email from "../../FormElements/FormFields/Email";
import Name from "../../FormElements/FormFields/Name";
import Phone from "../../FormElements/FormFields/Phone";

const BookForm = () => {
   return (
      <div>
         <div className="flex items-center justify-center lg:justify-start mx-auto lg:mx-0 gap-3 bg-transparent lg:bg-primary w-full lg:w-4/5 rounded-md lg:rounded-r-md p-2 mb-6">
            <BsBookmarkCheck className="text-primary lg:text-white text-2xl" />
            <h2 className="text-2xl font-bold font-barlow text-gray-700 lg:text-white">
               Book This Event
            </h2>
         </div>
         <form className="flex flex-col gap-7">
            <Name />
            <Email />
            <Phone />
            <input
               type="submit"
               className="middle font-barlow cursor-pointer w-full none border-2 border-primary hover:bg-transparent hover:border-primary center mb-2 rounded-lg bg-primary hover:text-primary py-2 font-semibold px-6 text-lg text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
               value="Book Now"
            />
         </form>
      </div>
   );
};

export default BookForm;
