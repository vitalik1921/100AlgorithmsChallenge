function arrayConversion(inputArray: number[]): number {
    let tempArray: number[] = inputArray;
    let action = 'sum';

    const performAction = (arr: number[], action: string) => {
        return arr.reduce((acc, cur, idx) => {
            if (((idx + 1) % 2) > 0) {
                acc.push(
                    action === 'sum'
                        ? arr[idx] + arr[idx + 1]
                        : arr[idx] * arr[idx + 1]
                    );
            }
            return acc;
        }, []);
    };

    while(tempArray.length > 1) {
        tempArray = performAction(tempArray, action);
        action = action === 'sum' ? 'mul' : 'sum';
    }

    return tempArray[0];
}

console.log(arrayConversion([1, 2, 3, 4, 5, 6, 7, 8]));
console.log(arrayConversion([1, 2, 3, 4, 5, 6, 7, 8, 1, 2, 3, 4, 5, 6, 7, 8]));
