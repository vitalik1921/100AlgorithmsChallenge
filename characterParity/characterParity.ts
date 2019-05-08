function characterParity(symbol: string): string {
    const digit = parseInt(symbol, 10);
    if (Number.isNaN(digit)) {
        return 'not a digit';
    } else {
        return digit % 2 === 0 ? 'even' : 'odd';
    }
}

console.log(characterParity('5'))
console.log(characterParity('8'))
console.log(characterParity('q'))
