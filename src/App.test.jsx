import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders start link", () => {
  render(<App />);
  const linkElement = screen.getByText(/start/i);
  expect(linkElement).toBeInTheDocument();
});
