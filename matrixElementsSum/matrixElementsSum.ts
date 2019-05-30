function matrixElementsSum(matrix: any[][]): number {
    let res = 0;
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            if (matrix[i][j] > 0 && (i === 0 || matrix[i - 1][j] > 0)) {
                res += matrix[i][j];
            }
        }
    }
    return res;
}

console.log(matrixElementsSum(
    [[0, 1, 1, 2],
    [0, 5, 0, 0],
    [2, 0, 3, 3]]
));
