import React from "react";
import AnimalCard from "../AnimalCard";
import "./AnimalCardList.scss";
const AnimalCardList = ({ dataList }) => {
  const animalCards = dataList.map(animal => {
    return (
      <AnimalCard
        key={animal._id}
        age={animal.age}
        imageUrl={animal.imageUrl}
        name={animal.name}
        gender={animal.gender}
      />
    );
  });
  return <div className="AnimalCardList">{animalCards}</div>;
};

export default AnimalCardList;
