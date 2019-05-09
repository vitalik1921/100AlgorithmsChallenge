function circleOfNumbers(n: number, firstNumber: number): number {
    const nHalf = n / 2;
    if (firstNumber < nHalf) {
        return firstNumber + nHalf;
    } else {
        return firstNumber - nHalf;
    }
}

console.log(circleOfNumbers(10, 0));
console.log(circleOfNumbers(10, 1));
console.log(circleOfNumbers(10, 2));
console.log(circleOfNumbers(10, 3));
console.log(circleOfNumbers(10, 4));
console.log(circleOfNumbers(10, 5));
console.log(circleOfNumbers(10, 6));
console.log(circleOfNumbers(10, 7));
console.log(circleOfNumbers(10, 8));
console.log(circleOfNumbers(10, 9));