import React from "react";
import { Link } from "react-router-dom";

import cadeadoAberto from "../assets/lock-open.svg";
import cadeado from "../assets/lock.svg";

import "../styles/components/level.css";

export default function Level({ number, isOpen, goTo }) {
  console.log(number);
  return (
    <div id="level-component">
      <div id="forms">
        <div id="circle"></div>
      </div>

      <div>
        <Link to={goTo}>
          {" "}
          Fase {number}{" "}
          {isOpen ? (
            <img src={cadeadoAberto} alt="Nível desbloqueado" />
          ) : (
            <img src={cadeado} alt="Nível bloqueado" />
          )}
        </Link>
      </div>
    </div>
  );
}
