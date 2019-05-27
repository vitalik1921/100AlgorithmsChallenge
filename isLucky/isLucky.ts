function isLucky(n: number): boolean {
    const strNum = n.toString();
    const midIndex = strNum.length / 2;

    const firstHalf = strNum.slice(0, midIndex);
    const secondHalf = strNum.slice(-midIndex);

    const firstSum = firstHalf
        .split('')
        .reduce((acc, num) => acc + parseInt(num), 0);

    const secondSum = secondHalf
        .split('')
        .reduce((acc, num) => acc + parseInt(num), 0);

    return firstSum === secondSum;
}

console.log(isLucky(1230));
console.log(isLucky(239017));