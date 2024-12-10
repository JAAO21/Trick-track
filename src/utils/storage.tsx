export const saveGame = (newBoard: string[], turn: string) => {
  window.localStorage.setItem("board", JSON.stringify(newBoard));
  window.localStorage.setItem("turns", turn);
};
export const resetGame = () => {
  window.localStorage.removeItem("board");
  window.localStorage.removeItem("turns");
};
