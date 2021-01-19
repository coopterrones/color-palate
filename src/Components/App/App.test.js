import {
  render,
  screen,
  userEvent,
  act,
  waitFor,
} from "@testing-library/react";
import App from "./index";
import React from "react";
import { MemoryRouter, Router } from "react-router-dom";
import { createMemoryHistory } from "history";
import { apiCalls } from "../../apiCalls";
import mockData from "../../TestData/_mockData";
jest.mock("../../apiCalls");

describe("App", () => {
  beforeEach(() => {
    apiCalls.getRandomPalette.mockResolvedValue(mockData.colorsForIntegration);
  });

  it("should render correct url", async () => {
    const history = createMemoryHistory();

    render(
      <Router history={history}>
        <App />
      </Router>
    );

    await waitFor(() => expect(history.location.pathname).toBe("/"));
  });

  it("Should call get random palette function on initial load", async () => {
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );

    await waitFor(() =>
      expect(apiCalls.getRandomPalette).toHaveBeenCalledTimes(1)
    );

    await act(() => Promise.resolve());
  });

  it("Should render color cards correctly", async () => {
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );

    await waitFor(() =>
      expect(screen.getAllByTestId("color-window")).toHaveLength(5)
    );
  });

  it("Should render color cards correctly with a user input", async () => {
    apiCalls.getRandomPaletteFromInput.mockResolvedValue(
      mockData.colorsForIntegration
    );
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );

    await waitFor(() =>
      expect(screen.getAllByTestId("color-window")).toHaveLength(5)
    );

    await act(() => Promise.resolve());
  });

  it("Should render all correct rgb values ", async () => {
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );

    await waitFor(() => expect(screen.getByText("214, 78, 69")));
    await waitFor(() => expect(screen.getByText("247, 242, 163")));
    await waitFor(() => expect(screen.getByText("201, 216, 147")));
    await waitFor(() => expect(screen.getByText("57, 141, 112")));
    await waitFor(() => expect(screen.getByText("62, 80, 64")));
  });
});
