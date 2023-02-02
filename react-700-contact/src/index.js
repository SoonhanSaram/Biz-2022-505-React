import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import MainRouter from "./layout/MainRouter";
import "./css/index.css";
import App from "./App";

const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={MainRouter} />
  </React.StrictMode>
);
