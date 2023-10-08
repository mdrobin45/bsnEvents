import {
   BiLogoFacebook,
   BiLogoInstagram,
   BiLogoLinkedin,
   BiLogoTwitter,
} from "react-icons/bi";

const Speaker = ({ speaker }) => {
   const { name, image, title } = speaker;
   return (
      <div className="flex gap-3 pb-10">
         <div>
            <img
               className=" w-24 h-24 rounded-full object-cover object-center"
               src={image}
               alt="nature image"
            />
         </div>
         <div>
            <h3 className="text-xl font-bold font-barlow text-black">{name}</h3>
            <p className="text-gray-400 mt-1">{title}</p>
            <p className="flex items-center gap-3 mt-3">
               <a
                  className="border rounded-full p-1 hover:bg-[#B2276F] text-white"
                  href="#">
                  <BiLogoFacebook className="text-md transition-all text-gray-400 hover:text-white" />
               </a>
               <a
                  className="border rounded-full p-1 hover:bg-[#B2276F] text-white"
                  href="#">
                  <BiLogoInstagram className="text-md transition-all text-gray-400 hover:text-white" />
               </a>
               <a
                  className="border rounded-full p-1 hover:bg-[#B2276F] text-white"
                  href="#">
                  <BiLogoLinkedin className="text-md transition-all text-gray-400 hover:text-white" />
               </a>
               <a
                  className="border rounded-full p-1 hover:bg-[#B2276F] text-white"
                  href="#">
                  <BiLogoTwitter className="text-md transition-all text-gray-400 hover:text-white" />
               </a>
            </p>
         </div>
      </div>
   );
};

export default Speaker;
