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
  handleCheck: (id: number, set: number) => void;
};

export const GameFindLetter: React.FC<GameFindLetterType> = ({
  allAlphabet,
  findLetter,
  counter,
  delayClick,
  newGame,
  handleCheck
}) => {
  const isFindLetter = (): boolean => {
    return "id" in findLetter ? true : false;
  };
  return (
    <div className="App" disabled={delayClick}>
      <div className="header">
        {!("id" in findLetter) ? (
          <div className="game_start_rules">Выберете букву для поиска</div>
        ) : (
          <div>
            <button onClick={() => newGame()}>Start game</button>
          </div>
        )}
        <div className="steps_counter">Steps {counter}</div>
        <div className="button_GoHome">
          <Link to={"/"}>Go home</Link>
        </div>
      </div>

      <AlphabetTable allAlphabet={allAlphabet} handleCheck={handleCheck} />
    </div>
  );
};
