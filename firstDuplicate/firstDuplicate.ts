function firstDuplicate(a: number[]): number {
    const nSet = new Set();
    const dIndexes = [];

    for (let num of a) {
        if (nSet.has(num)) {
            return num;
        }
        nSet.add(num);
    }

    return -1;
}

console.log(firstDuplicate([2, 1, 3, 5, 3, 2]));
console.log(firstDuplicate([2, 4, 3, 5, 1]));
