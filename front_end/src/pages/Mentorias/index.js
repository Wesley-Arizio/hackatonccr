import React, { useState } from "react";

import MenuHamburguer from "../../components/menuHamburguer/index";

import "../../styles/pages/mentoria.css";

import Card from "../../components/cardFAQ/index";

const faq = [
  {
    title: "Dúvida Empreendedorismo",
    mentor: "Sebastião",
    status: "Respondida",
  },
  {
    title: "Embalagem medidas",
    mentor: "Soninha",
    status: "Aguardando resposta",
  },
  {
    title: "Sobre a Fase 3 ",
    mentor: "Tonhão",
    status: "Respondida",
  },
];

const Mentoria = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <>
      <div className="container-faq">
        {faq.map((item, index) => (
          <Card
            key={index}
            title={item.title}
            mentor={item.mentor}
            status={item.status}
          />
        ))}
      </div>
      <div className="consulta-mentor">
        <a href="/chat-mentor">Consultar Mentor</a>
      </div>
      <div className="container-menu-hamburguer">
        <main onClick={() => setIsModalOpen(!isModalOpen)}>
          {!isModalOpen ? <span className="hamburguer"></span> : <span></span>}
        </main>
      </div>
      {isModalOpen && <MenuHamburguer />}
    </>
  );
};

export default Mentoria;
