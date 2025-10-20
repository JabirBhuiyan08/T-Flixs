import { createBrowserRouter } from "react-router-dom";

import Main from "../layout/Main";
import Home from "../Pages/Home/Home";
import PrivacyPolicy from "../Pages/PrivacyPolicy/PrivacyPolicy";

export const router = createBrowserRouter([
   {
      path: "/",
      element: <Main></Main>,
        children: [
             {
                path: "/",
                element: <Home></Home>,
             },
             {
                path: "privacy-policy",
                element: <PrivacyPolicy></PrivacyPolicy>,
             },
        ]
   }
]);