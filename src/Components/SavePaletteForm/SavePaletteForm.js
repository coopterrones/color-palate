import React from "react";
import "./SavePaletteForm.scss";
const SavePaletteForm = () => {
  return (
    <div className="save-palette-background-wrapper">
      <section className="save-palette-form-wrapper">
        <h2 className="form-title">Please enter a name for your palette.</h2>
        <form className="save-palette-form">
          <input
            className="palette-name-input"
            placeholder="ie. website theme"
          ></input>
          <button type="submit" className="form-submit-button">
            Submit
          </button>
        </form>
      </section>
    </div>
  );
};

export default SavePaletteForm;
