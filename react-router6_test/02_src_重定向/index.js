/* import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

ReactDOM.render(<App />, document.getElementById("root"));
 */

// index.js
import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

const container = document.getElementById("root");
const root = createRoot(container); // React 18 API
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
