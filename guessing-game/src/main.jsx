import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router";
import App from "./App";
import Easy from "./Easy";
import Medium from "./Medium";
import Hard from "./Hard";
import Brutal from "./Brutal";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/Easy",
    element: <Easy />,
  },
  {
    path: "/Medium",
    element: <Medium />,
  },
  {
    path: "/Hard",
    element: <Hard />,
  },
  {
    path: "/Brutal",
    element: <Brutal />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
