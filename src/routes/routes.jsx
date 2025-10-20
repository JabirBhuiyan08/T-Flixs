import { createBrowserRouter } from "react-router-dom";

import Main from "../layout/Main";
import Home from "../Pages/Home/Home";
import PrivacyPolicy from "../Pages/PrivacyPolicy/PrivacyPolicy";
import ShareEarn from "../Pages/ShareEarn/ShareEarn";

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
             {
                path: "share-earn",
                element: <ShareEarn></ShareEarn>,
             },
        ]
   }
]);