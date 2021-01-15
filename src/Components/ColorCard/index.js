import React, { useState } from "react";
import "./ColorCard.scss";

const ColorCard = ({ color, hexCode }) => {
  const [rgbVal, setRgbVal] = useState(
    `rgb(${color[0]}, ${color[1]}, ${color[2]})`
  );
  const [hex, setHexCode] = useState(hexCode);

  return (
    <section className="card-wrapper">
      <input className="hidden color-input" placeholder="255, 255, 255"></input>
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
