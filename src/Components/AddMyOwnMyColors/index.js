import React from "react";
import "./AddMyOwnColors.scss";

const AddMyOwnColors = ({ toggleColorInputs }) => {
  return (
    <button className="add-my-own-colors-button" onClick={toggleColorInputs}>
      Add your own colors
    </button>
  );
};

export default AddMyOwnColors;
