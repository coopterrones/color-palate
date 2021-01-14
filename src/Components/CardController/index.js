import React, { useState } from "react";
import ColorCard from "../ColorCard/index.js";

const CardController = ({}) => {
  return (
    <section className="card-controller-wrapper">
      <ColorCard />
      <ColorCard />
      <ColorCard />
      <ColorCard />
      <ColorCard />
    </section>
  );
};

export default CardController;
