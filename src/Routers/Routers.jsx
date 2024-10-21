import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "../Layout";
import About from "../Pages/About";
import Doctors from "../Pages/Doctors";
import Servise from "../Pages/Servise";
import News from "../Pages/News";
import Contact from "../Pages/Contact";
import Home from "../Pages/Home";

import DynamicService from "../Pages/DynamicPage/DynamicService";
import Gallery from "../Pages/Gallery";

const route = createBrowserRouter([
  {
    element: <Layout  />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "doctors",
        element: <Doctors />,
      },
      {
        path: "service",
        element: <Servise />,
      },
      {
        path: "service/:id",
        element: <DynamicService />,
      },
      {
        path: "gallery",
        element: <Gallery />,
      },
      {
        path: "news",
        element: <News />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
    ],
  },
]);
const Routers = () => {
  return <RouterProvider router={route} />;
};

export default Routers;
