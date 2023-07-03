import React from "react";
import "./contato.css";
import email from "../assets/email.png";
import git from "../assets/github.png";
import linkedin from "../assets/linkedin.png";

// eslint-disable-next-line import/no-anonymous-default-export
export default function () {
  return (
    <div>
      <div id="contato">
          <h1 className="textContato"> Contato!</h1>
        <div id="containerIconContatos">
          <a
            href="https://www.linkedin.com/in/israel-bernardo-36b97b204"
            target="_blank"
          >
            <img
              className="iconContato"
              src={linkedin}
              alt="icon linkedin"
              href=""
            />
          </a>
          <a href="https://github.com/israelbernardo22/" target="_blank">
            <img className="iconContato" src={git} alt="Icon github" />
          </a>
          <a href="mailto:ib94534@gmail.com">
            <img className="iconContato" src={email} alt="Icon email" />
          </a>
        </div>
        <div id="containerLinks">
          <a
            href="https://www.figma.com/file/yMaiJ77xovWkOGuvyCb0JN/Untitled?node-id=0%3A1&t=RmCMLqQke1721AK2-1"
            target="_blank"
          >
            Acesse o mockup no figma
          </a>
          <p className="textContato">Desenvolvido por: Israel Bernardo.</p>
        </div>
      </div>
    </div>
  );
}
