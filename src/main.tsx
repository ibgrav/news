import "./main.css";

import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Home } from "./pages/home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: (
      <div className="h-full w-full flex justify-center items-center">
        <h1>404</h1>
      </div>
    ),
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
