function compareIntegers(a: string, b: string): string {
    const aInt = parseInt(a);
    const bInt = parseInt(b);

    if (aInt > bInt) {
        return 'greater';
    } else if (aInt < bInt) {
        return 'less';
    } else {
        return 'equal';
    }
}

console.log(compareIntegers('12', '13'));
console.log(compareIntegers('875', '799'));
console.log(compareIntegers('1000', '1000'));