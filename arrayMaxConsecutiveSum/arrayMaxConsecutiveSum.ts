function arrayMaxConsecutiveSum(inputArray: number[], k: number): number {
    let maxSum = 0;
    for (let i = 0; i <= (inputArray.length - k); i++) {
        const subSequent: number[] = inputArray.slice(i, i + k);
        maxSum = Math.max(maxSum, subSequent.reduce((acc, cur) => acc + cur, 0))
    }
    return maxSum;
}

console.log(arrayMaxConsecutiveSum([2, 3, 5, 1, 6], 2));
console.log(arrayMaxConsecutiveSum([2, 3, 5, 1, 6], 3));
console.log(arrayMaxConsecutiveSum([2, 3, 5, 1, 6, 1, 1, 4, 5, 6, 3, 4], 3));