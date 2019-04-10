import React from "react";
import AnimalList from "./AnimalList";
import Header from "./Header";

const Template = ({ categorie, dataList, moreLoadList }) => {
  return (
    <div>
      <Header categorie={categorie} />
      <AnimalList dataList={dataList} />
      <button onClick={moreLoadList}>More</button>
    </div>
  );
};

export default Template;
