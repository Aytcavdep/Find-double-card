import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { GameFindDoubleCard } from "./pages/GameFindDoubleCard";
import { GameSelect } from "./pages/GameSelect";

export const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={"/"} element={<GameSelect />} />
        <Route path={"/find_double_card"} element={<GameFindDoubleCard />} />
      </Routes>
    </BrowserRouter>
  );
};
