import { useState } from "react";
import "./App.css";
import Board from "./Board.jsx";
import Square from "./Square.jsx";

function App() {
  const [history, setHistory] = useState([Array(9).fill(null)]);
  console.log("squares", history);

  // 순서 hook
  const [xIsNext, setXisNext] = useState(true);

  // 이동 hook
  const [currentMove, setCurrentMove] = useState(0);

  const currentSquares = history[currentMove];

  const handlePlay = (nextSquare) => {
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquare];
    setXisNext(!xIsNext);
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1);
  };

  const jumpTo = (nextMove) => {
    setCurrentMove(nextMove);
    setXisNext(nextMove % 2 == 0);
  };

  const moves = history.map((squares, order) => {
    let desc;

    if (order > 0) {
      desc = "Go To Move #" + order;
    } else {
      desc = " Go To Game Start";
    }

    return (
      <li key={order++}>
        <button onClick={() => jumpTo(order)}>{desc}</button>
      </li>
    );
  });

  return (
    <>
      <div className="game">
        <div className="mt-5">
          <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} />
        </div>
        <ul>{moves}</ul>
      </div>
    </>
  );
}

export default App;
