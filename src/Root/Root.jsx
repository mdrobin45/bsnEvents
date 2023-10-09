import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { Outlet } from "react-router-dom";
import Footer from "../Components/Footer/Footer";
import Header from "../Components/Header/Header";

const Root = () => {
   useEffect(() => {
      AOS.init();
   }, []);
   return (
      <div>
         <Header />
         <Outlet />
         <Footer />
      </div>
   );
};

export default Root;
