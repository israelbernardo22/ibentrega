import React, { useEffect, useState } from "react";
import "./calculo.css";
import dinheiro from "../assets/dinheiro.png";
import axios from "axios";

// eslint-disable-next-line import/no-anonymous-default-export
export default function () {
  const [distancia, setDistancia] = useState("");
  const [tempo, setTempo] = useState("");
  const [resp, setResp] = useState("");
  const [motos, setMotos] = useState([]);
  const [consumo, setConsumo] = useState([]);

  async function getConsumo(id) {
    try {
      const response = await axios.get(`http://localhost:5432/motos/${id}`);
      setConsumo(response.data[0].consumo);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    const getMotos = async () => {
      try {
        const response = await axios.get("http://localhost:5432/motos");
        setMotos(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    getMotos();
  }, []);

  function calculaEntrega() {
    let seguro, manutencao, oleo, gasolina, lucro, custov, custotempo, total;
    if (parseFloat(distancia) > 0 && parseFloat(tempo) > 0) {
      seguro = 0.5;
      manutencao = 0.05 * parseFloat(distancia);
      oleo = 0.022 * parseFloat(distancia) * 2;
      gasolina = (parseFloat(distancia) / consumo) * 4.95;
      lucro = 0.5 * parseFloat(distancia);
      custov = parseFloat(distancia) * 0.022 + parseFloat(distancia) * 0.193;
      if (parseFloat(distancia) > 15) {
        lucro = 5 + parseFloat(distancia) * 0.75;
      }
      if (parseFloat(distancia) > 22) {
        lucro = 7 + parseFloat(distancia) * 0.65;
      }
      if (parseFloat(distancia) >= 50) {
        lucro = 10 + parseFloat(distancia) * 0.55;
      }
      if (parseFloat(tempo) >= 20) {
        custotempo = 2 + parseFloat(tempo) * 0.17;
      } else if (parseFloat(tempo) < 20) {
        custotempo = 4;
      }

      total =
        seguro + manutencao + oleo + gasolina + lucro + custov + custotempo;
      setResp(total.toFixed(2));
    } else {
      document.getElementById("resp").innerText =
        "Favor digitar um valor válido. ";
    }
  }

  return (
    <div>
      <div id="calculo">
        <div className="formulario_calculo">
          <p>Informe seu veiculo:</p>
          <select
            name="select"
            title={consumo}
            onChange={(e) => getConsumo(e.target.value)}
          >
            <option value="0">Selecione uma Opção</option>
            {motos?.map((moto) => (
              <option key={moto.id} value={moto.id}>
                {moto.modelo}
              </option>
            ))}
          </select>
          <p>
            Informe a quantidade (em <b>KM</b>): <br />
          </p>
          <input
            type="number"
            placeholder="Digite a distancia a ser percorrida"
            onChange={(e) => setDistancia(e.target.value)}
          />
          <p>
            Informe o tempo para esta entrega (em <b>MINUTOS</b>):{" "}
          </p>
          <input
            type="number"
            placeholder="Digite o tempo necessario para realizar a corrida"
            onChange={(e) => setTempo(e.target.value)}
          />
          <button
            type="button"
            id="btnCalcula"
            onClick={() => calculaEntrega()}
          >
            Calcular
          </button>
          <p id="resp">Valor da corrida: {resp}</p>
        </div>
        <img src={dinheiro} alt="Icone de Dinheiro" id="iconDinheiro" />
      </div>
    </div>
  );
}
