import React from "react";

const Card = ({ title, mentor, status }) => {
  const lowerCase = status.toLowerCase();
  console.log(lowerCase.replace(" ", ""));
  return (
    <div>
      <div className="container-card">
        <h4>{title}</h4>
        <div className="container-name-status">
          <h5>{mentor}</h5>
          <span
            className={
              status.toLowerCase() === "respondida"
                ? "respondida"
                : "aguardandoresposta"
            }
          >
            {status}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Card;
