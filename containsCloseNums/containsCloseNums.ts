function containsCloseNums(nums: number[], k: number): boolean {
    const numsMap = new Map();

    for (let i = 0; i < nums.length; i++) {
        numsMap.set(nums[i], i);
    }

    for (let i = 0; i < nums.length; i++) {
        if (numsMap.has(nums[i])) {
            const indx = numsMap.get(nums[i]);
            if (i !== indx && Math.abs(i - indx) <= k) {
                return true;
            }
        }
    }
    return false;
}

console.log(containsCloseNums([0, 1, 2, 3, 5, 2], 3));
console.log(containsCloseNums([0, 1, 2, 3, 5, 2], 2));