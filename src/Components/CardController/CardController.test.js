import React from "react";
import { screen, render, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
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

  it("Should render color cards with correct rgb values displayed", () => {
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

    const rgbValue1 = screen.getByText("214, 78, 69");
    const rgbValue2 = screen.getByText("247, 242, 163");
    const rgbValue3 = screen.getByText("201, 216, 147");
    const rgbValue4 = screen.getByText("57, 141, 112");
    const rgbValue5 = screen.getByText("62, 80, 64");

    expect(rgbValue1).toBeInTheDocument();
    expect(rgbValue2).toBeInTheDocument();
    expect(rgbValue3).toBeInTheDocument();
    expect(rgbValue4).toBeInTheDocument();
    expect(rgbValue5).toBeInTheDocument();
  });

  it("Should render color cards with correct hex code values displayed", () => {
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

    const hexCode1 = screen.getByText("#D64E45");
    const hexCode2 = screen.getByText("#F7F2A3");
    const hexCode3 = screen.getByText("#C9D893");
    const hexCode4 = screen.getByText("#398D70");
    const hexCode5 = screen.getByText("#3E5040");

    expect(hexCode1).toBeInTheDocument();
    expect(hexCode2).toBeInTheDocument();
    expect(hexCode3).toBeInTheDocument();
    expect(hexCode4).toBeInTheDocument();
    expect(hexCode5).toBeInTheDocument();
  });

  it("should render the save palette button correctly", () => {
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

    const savePaletteButton = screen.getByRole("button");

    expect(savePaletteButton).toBeInTheDocument();
  });

  it("Save palette button click should route to save-palette path", async () => {
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
    const savePaletteButton = screen.getByRole("button");
    userEvent.click(savePaletteButton);

    await waitFor(() => expect(history.location.pathname).toBe("/"));
  });
});
