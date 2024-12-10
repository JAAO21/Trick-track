import Scuare from "../Scuare/Scuare";

type PropsParam = {
  board: string[];
  updateBoard: (index: number) => void;
};
const Board = ({ board, updateBoard }: PropsParam) => {
  return (
    <section className="game">
      {board.map((_, index) => {
        return (
          <Scuare key={index} index={index} updateBoard={updateBoard}>
            {board[index]}
          </Scuare>
        );
      })}
    </section>
  );
};

export default Board;
