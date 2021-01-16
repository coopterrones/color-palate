import React from "react";
import "./AddMyOwnColors.scss";

const AddMyOwnColors = ({ handleColorInputs }) => {
  return (
    <button className="add-my-own-colors-button" onClick={handleColorInputs}>
      Add your own colors
    </button>
  );
};

export default AddMyOwnColors;
