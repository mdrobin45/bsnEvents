import BookForm from "./BookForm";
import UpcomingEvent from "./UpcomingEvent";

const RightSide = () => {
   return (
      <div className="w-1/3 ml-4 shadow-md rounded-md p-4">
         <BookForm />
         <UpcomingEvent />
      </div>
   );
};

export default RightSide;
