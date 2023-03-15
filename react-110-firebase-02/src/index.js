import React from "react";
import ReactDOM from "react-dom/client";
import { AuthorContextProvider } from "./firebase/AuthorProvider";
import { DBContextProvider } from "./firebase/DbProvider";
import "./index.css";

import MainRouterProvider from "./layout/MainRouter";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AuthorContextProvider>
      <DBContextProvider>
        <MainRouterProvider />
      </DBContextProvider>
    </AuthorContextProvider>
  </React.StrictMode>
);
