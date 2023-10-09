const SectionHeader = ({ title, subTitle }) => {
   return (
      <div className="flex flex-col items-center justify-center py-10">
         <h3
            data-aos="fade-up"
            data-aos-duration="800"
            className="text-2xl text-primary font-semibold">
            {subTitle}
         </h3>
         <h2
            data-aos="fade-up"
            data-aos-delay="200"
            data-aos-duration="800"
            className="text-2xl md:text-3xl lg:text-4xl text-gray-700 font-bold font-barlow uppercase">
            {title}
         </h2>
      </div>
   );
};

export default SectionHeader;
