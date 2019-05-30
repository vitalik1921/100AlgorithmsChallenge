function minesweeper(matrix: boolean[][]): number[][] {
  const res = Array.apply(null, { length: matrix.length }).map(() => new Array());
  res;
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix.length; j++) {
      const topCell = i > 0
        ? matrix[i - 1][j]
        : false;
      const bottomCell = i < (matrix.length - 1)
        ? matrix[i + 1][j]
        : false;
      const leftCell = j > 0
        ? matrix[i][j - 1]
        : false;
      const rightCell = j < (matrix[i].length - 1)
        ? matrix[i][j + 1]
        : false;
      const topLeftCell = i > 0 && j > 0
        ? matrix[i - 1][j - 1]
        : false;
      const topRightCell = i > 0 && j < (matrix[i].length - 1)
        ? matrix[i - 1][j + 1]
        : false;
      const bottomLeftCell = i < (matrix.length - 1) && j > 0
        ? matrix[i + 1][j - 1]
        : false;
      const bottomRightCell = i < (matrix.length - 1) && j < (matrix[i].length - 1)
        ? matrix[i + 1][j + 1]
        : false;
      res[i][j] =
        (Number(topCell) +
        Number(bottomCell) +
        Number(leftCell) +
        Number(rightCell) +
        Number(topLeftCell) +
        Number(topRightCell) +
        Number(bottomLeftCell) +
        Number(bottomRightCell));
    }
  }

  return res;
}

console.log(minesweeper([[true, false, false],
[false, true, false],
[false, false, false]]));