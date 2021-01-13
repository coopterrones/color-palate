const getDataRandom = () => {
  var raw = JSON.stringify({ model: "default" });

  var requestOptions = {
    method: "POST",
    body: raw,
    redirect: "follow",
  };

  fetch('http://colormind.io/api/?"model"="default"', requestOptions)
    .then((response) => response.json())
    .then((result) => console.log(result.result))
    .catch((error) => console.log("error", error));
};

const getDataFromInput = (colorInput) => {
  var raw = JSON.stringify({ model: "default" });

  var requestOptions = {
    method: "POST",
    body: raw,
    redirect: "follow",
  };

  fetch(`http://colormind.io/api/?"input"=${colorInput}`, requestOptions)
    .then((response) => response.json())
    .then((result) => console.log(result.result))
    .catch((error) => console.log("error", error));
};

const apiCalls = {
  getRandomPalette: () => {
    getDataRandom();
  },
  getRandomPaletteFromInput: (colorInput) => {
    getDataFromInput(colorInput);
  },
};

export default apiCalls;
