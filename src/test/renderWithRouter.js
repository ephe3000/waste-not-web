import { render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";

// https://testing-library.com/docs/example-react-router/

const renderWithRouter = (ui, { route = "/" } = {}) => {
  return render(ui, { wrapper: BrowserRouter });
};

export default renderWithRouter;
