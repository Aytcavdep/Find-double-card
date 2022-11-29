import { Link } from "react-router-dom";
import "./GameSelect.css";

export const GameSelect: React.FC = () => {
  return (
    <div className="home_page">
      <div className="conteiner_board">
        <h1 className="neon-text">Please select the game and fun</h1>
        <h2 className="neon-text">&#128521;</h2>
      </div>
      <div className="game_board">
        <div className="double_card">
          <Link to={"/find_double_card"}>Find double card</Link>
        </div>
        <div className="letter">
          <Link to={"/find_letter"}>Find letter</Link>
        </div>
      </div>
    </div>
  );
};
