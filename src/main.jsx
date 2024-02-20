import React from "react";
import ReactDOM from "react-dom/client";

import "./styles/main.scss";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/home";
import Layout from "./pages/layout";
import Error from "./pages/error-page";
import Propos from "./pages/a-propos";
import FicheLogement from "./pages/fiche-logement";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <Error />,
    children: [
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/a-propos",
        element: <Propos />,
      },
      {
        path: "/fiche-logement",
        element: <FicheLogement />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
