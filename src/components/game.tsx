import React from "react";
import { Board } from "./board";

export const Game = () => (
  <div className="game">
    <div className="game-board">{<Board />}</div>
  </div>
);

export default Game;
