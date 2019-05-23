function houseNumbersSum(inputArray: number[]): number {
    let sum = 0;

    for (let n = 0; n < inputArray.length; n++) {
        if (inputArray[n] === 0) {
            return sum;
        }

        sum += inputArray[n];
    }

    return sum;
}

console.log(houseNumbersSum([5, 1, 2, 3, 0, 1, 5, 0, 2]));