function makeArrayConsecutive2(statues: number[]): number {
    statues.sort((a, b) => a - b);
    return statues[statues.length - 1] - statues[0] + 1 - statues.length;
}

console.log(makeArrayConsecutive2([6, 2, 3, 8]));
console.log(makeArrayConsecutive2([1, 2, 3, 4, 5, 7, 9]));