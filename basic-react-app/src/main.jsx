import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./components/App/App.jsx";

// Latest imported CSS override previous imported css in case of conflicts.
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css"; // bootstrap.css overrides index.css

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
