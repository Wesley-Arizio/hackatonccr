import React from "react";

import "../../../styles/components/Ranking/header/styles.css";

import user from "../../../assets/user_orange.svg";

const Header = () => {
  return (
    <header className="ranking-header">
      <img className="img-header-ranking" src={user} alt="foto do usuário" />
      <div className="user-points">
        <h4>Wesley</h4>
        <p>15 pontos</p>
      </div>
      <h1>1322</h1>
    </header>
  );
};

export default Header;
