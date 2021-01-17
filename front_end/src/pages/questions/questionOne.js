import React, { useState } from "react";
import Template from "../../components/template";

import Menu from "../../components/menuHamburguer/index";

import "../../styles/pages/questions/questionOne.css";

export default function QuestionOne() {
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  return (
    <div className="container">
      <div id="question-one-page">
        <header>
          <h1>1</h1>
          <h2>Quem é você</h2>
        </header>
        <Template name="Desafio A" gotTo="/">
          <p>Escreva onde você mora</p>
          <input type="text" />
          <button
            onClick={() => {
              window.location.href = "/congratulations";
            }}
          >
            Enviar
          </button>
        </Template>
        <Template name="Desafio B" gotTo="">
          <p>Escreva o que você vende ou gostaria de vender no seu negócio</p>

          <input type="text" />
          <button
            onClick={() => {
              window.location.href = "/congratulations";
            }}
          >
            Enviar
          </button>
        </Template>
        <Template name="Desafio C" gotTo="">
          <p>
            Tire uma selfie e escreva seu nome e como gosta de ser chamado
            (apelido)
          </p>
        </Template>
        <Template name="Desafio D" gotTo="">
          <p>
            Grave um vídeo de até 2 minutos contando a sua história: quem é
            você? Quem é sua família/comunidade? Desde quando você trabalha com
            esse produto? Qual o seu sonho?
          </p>
        </Template>
        <div className="container-menu-hamburguer">
          <main onClick={() => setMenuIsOpen(!menuIsOpen)}>
            {!menuIsOpen ? <span className="hamburguer"></span> : <span></span>}
          </main>
        </div>
        {menuIsOpen && <Menu />}
      </div>
    </div>
  );
}
