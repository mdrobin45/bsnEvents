import { createBrowserRouter } from "react-router-dom";
import EventDetails from "../Pages/EventDetails/EventDetails";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Pricing from "../Pages/Pricing/Pricing";
import Register from "../Pages/Register/Register";
import Speakers from "../Pages/Speakers/Speakers";
import Root from "../Root/Root";

const router = createBrowserRouter([
   {
      path: "/",
      element: <Root />,
      children: [
         {
            path: "/",
            element: <Home />,
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
            element: <EventDetails />,
            children: [
               {
                  path: "/events/:id",
                  element: <EventDetails />,
               },
            ],
         },
      ],
   },
]);

export default router;
