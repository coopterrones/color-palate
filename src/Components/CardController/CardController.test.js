import React from "react";
import { screen, render } from "@testing-library/react";
import "@testing-library/jest-dom";
import CardController from "../../Components/CardController/index";
import mockData from "../../TestData/_mockData";
import { Router } from "react-router-dom";
import { createMemoryHistory } from "history";

describe("CardController", () => {
  it("Should render the card controller correctly", () => {
    const colorData = mockData.colors[0];
    const hexCodeData = mockData.hexCodes[0];
    const colorInputsHidden = false;
    const colorInputsShown = true;

    const history = createMemoryHistory();
    render(
      <Router history={history}>
        <CardController
          rgb={colorData}
          hexCodes={hexCodeData}
          colorInputsToggle={colorInputsHidden}
        />
      </Router>
    );

    const CardControllerElement = screen.getByTestId("card-controller");

    expect(CardControllerElement).toBeInTheDocument();
  });
});
