import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Menu from "./components/Menu";
import Info from "./components/Info";
import Calculo from "./components/Calculo";
import Contato from "./components/Contato";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Menu />
    <Info />
    <Calculo />
    <Contato />
  </React.StrictMode>
);
