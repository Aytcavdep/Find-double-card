import "./GameFindDoubleCard.css";
import "./GameFindLetter.css";
import { AlphabetTable } from "../component/findLetter/AlphabetTable";
import { AlphabetType } from "./GameFindLetterContainer";
import { Link } from "react-router-dom";
import { Modal } from "antd";

type GameFindLetterType = {
  allAlphabet: AlphabetType[] | [];
  findLetter: AlphabetType | {};
  counter: number;
  delayClick: boolean;
  newGame: () => void;
  handleCheck: (id: number, letter: string) => void;
  isStartGame: boolean;
  winCollection: string[];
  isModalOpen: boolean;
  handleOk: () => void;
  handleCancel: () => void;
};

export const GameFindLetter: React.FC<GameFindLetterType> = ({
  allAlphabet,
  findLetter,
  counter,
  delayClick,
  newGame,
  handleCheck,
  isStartGame,
  winCollection,
  isModalOpen,
  handleOk,
  handleCancel
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

      <Modal
        title="Начинаем игру ?"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <p>
          Для поиска выбрана буква -
          <b>
            {"letter" in findLetter ? (
              findLetter.letter
            ) : (
              <b>"буква не выбрана"</b>
            )}
          </b>
        </p>
        <p>Нажми OK для начала игры или Cancel для выбора другой буквы</p>
        <p>
          Правила. <br />
          Тебе будет показано поле из 16 букв, необходимо найти 3 выбранные
          буквы
        </p>
      </Modal>
    </div>
  );
};
