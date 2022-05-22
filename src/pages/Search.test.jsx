import { screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import renderWithRouter from "../test/renderWithRouter";
import Search from "./Search";
import locations from "../mock/locations.json";

global.fetch = () =>
  Promise.resolve({
    json: () => Promise.resolve(locations),
  });

test("renders renders markers on the map", async () => {
  renderWithRouter(<Search />);
  await userEvent.selectOptions(screen.getByLabelText(/cities/i), "Bristol");
  await waitFor(() => {
    expect(screen.getByText(/within your search criteria/i)).toBeVisible();
  });
  const markers = screen.getAllByAltText(/Marker/i);
  //   plus 1 to account for userPosition Marker
  expect(markers.length).toBe(locations.length + 1);
});
