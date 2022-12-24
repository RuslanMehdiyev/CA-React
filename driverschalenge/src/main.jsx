import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import { DriverProvider } from "./storeContext/driversContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Router>
    <DriverProvider>
      <App />
    </DriverProvider>
  </Router>
);
