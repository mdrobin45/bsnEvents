import { createBrowserRouter } from "react-router-dom";
import EventDetails from "../Pages/EventDetails/EventDetails";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Pricing from "../Pages/Pricing/Pricing";
import Register from "../Pages/Register/Register";
import Speakers from "../Pages/Speakers/Speakers";
import Root from "../Root/Root";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
   {
      path: "/",
      element: <Root />,
      children: [
         {
            path: "/",
            element: <Home />,
            loader: () => fetch("https://mdrobin45.github.io/api/events.json"),
         },
         {
            path: "/pricing",
            element: <Pricing />,
         },
         {
            path: "/speakers",
            element: <Speakers />,
         },
         {
            path: "/login",
            element: <Login />,
         },
         {
            path: "/register",
            element: <Register />,
         },
         {
            path: "/events",
            element: (
               <PrivateRoute>
                  <EventDetails />
               </PrivateRoute>
            ),
            loader: () => fetch("https://mdrobin45.github.io/api/events.json"),
            children: [
               {
                  path: "/events/:eventId",
                  element: (
                     <PrivateRoute>
                        <EventDetails />
                     </PrivateRoute>
                  ),
               },
            ],
         },
      ],
   },
]);

export default router;
