import React from "react";
import { screen, render } from "@testing-library/react";
import "@testing-library/jest-dom";
import AddMyOwnColors from "../../Components/AddMyOwnMyColors/index";

describe("AddMyOwnColors", () => {
  it("AddMyOwnColors button should render correctly", () => {
    render(<AddMyOwnColors />);

    const addMyOwnColorsButton = screen.getByRole("button");

    expect(addMyOwnColorsButton).toBeInTheDocument();
  });

  it("Should render with correct class", () => {
    render(<AddMyOwnColors />);

    const addMyOwnColorsButton = screen.getByRole("button");

    expect(addMyOwnColorsButton).toHaveClass("add-my-own-colors-button");
  });
});
