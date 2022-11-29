import React, { useEffect, useState } from "react";
import { cardDeck, CardDeckType } from "../component/findDoubleCard/cardDeck";
import { GameFindDoubleCard } from "./GameFindDoubleCard";

export const GameFindDoubleCardContainer: React.FC = () => {
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
    <GameFindDoubleCard
      cards={cards}
      counter={counter}
      delayClick={delayClick}
      newGame={newGame}
      handleCheck={handleCheck}
    />
  );
};
