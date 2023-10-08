const FacilityList = ({ listItem }) => {
   return (
      <div>
         <li className="flex items-center space-x-3">
            <svg
               className="flex-shrink-0 w-3.5 h-3.5 text-primary"
               aria-hidden="true"
               xmlns="http://www.w3.org/2000/svg"
               fill="none"
               viewBox="0 0 16 12">
               <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 5.917 5.724 10.5 15 1.5"
               />
            </svg>
            <span>{listItem}</span>
         </li>
      </div>
   );
};

export default FacilityList;
