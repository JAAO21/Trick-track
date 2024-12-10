import { useState } from "react";
import conffetti from "canvas-confetti";
import { Scuare, WinnerModal, Board } from "./components";
import { TURNS, newTurns } from "./utils/constants";
import { checWinner, checkEndgame } from "./utils/functions";
import { saveGame } from "./utils/storage";
import "./App.css";

//spread  y rest operator

function App() {
  const [board, setBoard] = useState(() => {
    const boardFromStorage = window.localStorage.getItem("board");
    return boardFromStorage
      ? JSON.parse(boardFromStorage)
      : Array(9).fill(null);
  });
  const [turns, setTurns] = useState(() => {
    const turnsFromStorage = window.localStorage.getItem("turns");
    return turnsFromStorage ?? TURNS.X; // si llega null o undefined
  });
  const [winner, setWinner] = useState<string | null | boolean>(null);

  const updateBoard = (index: number) => {
    if (board[index] || winner) return;
    const turn = newTurns(turns);
    const newBoard = [...board];
    newBoard[index] = turns;
    setBoard(newBoard);
    setTurns(turn);
    saveGame(newBoard, turn);
    const newWinner = checWinner(newBoard);
    if (newWinner) {
      conffetti();
      setWinner(newWinner);
    } else if (checkEndgame(newBoard)) {
      setWinner(false);
    }
  };

  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setTurns(TURNS.X);
    setWinner(null);
    resetGame();
  };
  return (
    <main className="board">
      <h1>Tricki tracket</h1>
      <button onClick={resetGame}>Volver a jugar</button>
      <Board board={board} updateBoard={updateBoard} />
      <section className="turn">
        <Scuare isSelected={turns === TURNS.X}>{TURNS.X}</Scuare>
        <Scuare isSelected={turns === TURNS.O}>{TURNS.O}</Scuare>
      </section>
      <WinnerModal winner={winner} resetGame={resetGame} />
    </main>
  );
}

export default App;
