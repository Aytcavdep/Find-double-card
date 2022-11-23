import "./GameFindDoubleCard.css";
import React, { useEffect, useState } from "react";
import { Table } from "../component/table";
import { cardDeck, CardDeckType } from "../component/cardDeck";
import { Link } from "react-router-dom";

export const GameFindDoubleCard: React.FC = () => {
  const [cards, setCards] = useState<CardDeckType[] | []>([]);
  const [setCheck, setSetCheck] = useState<number>(0);
  const [oldId, setOldId] = useState<number>(-1);
  const [counter, setCounter] = useState(0);
  const [delayClick, setDelayClick] = useState(false);

  const newGame = () => {
    setCards(cardDeck.sort(() => Math.random() - 0.5));
    setCounter(0);
    // console.table(cards);
  };
  useEffect(() => {
    setCards(cardDeck.sort(() => Math.random() - 0.5));
  }, []);

  const handleCheck = (id: number, set: number) => {
    setCounter(counter + 1);
    setCards([
      ...cards.map((card) =>
        card.id === id ? { ...card, checked: !card.checked } : { ...card }
      )
    ]);

    if (oldId === -1) {
      setOldId(id);
    }
    if (setCheck === set && oldId !== id) {
      setCards((prev) => [
        ...prev.map((card) =>
          card.setNumber === set
            ? { ...card, disabled: true, checked: true }
            : { ...card }
        )
      ]);
      setSetCheck(0);
      setOldId(-1);
    } else if (setCheck !== 0) {
      setDelayClick(true);
      const delay = () => {
        setDelayClick(false);
        setCards([
          ...cards.map((card) =>
            card.setNumber === setCheck
              ? { ...card, checked: false }
              : card.setNumber === set
              ? { ...card, checked: false }
              : { ...card }
          )
        ]);
      };
      setTimeout(delay, 800);

      setSetCheck(0);
      setOldId(-1);
    } else if (setCheck === 0) {
      setSetCheck(set);
    }
  };

  return (
    <div className="App" disabled={delayClick}>
      <div className="button_GoHome">
        <Link to={"/"}>Go home</Link>
      </div>
      <Table cards={cards} handleCheck={handleCheck}></Table>
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
};
