import React from "react";
import { screen, render } from "@testing-library/react";
import "@testing-library/jest-dom";
import RandomizerButton from "./index";

describe("RandomizerButton", () => {
  it("Should render randomizer button correctly", () => {
    render(<RandomizerButton />);

    const button = screen.getByText("Random Palette");

    expect(button).toBeInTheDocument();
  });
});
