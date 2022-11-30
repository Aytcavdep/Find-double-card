import "./WinnerPage.css";
import React from "react";

type WinnerPageType = {
  newGame: () => void;
  counter: number;
};

export const WinnerPage: React.FC<WinnerPageType> = ({
  newGame,
  counter
}: WinnerPageType) => {
  return (
    <div className="winn">
      <div>
        <div>
          Молодец ты выиграл!!!
          <br />У тебя {counter}{" "}
          {counter === 0 || counter > 4
            ? "ошибок"
            : counter === 1
            ? "ошибка"
            : "ошибки"}
        </div>
        <div className="winner_button">
          <button onClick={() => newGame()}>New game</button>
        </div>
      </div>
    </div>
  );
};
