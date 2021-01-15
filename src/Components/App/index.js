import React, { useState, useEffect } from "react";
import "./App.scss";
import { apiCalls } from "../../apiCalls";
import CardController from "../CardController";
import { Route } from "react-router-dom";
import RandomizerButton from "../RandomizerButton";
import AddMyOwnColors from "../AddMyOwnMyColors/index.js";

const App = () => {
  const [rgbValues, setRgbValues] = useState(null);
  const [hexCodes, setHexCodes] = useState(null);
  const [error, setError] = useState("");

  const getColors = () => {
    apiCalls
      .getRandomPalette()
      .then((data) => {
        setRgbValues(data);
        rgbToHex(data);
      })
      .catch((err) => setError(err.message));
  };

  const getColorsWithInput = (input) => {
    // FORMAT FOR COLORS WHEN CHOSING OWN -- xlet input = [
    //   [44, 43, 44],
    //   [90, 83, 82],
    // ];
    let colors = [...input, "N", "N", "N"];
    apiCalls.getRandomPaletteFromInput(colors).then((data) => {
      console.log(data);
      setRgbValues(data);
      rgbToHex(data);
    });
  };

  function componentToHex(c) {
    var hex = c.toString(16);
    return hex.length == 1 ? "0" + hex : hex;
  }

  const rgbToHex = (data) => {
    const hexCodes = data.map((color) => {
      const r = color[0];
      const g = color[1];
      const b = color[2];

      return `#${componentToHex(r)}${componentToHex(g)}${componentToHex(b)}`;
    });
    setHexCodes(hexCodes);
  };

  const randomizePalette = () => {
    getColors();
  };

  const randomizePaletteWithInput = () => {
    //input should be rgb values or hexcode ...
    //use rgb to hex func. to conver input if the input is from the user input
    //use a helper of getColorsFromInput
  };

  const lockCard = () => {
    //needs to give a class to the ColorCard component to display locked icon
    //need to create a string for the input that it is locking using the rgb val
    //needs to utilize the get random with input...
    //TODO come back to this ... create get random with input string first
  };

  useEffect(() => getColors(), []);

  return (
    <main className="App">
      <h1>Dream Themes</h1>
      {rgbValues && hexCodes && (
        <CardController
          style={{}}
          rgb={rgbValues}
          hexCodes={hexCodes}
          lockCard={lockCard}
        />
      )}
      {rgbValues && hexCodes && (
        <RandomizerButton
          randomizePalette={randomizePalette}
          randomizeWithInput={getColorsWithInput}
        />
      )}
      {rgbValues && hexCodes && <AddMyOwnColors />}
    </main>
  );
};

export default App;
