const getData = () => {
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

const apiCalls = {
  getRandomPalate: () => {
    getData();
  },
};

export default apiCalls;
