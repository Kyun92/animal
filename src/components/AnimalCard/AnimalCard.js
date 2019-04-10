import React from "react";

const AnimalCard = ({ age, gender, imageUrl, name }) => {
  return (
    <div
      style={{
        display: "inline-block",
        border: "1px solid black",
        margin: "3px"
      }}
    >
      <img src={imageUrl} alt="alt" title={name} />
      <p>age : {age}</p>
      <p>gender : {gender}</p>
      <p>name : {name}</p>
    </div>
  );
};

export default AnimalCard;
