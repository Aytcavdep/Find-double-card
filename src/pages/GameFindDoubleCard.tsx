import "./GameFindDoubleCard.css";
import { Table } from "../component/findDoubleCard/table";
import { Link } from "react-router-dom";
import { CardDeckType } from "../component/findDoubleCard/cardDeck";

type GameFindDoubleCardType = {
  cards: CardDeckType[] | [];
  counter: number;
  delayClick: boolean;
  newGame: () => void;
  handleCheck: (id: number, set: number) => void;
};

export const GameFindDoubleCard: React.FC<GameFindDoubleCardType> = ({
  cards,
  counter,
  delayClick,
  newGame,
  handleCheck
}) => {
  return (
    <div className="App" disabled={delayClick}>
      <div className="header">
        {cards.find((item) => item.checked === false) ? (
          <div></div>
        ) : (
          <div>
            <button onClick={() => newGame()}>New game</button>
          </div>
        )}
        <div className="steps_counter">Steps {counter}</div>
        <div className="button_GoHome">
          <Link to={"/"}>Go home</Link>
        </div>
      </div>

      <Table cards={cards} handleCheck={handleCheck}></Table>
    </div>
  );
};
