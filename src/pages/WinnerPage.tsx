import "./WinnerPage.css";
import React from "react";

type WinnerPageType = {
  newGame: () => void;
  counter: number;
  winCollection: string[];
};

export const WinnerPage: React.FC<WinnerPageType> = ({
  newGame,
  counter,
  winCollection
}: WinnerPageType) => {
  return (
    <div className="winn">
      <div>
        <div className="progress">
          <div className="letter_1">{winCollection[0]}</div>
          <div className="letter_2">{winCollection[1]}</div>
          <div className="letter_3">{winCollection[2]}</div>
        </div>
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
