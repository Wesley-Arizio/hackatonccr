import React from "react";

import user from "../../../assets/user.svg";

import user1Mock from "../../../assets/user1.svg";
import user2Mock from "../../../assets/user2.svg";
import user3Mock from "../../../assets/user3.svg";

import "../../../styles/components/Ranking/participants/styles.css";

const Participants = () => {
  return (
    <div className="container-ranking">
      <div className="user">
        <div className="ranking-img">
          <img src={user1Mock} alt="foto do usuario" />
        </div>
        <div className="name-points">
          <h4>User 1</h4>
          <p>2540 Pontos</p>
        </div>
        <div className="position">
          <h1>1</h1>
        </div>
      </div>

      <div className="user">
        <div className="ranking-img">
          <img src={user2Mock} alt="foto do usuario" />
        </div>
        <div className="name-points">
          <h4>User 2</h4>
          <p>2520 Pontos</p>
        </div>
        <div className="position">
          <h1>2</h1>
        </div>
      </div>

      <div className="user">
        <div className="ranking-img">
          <img src={user3Mock} alt="foto do usuario" />
        </div>
        <div className="name-points">
          <h4>User 3</h4>
          <p>2500 Pontos</p>
        </div>
        <div className="position">
          <h1>3</h1>
        </div>
      </div>

      <div className="user">
        <div className="ranking-img">
          <img src={user1Mock} alt="foto do usuario" />
        </div>
        <div className="name-points">
          <h4>User 4</h4>
          <p>2220 Pontos</p>
        </div>
        <div className="position">
          <h1>4</h1>
        </div>
      </div>

      <div className="user">
        <div className="ranking-img">
          <img src={user2Mock} alt="foto do usuario" />
        </div>
        <div className="name-points">
          <h4>User 5</h4>
          <p>2210 Pontos</p>
        </div>
        <div className="position">
          <h1>5</h1>
        </div>
      </div>

      <div className="user">
        <div className="ranking-img">
          <img src={user3Mock} alt="foto do usuario" />
        </div>
        <div className="name-points">
          <h4>User 6</h4>
          <p>2209 Pontos</p>
        </div>
        <div className="position">
          <h1>6</h1>
        </div>
      </div>

      <div className="user">
        <div className="ranking-img">
          <img src={user1Mock} alt="foto do usuario" />
        </div>
        <div className="name-points">
          <h4>User 7</h4>
          <p>2000 Pontos</p>
        </div>
        <div className="position">
          <h1>7</h1>
        </div>
      </div>
    </div>
  );
};

export default Participants;
