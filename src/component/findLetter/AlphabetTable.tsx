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
  handleCheck: (id: number, set: number) => void;
};

export const AlphabetTable: React.FC<Tabletype> = ({
  allAlphabet,
  handleCheck
}: Tabletype) => {
  const handleClick = (id: number, set: number) => {
    handleCheck(id, set);
  };

  return (
    <div className="container">
      {allAlphabet.map((card) => (
        <div
          className={!card.isChecked ? "no_check" : "no_check check"}
          onClick={() => handleClick(card.id, 2)}
          key={Math.random().toString(36).substring(2, 9)}
          disabled={card.disabled}
        >
          <svg>
            {card.isChecked ? (
              <text
                textAnchor="middle"
                fontSize="48px"
                color="red"
                fontWeight="bold"
                x="55"
                y="65"
              >
                {card.letter}
              </text>
            ) : (
              <SvgSelector id={"card_back"} />
            )}
          </svg>
        </div>
      ))}
    </div>
  );
};
