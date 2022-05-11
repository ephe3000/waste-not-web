import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Search from "./pages/Search";
import FoodBank from "./pages/FoodBank";
import DropOffForm from "./components/DropOffForm";
import Confirmation from "./pages/Confirmation";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="search" element={<Search />} />
        <Route path="food-bank/:id" element={<FoodBank />} />
        <Route path="drop-off-form" element={<DropOffForm />} />
        <Route path="confirmation" element={<Confirmation />} />
      </Routes>
    </BrowserRouter>
  );
}

// doc. for params - https://reactrouter.com/docs/en/v6/faq
