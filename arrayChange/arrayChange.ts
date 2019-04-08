function arrayChange(inputArray: number[]): number {
    let moves = 0;
    let prevValue = inputArray[0];
    
    for (let i = 1; i < inputArray.length; i++) {
        if (inputArray[i] <= inputArray[i-1]) {
            moves += prevValue - inputArray[i] + 1;
            prevValue += moves;
        }
    }

    return moves;
}

console.log(arrayChange([1, 1, 1]));
console.log(arrayChange([3, 4, 2]));