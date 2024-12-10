import React from "react";

type PropsScuare = {
  children: React.ReactNode;
  updateBoard?: (index: number) => void;
  index?: number | undefined;
  isSelected?: boolean;
};
const Scuare = ({ children, updateBoard, index, isSelected }: PropsScuare) => {
  const className = `square ${isSelected ? "is-selected" : ""}`;

  const handleClick = () => {
    if (updateBoard && index !== undefined) updateBoard(index);
  };
  return (
    <div className={className} onClick={handleClick}>
      {children}
    </div>
  );
};

export default Scuare;
