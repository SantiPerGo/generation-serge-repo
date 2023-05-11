import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import { App } from "./App";

// Bootstrap files
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

// Material UI Fonts
import CssBaseline from '@mui/material/CssBaseline';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

// Connection with the root div to render react components
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  // Strict mode checks if there is a syntax error
  <React.StrictMode>
    {/* // Normalizes the css styles in all the browsers */}
    <CssBaseline />

    {/* // Using react router */}
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);