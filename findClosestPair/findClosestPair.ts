function findClosestPair(numbers: number[], sum: number): number {
    const distances = [];
    const nMap = new Map();
    numbers.forEach((num, idx) => {
        if (nMap.has(num)) {
            const nArr = nMap.get(num);
            nArr.push(idx);
            nMap.set(num, nArr);

        } else {
            nMap.set(num, [idx]);
        }
    });
    numbers.forEach((num, idx) => {
        const target = sum - num;
        if (nMap.has(target)) {
            const targetIdxs = nMap.get(target);
            targetIdxs
                .filter((targetIdx) => targetIdx > idx)
                .forEach((targetIdx) => {
                    distances.push(Math.abs(idx - targetIdx));
                });
        }
    });
    distances.sort((a, b) => a - b);
    return distances[0] || -1;
}

console.log(findClosestPair([1, 0, 2, 4, 3, 0], 5));
console.log(findClosestPair([2, 3, 7], 8));