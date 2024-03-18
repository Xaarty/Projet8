import React from "react";
import ReactDOM from "react-dom/client";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home, { loader as homeloader } from "./pages/home";
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
        loader: homeloader,
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

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return <Error />;
    }

    return this.props.children;
  }
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ErrorBoundary errorElement={<Error />}>
      <RouterProvider router={router} />
    </ErrorBoundary>
  </React.StrictMode>
);