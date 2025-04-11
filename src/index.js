import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import Sidebar from "./ElementosForm/Sidebar";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <Sidebar>
      <App />
    </Sidebar> 
  </React.StrictMode>
);
