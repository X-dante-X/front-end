import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import AppProvider from "./components/AppProvider";
import App from "./App.jsx";
import "./index.css";
import "bootstrap/dist/css/bootstrap.css";

createRoot(document.getElementById("root")).render(
  <AppProvider>
  <StrictMode>
      <App />
  </StrictMode>
  </AppProvider>
);
