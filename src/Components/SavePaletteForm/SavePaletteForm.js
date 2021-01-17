import React from "react";

const SavePaletteForm = () => {
  return (
    <section className="save-palette-form-wrapper">
      <form className="save-palette-form">
        <input
          className="palette-name-title"
          placeholder="please enter a name"
        ></input>
      </form>
    </section>
  );
};

export default SavePaletteForm;
