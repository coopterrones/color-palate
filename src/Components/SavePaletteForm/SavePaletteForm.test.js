import React from "react";
import { screen, render } from "@testing-library/react";
import "@testing-library/jest-dom";
import SavePaletteForm from "./SavePaletteForm";
import { Router } from "react-router-dom";
import { createMemoryHistory } from "history";
import userEvent from "@testing-library/user-event";

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
    const submitButton = screen.getByDisplayValue("Submit.");

    expect(formTitle).toBeInTheDocument();
    expect(form).toBeInTheDocument();
    expect(nameInput).toBeInTheDocument();
    expect(submitButton).toBeInTheDocument();
  });

  it("Should route correctly to the maing /colors page when close button is clicked in form", () => {
    const history = createMemoryHistory();

    render(
      <Router history={history}>
        <SavePaletteForm />
      </Router>
    );

    const closeButton = screen.getByAltText("close-button");

    userEvent.click(closeButton);

    expect(history.location.pathname).toBe("/colors");
  });
});
