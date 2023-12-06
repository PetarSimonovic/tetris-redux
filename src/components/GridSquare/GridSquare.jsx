import React from "react";
import "./GridSquare.scss";

export const GridSquare = (props) => {
  const { color } = props;
  return <div className={`grid-square color-${color}`} />;
};

export default GridSquare;
