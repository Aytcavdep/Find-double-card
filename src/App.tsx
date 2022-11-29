import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { GameFindDoubleCardContainer } from "./pages/GameFindDoubleCardContainer";
import { GameSelect } from "./pages/GameSelect";
import { GameFindLetterContainer } from "./pages/GameFindLetterContainer";

export const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={"/"} element={<GameSelect />} />
        <Route
          path={"/find_double_card"}
          element={<GameFindDoubleCardContainer />}
        />
        <Route path={"/find_letter"} element={<GameFindLetterContainer />} />
      </Routes>
    </BrowserRouter>
  );
};
