import React, { useState } from "react";
import "./ColorCard.scss";

const ColorCard = ({ color }) => {
  return (
    <section className="card-wrapper">
      <div
        className="color-window"
        style={{
          backgroundColor: `rgb(${color[0]}, ${color[1]}, ${color[2]})`,
        }}
      ></div>
      <p className="rgb-value"></p>
      <p className="hex-code-value"></p>
    </section>
  );
};

export default ColorCard;
