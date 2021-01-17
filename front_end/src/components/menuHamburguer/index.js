import React from "react";

import "../../styles/components/menu.css";

import user from "../../assets/user.svg";

import house from "../../assets/house.svg";
import ranking from "../../assets/ranking.svg";
import settings from "../../assets/settings.svg";
import mentorias from "../../assets/mentorias.svg";

const Menu = () => {
  return (
    <div className="container-menu">
      <div className="container-profile">
        <img src={user} alt="foto do usuário" />
        <div className="container-name-points">
          <h4>Wesley</h4>
          <p>15 Pontos</p>
        </div>
      </div>
      <div className="container-options">
        <a href="/perguntas" className="option">
          <img className="img-option" src={house} alt="icone de casa" />
          <p>Início</p>
        </a>
        <a href="/ranking" className="option">
          <img className="img-option" src={ranking} alt="icone de casa" />
          <p>Ranking</p>
        </a>
        <a href="/mentoria" className="option">
          <img className="img-option" src={mentorias} alt="icone de casa" />
          <p>Mentorias</p>
        </a>
        <a href="/perguntas" className="option">
          <img className="img-option" src={settings} alt="icone de casa" />
          <p>Configurações</p>
        </a>
      </div>
    </div>
  );
};

export default Menu;
