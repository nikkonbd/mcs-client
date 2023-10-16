import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/main/Main";
import Home from "../layout/pages/home/Home";
import DetailsCa from "../components/searchName/detailsCa/DetailsCa";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "details/:_id",
        element: <DetailsCa></DetailsCa>,
      },
    ],
  },
]);

export default router;
