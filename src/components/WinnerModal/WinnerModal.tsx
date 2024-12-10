import Scuare from "../Scuare/Scuare";

type PropsWinnerModal = {
  winner: string | null | boolean;
  resetGame: () => void;
};

const WinnerModal = ({ winner, resetGame }: PropsWinnerModal) => {
  if (winner == null) return null;
  return (
    <section className="winner">
      <div className="text">
        <h2>{winner == false ? "Empate" : "Ganador"}</h2>
        <header className="win">{winner && <Scuare>{winner}</Scuare>}</header>
        <footer>
          <button onClick={resetGame}>Empezar de nuevo</button>
        </footer>
      </div>
    </section>
  );
};

export default WinnerModal;
