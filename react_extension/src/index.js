import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom/cjs/react-router-dom.min";

const container = document.getElementById("root");
const root = createRoot(container); // React 18 API
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
