import React from "react";
import "./info.css";
import bolinhaMoto from "../assets/Bolinhamoto.jpg";
import motoInfo from "../assets/motoinfo.jpg";

export default function () {
  return (
    <div>
      <div id="info">
        <div className="text" id="text_sobre">
          Este é um sistema desenvolvido com intuito de ajudar motoboys a
          calcular o preço ideal a ser cobrado em suas entregas e serviços,
          buscando valorizar e considerar todos os custos envolvidos no serviço
          de moto frete.
        </div>
        <img src={bolinhaMoto} alt="Imagem moto com bau"
         id="bolinha-moto" />
      </div>

      <div id="description">
        <img src={motoInfo} />
        <p className="text" id="text_description">
          Chega de dificuldade para calcular o preço de suas entregas. Com
          IB-Entrega, é possível realizar a precificação com facilidade,
          agilidade e sem erros. Cobrando um preço justo, você pode trabalhar
          com mais tranquilidade e qualidade. Seu serviço sendo valorizado pelo
          seu esforço, dedicação e profissionalismo!
        </p>
      </div>
    </div>
  );
}
