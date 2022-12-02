import "../../pages/GameFindDoubleCard.css";
import { SvgSelector } from "../../assets/svgSelector";
import { AlphabetType } from "../../pages/GameFindLetterContainer";
import React from "react";

//кастомный атрибут
declare module "react" {
  interface HTMLAttributes<T> extends AriaAttributes, DOMAttributes<T> {
    // extends React's HTMLAttributes
    disabled?: boolean;
  }
}

type Tabletype = {
  allAlphabet: AlphabetType[];
  handleCheck: (id: number, letter: string) => void;
};

export const AlphabetTable: React.FC<Tabletype> = ({
  allAlphabet,
  handleCheck
}: Tabletype) => {
  const handleClick = (id: number, letter: string) => {
    handleCheck(id, letter);
  };

  return (
    <div className="container">
      {allAlphabet.map((card) => (
        <div
          className={!card.isChecked ? "no_check" : "no_check check"}
          onClick={() => handleClick(card.id, card.letter)}
          key={Math.random().toString(36).substring(2, 9)}
          disabled={card.disabled}
        >
          {card.isChecked ? (
            <div className="letter_button">{card.letter}</div>
          ) : (
            <svg>
              {" "}
              <SvgSelector id={"card_back"} />
            </svg>
          )}
        </div>
      ))}
    </div>
  );
};
