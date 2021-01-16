import React, { useState } from "react";
import ColorCard from "../ColorCard/index.js";
import "./CardController.scss";

const CardController = ({
  rgb,
  hexCodes,
  lockCard,
  colorInputsToggle,
  handleColorInputsToggle,
}) => {
  return (
    <section className="card-controller-wrapper">
      <ColorCard
        color={rgb[0]}
        hexCode={hexCodes[0]}
        lockCard={lockCard}
        colorInputsToggle={colorInputsToggle}
        id={0}
      />
      <ColorCard
        color={rgb[1]}
        hexCode={hexCodes[1]}
        lockCard={lockCard}
        colorInputsToggle={colorInputsToggle}
        id={1}
      />
      <ColorCard
        color={rgb[2]}
        hexCode={hexCodes[2]}
        lockCard={lockCard}
        colorInputsToggle={colorInputsToggle}
        id={2}
      />
      <ColorCard
        color={rgb[3]}
        hexCode={hexCodes[3]}
        lockCard={lockCard}
        colorInputsToggle={colorInputsToggle}
        id={3}
      />
      <ColorCard
        color={rgb[4]}
        hexCode={hexCodes[4]}
        lockCard={lockCard}
        colorInputsToggle={colorInputsToggle}
        id={4}
      />
    </section>
  );
};

export default CardController;
