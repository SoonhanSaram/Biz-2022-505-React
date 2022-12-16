import React from "react";
import ReactDOM from "react-dom/client";
import "./css/index.css";
import App from "./App";

/**
 * /public/index.html 파일의 id가 root인 div box에
 * 프로젝트의 컴포넌트들을 rendering
 */
const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
