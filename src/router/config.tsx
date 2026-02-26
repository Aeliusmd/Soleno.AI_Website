
import React from "react";
import type { RouteObject } from "react-router-dom";
import NotFound from "../pages/NotFound";
import Home from "../pages/home/page";
import About from "../pages/about/page";
// import About from "../pages/about/page";

// import Contact from "../pages/contact/page";

const routes: RouteObject[] = [
  {
    path: "/",
    element: <Home />,
  },
  // {
  //   path: "/about",
  //   element: <About />,
  // },
  {
    path: "/services",
    element: <Services />,
  },
  // {
  //   path: "/contact",
  //   element: <Contact />,
  // },
  {
    path: "*",
    element: <NotFound />,
  },
  {
    path: "/about",
    element: <About />, //http://localhost:3000/about
  }
];

export default routes;
