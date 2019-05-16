function firstDigit(inputString: string): string {
    const digits = new Set(['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']);

    for (let i = 0; i < inputString.length; i++) {
        const curCar = inputString.charAt(i);
        if (digits.has(curCar)) {
            return curCar; 
        }
    }

    return '';
}

console.log(firstDigit('var_1__Int'));
console.log(firstDigit('q2q-q'));
console.log(firstDigit('0ss'));
