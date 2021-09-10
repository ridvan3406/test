import React, { useState, useEffect } from "react";
import Board from "../Board";
import ScoreBoard from "../ScoreBoard";

/**
 * A game of tic-tac-toe.
 */
const Game = () => {
  const [gameHistory, setGameHistory] = useState([
    { squares: Array(9).fill(null) },
  ]); // Start of game
  const [stepNumber, setStepNumber] = useState(0);
  const [xIsNext, setXisNext] = useState(true);
  const [score, setScore] = useState({ X: 0, O: 0 });
  const [winner, setWinner] = useState(null);

  //this function will default the states for new game
  const handlePlayAgain = () => {
    setGameHistory([{ squares: Array(9).fill(null) }]);
    setStepNumber(0);
    setWinner(null);
  };

  const calculateWinner = (squares) => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];

      if (
        squares[a] &&
        squares[a] === squares[b] &&
        squares[a] === squares[c]
      ) {
        return {
          squares: squares[a],
          lines: lines[i],
        };
      }
    }

    return null;
  };

  const handleClick = (i) => {
    const history = gameHistory.slice(0, stepNumber + 1);
    const current = history[history.length - 1];
    const squares = current.squares.slice();

    if (calculateWinner(squares) || squares[i]) {
      return;
    }

    squares[i] = xIsNext ? "X" : "O";

    setGameHistory([...history, { squares }]);
    setStepNumber(history.length);
    setXisNext(!xIsNext);
  };

  const jumpTo = (step) => {
    setStepNumber(step);
    setXisNext(step % 2 === 0);
  };
  const current = gameHistory[stepNumber];

  // this useeffect when winner is false will calculate winner
  useEffect(() => {
    if (!winner) {
      setWinner(calculateWinner(current.squares));
    }
  }, [winner, current.squares]);

    // this useeffect hook will update the score when the winner is true
  useEffect(() => {
    if (winner) {
      setScore({
        ...score,
        [winner.squares]: score[winner.squares] + 1,
      });
    }
  }, [winner]);

  const moves = gameHistory.map((step, move) => {
    const desc = move ? "Go to move #" + move : "Go to game start";
    return (
      <li key={move}>
        <button onClick={() => jumpTo(move)}>{desc}</button>
      </li>
    );
  });

  let status;
  if (winner) {
    status = "Winner: " + winner.squares;
  } else {
    status = "Next player: " + (xIsNext ? "X" : "O");
  }

  return (
    <div className="game">
      <div className="players">
        <ScoreBoard handlePlayAgain={handlePlayAgain} score={score} />
      </div>
      <div>
        <button className="play-again-btn" onClick={handlePlayAgain}>
          Play Again
        </button>
      </div>
       
      <div className="game-info">
          {/* when ther is no winner and total move is 10 then game is draw. other wise one of players win */}
          {gameHistory.length === 10 && !winner ? (
            <h1 className="status">DRAW</h1>
          ) : (
            <div className="status">{status}</div>
          )}
        </div>
      <div className="block">
        <div className="game-board">
          <Board
            winningSquares={winner ? winner.lines : []}
            squares={current.squares}
            onClick={(i) => handleClick(i)}
          />
        </div>
        <div>
            <ol>{moves}</ol>
        </div>
        
      </div>
    </div>
  );
};

export default Game;
