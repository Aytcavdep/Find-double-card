import "../pages/GameFindDoubleCard.css";
import { SvgSelector } from "../assets/svgSelector";
import { CardDeckType } from "./cardDeck";
import React from "react";

//кастомный атрибут
declare module "react" {
  interface HTMLAttributes<T> extends AriaAttributes, DOMAttributes<T> {
    // extends React's HTMLAttributes
    disabled?: boolean;
  }
}

type Tabletype = {
  cards: CardDeckType[];
  handleCheck: (id: number, set: number) => void;
};

export const Table: React.FC<Tabletype> = ({
  cards,
  handleCheck
}: Tabletype) => {
  const handleClick = (id: number, set: number) => {
    handleCheck(id, set);
  };

  return (
    <div className="container">
      {cards.map((card) => (
        <div
          className={!card.checked ? "no_check" : "no_check check"}
          onClick={() => handleClick(card.id, card.setNumber)}
          key={Math.random().toString(36).substring(2, 9)}
          disabled={card.disabled}
        >
          <svg>
            {card.checked ? (
              <SvgSelector id={String(card.setNumber)} />
            ) : (
              <SvgSelector id={"card_back"} />
            )}
          </svg>
        </div>
      ))}
    </div>
  );
};
