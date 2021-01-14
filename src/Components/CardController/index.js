import React, { useState } from "react";
import ColorCard from "../ColorCard/index.js";

const CardController = ({ colors }) => {
  return (
    <section className="card-controller-wrapper">
      <ColorCard color={colors[0]} />
      <ColorCard color={colors[1]} />
      <ColorCard color={colors[2]} />
      <ColorCard color={colors[3]} />
      <ColorCard color={colors[4]} />
    </section>
  );
};

export default CardController;
