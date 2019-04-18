function arrayPreviousLess(items: number[]): number[] {
    const res = [];
    for (let i = items.length - 1; i >=0; i--) {
        i;
        for (let j = i; j >= 0; j--) {
            j;
            if (items[i] > items[j]) {
                res.unshift(items[j]);
                break;
            } else if (j === 0) {
                res.unshift(-1);
            }
        }
    }
    return res;
}

console.log(arrayPreviousLess([3, 5, 2, 4, 5]));