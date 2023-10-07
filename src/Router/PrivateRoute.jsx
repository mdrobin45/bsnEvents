import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../MyContext/AuthContextProvider";

const PrivateRoute = ({ children }) => {
   const { isLoading, user } = useContext(AuthContext);
   const location = useLocation();

   if (isLoading) {
      // Show a loading spinner here
      return;
   }

   if (!user) {
      return <Navigate to="/login" state={{ prevUrl: location.pathname }} />;
   }
   return children;
};

export default PrivateRoute;
