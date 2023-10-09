import { useEffect, useState } from "react";
import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import SectionHeader from "../../SectionHeader/SectionHeader";
import SpeakerCard from "./SpeakerCard";

const SpeakerSlider = () => {
   const [speakers, setSpeakers] = useState([]);

   // Fetch speakers
   useEffect(() => {
      fetch("https://mdrobin45.github.io/api/speakers.json")
         .then((res) => res.json())
         .then((data) => setSpeakers(data));
   }, []);

   const responsiveSlider = {
      520: {
         slidesPerView: 2,
      },
      768: {
         slidesPerView: 3,
      },
   };
   return (
      <>
         <div className="px-7 md:px-10 lg:px-20 pb-20">
            <SectionHeader title="TALENTED SPEAKER" subTitle="Speaker" />
            <Swiper
               slidesPerView={1}
               breakpoints={responsiveSlider}
               navigation={true}
               spaceBetween={30}
               pagination={{
                  clickable: true,
               }}
               grabCursor={true}>
               {speakers.map((speaker) => (
                  <SwiperSlide key={speaker.id}>
                     <SpeakerCard speaker={speaker} />
                  </SwiperSlide>
               ))}
            </Swiper>
         </div>
      </>
   );
};

export default SpeakerSlider;
