function composeRanges(nums: number[]): string[] {
    const result: string[] = [];
    let prevRangeStart = 0;

    for (let i = 0; i < nums.length; i++) {
        if (nums[i + 1] - nums[i] > 1 || i === nums.length - 1) {
            if (prevRangeStart === i) {
                result.push(`${nums[prevRangeStart]}`);
            } else {
                result.push(`${nums[prevRangeStart]}>${nums[i]}`);
            }
            prevRangeStart = i + 1;
        }
    }

    return result;
}


console.log(composeRanges([-1, 0, 1, 2, 6, 7, 9]));
console.log(composeRanges([-1, 0, 10, 11, 13, 14, 15, 16]));