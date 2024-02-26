import React from "react";
import ReactDOM from "react-dom/client";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/home";
import Layout from "./pages/layout";
import Error from "./pages/error-page";
import Propos from "./pages/apropos";
import FicheLogement, {
  loader as fichelogementloader,
} from "./pages/fiche-logement";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/apropos",
        element: <Propos />,
      },
      {
        path: "/:id",
        element: <FicheLogement />,
        loader: fichelogementloader,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
