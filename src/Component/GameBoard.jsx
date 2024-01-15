import { useState } from "react";

const initalGameboard = [
    [null, null, null],
    [null, null, null],
    [null, null, null],
]

export default function GameBoard({ onSelectSquare, turns }) {

    let gameBoard = initalGameboard;

    for (const turn of turns) {
        const { square, player } = turn;
        const { row, col } = square;

        gameBoard[row][col] = player;
    }
    //const [gameBoard, setGameBoard] = useState(initalGameboard);

    /* function handleSelectSquare(rowIndex, colIndex) {
        setGameBoard((prevGameboard) => {
            const updateBoard = [...prevGameboard.map(innerArray => [...innerArray])];
            updateBoard[rowIndex][colIndex] = activeSymbol;
            return updateBoard;
        });

        onSelectSquare();
    } */

    return (
        <ol id="game-board">
            {gameBoard.map((row, rowIndex) => (
                <li key={rowIndex}>
                    <ol>
                        {row.map((playerSymbol, colIndex) => (
                            <li key={colIndex}>
                                <button onClick={() => onSelectSquare(rowIndex, colIndex)}>
                                    {playerSymbol}
                                </button>
                            </li>
                        ))}
                    </ol>
                </li>
            ))
            }
        </ol>
    );
};