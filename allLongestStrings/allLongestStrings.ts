function allLongestStrings(inputArray: string[]): string[] {
    let maxArrayLength = 0;
    const arraysMap = new Map();

    for (let i = 0; i < inputArray.length; i++) {
        const subArrayLength = inputArray[i].length;
        if (subArrayLength >= maxArrayLength) {
            maxArrayLength = subArrayLength;
            const subArray = arraysMap.get(subArrayLength)
            if (subArray) {
                subArray.push(inputArray[i])
            } else {
                arraysMap.set(subArrayLength, [inputArray[i]]);
            }
        }
    }

    return arraysMap.get(maxArrayLength);
}

console.log(allLongestStrings(["aba", "aa", "ad", "vcd", "aba"]));