import "../styles.css";
import { SvgSelector } from "./svgSelector";

export const Table = ({ cards, handleCheck }) => {
  const handleClick = (id, set) => {
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
