/* eslint-disable jsx-a11y/accessible-emoji */
import React from "react";
import "./Header.scss";
const Header = ({ categorie, onClick }) => {
  Header.defaultProps = {
    categorie: "cats",
    onClick: () => console.warn("onClick is not defined")
  };

  return (
    <div className="Header-container">
      <button
        className={`Header-btn ${categorie === "dogs" && "active"}`}
        value="dogs"
        onClick={e => onClick(e)}
      >
        🐕
      </button>
      <button
        className={`Header-btn ${categorie === "cats" && "active"}`}
        value="cats"
        onClick={e => onClick(e)}
      >
        🐈
      </button>
    </div>
  );
};

export default Header;
