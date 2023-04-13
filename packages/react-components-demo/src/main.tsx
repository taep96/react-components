import React from "react";
import ReactDOM from "react-dom/client";

import App from "./app";

import "./global.css";

ReactDOM.createRoot(
  document.getElementsByTagName("body")[0] as HTMLElement
).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
