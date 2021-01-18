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
import _mockData from "../../TestData/_mockData";
jest.mock("../../apiCalls");

describe("App", () => {
  beforeEach(() => {
    apiCalls.getRandomPalette.mockResolvedValue(_mockData.colors[0]);
  });

  afterEach(() => {
    jest.resetAllMocks();
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
});
