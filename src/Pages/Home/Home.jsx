import Banner from "../../Components/Home/Banner/Banner";
import SiteTitle from "../../Components/SiteTitle/SiteTitle";

const Home = () => {
   return (
      <>
         <SiteTitle>Home</SiteTitle>
         <div
            style={{
               background:
                  "conic-gradient(from 243.17deg at 52.66% 45.72%,rgba(206,20,70,0.25) 0deg,rgba(255,255,255,0) 66.85deg,rgba(222,95,129,0.3) 266.25deg,rgba(206,20,70,0.25) 360deg)",
            }}>
            <Banner />
         </div>
      </>
   );
};

export default Home;
