import React, { useState } from "react";

import Header from "../../components/Ranking/header/index";
import Participants from "../../components/Ranking/participants/index";
import MenuHamburguer from "../../components/menuHamburguer/index";

const Ranking = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <Header />
      <Participants />
      <div className="container-menu-hamburguer">
        <main onClick={() => setIsModalOpen(!isModalOpen)}>
          {!isModalOpen ? <span className="hamburguer"></span> : <span></span>}
        </main>
      </div>
      {isModalOpen && <MenuHamburguer />}
    </>
  );
};

export default Ranking;
