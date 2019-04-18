function arrayMaximalAdjacentDifference(inputArray: number[]): number {
    let maxDiff = 0;
    for (let i = 1; i < inputArray.length; i++) {
        maxDiff = Math.max(maxDiff, Math.abs(inputArray[i] - inputArray[i-1]));
    }
    return maxDiff;
}

console.log(arrayMaximalAdjacentDifference([2, 4, 1, 0, 3, 4, 9, 2, 14]));