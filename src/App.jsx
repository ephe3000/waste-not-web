import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Search from "./pages/Search";
import FoodBank from "./pages/FoodBank";
import Reservation from "./pages/Reservation";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="search" element={<Search />} />
        <Route path="food-bank/:id" element={<FoodBank />} />
        <Route path="reservation" element={<Reservation />} />
      </Routes>
    </BrowserRouter>
  );
}

// doc. for params - https://reactrouter.com/docs/en/v6/faq