import { createBrowserRouter } from "react-router-dom";
import Contact from "../Pages/Contact/Contact";
import Dashboard from "../Pages/Dashboard/Dashboard";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import EventDetails from "../Pages/EventDetails/EventDetails";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Profile from "../Pages/Profile/Profile";
import Register from "../Pages/Register/Register";
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
            path: "/dashboard",
            element: (
               <PrivateRoute>
                  <Dashboard />
               </PrivateRoute>
            ),
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
