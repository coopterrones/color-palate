import React from "react";
import { screen, render, waitFor } from "@testing-library/react";
import mockData from "../../TestData/_mockData";
import "@testing-library/jest-dom";
import ColorCard from "../../Components/ColorCard/index";

describe("ColorCard", () => {
  it("ColorCard should render correctly", () => {
    const colorData = mockData.colors[0];
    const hexCodeData = mockData.hexCodes[0];

    render(<ColorCard color={colorData[0]} hexCode={hexCodeData[0]} />);

    const colorWindow = screen.getByTestId("color-window");
    const rgbValue = screen.getByText("214, 78, 69");
    const hexCode = screen.getByText("#D64E45");

    expect(colorWindow).toHaveStyle("background-color: rgb(214, 78, 69)");
    expect(rgbValue).toBeInTheDocument();
    expect(hexCode).toBeInTheDocument();
  });

  it("Color input should be hidden on load of card", () => {
    const colorData = mockData.colors[0];
    const hexCodeData = mockData.hexCodes[0];
    const colorInputsToggleHidden = mockData.colorInputsToggleHidden;

    render(
      <ColorCard
        color={colorData[0]}
        hexCode={hexCodeData[0]}
        colorInputsToggle={colorInputsToggleHidden}
      />
    );

    const colorInputsForm = screen.getByTestId("color-input-form");

    expect(colorInputsForm).toHaveClass("hidden");
  });

  it("should show input when color inputs are toggled", () => {
    const colorData = mockData.colors[0];
    const hexCodeData = mockData.hexCodes[0];
    const colorInputsToggleHidden = mockData.colorInputsToggleShown;

    render(
      <ColorCard
        color={colorData[0]}
        hexCode={hexCodeData[0]}
        colorInputsToggle={colorInputsToggleHidden}
      />
    );

    const colorInputsForm = screen.getByTestId("color-input-form");

    expect(colorInputsForm).toHaveClass("color-form");
    expect(colorInputsForm).not.toHaveClass("hidden");
  });
});
