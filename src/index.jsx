import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

// Import our custom CSS
import "../src/scss/styles.scss";

// Import all of Bootstrap's JS
// eslint-disable-next-line no-unused-vars
import * as bootstrap from "bootstrap";

import "./index.css";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <App />
    </StrictMode>
);
