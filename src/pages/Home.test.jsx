import { screen } from "@testing-library/react";
import renderWithRouter from "../test/renderWithRouter";
import Home from "./Home";

test("renders learn react link", () => {
  renderWithRouter(<Home />);
  const linkElement = screen.getByText(/start/i);
  expect(linkElement).toBeInTheDocument();
});
