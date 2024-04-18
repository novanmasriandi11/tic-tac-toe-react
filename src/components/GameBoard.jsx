import { useState } from "react";

const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

export default function GameBoard({ onSelectCell, turns }) {
  let gameBoard = initialGameBoard;

  for (const turn of turns) {
    const { square, player } = turn;
    const { row, cell } = square;

    gameBoard[row][cell] = player;
  }

  // const [gameBoard, setGameBoard] = useState(initialGameBoard);

  // function handleSelectCell(rowIndex, cellIndex) {
  //   setGameBoard((prevGameBoard) => {
  //     const updatedBoard = [...prevGameBoard.map((value) => [...value])];
  //     updatedBoard[rowIndex][cellIndex] = activePlayerSymbol;
  //     return updatedBoard;
  //   });

  //   onSelectCell();
  // }

  return (
    <ol id="game-board">
      {gameBoard.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {row.map((playerSymbol, cellIndex) => (
              <li key={cellIndex}>
                <button
                  onClick={() => {
                    onSelectCell(rowIndex, cellIndex);
                  }}
                  disabled={playerSymbol !== null}
                >
                  {playerSymbol}
                </button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
}
