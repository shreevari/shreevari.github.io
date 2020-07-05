import React from "react";
import { render } from "@testing-library/react";
import App from "./App";

test("Displays my name correctly", () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/Shreevari SP/i);
  expect(linkElement).toBeInTheDocument();
});
