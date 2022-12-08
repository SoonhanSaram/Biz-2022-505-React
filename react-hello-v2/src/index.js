import App from "./App";
import { createRoot } from "react-dom/client";

const rootContainer = document.querySelector("#root");
const root = createRoot(rootContainer);
root.render(<App />);
