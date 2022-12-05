import "./index.css";
import App from "./App";
import { createRoot } from "react-dom/client";

const AppWithcallbackAfterRender = () => {
  return <App tab="home" />;
};
const rootContainer = document.querySelector("#root");
const root = createRoot(rootContainer);
root.render(<AppWithcallbackAfterRender />);
