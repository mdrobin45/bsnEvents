import {
   BiLogoFacebook,
   BiLogoInstagram,
   BiLogoLinkedin,
   BiLogoTwitter,
} from "react-icons/bi";

const SpeakerCard = ({ speaker }) => {
   const { image, name, title } = speaker;
   return (
      <div
         data-aos="fade-up"
         data-aos-duration="800"
         className="relative flex flex-col rounded-xl bg-gray-100 bg-clip-border text-gray-700 shadow-md">
         <div className="relative mx-4 mt-4 h-64 overflow-hidden rounded-xl bg-white bg-clip-border text-gray-700 shadow-lg">
            <img className="w-full h-full" src={image} alt="profile-picture" />
         </div>
         <div className="p-6 text-center">
            <h4 className="mb-2 block text-gray-700 text-2xl font-barlow font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
               {name}
            </h4>
            <p className="block text-base text-primary font-medium leading-relaxed antialiased">
               {title}
            </p>
         </div>
         <div className="flex justify-center gap-4 p-6 pt-2">
            <a href="#">
               <BiLogoFacebook className="text-lg transition-all text-gray-400 hover:text-primary" />
            </a>
            <a href="#">
               <BiLogoInstagram className="text-lg transition-all text-gray-400 hover:text-primary" />
            </a>
            <a href="#">
               <BiLogoLinkedin className="text-lg transition-all text-gray-400 hover:text-primary" />
            </a>
            <a href="#">
               <BiLogoTwitter className="text-lg transition-all text-gray-400 hover:text-primary" />
            </a>
         </div>
      </div>
   );
};

export default SpeakerCard;
