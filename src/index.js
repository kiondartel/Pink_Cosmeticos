import React from "react";
import ReactDOM from "react-dom";

import Router from "./config/router";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router />
  </React.StrictMode>
);
