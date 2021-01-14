import React, { useState, useEffect } from "react";
import "./App.scss";
import { apiCalls } from "../../apiCalls";

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

  return <div className="App"></div>;
};

export default App;
