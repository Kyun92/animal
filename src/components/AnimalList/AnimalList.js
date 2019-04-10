import React from "react";
import AnimalCard from "../AnimalCard";

const AnimalList = ({ dataList }) => {
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
  return <div style={{ paddingTop: "80px" }}>{animalCards}</div>;
};

export default AnimalList;
