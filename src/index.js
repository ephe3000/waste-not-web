import { render } from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import App from "./App";
import Home from "./pages/Home";
import Locations from "./pages/Locations";
import Food from "./pages/Food";

const rootElement = document.getElementById("root");
render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="home" element={<Home />} />
      <Route path="locations" element={<Locations />} />
      <Route path="food" element={<Food />} />
    </Routes>
  </BrowserRouter>,
  rootElement
);
