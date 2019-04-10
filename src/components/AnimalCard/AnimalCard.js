import React from "react";

const AnimalCard = ({ age, gender, imageUrl, name }) => {
  return (
    <div>
      <p>age : {age}</p>
      <p>gender : {gender}</p>
      <img src={imageUrl} alt="alt" title={name} />
      <p>name : {name}</p>
    </div>
  );
};

export default AnimalCard;
