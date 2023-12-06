export const gridCreator = (rows, columns) => {
  const row = arrayCreator(columns, 0);
  const grid = arrayCreator(rows, row);
  return grid;
};

const arrayCreator = (times, element) => {
  let array = [];
  for (let i = 0; i < times; i++) {
    array.push(element);
  }
  return array;
};
