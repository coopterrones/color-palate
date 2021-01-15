import React from "react";
import "./RandomizerButton.scss";

const RandomizerButton = ({ randomizePalette, randomizeWithInput }) => {
  return (
    <button className="randomizer-button" onClick={randomizeWithInput}>
      Random Palette
    </button>
  );
};

export default RandomizerButton;
