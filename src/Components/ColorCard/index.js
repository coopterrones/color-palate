import React, { useState, useEffect } from "react";
import "./ColorCard.scss";

const ColorCard = ({ color, hexCode, colorInputsToggle, id }) => {
  const [rgbVal, setRgbVal] = useState(
    `rgb(${color[0]}, ${color[1]}, ${color[2]})`
  );
  const [hex, setHexCode] = useState(hexCode);
  const [colorInputsVisible, setColorInputsVisible] = useState(
    colorInputsToggle
  );

  const colorInputsClassName = colorInputsVisible
    ? "color-input"
    : "hidden color-input";

  useEffect(() => setColorInputsVisible(colorInputsToggle), [
    colorInputsToggle,
  ]);
  useEffect(() => setHexCode(hexCode), [hexCode]);
  return (
    <section className="card-wrapper">
      <input
        className={colorInputsClassName}
        placeholder="255, 255, 255"
        id={id}
      ></input>
      <div
        className="color-window"
        style={{
          backgroundColor: hexCode,
        }}
      ></div>
      <p className="rgb-value">{`${color[0]}, ${color[1]}, ${color[2]}`}</p>
      <p className="hex-code-value">{hex}</p>
    </section>
  );
};

export default ColorCard;
