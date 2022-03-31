import "./styles.css";
import { useEffect, useState } from "react";
import { Table } from "./component/table";
import { cardDeck } from "./component/cardDeck";

export default function App() {
  const [cards, setCards] = useState([{}]);
  const [setCheck, setSet] = useState([]);
  const [oldId, setOldId] = useState([]);
  const [counter, setCounter] = useState(0);
  const [delayClick, setDelayClick] = useState(false);

  const newGame = () => {
    setCards(cardDeck.sort((a, b) => a.id - b.id));
    setCounter(0);
  };
  useEffect(() => {
    setCards(cardDeck.sort((a, b) => a.id - b.id));
  }, []);

  const handleCheck = (id, set) => {
    setCounter(counter + 1);
    setCards([
      ...cards.map((card) =>
        card.id === id ? { ...card, checked: !card.checked } : { ...card }
      )
    ]);

    if (!oldId.length) {
      setOldId(id);
    }
    if (setCheck.includes(set) && oldId !== id) {
      setCards([
        ...cards.map((card) =>
          card.setNumber === set
            ? { ...card, disabled: true, checked: true }
            : { ...card }
        )
      ]);
      setSet([]);
      setOldId([]);
    } else if (setCheck.length === 1) {
      setDelayClick(true);
      const delay = () => {
        setDelayClick(false);
        setCards([
          ...cards.map((card) =>
            card.setNumber === (setCheck[0] || set)
              ? { ...card, checked: false }
              : { ...card }
          )
        ]);
      };
      setTimeout(delay, 800);

      setSet([]);
      setOldId([]);
    }
    setCheck.push(set);
  };

  return (
    <div className="App" disabled={delayClick}>
      <Table
        cards={cards}
        setCards={setCards}
        handleCheck={handleCheck}
      ></Table>
      {cards.find((item) => item.checked === false) ? (
        <div>Количество ходов {counter}</div>
      ) : (
        <div>
          Количество ходов {counter}
          <div>
            <button onClick={() => newGame()}>Начать заново ?</button>
          </div>
        </div>
      )}
    </div>
  );
}
