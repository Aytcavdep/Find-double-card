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
    setCards(cardDeck.sort(() => Math.random() - 0.5));
    setCounter(0);
    console.table(cards);
  };
  useEffect(() => {
    setCards(cardDeck.sort(() => Math.random() - 0.5));
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
        <div>Steps {counter}</div>
      ) : (
        <div>
          Steps {counter}
          <div>
            <button onClick={() => newGame()}>New game</button>
          </div>
        </div>
      )}
    </div>
  );
}
