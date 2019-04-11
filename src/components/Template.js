import React from "react";
import AnimalCardList from "./AnimalCardList";
import Header from "./Header";

const Template = ({
  categorie,
  dataList,
  moreLoadList,
  handleChangeCategorie
}) => {
  Template.defaultProps = {
    categorie: "cats",
    dataList: [],
    moreLoadList: () =>
      console.WaveShaperNode("moreLoadList function is not defined"),
    handleChangeCategorie: () =>
      console.warn("handleChangeCategorie is not defined")
  };

  return (
    <div>
      <Header categorie={categorie} onClick={handleChangeCategorie} />
      <AnimalCardList dataList={dataList} />
      <button
        style={{ fontSize: "20px", margin: "30px" }}
        onClick={moreLoadList}
      >
        More
      </button>
    </div>
  );
};

export default Template;
