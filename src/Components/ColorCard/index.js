import React, { useState } from "react";
import "./ColorCard.scss";

const ColorCard = ({ color, hexCode }) => {
  const [rgbVal, setRgbVal] = useState(
    `rgb(${color[0]}, ${color[1]}, ${color[2]})`
  );
  const [hex, setHexCode] = useState(hexCode);

  return (
    <section className="card-wrapper">
      <div
        className="color-window"
        style={{
          backgroundColor: rgbVal,
        }}
      ></div>
      <p className="rgb-value">{`${color[0]}, ${color[1]}, ${color[2]}`}</p>
      <p className="hex-code-value">{hex}</p>
    </section>
  );
};

export default ColorCard;
