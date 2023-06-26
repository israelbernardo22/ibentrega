import React from "react";
import "./menu.css";
import logo from "../assets/logo1.png";

// eslint-disable-next-line import/no-anonymous-default-export
export default function () {
  return (
    <div id="menu">
      <img id="IB-Logo" src={logo} alt="Logomarca do aplicativo IB-Entrega" />
      <p id="motivacional">O preço ideal, valorizando o seu trabalho!</p>
      <div id="botoes">
        <a className="botoesmenu" href="#description">
          Sobre
        </a>
        <a className="botoesmenu" href="#calculo">
          Cálculo
        </a>
        <a className="botoesmenu" href="#contato">
          Contato
        </a>
      </div>
    </div>
  );
}
