import React from "react";
import "./AnimalCard.scss";
const AnimalCard = ({ age, gender, imageUrl, name }) => {
  return (
    <div className="Card">
      <img src={imageUrl} alt="alt" title={name} />
      <div>
        <h3>
          <b>{name}</b>
        </h3>
        <p>
          {age} / <b className={gender}> {gender === "male" ? "♂" : "♀"} </b>
        </p>
      </div>
    </div>
  );
};

export default AnimalCard;
