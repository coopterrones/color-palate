import React from "react";
import ColorCard from "../ColorCard/index.js";
import "./CardController.scss";
import { Link } from "react-router-dom";

const CardController = ({
  rgb,
  hexCodes,
  colorInputsToggle,
  handleColorInputs,
  submitColorInput,
  displaySavePaletteForm,
}) => {
  return (
    <section data-testid="card-controller" className="card-controller-wrapper">
      <section data-testid="color-cards" className="color-cards">
        <ColorCard
          color={rgb[0]}
          hexCode={hexCodes[0]}
          colorInputsToggle={colorInputsToggle}
          handleColorInputs={handleColorInputs}
          submitColorInput={submitColorInput}
          id={0}
        />
        <ColorCard
          color={rgb[1]}
          hexCode={hexCodes[1]}
          colorInputsToggle={colorInputsToggle}
          handleColorInputs={handleColorInputs}
          submitColorInput={submitColorInput}
          id={1}
        />
        <ColorCard
          color={rgb[2]}
          hexCode={hexCodes[2]}
          colorInputsToggle={colorInputsToggle}
          handleColorInputs={handleColorInputs}
          submitColorInput={submitColorInput}
          id={2}
        />
        <ColorCard
          color={rgb[3]}
          hexCode={hexCodes[3]}
          colorInputsToggle={colorInputsToggle}
          handleColorInputs={handleColorInputs}
          submitColorInput={submitColorInput}
          id={3}
        />
        <ColorCard
          color={rgb[4]}
          hexCode={hexCodes[4]}
          colorInputsToggle={colorInputsToggle}
          handleColorInputs={handleColorInputs}
          submitColorInput={submitColorInput}
          id={4}
        />
      </section>
      <Link to="/colors">
        <button
          className="save-palette-button"
          onClick={displaySavePaletteForm}
        >
          Save this palette?
        </button>
      </Link>
    </section>
  );
};

export default CardController;
