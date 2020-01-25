import React, { useState } from "react";
import Square from "./square";
import "./board.css";

export const Board = () => {
  const [squares, updateSquares] = useState<string[]>(Array(9).fill(null));
  const [isXTurn, updateIsXTurn] = useState<boolean>(true);

  const winner = calculateWinner(squares);

  let status;

  if (winner) {
    status = "Winner: " + winner;
  } else {
    status = "Next player: " + (isXTurn ? "X" : "O");
  }

  function handleClick(squareIndex: number): void {
    // Prevent additional selections if winner
    if (winner) return;
    // Prevent clicking on already selected square
    if (squares[squareIndex]) return;

    const newSquares = squares.slice();
    newSquares[squareIndex] = isXTurn ? "X" : "O";
    updateSquares(newSquares);
    updateIsXTurn(!isXTurn);
  }

  function resetGame() {
    updateSquares(Array(9).fill(null));
    updateIsXTurn(true);
  }

  function renderSquare(squareIndex: number) {
    return (
      <Square
        value={squares[squareIndex]}
        onClick={handleClick}
        squareIndex={squareIndex}
      />
    );
  }

  return (
    <div>
      <div className="status">{status}</div>
      <button onClick={resetGame}>Reset</button>
      <div className="board-row">
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
      </div>
      <div className="board-row">
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
      </div>
      <div className="board-row">
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </div>
    </div>
  );
};

function calculateWinner(squares: string[]) {
  const winningLines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];
  for (let i = 0; i < winningLines.length; i++) {
    const [a, b, c] = winningLines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}
