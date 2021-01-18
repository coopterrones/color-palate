import React from "react";
import { screen, render } from "@testing-library/react";
import mockData from "../../TestData/_mockData";
import "@testing-library/jest-dom";
import SavePaletteForm from "./SavePaletteForm";
import { Router } from "react-router-dom";
import { createMemoryHistory } from "history";

describe("SavePaletteForm", () => {
  it("Should render the save palette form correctly", () => {
    const history = createMemoryHistory();

    render(
      <Router history={history}>
        <SavePaletteForm />
      </Router>
    );

    const formTitle = screen.getByText("Please enter a name for your palette.");
    const form = screen.getByTestId("save-palette-form");
    const nameInput = screen.getByPlaceholderText("i.e. website theme");

    expect(formTitle).toBeInTheDocument();
    expect(form).toBeInTheDocument();
    expect(nameInput).toBeInTheDocument();
  });
});
