import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Search from "./pages/Search";
import Location from "./pages/Location";
import Reservation from "./pages/Reservation";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="search" element={<Search />} />
        <Route path="location/:id" element={<Location />} />
        <Route path="reservation" element={<Reservation />} />
      </Routes>
    </BrowserRouter>
  );
}

// doc. for params - https://reactrouter.com/docs/en/v6/faq