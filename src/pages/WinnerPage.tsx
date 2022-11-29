import "./WinnerPage.css";
import React from "react";

type WinnerPageType = {
  newGame: () => void;
};

export const WinnerPage: React.FC<WinnerPageType> = ({
  newGame
}: WinnerPageType) => {
  return (
    <div className="container winn">
      <div>
        <div>Молодец ты выиграл!!!</div>
        <div className="winner_button">
          <button onClick={() => newGame()}>New game</button>
        </div>
      </div>
    </div>
  );
};
