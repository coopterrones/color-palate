import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./Components/App/index.js";
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  <BrowserRouter basename="/colors">
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);
