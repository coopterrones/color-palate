import React from "react";
import ColorCard from "../ColorCard/index.js";
import "./CardController.scss";

const CardController = ({
  rgb,
  hexCodes,
  lockCard,
  colorInputsToggle,
  handleColorInputs,
  submitColorInput,
  displaySavePaletteForm,
}) => {
  return (
    <section className="card-controller-wrapper">
      <section className="color-cards">
        <ColorCard
          color={rgb[0]}
          hexCode={hexCodes[0]}
          lockCard={lockCard}
          colorInputsToggle={colorInputsToggle}
          handleColorInputs={handleColorInputs}
          submitColorInput={submitColorInput}
          id={0}
        />
        <ColorCard
          color={rgb[1]}
          hexCode={hexCodes[1]}
          lockCard={lockCard}
          colorInputsToggle={colorInputsToggle}
          handleColorInputs={handleColorInputs}
          submitColorInput={submitColorInput}
          id={1}
        />
        <ColorCard
          color={rgb[2]}
          hexCode={hexCodes[2]}
          lockCard={lockCard}
          colorInputsToggle={colorInputsToggle}
          handleColorInputs={handleColorInputs}
          submitColorInput={submitColorInput}
          id={2}
        />
        <ColorCard
          color={rgb[3]}
          hexCode={hexCodes[3]}
          lockCard={lockCard}
          colorInputsToggle={colorInputsToggle}
          handleColorInputs={handleColorInputs}
          submitColorInput={submitColorInput}
          id={3}
        />
        <ColorCard
          color={rgb[4]}
          hexCode={hexCodes[4]}
          lockCard={lockCard}
          colorInputsToggle={colorInputsToggle}
          handleColorInputs={handleColorInputs}
          submitColorInput={submitColorInput}
          id={4}
        />
      </section>
      <button className="save-palette-button" onClick={displaySavePaletteForm}>
        Save this palette?
      </button>
    </section>
  );
};

export default CardController;
