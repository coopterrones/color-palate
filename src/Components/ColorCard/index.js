import React, { useState, useEffect } from "react";
import "./ColorCard.scss";

const ColorCard = ({
  color,
  hexCode,
  colorInputsToggle,
  submitColorInput,
  id,
}) => {
  const [hex, setHexCode] = useState(hexCode);
  const [colorInputsVisible, setColorInputsVisible] = useState(
    colorInputsToggle
  );
  const [userInput, setUserInput] = useState("");

  const colorInputsVisibility = colorInputsVisible
    ? "color-form"
    : "hidden color-form";

  const handleColorInputs = (event) => {
    setUserInput(event.target.value);
  };

  useEffect(() => setColorInputsVisible(colorInputsToggle), [
    colorInputsToggle,
  ]);
  useEffect(() => setHexCode(hexCode), [hexCode]);

  return (
    <section className="card-wrapper">
      <form
        className={colorInputsVisibility}
        value={userInput}
        onSubmit={(event) => {
          submitColorInput(userInput);
          event.preventDefault();
        }}
      >
        <input
          className="color-input"
          placeholder="255, 255, 255"
          id={id}
          value={userInput}
          onChange={(event) => handleColorInputs(event)}
        ></input>
      </form>
      <div
        className="color-window"
        style={{
          backgroundColor: hexCode,
        }}
      ></div>
      <p className="rgb-value">{`${color[0]}, ${color[1]}, ${color[2]}`}</p>
      <p className="hex-code-value">{hex.toUpperCase()}</p>
    </section>
  );
};

export default ColorCard;
