import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import AuthContextProvider from "./MyContext/AuthContextProvider.jsx";
import FetchDataContextProvider from "./MyContext/FetchDataContextProvider.jsx";
import router from "./Router/Router.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
   <React.StrictMode>
      <FetchDataContextProvider>
         <AuthContextProvider>
            <RouterProvider router={router} />
         </AuthContextProvider>
      </FetchDataContextProvider>
   </React.StrictMode>
);
