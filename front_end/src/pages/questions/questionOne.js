import React from "react";
import Template from "../../components/template";

import "../../styles/pages/questions/questionOne.css";

export default function QuestionOne() {
  return (
    <div className="container">
      <div id="question-one-page">
        <header>
          <h1>1</h1>
          <h2>Quem é você</h2>
        </header>

        <Template name="Desafio A">
          <p>
            Tire uma selfie e escreva seu nome e como gosta de ser chamado
            (apelido)
          </p>
        </Template>

        <Template name="Desafio B">
          <p>
            Escreva onde você mora
          </p>
        </Template>

        <Template name="Desafio C">
          <p>
          Escreva  o que você vende ou gostaria de vender no seu negócio
          </p>
        </Template>

        <Template name="Desafio D">
          <p>
          Grave um vídeo de até 2 minutos contando a sua história: quem é você? Quem é sua família/comunidade? Desde quando você trabalha com esse produto? Qual o seu sonho? 
          </p>
        </Template>
      </div>
    </div>
  );
}
