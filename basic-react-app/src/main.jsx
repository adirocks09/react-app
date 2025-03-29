import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { PrimeReactProvider } from "primereact/api";
import appStore from "./store/index.js";
import App from "./components/App/App.jsx";

// Importing global css files
// Latest imported CSS override previous imported css in case of conflicts.
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css"; // bootstrap.css overrides index.css
import "primeflex/primeflex.css";
import "primereact/resources/primereact.css";
import "primereact/resources/themes/lara-light-indigo/theme.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={appStore}>
      <PrimeReactProvider>
        <App />
      </PrimeReactProvider>
    </Provider>
  </StrictMode>
);
