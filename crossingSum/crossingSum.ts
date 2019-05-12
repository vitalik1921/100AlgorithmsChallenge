function crossingSum(matrix: number[][], a: number, b: number): number {
    const aSum = matrix[1]
        .reduce((acc, prev) => acc + prev, 0);
    const bSum = matrix
        .reduce((acc, prev, idx) => acc + (idx === a ? 0 : prev[b]) , 0);
    return aSum + bSum;
}

console.log(crossingSum([[1, 1, 1, 1],
[2, 2, 2, 2],
[3, 3, 3, 3]], 1, 3));