function adjacentElementsProduct(adjacent: number[]): number {
    let maxValue = null;
    for (let i = 0; i < (adjacent.length - 1); i++) {
        const pairSum = adjacent[i] * adjacent[i + 1];
        maxValue = maxValue ? Math.max(maxValue, pairSum) : pairSum;
    }
    return maxValue;
}

console.log(adjacentElementsProduct([3, 6, -2, -5, 7, 3]));