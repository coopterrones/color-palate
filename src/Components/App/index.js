import React, { useState, useEffect } from "react";
import "./App.scss";
import { apiCalls } from "../../apiCalls";
import CardController from "../CardController";
import { Route } from "react-router-dom";

const App = () => {
  const [colors, setColors] = useState(null);
  const [error, setError] = useState("");

  const getColors = () => {
    apiCalls
      .getRandomPalette()
      .then((data) => {
        setColors(data);
      })
      .catch((err) => setError(err.message));
  };

  useEffect(() => getColors(), []);

  return (
    <main className="App">{colors && <CardController colors={colors} />}</main>
  );
};

export default App;
