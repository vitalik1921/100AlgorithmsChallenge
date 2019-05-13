function digitDegree(n: number): number {
    let degree = 0;
    let tempN = n;

    while (tempN > 9) {
        tempN = tempN
            .toString()
            .split('')
            .reduce((acc, prev) => acc + parseInt(prev), 0);
        degree++;
    }

    return degree;
}

console.log(digitDegree(5));
console.log(digitDegree(100));
console.log(digitDegree(91));