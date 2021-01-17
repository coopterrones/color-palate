import React from "react";
import "./SavePaletteForm.scss";
import { Link } from "react-router-dom";
import closeButton from "../../Assets/close-button-white.png";

const SavePaletteForm = ({ savePalette }) => {
  return (
    <div className="save-palette-background-wrapper">
      <Link to="/colors">
        <img src={closeButton} className="close-button" />
      </Link>
      <section className="save-palette-form-wrapper">
        <h2 className="form-title">Please enter a name for your palette.</h2>
        <form
          className="save-palette-form"
          onSubmit={(event) => savePalette(event)}
        >
          <input
            className="palette-name-input"
            placeholder="ie. website theme"
          ></input>
          {/* <button
            type="submit"
            htmlFor="save-palette-form"
            className="form-submit-button"
            onSubmit={(event) => savePalette(event)}
          >
            Submit
          </button> */}
        </form>
      </section>
    </div>
  );
};

export default SavePaletteForm;
