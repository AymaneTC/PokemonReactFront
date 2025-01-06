import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import CreateBoxe from "../src/pages/CreateNewBoxe";  // Import your component
import { createBoxe } from "../src/services/Boxe";  // Ensure correct import of createBoxe
import { MemoryRouter } from "react-router-dom";
import { createMemoryHistory } from "history";
import React from 'react';

// Mock the createBoxe function correctly
jest.mock("../src/services/Boxe", () => ({
  createBoxe: jest.fn(),
}));

describe("CreateNewBoxe", () => {
  let consoleErrorMock;

  beforeAll(() => {
    // Mock console.error before tests run
    consoleErrorMock = jest.spyOn(console, "error").mockImplementation(() => {});
  });

  afterAll(() => {
    // Restore console.error after tests
    consoleErrorMock.mockRestore();
  });

  it("should successfully create a box and navigate", async () => {
    // Mock a successful API response
    createBoxe.mockResolvedValue({ codeStatus: 201 });

    const history = createMemoryHistory();

    render(
        <MemoryRouter>
          <CreateBoxe />
        </MemoryRouter>
    );

    // Find the input field and button
    const boxNameInput = screen.getByPlaceholderText("Enter box name");
    const createBoxButton = screen.getByText("Create Box");

    // Fill in the input field
    fireEvent.change(boxNameInput, { target: { value: "Test Box" } });

    // Submit the form
    fireEvent.click(createBoxButton);

    // Wait for the navigation to happen (e.g., after a successful result)
    await waitFor(() => expect(history.location.pathname).toBe("/"));
  });

  it("should handle error response", async () => {
    // Mock an error response
    createBoxe.mockResolvedValue({ codeStatus: 500, message: "Error during creation" });

    const history = createMemoryHistory();

    render(
        <MemoryRouter>
          <CreateBoxe />
        </MemoryRouter>
    );

    const boxNameInput = screen.getByPlaceholderText("Enter box name");
    const createBoxButton = screen.getByText("Create Box");

    // Fill in the input field
    fireEvent.change(boxNameInput, { target: { value: "Test Box" } });

    // Submit the form
    fireEvent.click(createBoxButton);

    // Wait for the error to be handled and verify the console.error was called
    await waitFor(() => {
      expect(consoleErrorMock).toHaveBeenCalledWith("Error during creation of the boxe");
    });
  });
});
