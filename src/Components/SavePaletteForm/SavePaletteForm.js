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
        <img src={closeButton} className="close-button" />
      </Link>
      <section className="save-palette-form-wrapper">
        <h2 className="form-title">Please enter a name for your palette.</h2>
        <form
          className="save-palette-form"
          onSubmit={(event) => {
            event.preventDefault();
            savePalette(paletteName);
          }}
          value={paletteName}
        >
          <input
            className="palette-name-input"
            placeholder="ie. website theme"
            onChange={(event) => handleInput(event)}
          ></input>
        </form>
      </section>
    </div>
  );
};

export default SavePaletteForm;
