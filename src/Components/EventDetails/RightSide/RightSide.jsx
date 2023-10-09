import BookForm from "./BookForm";
import UpcomingEvent from "./UpcomingEvent";

const RightSide = () => {
   return (
      <div className="w-full lg:w-1/3 mt-10 lg:mt-0 lg:ml-4 shadow-md rounded-md p-4">
         <BookForm />
         <UpcomingEvent />
      </div>
   );
};

export default RightSide;
