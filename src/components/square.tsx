import React from "react";

interface SquareProps {
  value: string;
  squareIndex: number;
  onClick: (i: number) => void;
}

export const Square = ({ value, onClick, squareIndex }: SquareProps) => {
  return (
    <button className="square" onClick={() => onClick(squareIndex)}>
      {value}
    </button>
  );
};

export default Square;
