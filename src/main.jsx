import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import { CardProvider } from "./context/CartContext";
import "./css/normalize.css";
import "./css/index.css";

createRoot(document.getElementById("root")).render(
  <CardProvider>
    <StrictMode>
      <App />
    </StrictMode>
  </CardProvider>
);
