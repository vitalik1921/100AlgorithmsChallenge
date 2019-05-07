function avoidObstacles(inputArray: number[]): number {
    inputArray.sort((a, b) => a - b);
    const largestJump = inputArray[inputArray.length - 1] + 1;
    for (let jump = 1; jump <= largestJump; jump++) {
        if (inputArray.every((item) => item % jump !== 0)) {
            return jump;
        }
    }
}

console.log(avoidObstacles([5, 3, 6, 7, 9]));
