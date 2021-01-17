import React from "react";
import Template from "../../components/template";

import "../../styles/pages/questions/questionTwo.css";

export default function QuestionTwo() {
  return (
    <div className="container">
      <div id="question-two-page">
        <header>
          <h1>2</h1>
          <h2>Qual o potencial e desafios do seu produto?</h2>
        </header>

        <Template name="Desafio A" gotTo=''>
          <p>
          Escreva: <br/>
          1) a quantidade que você e sua família produz/coleta e vende hoje <br />
          2) quantidade que vocês podem produzir/coletar e vender

          </p>
        </Template>

        <Template name="Desafio B" gotTo=''>
          <p>
          Qual o potencial e desafios do seu produto?
          </p>
        </Template>

        <Template name="Desafio C" gotTo=''>
          <p>
          Qual o potencial e desafios do seu produto?
          </p>
        </Template>
      </div>
    </div>
  );
}
