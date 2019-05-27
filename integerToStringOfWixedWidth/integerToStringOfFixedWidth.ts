function integerToStringOfFixedWidth(number: number, width: number): string {
    let strNum =  number.toString();
    const diff = number.toString().length - width;
    if (diff > 0) {
        strNum = strNum.slice(-diff)
    } else {
        let zeros = -diff;
        while(zeros > 0) {
            strNum += '0';
            zeros--;
        }
    }

    return strNum;
}

console.log(integerToStringOfFixedWidth(1234, 2));
console.log(integerToStringOfFixedWidth(1234, 4));
console.log(integerToStringOfFixedWidth(1234, 5));
