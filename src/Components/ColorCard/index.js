import React, { useState } from "react";

const ColorCard = () => {
  return (
    <section className="card-wrapper">
      <div className="color-window"></div>
      <p className="rgb-value"></p>
      <p className="hex-code-value"></p>
    </section>
  );
};

export default ColorCard;
