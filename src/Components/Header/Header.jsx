import { useState } from "react";
import Logo from "./Logo/Logo";
import MenuLinks from "./MenuLinks/MenuLinks";
import NavButtons from "./NavButtons/NavButtons";

const Header = () => {
   const [expandMobileMenu, setExpandMobileMenu] = useState(false);

   // handle mobile hamburger icon click
   const hamburgerClick = () => {
      setExpandMobileMenu(!expandMobileMenu);
   };
   return (
      <nav className="bg-white dark:bg-gray-900 fixed w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600">
         <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
            <Logo />
            <NavButtons expandBtnClick={hamburgerClick} />
            <MenuLinks mobileExpand={expandMobileMenu} />
         </div>
      </nav>
   );
};

export default Header;
