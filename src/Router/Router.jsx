import { createBrowserRouter } from "react-router-dom";
import Contact from "../Pages/Contact/Contact";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import EventDetails from "../Pages/EventDetails/EventDetails";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Profile from "../Pages/Profile/Profile";
import Register from "../Pages/Register/Register";
import Speakers from "../Pages/Speakers/Speakers";
import Root from "../Root/Root";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
   {
      path: "/",
      element: <Root />,
      errorElement: <ErrorPage />,
      children: [
         {
            path: "/",
            element: <Home />,
            loader: () => fetch("https://mdrobin45.github.io/api/events.json"),
         },
         {
            path: "/profile",
            element: (
               <PrivateRoute>
                  <Profile />
               </PrivateRoute>
            ),
         },
         {
            path: "/speakers",
            loader: () =>
               fetch("https://mdrobin45.github.io/api/speakers.json"),
            element: (
               <PrivateRoute>
                  <Speakers />
               </PrivateRoute>
            ),
         },
         {
            path: "/contact",
            element: <Contact />,
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
