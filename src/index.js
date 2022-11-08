import React from "react";
import ReactDOM from "react-dom";
import Home from "./views/Home/Home";
import "assets/styles/main.css";
import "./components/CavaleiroLista/CavaleiroLista.css";

ReactDOM.render(
  <React.StrictMode>
    <Home />
  </React.StrictMode>,
  document.getElementById("root")
);
