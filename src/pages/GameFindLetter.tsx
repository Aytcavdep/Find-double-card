import "./GameFindDoubleCard.css";
import "./GameFindLetter.css";
import { AlphabetTable } from "../component/findLetter/AlphabetTable";
import { AlphabetType } from "./GameFindLetterContainer";
import { Link } from "react-router-dom";

type GameFindLetterType = {
  allAlphabet: AlphabetType[] | [];
  findLetter: AlphabetType | {};
  counter: number;
  delayClick: boolean;
  newGame: () => void;
  handleCheck: (id: number, letter: string) => void;
  isStartGame: boolean;
  winCollection: string[];
};

export const GameFindLetter: React.FC<GameFindLetterType> = ({
  allAlphabet,
  findLetter,
  counter,
  delayClick,
  newGame,
  handleCheck,
  isStartGame,
  winCollection
}) => {
  return (
    <div className="App" disabled={delayClick}>
      <div className="header">
        {!("id" in findLetter) ? (
          <div className="game_start_rules">Выберете букву</div>
        ) : isStartGame ? (
          <div className="progress">
            <div className="letter_1">{winCollection[0]}</div>
            <div className="letter_2">{winCollection[1]}</div>
            <div className="letter_3">{winCollection[2]}</div>
          </div>
        ) : (
          <div>
            <button onClick={() => newGame()}>Start game</button>
          </div>
        )}
        <div className="steps_counter">Wrong {counter}</div>
        <div className="button_GoHome">
          <Link to={"/"}>Go home</Link>
        </div>
      </div>

      <AlphabetTable allAlphabet={allAlphabet} handleCheck={handleCheck} />
    </div>
  );
};
