import React, { useState } from "react";

import MenuHamburguer from "../../components/menuHamburguer/index";

import "../../styles/pages/chat.css";

const ChatMentor = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <>
      <div className="container-chat">
        <textarea placeholder="Escreva a sua dúvida"></textarea>
        <button>Enviar</button>
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

export default ChatMentor;
