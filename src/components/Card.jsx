import data from "../helper/data";
import React from "react";
import "./Card.css";

const Card = () => {
  return (
    <div>
      {data.map(({ img, name }) => (
        <div className="container">
          <img src={img} alt="" />
          <p>{name}</p>
        </div>
      ))}
    </div>
  );
};

export default Card;
