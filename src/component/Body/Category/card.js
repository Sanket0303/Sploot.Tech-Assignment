import React from "react";
import "./style.css";
function Card({ card }) {
  return (
    <div className="card-box" >
      <a href={card.redirectUrl} target="_blank" rel="noreferrer" className="linked">
      <div><img src={card.imageUrl} className="card-img" alt="none"/></div>
      <div className="card-info-flex">
      <h3 className="card-title">{card.title}</h3>
      <p className="description">
        {card.description.slice(0, 230)}
        {card.description.length > 230 ? "..." : ""}
      </p>
      </div>
      </a>
    </div>
  );
}

export default Card;