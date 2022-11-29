import "./GameFindDoubleCard.css";
import React, { useEffect, useState } from "react";
import { GameFindLetter } from "./GameFindLetter";
import { WinnerPage } from "./WinnerPage";
import { alphabet } from "../component/findLetter/alphabet";

export type AlphabetType = {
  letter: string;
  id: number;
  isFindLetter: boolean;
  isChecked: boolean;
  disabled: boolean;
};

export const GameFindLetterContainer: React.FC = () => {
  const [allAlphabet, setAllAlphabet] = useState<AlphabetType[] | []>([]);
  const [setCheck, setSetCheck] = useState<number>(0);
  const [oldId, setOldId] = useState<number>(-1);
  const [counter, setCounter] = useState(0);
  const [delayClick, setDelayClick] = useState(false);
  const [isStartGame, setIaStartGame] = useState(false);
  const [findLetter, setFindLetter] = useState<AlphabetType | {}>({});
  const [winCollection, setWinCollection] = useState<string[] | []>([]);

  const newLetter = (item: string): AlphabetType => {
    return {
      letter: item,
      id: Math.random(),
      isFindLetter: false,
      isChecked: true,
      disabled: false
    };
  };

  const changeLetterKey = (
    id?: number,
    key?: string,
    prev?: AlphabetType[]
  ) => {
    if (key === "disabled") {
      return [
        ...allAlphabet.map((card) =>
          card.id === id
            ? {
                ...card,
                isChecked: !card.isChecked,
                isFindLetter: !card.isFindLetter,
                disabled: true
              }
            : { ...card }
        )
      ];
    }
    if (key === "isChecked" && prev && !id) {
      return [
        ...prev.map((card) =>
          card.id ? { ...card, isChecked: !card.isChecked } : { ...card }
        )
      ];
    }
    if (key === "isChecked" && prev && id) {
      return [
        ...prev.map((card) =>
          card.id === id ? { ...card, isChecked: !card.isChecked } : { ...card }
        )
      ];
    }
    return [
      ...allAlphabet.map((card) =>
        card.id === id
          ? { ...card, isFindLetter: !card.isFindLetter }
          : { ...card }
      )
    ];
  };

  const addFindLetterArray = () => {
    let newFindLetterArray = [...allAlphabet];
    if ("id" in findLetter) {
      if (
        newFindLetterArray
          .sort(() => Math.random() - 0.5)
          .slice(0, 14)
          .find((item) => item.id === findLetter.id)
      ) {
        newFindLetterArray = newFindLetterArray.slice(0, 14);

        for (let i = 0; i < 2; i++) {
          newFindLetterArray.push(newLetter(findLetter.letter));
        }
        return newFindLetterArray.sort(() => Math.random() - 0.5);
      }
      newFindLetterArray = newFindLetterArray.slice(0, 13);
      for (let i = 0; i < 3; i++) {
        newFindLetterArray.push(newLetter(findLetter.letter));
      }
      return newFindLetterArray.sort(() => Math.random() - 0.5);
    }
    return newFindLetterArray;
  };

  const newGame = () => {
    if (isStartGame) {
      // new game button click
      setCounter(0);
      const newAlphabetSet: AlphabetType[] = alphabet.map((item) => {
        return newLetter(item);
      });
      setAllAlphabet(newAlphabetSet);
      setIaStartGame((prev) => !prev);
      setWinCollection([]);
      setFindLetter({});
      return;
    }
    // start game button click
    setIaStartGame((prev) => !prev);
    setAllAlphabet(addFindLetterArray());
    setCounter(0);
    setDelayClick(true);
    const delay = () => {
      setDelayClick(false);
      setAllAlphabet((prev) => changeLetterKey(undefined, "isChecked", prev));
    };
    setTimeout(delay, 2000);
  };
  useEffect(() => {
    const newAlphabetSet: AlphabetType[] = alphabet.map((item) => {
      return newLetter(item);
    });
    setAllAlphabet(newAlphabetSet);
  }, []);

  const handleCheck = (id: number, set: number) => {
    if (!isStartGame) {
      setFindLetter(allAlphabet.find((item) => item.id === id) ?? {});

      return;
    }

    setCounter(counter + 1);
    setAllAlphabet((prev) => changeLetterKey(id, "isChecked", prev));
    if (
      "id" in findLetter &&
      allAlphabet.find(
        (item) => item.id === id && item.letter === findLetter.letter
      )
    ) {
      setAllAlphabet(changeLetterKey(id, "disabled"));
      setWinCollection((prev) => [...prev, findLetter.letter]);
    } else {
      setDelayClick(true);
      const delay = () => {
        setDelayClick(false);
        setAllAlphabet((prev) => changeLetterKey(id, "isChecked", prev));
      };
      setTimeout(delay, 800);
    }
  };
  //console.table(allAlphabet);
  return winCollection.length !== 3 ? (
    <GameFindLetter
      allAlphabet={allAlphabet}
      findLetter={findLetter}
      counter={counter}
      delayClick={delayClick}
      newGame={newGame}
      handleCheck={handleCheck}
    />
  ) : (
    <WinnerPage newGame={newGame} />
  );
};
