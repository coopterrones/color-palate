import React, { useState } from "react";
import "./SavePaletteForm.scss";
import { Link } from "react-router-dom";
import closeButton from "../../Assets/close-button-white.png";

const SavePaletteForm = ({ savePalette }) => {
  const [paletteName, setPaletteName] = useState(null);

  const handleInput = (event) => {
    setPaletteName(event.target.value);
  };

  return (
    <div className="save-palette-background-wrapper">
      <Link to="/colors">
        <img alt="close-button" src={closeButton} className="close-button" />
      </Link>
      <section className="save-palette-form-wrapper">
        <h2 className="form-title">Please enter a name for your palette.</h2>
        <form
          data-testid="save-palette-form"
          className="save-palette-form"
          onSubmit={(event) => {
            event.preventDefault();
            savePalette(paletteName);
          }}
          value={paletteName}
        >
          <input
            type="text"
            className="palette-name-input"
            placeholder="i.e. website theme"
            onChange={(event) => handleInput(event)}
          />
          <br></br>
          <input
            type="button"
            value="Submit."
            onClick={(event) => {
              event.preventDefault();
              savePalette(paletteName);
            }}
          />
        </form>
      </section>
    </div>
  );
};

export default SavePaletteForm;
