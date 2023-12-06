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

  return <div>{board}</div>;
};

export default GridBoard;
