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

  it("Should render all 5 color cards correctly", () => {
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

    const colorCardsWrapper = screen.getByTestId("color-cards");
    const colorCards = colorCardsWrapper.children;

    expect(colorCards).toHaveLength(5);
  });

  it("Should render color cards with correct color window styling", () => {
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

    const colorWindows = screen.getAllByTestId("color-window");
    const window1 = colorWindows[0];
    const window2 = colorWindows[1];
    const window3 = colorWindows[2];
    const window4 = colorWindows[3];
    const window5 = colorWindows[4];

    expect(window1).toHaveStyle("background-color: rgb(214, 78, 69)");
    expect(window2).toHaveStyle("background-color: rgb(247, 242, 163)");
    expect(window3).toHaveStyle("background-color: rgb(201, 216, 147)");
    expect(window4).toHaveStyle("background-color: rgb(57, 141, 112)");
    expect(window5).toHaveStyle("background-color: rgb(62, 80, 64)");
  });
});
