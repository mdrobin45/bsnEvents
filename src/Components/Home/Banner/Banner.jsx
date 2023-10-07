import { BsCalendarEvent } from "react-icons/bs";
import bannerImage from "../../../assets/images/hero-figure1.png";

const Banner = () => {
   return (
      <div className="flex h-screen px-20 items-center justify-between">
         <div className="w-2/4">
            <div className="flex items-center gap-3">
               <BsCalendarEvent className="text-lg" />
               <h3 className="text-primary text-xl font-semibold">
                  October 22, 2023
               </h3>
            </div>
            <h1 className="text-6xl uppercase font-bold leading-tight font-barlow">
               Leadership Insight <br /> &{" "}
               <span className="text-primary">Conference</span>
            </h1>
            <p className="my-4">
               Step into the world of endless opportunities and networking
               excellence at Business Meetups and Conferences. Join us in
               shaping the future of business together
            </p>
            <div className="flex items-center gap-10">
               <button
                  type="button"
                  className="middle none border-2 border-primary hover:bg-transparent hover:border-primary center mb-2 rounded-lg bg-primary hover:text-primary py-2 font-semibold px-6 font-barlow text-lg text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                  to="/login"
                  data-ripple-light="true">
                  <span>Book Now</span>
               </button>
               <button
                  type="button"
                  className="middle none border-2 bg-transparent border-primary center mb-2 rounded-lg hover:bg-primary hover:text-white bg-primary text-primary py-2 font-semibold px-6 font-barlow text-lg shadow-md shadow-pink-500/20 transition-all hover:shadow-lg active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                  to="/login"
                  data-ripple-light="true">
                  <span>View Details</span>
               </button>
            </div>
         </div>

         <div className="w-2/4">
            <img
               className=" w-4/5 ml-auto"
               src={bannerImage}
               alt="Hero Image"
            />
         </div>
      </div>
   );
};

export default Banner;
