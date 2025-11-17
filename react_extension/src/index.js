import React, { Fragment } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
//import { BrowserRouter } from "react-router-dom";

const container = document.getElementById("root");
const root = createRoot(container);

// 把 root.unmount 传给 App 作为回调
root.render(
  <Fragment>
    {/* <App onUnmount={() => root.unmount()} /> */}
    <App />
  </Fragment>
);
