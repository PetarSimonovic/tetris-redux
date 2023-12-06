import GridSquare from "../GridSquare/GridSquare";
import { useEffect, useState } from "react";
import { gridCreator } from "./gridCreator";

export const GridBoard = () => {
  const [board, setBoard] = useState([]);

  useEffect(() => {
    const grid = gridCreator(18, 18);
    console.log(grid);
    setBoard(grid);
  }, []);

  return (
    <div>
      {board.map((row) => {
        return row.map((element, index) => (
          <GridSquare key={index} color={element} />
        ));
      })}
    </div>
  );
};

export default GridBoard;
