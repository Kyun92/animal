import React from "react";
import AnimalList from "./AnimalList";
import Header from "./Header";

const Template = ({ categorie, dataList }) => {
  return (
    <div>
      <Header categorie={categorie} />
      <AnimalList dataList={dataList} />
    </div>
  );
};

export default Template;
