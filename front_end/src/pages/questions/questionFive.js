import React from "react";
import Template from "../../components/template";

import "../../styles/pages/questions/questionFive.css";

export default function QuestionFive() {
  return (
    <div className="container">
      <div id="question-five-page">
        <header>
          <h1>5</h1>
          <h2>Vitrine</h2>
        </header>

        <Template name="Desafio A" gotTo=''>
          <p>
          Faça um vídeo de venda do seu produto falando sobre quais são os seus diferenciais. O que é importante dizer sobre ele?
          </p>
        </Template>

        <Template name="Desafio B" gotTo=''>
          <p>
          O seu negócio está pronto para venda, poste na nossa vitrine!!!
          </p>
        </Template>
      </div>
    </div>
  );
}
