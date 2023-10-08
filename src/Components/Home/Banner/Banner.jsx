import { BsCalendarEvent } from "react-icons/bs";
import bannerImage from "../../../assets/images/hero-figure1.png";

const Banner = () => {
   return (
      <div className="flex flex-col-reverse md:flex-row h-screen px-7 md:px-16 lg:px-20 items-center justify-between">
         <div className="w-full md:w-2/4">
            <div className="flex mt-10 md:mt-0 pb-2 md:pb-0 items-center gap-3">
               <BsCalendarEvent className="text-lg" />
               <h3 className="text-primary text-md md:text-xl font-semibold">
                  October 22, 2023
               </h3>
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-6xl uppercase font-bold leading-tight font-barlow">
               Leadership Insight <br /> &{" "}
               <span className="text-primary">Conference</span>
            </h1>
            <p className="my-4">
               Step into the world of endless opportunities and networking
               excellence at Business Meetups and Conferences. Join us in
               shaping the future of business together
            </p>
            <div className="flex flex-col md:flex-row items-center gap-3 md:gap-10">
               <button
                  type="button"
                  className="middle w-2/4 md:w-inline none border-2 border-primary hover:bg-transparent hover:border-primary center mb-2 rounded-lg bg-primary hover:text-primary py-2 font-semibold px-6 font-barlow text-lg text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                  to="/login"
                  data-ripple-light="true">
                  <span>Book Now</span>
               </button>
               <button
                  type="button"
                  className="middle w-2/4 md:w-inline none border-2 bg-transparent border-primary center mb-2 rounded-lg hover:bg-primary hover:text-white bg-primary text-primary py-2 font-semibold px-6 font-barlow text-lg shadow-md shadow-pink-500/20 transition-all hover:shadow-lg active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                  to="/login"
                  data-ripple-light="true">
                  <span>View Details</span>
               </button>
            </div>
         </div>

         <div className="w-full md:w-2/4">
            <img
               className="w-full md:w-4/5 ml-auto"
               src={bannerImage}
               alt="Hero Image"
            />
         </div>
      </div>
   );
};

export default Banner;
