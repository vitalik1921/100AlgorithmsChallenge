function containsCloseNums(nums: number[], k: number): boolean {
    const numsMap = new Map();

    for (let i = 0; i < nums.length; i++) {
        if (numsMap.has(nums[i])) {
            const val = numsMap.get(nums[i]);
            val.push(i);
            numsMap.set(nums[i], val);
        } else {
            numsMap.set(nums[i], [i]);
        }
    }

    for (let i = 0; i < nums.length; i++) {
        if (numsMap.has(nums[i])) {
            const indxArr = numsMap.get(nums[i]);
            for (let n of indxArr) {
                if (i !== n && Math.abs(i - n) <= k) {
                    return true;
                }
            }
        }
    }
    return false;
}

console.log(containsCloseNums([0, 1, 2, 3, 5, 2], 3));
console.log(containsCloseNums([0, 1, 2, 3, 5, 2], 2));